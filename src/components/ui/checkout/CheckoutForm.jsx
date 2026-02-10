import { useForm, useWatch } from "react-hook-form";
import { useCheckout } from "../../../context/CheckoutContext";
import { useEffect } from "react";

const CheckoutForm = () => {
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
    <form className="w-117.5 flex flex-col">
      <div>
        <label
          className="after:ml-0.5 after:text-red-500 after:content-['*']"
          htmlFor="firstName"
        >
          First Name
        </label>
        <input
          className="w-full bg-muted outline-0 rounded-md p-3.5 mt-2"
          type="text"
          {...register("firstName", { required: "First name is required" })}
        />
      </div>
      <p className="h-11 text-accent font-medium p-2 rounded-md">
        {errors.firstName?.message}
      </p>
      <div className="mb-11">
        <label htmlFor="companyName">Company Name</label>
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
          Street Address
        </label>
        <input
          className="w-full bg-muted outline-0 rounded-md p-3.5 mt-2"
          type="text"
          {...register("streetAddress", {
            required: "Street address is required",
          })}
        />
      </div>
      <p className="h-11 text-accent font-medium p-2 rounded-md">
        {errors.streetAddress?.message}
      </p>
      <div className="mb-11">
        <label htmlFor="apartment">Apartment, floor, etc. (optional)</label>
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
          Town/City
        </label>
        <input
          className="w-full bg-muted outline-0 rounded-md p-3.5 mt-2"
          type="text"
          {...register("townCity", {
            required: "Town/City is required",
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
          Phone Number
        </label>
        <input
          className="w-full bg-muted outline-0 rounded-md p-3.5 mt-2"
          type="tel"
          {...register("phoneNumber", {
            required: "Phone number is required",
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
          Email Address
        </label>
        <input
          className="w-full bg-muted outline-0 rounded-md p-3.5 mt-2"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Invalid email address",
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
          Save this information for faster check-out next time
        </label>
      </div>
    </form>
  );
};
export default CheckoutForm;
