import { useTranslation } from "react-i18next";
import StarRating from "../ui/rating/StarRating";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { ViewProductDialog } from "./ViewProductDialog";

const ProductCard = ({ item, isWishlistPage = false }) => {
  const { t } = useTranslation();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <article className=" relative font-poppins w-67.5 mx-auto">
      <Link to={`/products/${item.id}`}>
        <div className=" relative group flex items-center justify-center w-67.5 h-62.5 bg-muted rounded-md mb-4 overflow-hidden">
          {item.discount && (
            <span className=" absolute top-0 left-0 bg-secondary text-white text-[12px] rounded-md py-1 px-3 m-3">
              -{item.discount}%
            </span>
          )}
          {item.state && (
            <span className=" absolute top-0 left-0 bg-destructive text-white text-[12px] rounded-md py-1 px-3 m-3">
              {t("new")}
            </span>
          )}

          <img loading="lazy" src={item.imageSrc} alt={t(item.title)} />

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(item);
            }}
            className="absolute bottom-0 w-full bg-primary text-white font-medium py-2 text-center rounded-b-md cursor-pointer transition-transform translate-y-full group-hover:translate-y-0 hover:bg-secondary"
          >
            {t("addToCart")}
          </button>
        </div>
      </Link>
      <div className="absolute top-0 right-0 flex flex-col gap-2 m-3">
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            isWishlistPage ? removeFromWishlist(item.id) : addToWishlist(item);
          }}
          className="flex items-center justify-center bg-white rounded-full size-8.5 cursor-pointer"
        >
          {isWishlistPage ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 5.57143H5.33333L6.66667 21H17.3333L18.6667 5.57143H4M12 9.42857V17.1429M15.3333 9.42857L14.6667 17.1429M8.66667 9.42857L9.33333 17.1429M9.33333 5.57143L10 3H14L14.6667 5.57143"
                stroke="black"
                strokeWidth="1.56"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : isInWishlist(item.id) ? (
            <svg
              className="fill-red-500 stroke-red-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 5C5.7912 5 4 6.73964 4 8.88594C4 10.6185 4.7 14.7305 11.5904 18.8873C11.7138 18.961 11.8555 19 12 19C12.1445 19 12.2862 18.961 12.4096 18.8873C19.3 14.7305 20 10.6185 20 8.88594C20 6.73964 18.2088 5 16 5C13.7912 5 12 7.35511 12 7.35511C12 7.35511 10.2088 5 8 5Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 5C5.7912 5 4 6.73964 4 8.88594C4 10.6185 4.7 14.7305 11.5904 18.8873C11.7138 18.961 11.8555 19 12 19C12.1445 19 12.2862 18.961 12.4096 18.8873C19.3 14.7305 20 10.6185 20 8.88594C20 6.73964 18.2088 5 16 5C13.7912 5 12 7.35511 12 7.35511C12 7.35511 10.2088 5 8 5Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
        <ViewProductDialog item={item} />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-medium text-[16px]">{t(item.title)} </h2>
        <div className="flex items-center gap-3 font-medium text-[16px]">
          <span className="text-secondary">{item.price}</span>
          {item.discount && (
            <span className="line-through text-muted-foreground">
              ${item.price + (item.price * item.discount) / 100}
            </span>
          )}
        </div>
      </div>
      <StarRating rating={item.stars} reviews={item.rates} />
    </article>
  );
};
export default ProductCard;
