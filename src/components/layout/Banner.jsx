import { useTranslation } from "react-i18next";
import BannerCountdown from "../ui/BannerCountdown";
import { Button } from "../ui/button";
import JblImage from "@/assets/images/JBL.png";
import { Link } from "react-router-dom";

const Banner = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-292.5 mx-auto mb-17.5 px-3 bg-primary">
      <div className="flex items-center justify-between py-17.5 pl-0 md:pl-14 pr-11">
        <div className="flex flex-col gap-8">
          <h4 className="font-poppins text-[16px] font-semibold text-destructive">
            {t("Categories")}
          </h4>
          <h2 className="font-inter text-4xl md:text-5xl font-semibold text-white leading-15">
            {t("Enhance Your Music Experience")}
          </h2>
          <BannerCountdown endDate="2027-01-30T23:59:59" />
          <Link to={"/shop"}>
            <Button variant="destructive">{t("Buy Now")}</Button>
          </Link>
        </div>
        <div className="hidden sm:block">
          <img
            src={JblImage}
            alt=""
            className="drop-shadow-[0px_35px_35px_rgba(50,50,50)]"
          />
        </div>
      </div>
    </section>
  );
};
export default Banner;
