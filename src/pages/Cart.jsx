import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartCard from "../components/ui/cart/CartCard";
import { Button } from "../components/ui/button";
import CartCoupon from "../components/ui/cart/CartCoupon";
import CartTotal from "../components/ui/cart/CartTotal";
import { useTranslation } from "react-i18next";
import { useCheckout } from "../context/CheckoutContext";

const Cart = () => {
  const { t } = useTranslation();
  const { cart } = useCart();
  const { checkoutData } = useCheckout();

  const items = checkoutData?.items || cart.items;
  const total = checkoutData?.total || cart.totalPrice;

  return (
    <section className="max-w-292.5 mx-auto pt-20 px-3 pb-35 font-poppins">
      <div className="flex items-center justify-between gap-3 w-fit text-sm">
        <Link to="/" className="text-muted-foreground">
          {t("home")}
        </Link>
        <span className="text-muted-foreground">/</span>
        <span className="text-primary">{t("Cart")}</span>
      </div>
      <div className="w-full flex items-center justify-between px-10 py-6 shadow-sm rounded-md mt-20 mb-10">
        <h2>{t("cart.product")}</h2>
        <h2>{t("cart.price")}</h2>
        <h2>{t("cart.quantity")}</h2>
        <h2>{t("cart.subtotal")}</h2>
      </div>
      {cart.items.length === 0 ? (
        <p className="text-center text-lg">{t("cart.emptyMessage")}</p>
      ) : (
        <div className="flex flex-col gap-10">
          {items.map((item) => (
            <CartCard key={item.id} item={item} isCartPage={true} />
          ))}
        </div>
      )}
      <div className="flex items-center justify-between mt-6 mb-20">
        <Link to={"/shop"}>
          <Button variant="secondary">{t("cart.returnToShop")}</Button>
        </Link>
        <Button variant="secondary">{t("cart.updateCart")}</Button>
      </div>
      <div className="flex items-start justify-between">
        <CartCoupon />
        <CartTotal items={items} total={total} isCartPage={true} />
      </div>
    </section>
  );
};
export default Cart;
