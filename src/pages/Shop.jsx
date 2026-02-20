import ProductBadge from "../components/product/ProductBadge";
import ProductCard from "../components/product/productCard";
import { ITEMS } from "../data/products";

const Shop = () => {
  return (
    <section className="max-w-292.5 mx-auto mb-35 pt-20 px-3 pb-35">
      <ProductBadge value={"Explore Our Products"} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7.5 mt-10">
        {ITEMS.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};
export default Shop;
