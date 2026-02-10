import { Link, useParams } from "react-router-dom";
import ProductGallery from "../components/ui/productDetails/ProductGallery";
import { ITEMS } from "../data/products";
import { useTranslation } from "react-i18next";
import ProductInfo from "../components/ui/productDetails/ProductInfo";
import { useEffect, useState } from "react";
import RelatedItems from "../components/ui/productDetails/RelatedItems";

const ProductDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const product = ITEMS.find((item) => item.id === id);
  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    if (product?.colors?.length) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSelectedColor(product.colors[0]);
    } else {
      setSelectedColor(null);
    }
  }, [product]);

  const images = product.imagesByColor?.[selectedColor] ?? product.images;

  return (
    <>
      <section className="max-w-292.5 mx-auto pt-20 pb-35">
        <div className="flex items-center justify-between gap-3 w-fit text-sm mb-20">
          <Link to="/" className="text-muted-foreground">
            {t("home")}
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link to="/cart" className="text-muted-foreground">
            {t(product?.type)}
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-primary">{t(product?.title)}</span>
        </div>
        <div className="flex items-start justify-between gap-17">
          <ProductGallery images={images} />
          <ProductInfo
            product={product}
            selectedColor={selectedColor}
            onColorChange={setSelectedColor}
          />
        </div>
        <div className="mt-35">
          <RelatedItems product={product} items={ITEMS} />
        </div>
      </section>
    </>
  );
};
export default ProductDetails;
