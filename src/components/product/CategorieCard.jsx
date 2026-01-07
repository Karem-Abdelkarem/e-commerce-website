import { useTranslation } from "react-i18next";

const CategorieCard = ({ item }) => {
  const { t } = useTranslation();
  return (
    <article className="group flex flex-col items-center justify-center gap-4 font-poppins w-42.5 h-36.25 border rounded-md bg-white hover:bg-secondary transition">
      <div>{item.iconSrc}</div>

      <h3 className="text-primary group-hover:text-white">{t(item.title)}</h3>
    </article>
  );
};
export default CategorieCard;
