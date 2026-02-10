import { useTranslation } from "react-i18next";
import { Button } from "../button";

const CartCoupon = () => {
  const { t } = useTranslation();

  return (
    <article className="flex items-center justify-between gap-4">
      <input
        type="text"
        className="px-6 py-4 outline-0 border rounded-md w-75"
        placeholder={t("cart.couponCode")}
      />
      <Button>{t("cart.applyCoupon")}</Button>
    </article>
  );
};
export default CartCoupon;
