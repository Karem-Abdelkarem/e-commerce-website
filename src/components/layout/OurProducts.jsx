import { useTranslation } from "react-i18next";
import ProductBadge from "../product/ProductBadge";
import { ITEMS } from "../../data/products";
import ProductCard from "../product/productCard";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const OurProducts = () => {
  const { t } = useTranslation();
  const filteredProducts = ITEMS.slice(0, 8);

  return (
    <section className="max-w-292.5 mx-auto mb-35 px-3">
      <ProductBadge value={t("Our Products")} />
      <h3 className="font-inter text-3xl sm:text-4xl font-semibold mt-5 mb-15">
        {t("Explore Our Products")}
      </h3>
      <div className="grid grid-cols-1 grid-rows-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7.5">
        {filteredProducts.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
      <div className="flex justify-center mt-15">
        <Link to={"/shop"}>
          <Button>{t("View All Products")}</Button>
        </Link>
      </div>
    </section>
  );
};
export default OurProducts;
