import shoppingImage from "@/assets/images/shopping.png";
import googleIcon from "@/assets/icons/icon-google.svg";
import { Button } from "../components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { serverTimestamp, setDoc, doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebaseConfig";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const SignUp = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [firebaseError, setFirebaseError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const signUp = async (data) => {
    setFirebaseError("");
    setLoading(true);

    try {
      // Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      const user = userCredential.user;

      console.log("User created successfully!");

      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        role: "user",
        createdAt: serverTimestamp(),
      });

      // Navigate to Home page
      navigate("/");
    } catch (error) {
      // Better error messages
      let errorMessage = error.message;

      if (error.code === "auth/email-already-in-use") {
        errorMessage = "This email is already registered";
      } else if (error.code === "auth/weak-password") {
        errorMessage = "Password is too weak";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Invalid email address";
      }

      setFirebaseError(errorMessage);
      console.error("Error creating user:", error);
    } finally {
      setLoading(false);
    }
  };

  const googleSignUp = async () => {
    setFirebaseError("");
    setLoading(true);

    try {
      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check if user document already exists
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        await setDoc(userRef, {
          email: user.email,
          role: "user",
          createdAt: serverTimestamp(),
        });
      }

      navigate("/");
    } catch (error) {
      setFirebaseError("Google sign-in failed. Please try again.");
      console.error("Google Sign-In Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative flex items-start md:items-center justify-between gap-32 max-w-292.5 mx-auto mt-15 mb-35 px-3 min-h-200">
      <div className="hidden md:block w-201.25 h-195.25 absolute -left-32 top-0">
        <img src={shoppingImage} alt="" loading="lazy" />
      </div>
      <div className="max-w-92.75 mx-auto md:mx-0 md:ml-auto">
        <div className="mb-12">
          <h2 className="font-inter font-medium text-4xl mb-6">
            {t("signup.title")}
          </h2>
          <p className="font-poppins text-[16px]">{t("signup.subtitle")}</p>
        </div>
        <form className="flex flex-col gap-1.5" onSubmit={handleSubmit(signUp)}>
          <label className="sr-only">Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email address",
              },
            })}
            className="border-b-2 w-full outline-0 p-2"
            type="text"
            placeholder={t("signup.email")}
          />
          <p className="h-11 text-accent font-medium p-2 rounded-md">
            {errors.email?.message}
          </p>

          <label className="sr-only">Password</label>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className="border-b-2 w-full outline-0 p-2"
            type="password"
            placeholder={t("signup.password")}
          />
          <p className="h-11 text-accent font-medium p-2 rounded-md">
            {errors.password?.message}
          </p>

          {/* Firebase error */}
          {firebaseError && (
            <p className="text-accent font-medium mb-4 bg-red-50 p-3 rounded-md">
              {firebaseError}
            </p>
          )}

          <div className="mb-8">
            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="w-full"
            >
              {loading ? t("signup.loading") : t("signup.creatAccount")}
            </Button>
            <button
              type="button"
              onClick={googleSignUp}
              className="font-poppins border rounded-md w-full py-4 flex items-center justify-center gap-4 cursor-pointer mt-4 hover:bg-primary hover:text-white transition"
            >
              <img src={googleIcon} alt="" />
              {t("signup.googlebutton")}
            </button>
          </div>

          <div className="font-poppins flex items-center justify-center gap-4">
            <p>{t("signup.haveAccount")}</p>
            <Link to={"/login"} className="font-medium border-b-2">
              {t("signup.login")}
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
