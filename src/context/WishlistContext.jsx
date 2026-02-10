import { createContext, useContext, useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import { useAuth } from "@/context/AuthContext";
import toast from "react-hot-toast";

const WishlistContext = createContext(null);

export const WishlistProvider = ({ children }) => {
  const { user, loading: authLoading } = useAuth();
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState();

  const loadGuestWishlist = () => {
    const localWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(localWishlist);
  };

  const loadUserWishlist = async (uid) => {
    const docRef = doc(db, "wishlist", uid);
    const snap = await getDoc(docRef);

    if (snap.exists()) {
      setWishlist(snap.data().items || []);
    } else {
      setWishlist([]);
    }
  };

  const saveWishlist = async (items) => {
    if (user) {
      await setDoc(doc(db, "wishlist", user.uid), { items }, { merge: true });
    } else {
      localStorage.setItem("wishlist", JSON.stringify(items));
    }
  };

  const mergeGuestWishlistWithUser = async (uid) => {
    const guestWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

    const userDocRef = doc(db, "wishlist", uid);
    const userSnap = await getDoc(userDocRef);

    const userWishlist = userSnap.exists() ? userSnap.data().items || [] : [];

    const merged = [...userWishlist];

    guestWishlist.forEach((guestItem) => {
      const exists = merged.some((item) => item.id === guestItem.id);

      if (!exists) {
        merged.push(guestItem);
      }
    });

    await setDoc(userDocRef, { items: merged }, { merge: true });

    localStorage.removeItem("wishlist");

    setWishlist(merged);
  };

  useEffect(() => {
    if (authLoading) return;

    if (user) {
      const hasGuestWishlist = localStorage.getItem("wishlist");

      if (hasGuestWishlist) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        mergeGuestWishlistWithUser(user.uid);
      } else {
        loadUserWishlist(user.uid);
      }
    } else {
      loadGuestWishlist();
    }
    setLoading(false);
  }, [user, authLoading]);

  const addToWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) return prev;

      const updated = [...prev, product];
      saveWishlist(updated);
      return updated;
    });
    toast.success("The Product added to your wishlist");
  };

  const removeFromWishlist = (id) => {
    const updated = wishlist.filter((item) => item.id !== id);

    setWishlist(updated);
    saveWishlist(updated);
  };

  const clearWishlist = () => {
    setWishlist([]);
    saveWishlist([]);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        loading,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
        isInWishlist: (id) => wishlist.some((item) => item.id === id),
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useWishlist = () => useContext(WishlistContext);
