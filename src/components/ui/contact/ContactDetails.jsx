import PhoneIcon from "@/assets/icons/icons-phone.svg";
import MailIcon from "@/assets/icons/icons-mail.svg";

const ContactDetails = () => {
  return (
    <article className="w-85 py-10 px-9 rounded-md shadow-md font-poppins">
      <div className="border-b">
        <div className="flex items-center gap-4 mb-6">
          <img src={PhoneIcon} alt="" />
          <h2 className="font-medium">Call To Us</h2>
        </div>
        <div className="flex flex-col gap-4 mb-8">
          <p className="text-sm">We are available 24/7, 7 days a week.</p>
          <p className="text-sm">Phone: +8801611112222</p>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-4 mt-8 mb-6">
          <img src={MailIcon} alt="" />
          <h2 className="font-medium">Write To US</h2>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className="text-sm">Emails: customer@exclusive.com</p>
          <p className="text-sm">Emails: support@exclusive.com</p>
        </div>
      </div>
    </article>
  );
};
export default ContactDetails;
