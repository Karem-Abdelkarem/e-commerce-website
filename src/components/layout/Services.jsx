import { useTranslation } from "react-i18next";
import { services } from "../../data/services";

const Services = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-292.5 mx-auto mb-35 px-3">
      <div className="flex flex-col md:flex-row justify-between items-center gap-5 flex-wrap max-w-235.5 mx-auto font-poppins">
        {services.map((service) => (
          <div key={service.id} className="flex flex-col items-center">
            <div className="flex justify-center items-center size-20 rounded-full bg-[#c1c1c1] mb-6">
              <div className="flex justify-center items-center size-14.5 rounded-full bg-primary">
                <img src={service.icon} alt={t(service.title)} />
              </div>
            </div>
            <h4 className="font-semibold text-xl mb-2">{t(service.title)}</h4>
            <p className="text-sm">{t(service.description)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Services;
