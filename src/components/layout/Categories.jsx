import CategorieCard from "../product/CategorieCard";
import ProductBadge from "../product/ProductBadge";
import { ITEMS } from "../../data/categories";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Categories = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-292.5 mx-auto pt-20 pb-17.5 px-3 border-b">
      <ProductBadge value={t("Categories")} />
      <Carousel
        className="w-full"
        opts={{
          direction: i18n.dir() === "rtl" ? "rtl" : "ltr",
        }}
      >
        <div className="flex justify-between mt-5 mb-15">
          <h3 className="font-inter text-3xl sm:text-4xl font-semibold">
            {t("Browse By Category")}
          </h3>
          <div className="hidden sm:flex items-end gap-2">
            <CarouselPrevious
              className={`static w-11.5 h-11.5 ${
                i18n.dir() === "rtl" ? "rotate-180" : ""
              } `}
            />
            <CarouselNext
              className={`static w-11.5 h-11.5 ${
                i18n.dir() === "rtl" ? "rotate-180" : ""
              } `}
            />
          </div>
        </div>

        <CarouselContent className="">
          {ITEMS.map((item) => (
            <CarouselItem
              key={item.id}
              className=" basis-[55%] sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
            >
              <CategorieCard item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
export default Categories;
