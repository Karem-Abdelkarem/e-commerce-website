import { useEffect, useRef } from "react";
import { useCheckout } from "@/context/CheckoutContext";
import { useCart } from "@/context/CartContext";
import { useTranslation } from "react-i18next";

const Bill = () => {
  const { t } = useTranslation();
  const { checkoutData } = useCheckout();
  const { clearCart } = useCart();

  const clearedRef = useRef(false);

  useEffect(() => {
    if (!clearedRef.current) {
      clearCart();
      clearedRef.current = true;
    }
  }, [clearCart]);

  const { billingData, paymentMethod, items, total } = checkoutData;

  return (
    <section className="max-w-5xl mx-auto pt-20 pb-32 px-4">
      <h1 className="text-3xl font-semibold mb-10">Order Confirmation</h1>

      {/* Billing */}
      <div className="mb-10">
        <h2 className="text-xl font-medium mb-4">Billing Details</h2>
        <p>{billingData.firstName}</p>
        <p>{billingData.streetAddress}</p>
        <p>{billingData.phoneNumber}</p>
        <p>{billingData.email}</p>
      </div>

      {/* Items */}
      <div className="mb-10">
        <h2 className="text-xl font-medium mb-4">Order Items</h2>

        {items.map((item) => (
          <div key={item.id} className="flex justify-between">
            <span>
              {t(item.title)} × {item.quantity}
            </span>
            <span>${item.price * item.quantity}</span>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="border-t pt-6">
        <p>Payment: {paymentMethod}</p>
        <p className="text-lg font-semibold">Total: ${total}</p>
      </div>
    </section>
  );
};

export default Bill;
