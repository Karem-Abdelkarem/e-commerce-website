import { useTranslation } from "react-i18next";
import { Button } from "../button";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleContact = (data) => {
    console.log(data);
    reset();
  };

  return (
    <article className="w-full md:w-200 py-10 px-4 md:px-8 rounded-md shadow-md">
      <form onSubmit={handleSubmit(handleContact)}>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-full">
            <label className="sr-only">{t("Contact.name")}</label>
            <input
              {...register("yourName", {
                required: t("Contact.Your Name is required"),
              })}
              className="w-full pl-4 py-3 rounded-md bg-muted"
              type="text"
              placeholder={t("Contact.name")}
            />
            <p className="h-8 text-accent font-medium p-2 rounded-md">
              {errors.yourName?.message}
            </p>
          </div>
          <div className="w-full">
            <label className="sr-only">{t("Contact.email")}</label>
            <input
              {...register("email", {
                required: t("Contact.Email is required"),
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: t("Contact.Email is not valid"),
                },
              })}
              className="w-full pl-4 py-3 rounded-md bg-muted"
              type="email"
              placeholder={t("Contact.email")}
            />
            <p className="h-8 text-accent font-medium p-2 rounded-md">
              {errors.email?.message}
            </p>
          </div>
          <div className="w-full">
            <label className="sr-only">{t("Contact.phone")}</label>
            <input
              {...register("yourPhone", {
                required: t("Contact.Your Phone is required"),
              })}
              className="w-full pl-4 py-3 rounded-md bg-muted"
              type="text"
              placeholder={t("Contact.phone")}
            />
            <p className="h-8 text-accent font-medium p-2 rounded-md">
              {errors.yourPhone?.message}
            </p>
          </div>
        </div>
        <div>
          <textarea
            {...register("message", {
              required: t("Contact.Message is required"),
              minLength: {
                value: 10,
                message: t("Contact.Message must be at least 10 characters"),
              },
            })}
            className="w-full md:w-184.25 h-51.75 pl-4 py-3 rounded-md bg-muted"
            placeholder={t("Contact.message")}
          ></textarea>
          <p className="h-8 text-accent font-medium p-2 rounded-md">
            {errors.message?.message}
          </p>
        </div>
        <div className="flex items-center justify-end">
          <Button>{t("Contact.sendMessage")}</Button>
        </div>
      </form>
    </article>
  );
};
export default ContactForm;
