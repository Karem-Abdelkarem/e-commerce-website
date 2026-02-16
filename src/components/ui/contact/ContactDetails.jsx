import PhoneIcon from "@/assets/icons/icons-phone.svg";
import MailIcon from "@/assets/icons/icons-mail.svg";
import { useTranslation } from "react-i18next";

const ContactDetails = () => {
  const { t } = useTranslation();

  return (
    <article className="w-full md:w-85 py-10 px-9 rounded-md shadow-md font-poppins">
      <div className="border-b">
        <div className="flex items-center gap-4 mb-6">
          <img src={PhoneIcon} alt="" />
          <h2 className="font-medium">{t("Contact.callToUs")}</h2>
        </div>
        <div className="flex flex-col gap-4 mb-8">
          <p className="text-sm">
            {t("Contact.we are available 24/7, 7 days a week")}
          </p>
          <p className="text-sm">Phone: +8801611112222</p>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-4 mt-8 mb-6">
          <img src={MailIcon} alt="" />
          <h2 className="font-medium">{t("Contact.writeToUs")}</h2>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm">
            {t(
              "Contact.Fill out our form and we will contact you within 24 hours",
            )}
          </p>
          <p className="text-sm">Emails: customer@exclusive.com</p>
          <p className="text-sm">Emails: support@exclusive.com</p>
        </div>
      </div>
    </article>
  );
};
export default ContactDetails;
