import { useNavigate } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import { useCheckout } from "../../../context/CheckoutContext";
import { Button } from "../button";
import CartCard from "../cart/CartCard";
import CartCoupon from "../cart/CartCoupon";
import CartTotal from "../cart/CartTotal";
import PaymentMethods from "./PaymentMethods";
import toast from "react-hot-toast";
import { useAuth } from "../../../context/AuthContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";

const CheckoutDetails = () => {
  const { cart, clearCart } = useCart();
  const { billingData, paymentMethod, checkoutData, setCheckoutData } =
    useCheckout();
  const navigate = useNavigate();
  const { user } = useAuth();

  const items = checkoutData?.items || cart.items;
  const total = checkoutData?.total || cart.totalPrice;

  const handlePlaceOrder = async () => {
    if (!user) return;
    const order = {
      userId: user.uid,
      billingData,
      paymentMethod,
      items: items,
      total: total,
      status: "pending",
      createdAt: serverTimestamp(),
    };
    try {
      const docRef = await addDoc(collection(db, "orders"), order);

      setCheckoutData({ id: docRef.id, ...order });
      clearCart();
      toast.success("Order placed successfully 🎉");
      navigate("/bill");
    } catch (error) {
      console.error("Error saving order:", error);
    }
  };

  return (
    <section className="flex flex-col gap-8 pt-8">
      <div className="flex flex-col gap-8 w-106.25">
        {items.map((item) => (
          <CartCard key={item.id} item={item} isCartPage={false} />
        ))}
      </div>
      <div>
        <CartTotal items={items} total={total} isCartPage={false} />
      </div>
      <div>
        <PaymentMethods />
      </div>
      <div>
        <CartCoupon />
      </div>
      <div>
        <Button onClick={handlePlaceOrder}>Place Order</Button>
      </div>
    </section>
  );
};
export default CheckoutDetails;
