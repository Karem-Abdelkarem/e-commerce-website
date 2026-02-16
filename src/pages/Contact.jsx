import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ContactDetails from "../components/ui/contact/ContactDetails";
import ContactForm from "../components/ui/contact/ContactForm";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-292.5 mx-auto pt-20 px-3 pb-35">
      <div className="flex items-center justify-between gap-3 w-fit text-sm mb-20">
        <Link to="/" className="text-muted-foreground">
          {t("home")}
        </Link>
        <span className="text-muted-foreground">/</span>
        <span className="text-primary">{t("contact")}</span>
      </div>
      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="order-1 md:-order-1">
          <ContactDetails />
        </div>
        <div className="w-full">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
export default Contact;
