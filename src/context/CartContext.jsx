import { createContext, useContext, useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import { useAuth } from "@/context/AuthContext";
import toast from "react-hot-toast";

const CartContext = createContext(null);

const EMPTY_CART = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const CartProvider = ({ children }) => {
  const { user, loading: authLoading } = useAuth();
  const [cart, setCart] = useState(EMPTY_CART);
  const [loading, setLoading] = useState(false);

  const loadGuestCart = () => {
    const localCart = JSON.parse(
      localStorage.getItem("cart") || JSON.stringify(EMPTY_CART),
    );
    setCart(localCart);
  };

  const loadUserCart = async (uid) => {
    const docRef = doc(db, "cart", uid);
    const snap = await getDoc(docRef);

    if (snap.exists()) {
      setCart(snap.data());
    } else {
      setCart(EMPTY_CART);
    }
  };

  const saveCart = async (updatedCart) => {
    if (user) {
      await setDoc(doc(db, "cart", user.uid), updatedCart, { merge: true });
    } else {
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const mergeGuestCartWithUser = async (uid) => {
    const guestCart = JSON.parse(
      localStorage.getItem("cart") || JSON.stringify(EMPTY_CART),
    );

    const userDocRef = doc(db, "cart", uid);
    const userSnap = await getDoc(userDocRef);

    const userCart = userSnap.exists() ? userSnap.data() : EMPTY_CART;

    const mergedItems = [...userCart.items];

    guestCart.items.forEach((guestItem) => {
      const existingItem = mergedItems.find((item) => item.id === guestItem.id);

      if (existingItem) {
        existingItem.quantity += guestItem.quantity;
      } else {
        mergedItems.push(guestItem);
      }
    });

    const mergedCart = mergedItems.reduce(
      (acc, item) => {
        acc.items.push(item);
        acc.totalQuantity += item.quantity;
        acc.totalPrice += item.quantity * item.price;
        return acc;
      },
      { items: [], totalQuantity: 0, totalPrice: 0 },
    );

    await setDoc(userDocRef, mergedCart, { merge: true });

    localStorage.removeItem("cart");

    setCart(mergedCart);
  };

  useEffect(() => {
    if (authLoading) return;

    if (user) {
      const hasGuestCart = localStorage.getItem("cart");

      if (hasGuestCart) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        mergeGuestCartWithUser(user.uid);
      } else {
        loadUserCart(user.uid);
      }
    } else {
      loadGuestCart();
    }
    setLoading(false);
  }, [user, authLoading]);

  const addToCart = (product) => {
    const quantityToAdd = product.quantity || 1;

    const existingItem = cart.items.find((item) => item.id === product.id);

    let updatedItems;

    if (existingItem) {
      updatedItems = cart.items.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + quantityToAdd,
            }
          : item,
      );
    } else {
      updatedItems = [...cart.items, { ...product, quantity: quantityToAdd }];
    }

    const updatedCart = {
      items: updatedItems,
      totalQuantity: cart.totalQuantity + quantityToAdd,
      totalPrice: cart.totalPrice + product.price * quantityToAdd,
    };

    setCart(updatedCart);
    saveCart(updatedCart);

    toast.success("The Product added to your cart");
  };

  const removeFromCart = (id) => {
    const item = cart.items.find((item) => item.id === id);
    if (!item) return;

    const updatedItems = cart.items.filter((item) => item.id !== id);

    const updatedCart = {
      items: updatedItems,
      totalQuantity: cart.totalQuantity - item.quantity,
      totalPrice: cart.totalPrice - item.quantity * item.price,
    };

    setCart(updatedCart);
    saveCart(updatedCart);
  };

  const increaseQuantity = (id) => {
    const item = cart.items.find((item) => item.id === id);
    if (!item) return;

    const updatedItems = cart.items.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
    );

    const updatedCart = {
      items: updatedItems,
      totalQuantity: cart.totalQuantity + 1,
      totalPrice: cart.totalPrice + item.price,
    };

    setCart(updatedCart);
    saveCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const item = cart.items.find((item) => item.id === id);
    if (!item || item.quantity === 1) return;

    const updatedItems = cart.items.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
    );

    const updatedCart = {
      items: updatedItems,
      totalQuantity: cart.totalQuantity - 1,
      totalPrice: cart.totalPrice - item.price,
    };

    setCart(updatedCart);
    saveCart(updatedCart);
  };

  const addManyToCart = (products) => {
    setCart((prev) => {
      let updatedItems = [...prev.items];

      products.forEach((product) => {
        const index = updatedItems.findIndex((item) => item.id === product.id);

        if (index !== -1) {
          const existingItem = updatedItems[index];

          updatedItems[index] = {
            ...existingItem,
            quantity: existingItem.quantity + 1,
          };
        } else {
          updatedItems.push({
            ...product,
            quantity: 1,
          });
        }
      });

      const totalQuantity = updatedItems.reduce(
        (sum, item) => sum + item.quantity,
        0,
      );

      const totalPrice = updatedItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );

      return {
        items: updatedItems,
        totalQuantity,
        totalPrice,
      };
    });
  };

  const clearCart = async () => {
    const emptyCart = {
      items: [],
      totalQuantity: 0,
      totalPrice: 0,
    };

    setCart(emptyCart);

    if (user) {
      await setDoc(doc(db, "cart", user.uid), emptyCart);
    } else {
      localStorage.removeItem("cart");
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        addManyToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);
