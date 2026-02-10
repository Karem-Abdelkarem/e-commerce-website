import shoppingImage from "@/assets/images/shopping.png";
import { Button } from "../components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [firebaseError, setFirebaseError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginUser = async (data) => {
    setFirebaseError("");
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );
      console.log("User logged in:", userCredential.user);
      navigate(from, { replace: true });
    } catch (error) {
      let message = "Something went wrong. Please try again.";

      switch (error.code) {
        case "auth/user-not-found":
        case "auth/wrong-password":
          message = "Invalid email or password";
          break;

        case "auth/invalid-email":
          message = "Invalid email format";
          break;

        case "auth/network-request-failed":
          message = "Check your internet connection and try again";
          break;
      }

      setFirebaseError(message);
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
            {t("login.title")}
          </h2>
          <p className="font-poppins text-[16px]">{t("signup.subtitle")} </p>
        </div>
        <form
          className="flex flex-col gap-1.5"
          onSubmit={handleSubmit(loginUser)}
        >
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

          <div className="flex items-center justify-between mb-8">
            <Button type="submit" disabled={loading}>
              {loading ? t("login.loading") : t("signup.login")}
            </Button>
            <Link to="/forget-password">
              <button
                type="button"
                className="font-poppins cursor-pointer mt-4 bg-white text-secondary"
              >
                {t("login.forgotPassword")}
              </button>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
