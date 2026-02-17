import { useTranslation } from "react-i18next";

const MyReturns = () => {
  const { t } = useTranslation();

  return (
    <section className="w-210 bg-white py-10 px-20 shadow-lg rounded-md font-poppins">
      <h1 className="text-secondary text-2xl font-medium mb-4">
        {t("myAccount.My Returns")}
      </h1>
      <p className="text-gray-500 py-16 text-center">
        {t("myAccount.No returns yet")}
      </p>
    </section>
  );
};
export default MyReturns;
