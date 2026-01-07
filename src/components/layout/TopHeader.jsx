import { useTranslation } from "react-i18next";

const TopHeader = () => {
  const { t, i18n } = useTranslation();

  return (
    <header className="flex justify-center bg-primary text-white py-3 px-3 font-poppins">
      <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between sm:gap-35.5 md:gap-57.5 max-w-215">
        <p className="text-center text-sm">
          {t("topHeader")}
          <a href="#" className="ms-2 font-semibold underline">
            {t("shop")}
          </a>
        </p>
        <select
          value={i18n.language}
          onChange={(e) => i18n.changeLanguage(e.target.value)}
          name="language"
          aria-label="Select language"
          className="bg-primary max-w-19.5 outline-0 mt-2 cursor-pointer"
        >
          <option value="en">English</option>
          <option value="ar">Arabic</option>
          <option value="de">German</option>
        </select>
      </div>
    </header>
  );
};
export default TopHeader;
