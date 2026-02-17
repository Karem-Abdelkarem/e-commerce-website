import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import CheckoutForm from "../components/ui/checkout/CheckoutForm";
import CheckoutDetails from "../components/ui/checkout/CheckoutDetails";

const Checkout = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-292.5 mx-auto pt-20 px-3 pb-35 font-poppins">
      <div className="flex items-center justify-between gap-3 w-fit text-sm mb-20">
        <Link to="/my-account" className="text-muted-foreground">
          {t("account")}
        </Link>
        <span className="text-muted-foreground">/</span>
        <Link to="/cart" className="text-muted-foreground">
          {t("checkout.View Cart")}
        </Link>
        <span className="text-muted-foreground">/</span>
        <span className="text-primary">{t("checkout.CheckOut")}</span>
      </div>
      <h1 className="font-inter text-4xl font-medium mb-12">
        {t("checkout.title")}
      </h1>
      <div className="flex flex-col md:flex-row items-start gap-43">
        <CheckoutForm />
        <CheckoutDetails />
      </div>
    </section>
  );
};
export default Checkout;
