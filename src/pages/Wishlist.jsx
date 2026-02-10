import { Link, useNavigate } from "react-router-dom";
import ProductBadge from "../components/product/ProductBadge";
import ProductCard from "../components/product/productCard";
import { Button } from "../components/ui/button";
import { useWishlist } from "../context/WishlistContext";
import { ITEMS } from "../data/products";
import { useGetRandomProducts } from "../context/hooks/useGetRandomProducts";
import { useTranslation } from "react-i18next";
import { useCart } from "../context/CartContext";

const Wishlist = () => {
  const { t } = useTranslation();
  const { wishlist, clearWishlist } = useWishlist();
  const { addManyToCart } = useCart();
  const randomProducts = useGetRandomProducts(ITEMS, 4);
  const navigate = useNavigate();

  const handelMoveAllToBag = () => {
    if (wishlist.length === 0) return;

    addManyToCart(wishlist);
    clearWishlist();
    navigate("/cart");
  };

  return (
    <section className="max-w-292.5 mx-auto pt-20 px-3 pb-35">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-poppins">
          {t("Wishlist")} ({wishlist.length})
        </h1>
        <Button
          onClick={handelMoveAllToBag}
          disabled={wishlist.length === 0}
          variant="secondary"
        >
          {t("wishlist.moveAllToBag")}
        </Button>
      </div>
      <div className="mt-15 mb-20">
        {wishlist.length === 0 ? (
          <p className="text-center text-lg">{t("wishlist.emptyMessage")}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7.5">
            {wishlist.map((item) => (
              <ProductCard key={item.id} item={item} isWishlistPage={true} />
            ))}
          </div>
        )}
      </div>
      <div>
        <div className="flex items-center justify-between">
          <ProductBadge value={t("wishlist.justForYou")} />
          <Link to="/shop">
            <Button variant="secondary">{t("wishlist.seeAll")}</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7.5 mt-15 ">
          {randomProducts.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Wishlist;
