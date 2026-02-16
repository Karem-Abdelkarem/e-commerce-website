import { useNavigate } from "react-router-dom";
import { Button } from "../button";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../../context/AuthContext";
import toast from "react-hot-toast";

const CartTotal = ({ items = [], total = 0, isCartPage = false }) => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    if (!user) {
      navigate("/login", {
        state: { from: "/checkout" },
        replace: true,
      });
      return;
    }

    navigate("/checkout");
  };

  return (
    <article
      className={`w-auto sm:w-105.5 font-poppins ${isCartPage && "w-117.5 border-2 rounded-md px-6 py-8 font-poppins"}`}
    >
      {isCartPage && (
        <h2 className="font-medium text-xl mb-6">{t("cart.cartTotal")}</h2>
      )}
      <div className="flex items-center justify-between mb-4">
        <h4>{t("cart.subtotal")}:</h4>
        <span>${total}</span>
      </div>
      <div className="flex items-center justify-between border-y py-4">
        <h4>{t("cart.shipping")}:</h4>
        <span>{t("cart.free")}</span>
      </div>
      <div className="flex items-center justify-between mt-4">
        <h4>{t("cart.total")}:</h4>
        <span>${total}</span>
      </div>
      {isCartPage && (
        <div className="text-center mt-4">
          <Button disabled={items.length === 0} onClick={handleCheckout}>
            {t("cart.proceedToCheckout")}
          </Button>
        </div>
      )}
    </article>
  );
};
export default CartTotal;
