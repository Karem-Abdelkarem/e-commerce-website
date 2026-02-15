import { useTranslation } from "react-i18next";

const ResultsCard = ({ item }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white mb-2 hover:bg-muted p-4 rounded-md">
      <h3 className="font-bold text-lg mb-2">{t(item.title)}</h3>
      <p className="text-secondary font-medium">${item.price}</p>
    </div>
  );
};
export default ResultsCard;
