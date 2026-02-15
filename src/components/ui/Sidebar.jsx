import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <aside className="border-e pt-10 hidden md:block w-58.25 shrink-0 ">
      {[
        t("Woman's Fashion"),
        t("Men's Fashion"),
        t("Electronics"),
        t("Home & Lifestyle"),
        t("Medicine"),
        t("Sports & Outdoor"),
        t("Baby's & Toys"),
        t("Groceries & Pets"),
        t("Health & Beauty"),
      ].map((category) => (
        <Link
          to={"/shop"}
          key={category}
          className="block rounded-md p-2 hover:bg-muted"
        >
          {category}
        </Link>
      ))}
    </aside>
  );
};
export default Sidebar;
