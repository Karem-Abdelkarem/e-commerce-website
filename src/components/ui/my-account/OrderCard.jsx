import { useTranslation } from "react-i18next";

const OrderCard = ({ order }) => {
  const { t } = useTranslation();

  return (
    <div className="border rounded-lg p-4 space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-medium">Order #{order.id.slice(0, 8)}</p>
          <p className="text-sm text-gray-500">
            {order.createdAt?.toDate().toLocaleDateString()}
          </p>
        </div>

        <span className="px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">
          {order.status}
        </span>
      </div>

      <div className="space-y-3">
        {order.items.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <img
              src={item.imageSrc}
              alt={t(item.title)}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="flex-1">
              <p className="font-medium">{t(item.title)}</p>
              <p className="text-sm text-gray-500">
                {item.quantity} × ${item.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center border-t pt-4">
        <p className="font-semibold">Total: ${order.total}</p>
        <button className="text-sm text-red-600 hover:underline">
          View Details
        </button>
      </div>
    </div>
  );
};
export default OrderCard;
