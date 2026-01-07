import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import arrowRight from "@/assets/icons/arrow-right.svg";
import { useTranslation } from "react-i18next";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function HeroCarousel() {
  const [api, setApi] = React.useState(null);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const { t, i18n } = useTranslation();

  const slides = [
    {
      id: 1,
      title: t("Up to 10% off Voucher"),
      subtitle: t("iPhone 14 Series"),
      image: "/images/banners/iphone.png",
      logo: "/images/banners/apple-logo.png",
    },
    {
      id: 2,
      title: t("Up to 10% off Voucher"),
      subtitle: t("macbook"),
      image: "/images/banners/macbook.png",
      logo: "/images/banners/apple-logo.png",
    },
    {
      id: 3,
      title: t("Up to 10% off Voucher"),
      subtitle: t("tablet"),
      image: "/images/banners/tablet.png",
      logo: "/images/banners/apple-logo.png",
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      plugins={[plugin.current]}
      opts={{
        direction: i18n.dir() === "rtl" ? "rtl" : "ltr",
      }}
      className="max-w-223 mt-5 md:mt-10"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {slides.map((slide) => (
          <CarouselItem key={slide.id}>
            <div className="relative bg-primary">
              <div className="flex justify-end h-110 md:h-86 w-full sm:h-112.5">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className=" object-cover"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-center gap-5 bg-black/40 px-6 text-white text-center md:text-start">
                <div className="flex items-center gap-6 mx-auto md:mx-0">
                  <img src={slide.logo} alt="" />
                  <p className="font-poppins">{slide.subtitle}</p>
                </div>
                <h2 className="text-3xl font-semibold sm:text-4xl font-inter">
                  {slide.title}
                </h2>
                <button className="flex items-center gap-2 mt-2 mx-auto md:mx-0 text-sm sm:text-lg font-poppins font-medium hover:underline">
                  <a href="#">{t("Shop Now")}</a>
                  <img
                    src={arrowRight}
                    alt=""
                    className={i18n.dir() === "rtl" ? "rotate-180" : ""}
                  />
                </button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center gap-2 bg-primary pb-2.5">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              current === index
                ? "bg-secondary border-2 border-white"
                : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </Carousel>
  );
}
