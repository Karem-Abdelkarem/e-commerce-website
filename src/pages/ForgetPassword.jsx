import { useState } from "react";
import { useForm } from "react-hook-form";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ForgetPassword = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ email }) => {
    setError("");
    setMessage("");
    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage(
        "If this email exists, we have sent you a password reset link."
      );
    } catch {
      // ❗ Security-friendly message
      setMessage(
        "If this email exists, we have sent you a password reset link."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-md mx-auto mt-20 px-4 min-h-150">
      <h2 className="text-3xl font-semibold mb-4">
        {t("forgetPassword.title")}
      </h2>
      <p className="text-muted-foreground mb-6">
        {t("forgetPassword.subtitle")}
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          type="email"
          placeholder={t("forgetPassword.email")}
          className="border-b-2 w-full p-2 outline-none"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Invalid email address",
            },
          })}
        />

        {errors.email && (
          <p className="text-accent text-sm">{errors.email.message}</p>
        )}

        {error && <p className="text-accent">{error}</p>}
        {message && <p className="text-green-600">{message}</p>}

        <Button type="submit" disabled={loading} className="w-full">
          {loading
            ? t("forgetPassword.loading")
            : t("forgetPassword.resetPassword")}
        </Button>
      </form>

      <div className="mt-6 text-center">
        <Link to="/login" className="underline">
          {t("forgetPassword.backToLogin")}
        </Link>
      </div>
    </section>
  );
};

export default ForgetPassword;
