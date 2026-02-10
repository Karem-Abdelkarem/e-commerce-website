import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "@/firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        setUser(null);
        setLoading(false);
        return;
      }

      //  Get Firestore user
      const userRef = doc(db, "users", firebaseUser.uid);
      const snap = await getDoc(userRef);

      if (snap.exists()) {
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          ...snap.data(),
        });
      } else {
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
        });
      }

      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
