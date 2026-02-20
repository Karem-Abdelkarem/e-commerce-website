import ProductBadge from "../../product/ProductBadge";
import { ITEMS } from "../../../data/products";
import ProductCard from "../../product/ProductCard";
import { useTranslation } from "react-i18next";

const RelatedItems = ({ product }) => {
  const { t } = useTranslation();

  const relatedItems = ITEMS.filter(
    (item) => item.category === product.category && item.id !== product.id,
  ).slice(0, 4);

  return (
    <section>
      <ProductBadge value={t("productDetails.Related Items")} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7.5 mt-15">
        {relatedItems.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};
export default RelatedItems;
