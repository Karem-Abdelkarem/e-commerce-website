import { useTranslation } from "react-i18next";
import Shopping from "@/assets/images/shopping.png";
import { Link } from "react-router-dom";
import OurStatus from "../components/ui/about/OurStatus";
import AboutTeam from "../components/ui/about/AboutTeam";
import { team } from "../data/team";
import Services from "../components/layout/Services";

const About = () => {
  const { t } = useTranslation();

  return (
    <main className="max-w-292.5 mx-auto pt-20 px-3 font-poppins">
      <div className="flex items-center justify-between gap-3 w-fit text-sm">
        <Link to="/" className="text-muted-foreground">
          {t("home")}
        </Link>
        <span className="text-muted-foreground">/</span>
        <span className="text-primary">About</span>
      </div>
      <div className="flex items-center gap-18.5 mt-10">
        <div className="w-131.25 shrink-0">
          <h1 className="font-inter font-semibold text-[54px] mb-10">
            Our Story
          </h1>
          <p className="mb-6">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="min-w-170 max-w-176.25">
          <img className="w-full" src={Shopping} alt="" />
        </div>
      </div>
      <div>
        <OurStatus />
      </div>
      <div className="flex items-center gap-7.5">
        {team.map((member) => (
          <AboutTeam key={member.id} {...member} />
        ))}
      </div>
      <div className="mt-35">
        <Services />
      </div>
    </main>
  );
};
export default About;
