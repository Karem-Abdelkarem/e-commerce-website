import { useForm, useWatch } from "react-hook-form";
import { useCheckout } from "../../../context/CheckoutContext";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const CheckoutForm = () => {
  const { t } = useTranslation();
  const { setBillingData } = useCheckout();

  const {
    register,
    control,
    formState: { errors },
  } = useForm();

  const formValues = useWatch({ control });

  useEffect(() => {
    setBillingData(formValues);
  }, [formValues, setBillingData]);

  return (
    <form className="w-full sm:w-117.5 flex flex-col">
      <div>
        <label
          className="after:ml-0.5 after:text-red-500 after:content-['*']"
          htmlFor="firstName"
        >
          {t("checkout.name")}
        </label>
        <input
          className="w-full bg-muted outline-0 rounded-md p-3.5 mt-2"
          type="text"
          {...register("firstName", {
            required: t("checkout.First name is required"),
          })}
        />
      </div>
      <p className="h-11 text-accent font-medium p-2 rounded-md">
        {errors.firstName?.message}
      </p>
      <div className="mb-11">
        <label htmlFor="companyName">{t("checkout.Company Name")}</label>
        <input
          className="w-full bg-muted outline-0 rounded-md p-3.5 mt-2"
          type="text"
          {...register("companyName")}
        />
      </div>
      <div>
        <label
          className="after:ml-0.5 after:text-red-500 after:content-['*']"
          htmlFor="streetAddress"
        >
          {t("checkout.Street Address")}
        </label>
        <input
          className="w-full bg-muted outline-0 rounded-md p-3.5 mt-2"
          type="text"
          {...register("streetAddress", {
            required: t("checkout.Street address is required"),
          })}
        />
      </div>
      <p className="h-11 text-accent font-medium p-2 rounded-md">
        {errors.streetAddress?.message}
      </p>
      <div className="mb-11">
        <label htmlFor="apartment">{t("checkout.Apartment")}</label>
        <input
          className="w-full bg-muted outline-0 rounded-md p-3.5 mt-2"
          type="text"
          {...register("apartment")}
        />
      </div>
      <div>
        <label
          className="after:ml-0.5 after:text-red-500 after:content-['*']"
          htmlFor="townCity"
        >
          {t("checkout.Town/City")}
        </label>
        <input
          className="w-full bg-muted outline-0 rounded-md p-3.5 mt-2"
          type="text"
          {...register("townCity", {
            required: t("checkout.Town/City is required"),
          })}
        />
      </div>
      <p className="h-11 text-accent font-medium p-2 rounded-md">
        {errors.townCity?.message}
      </p>
      <div>
        <label
          className="after:ml-0.5 after:text-red-500 after:content-['*']"
          htmlFor="phoneNumber"
        >
          {t("checkout.phone")}
        </label>
        <input
          className="w-full bg-muted outline-0 rounded-md p-3.5 mt-2"
          type="tel"
          {...register("phoneNumber", {
            required: t("checkout.Phone number is required"),
          })}
        />
      </div>
      <p className="h-11 text-accent font-medium p-2 rounded-md">
        {errors.phoneNumber?.message}
      </p>
      <div>
        <label
          className="after:ml-0.5 after:text-red-500 after:content-['*']"
          htmlFor="email"
        >
          {t("checkout.email")}
        </label>
        <input
          className="w-full bg-muted outline-0 rounded-md p-3.5 mt-2"
          type="email"
          {...register("email", {
            required: t("checkout.Email is required"),
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: t("checkout.Invalid email address"),
            },
          })}
        />
      </div>
      <p className="h-11 text-accent font-medium p-2 rounded-md">
        {errors.email?.message}
      </p>
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          name="saveInfo"
          className="w-6 h-6 accent-secondary"
        />
        <label className="ml-2" htmlFor="saveInfo">
          {t("checkout.Save this information for faster check-out next time")}
        </label>
      </div>
    </form>
  );
};
export default CheckoutForm;
