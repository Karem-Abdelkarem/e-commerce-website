import { useTranslation } from "react-i18next";
import StarRating from "../ui/rating/StarRating";
import wishListIcon from "../../assets/icons/wishlist.svg";
import eyeIcon from "../../assets/icons/Eye.svg";

const ProductCard = ({ item }) => {
  const { t } = useTranslation();

  return (
    <article className="font-poppins w-67.5 mx-auto">
      <div className=" relative group flex items-center justify-center w-67.5 h-62.5 bg-muted rounded-md mb-4 overflow-hidden">
        {item.discount && (
          <span className=" absolute top-0 left-0 bg-secondary text-white text-[12px] rounded-md py-1 px-3 m-3">
            -{item.discount}%
          </span>
        )}
        <div className="absolute top-0 right-0 flex flex-col gap-2 m-3">
          <span className="flex items-center justify-center bg-white rounded-full size-8.5 cursor-pointer">
            <img src={wishListIcon} alt="" />
          </span>
          <span className="flex items-center justify-center bg-white rounded-full size-8.5 cursor-pointer">
            <img src={eyeIcon} alt="" />
          </span>
        </div>
        <img loading="lazy" src={item.imageSrc} alt={t(item.title)} />
        <button className="absolute bottom-0 w-full bg-primary text-white font-medium py-2 text-center rounded-b-md cursor-pointer transition-transform translate-y-full group-hover:translate-y-0">
          {t("addToCart")}
        </button>
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
