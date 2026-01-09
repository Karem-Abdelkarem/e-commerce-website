import { useTranslation } from "react-i18next";
import ProductBadge from "../product/ProductBadge";
import ps5 from "@/assets/images/playstation.png";
import womensCollection from "@/assets/images/womensCollection.png";
import speakers from "@/assets/images/speakers.png";
import perfume from "@/assets/images/perfume.png";
import { Link } from "react-router-dom";
import i18n from "../../i18n";

const Featured = () => {
  const { t } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  return (
    <section className="max-w-292.5 mx-auto mb-35 px-3 text-white">
      <ProductBadge value={t("Featured")} />
      <h3 className="font-inter text-3xl sm:text-4xl font-semibold text-primary mt-5 mb-15">
        {t("New Arrival")}
      </h3>
      <div className="flex flex-col md:flex-row gap-2.5 md:gap-7.5">
        <article className="relative flex justify-center items-end bg-primary md:w-142.5 md:h-150">
          <div>
            <img
              src={ps5}
              alt={t("featuredArray.0.title")}
              className=" inline-block"
            />
          </div>
          <div
            className={` absolute flex flex-col gap-4 bottom-0 m-8 w-60.5 ${
              isRTL ? "right-0" : "left-0"
            }`}
          >
            <h4 className="font-inter text-2xl font-semibold">
              {t("featuredArray.0.title")}
            </h4>
            <p className="font-poppins text-[14px]">
              {t("featuredArray.0.details")}
            </p>
            <Link to={"/shop"}>
              <button className="cursor-pointer border-b"> {t("shop")} </button>
            </Link>
          </div>
        </article>
        <div className="flex flex-col gap-2.5 md:gap-8">
          <article className="relative flex justify-center items-end bg-primary md:w-142.5 md:h-71">
            <div>
              <img src={womensCollection} alt={t("featuredArray.1.title")} />
            </div>
            <div
              className={`absolute flex flex-col gap-4 bottom-0 left-0 m-8 w-63.75 ${
                isRTL ? "right-0" : "left-0"
              }`}
            >
              <h4 className="font-inter text-2xl font-semibold">
                {t("featuredArray.1.title")}
              </h4>
              <p className="font-poppins text-[14px]">
                {t("featuredArray.1.details")}
              </p>
              <Link to={"/shop"}>
                <button className="cursor-pointer border-b">
                  {" "}
                  {t("shop")}{" "}
                </button>
              </Link>
            </div>
          </article>
          <div className="flex flex-col md:flex-row gap-2.5 md:gap-7.5">
            <article className="relative flex justify-center items-center bg-primary md:w-67.5 md:h-71">
              <div>
                <img src={speakers} alt={t("featuredArray.2.title")} />
              </div>
              <div
                className={`absolute flex flex-col gap-2 bottom-0 left-0 m-6 w-47.75 ${
                  isRTL ? "right-0" : "left-0"
                }`}
              >
                <h4 className="font-inter text-2xl font-semibold">
                  {t("featuredArray.2.title")}
                </h4>
                <p className="font-poppins text-[14px]">
                  {t("featuredArray.2.details")}
                </p>
                <Link to={"/shop"}>
                  <button className="cursor-pointer border-b">
                    {" "}
                    {t("shop")}{" "}
                  </button>
                </Link>
              </div>
            </article>
            <article className="relative flex justify-center items-center bg-primary md:w-67.5 md:h-71">
              <div>
                <img src={perfume} alt={t("featuredArray.3.title")} />
              </div>
              <div
                className={`absolute flex flex-col gap-2 bottom-0 left-0 m-6 w-47.75 ${
                  isRTL ? "right-0" : "left-0"
                }`}
              >
                <h4 className="font-inter text-2xl font-semibold">
                  {t("featuredArray.3.title")}
                </h4>
                <p className="font-poppins text-[14px]">
                  {t("featuredArray.3.details")}
                </p>
                <Link to={"/shop"}>
                  <button className="cursor-pointer border-b">
                    {" "}
                    {t("shop")}{" "}
                  </button>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Featured;
