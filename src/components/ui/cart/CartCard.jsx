import { useTranslation } from "react-i18next";
import { useCart } from "../../../context/CartContext";

const CartCard = ({ item, isCartPage = false }) => {
  const { t } = useTranslation();
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <article
      className={`group w-full flex items-center justify-between gap-0 ${isCartPage && "px-10 py-6 shadow-sm rounded-md"}`}
    >
      <div className="flex items-center justify-between gap-5 max-w-42.5 text-nowrap me-40">
        <div className="relative w-13.5 h-13.5 shrink-0">
          {isCartPage && (
            <button
              onClick={() => removeFromCart(item.id)}
              className="hidden group-hover:block absolute -top-1 -left-1 rtl:right-0 rtl:left-auto cursor-pointer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="9" fill="#DB4444" />
                <path
                  d="M9 15L12 12M15 9L11.9994 12M11.9994 12L9 9M12 12L15 15"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
          <img className="w-full" src={item.imageSrc} alt={t(item.title)} />
        </div>
        <h3 className="overflow-hidden text-ellipsis">{t(item.title)}</h3>
      </div>
      <span>${item.price}</span>
      {isCartPage && (
        <div className="flex items-center gap-2 mx-70">
          <button
            onClick={() => decreaseQuantity(item.id)}
            className="px-2 py-1 border rounded"
          >
            −
          </button>

          <span className="w-6 text-center">{item.quantity}</span>

          <button
            onClick={() => increaseQuantity(item.id)}
            className="px-2 py-1 border rounded"
          >
            +
          </button>
        </div>
      )}
      {isCartPage && <span>${item.price * item.quantity}</span>}
    </article>
  );
};
export default CartCard;
