import { ITEMS } from "../../data/products";
import i18n from "../../i18n";
import ProductBadge from "../product/ProductBadge";
import { Button } from "../ui/button";
import CountdownTimer from "../ui/CountdownTimer";
import { useTranslation } from "react-i18next";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "../product/ProductCard";
import { Link } from "react-router-dom";

const discountedItems = ITEMS.filter((item) => item.discount > 0);

const FlashSale = () => {
  const { t } = useTranslation();
  return (
    <section className="max-w-292.5 mx-auto mt-35 px-3 border-b">
      <ProductBadge value={t("Today's")} />
      <Carousel
        className="w-full"
        opts={{
          direction: i18n.dir() === "rtl" ? "rtl" : "ltr",
        }}
      >
        <div className="flex justify-between mt-6 mb-8">
          <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-22">
            <h3 className="font-inter text-3xl sm:text-4xl font-semibold">
              {t("Flash Sales")}
            </h3>
            <CountdownTimer endDate="2027-01-30T23:59:59" />
          </div>
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
          {discountedItems.map((item) => (
            <CarouselItem
              key={item.id}
              className=" basis-[80%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <ProductCard item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center my-15">
        <Link to={"/shop"}>
          <Button>{t("View All Products")}</Button>
        </Link>
      </div>
    </section>
  );
};
export default FlashSale;
