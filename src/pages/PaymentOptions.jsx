import { useTranslation } from "react-i18next";

const PaymentOptions = () => {
  const { t } = useTranslation();
  return (
    <section className="w-210 bg-white py-10 px-20 shadow-lg rounded-md font-poppins">
      <h1 className="text-secondary text-xl smtext-2xl font-medium mb-4">
        {t("myAccount.My Payment Options")}
      </h1>
      <p className="text-gray-500 py-16 text-center">
        {t("myAccount.No payment methods added yet")}
      </p>
    </section>
  );
};
export default PaymentOptions;
