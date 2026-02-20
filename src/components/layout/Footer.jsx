import { Link } from "react-router-dom";
import sendIcon from "@/assets/icons/icon-send.svg";
import downloadApp from "@/assets/images/download-app.png";
import facebookIcon from "@/assets/icons/icon-facebook.svg";
import twitterIcon from "@/assets/icons/icon-twitter.svg";
import instagramIcon from "@/assets/icons/icon-instagram.svg";
import linkedinIcon from "@/assets/icons/icon-linkedin.svg";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary pt-20 pb-6 text-white">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 max-w-292.5 mx-auto px-3 mb-15">
        <div className="max-w-full md:max-w-54.25">
          <Link to={"/"}>
            <h2 className="font-inter text-4xl md:text-2xl font-bold">
              Exclusive
            </h2>
          </Link>
          <p className="font-poppins text-xl font-medium my-6">
            {t("Subscribe")}
          </p>
          <p className="font-poppins text-[16px] mb-4">
            {t("Get 10% off your first order")}
          </p>
          <div className="flex items-center justify-between border-2 border-white  rounded-md py-3 px-4">
            <input
              type="email"
              placeholder={t("Enter your email")}
              className="outline-0 w-32.5"
            />
            <button type="submit" className="cursor-pointer">
              <img src={sendIcon} alt="" />
            </button>
          </div>
        </div>
        <div className="font-poppins max-w-full md:max-w-43.75">
          <h3 className="font-medium text-xl mb-6">{t("Support")}</h3>
          <p className="text-[16px]">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="text-[16px] my-4">exclusive@gmail.com</p>
          <p className="text-[16px]">+88015-88888-9999</p>
        </div>
        <div className="font-poppins max-w-full md:max-w-30.75">
          <h3 className="font-medium text-xl mb-6">{t("Account")}</h3>
          <div className="flex flex-col gap-4 text-[16px]">
            <Link to={"/account"}>{t("account")}</Link>
            <Link to={"/signup"}>{t("Login / Register")}</Link>
            <Link to={"/cart"}>{t("Cart")}</Link>
            <Link to={"/wishlist"}>{t("Wishlist")}</Link>
            <Link to={"/shop"}>{t("Shop")}</Link>
          </div>
        </div>
        <div className="font-poppins max-w-full md:max-w-27.25">
          <h3 className="font-medium text-xl mb-6">{t("Quick Link")}</h3>
          <div className="flex flex-col gap-4 text-[16px]">
            <Link>{t("Privacy Policy")}</Link>
            <Link>{t("Terms Of Use")}</Link>
            <Link>{t("FAQ")}</Link>
            <Link to={"/contact"}>{t("contact")}</Link>
          </div>
        </div>
        <div className="font-poppins max-w-full md:max-w-49.5">
          <h3 className="font-medium text-xl">{t("Download App")}</h3>
          <div className="my-6">
            <p className="font-medium text-[12px] text-[#afafaf] mb-2">
              {t("Save $3 with App New User Only")}
            </p>
            <img src={downloadApp} alt="" />
          </div>
          <div className="flex items-center gap-6">
            <a className="cursor-pointer">
              <img src={facebookIcon} alt="" />
            </a>
            <a className="cursor-pointer">
              <img src={twitterIcon} alt="" />
            </a>
            <a className="cursor-pointer">
              <img src={instagramIcon} alt="" />
            </a>
            <a className="cursor-pointer">
              <img src={linkedinIcon} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center text-[#3d3d3d] font-poppins text-[16px]">
          © Copyright Kareem 2026. All right reserved
        </p>
      </div>
    </footer>
  );
};
export default Footer;
