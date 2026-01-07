import { useTranslation } from "react-i18next";
import ProductBadge from "../product/ProductBadge";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { ITEMS } from "../../data/products";
import ProductCard from "../product/productCard";

const topRatedProducts = [...ITEMS]
  .sort((a, b) => {
    if (b.stars === a.stars) {
      return b.rates - a.rates;
    }
    return b.stars - a.stars;
  })
  .slice(0, 4);

const BestSelling = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-292.5 mx-auto pt-17.5 mb-35 px-3">
      <ProductBadge value={t("This Month")} />
      <div className="flex items-center justify-between mt-5 mb-15">
        <h3 className="font-inter text-3xl sm:text-4xl font-semibold">
          {t("Best Selling Products")}
        </h3>
        <div>
          <Link to={"/shop"}>
            <Button>{t("View All")}</Button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7.5">
        {topRatedProducts.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};
export default BestSelling;
