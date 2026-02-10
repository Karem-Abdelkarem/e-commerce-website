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
        <span className="text-primary">Contact</span>
      </div>
      <div className="flex items-start gap-8">
        <ContactDetails />
        <ContactForm />
      </div>
    </section>
  );
};
export default Contact;
