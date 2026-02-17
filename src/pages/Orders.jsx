import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import OrderCard from "../components/ui/my-account/OrderCard";
import { useTranslation } from "react-i18next";

const Orders = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchOrders = async () => {
      try {
        const q = query(
          collection(db, "orders"),
          where("userId", "==", user.uid),
        );

        const snapshot = await getDocs(q);
        const ordersData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setOrders(ordersData);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  if (loading) return <p>{t("myAccount.Loading orders")}</p>;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">{t("myAccount.My Orders")}</h2>

      {orders.length === 0 ? (
        <p>{t("myAccount.You haven't placed any orders yet")}</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="flex flex-col sm:flex-row gap-7">
            <OrderCard key={order.id} order={order} />
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;
