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
        <span className="text-primary">{t("about")}</span>
      </div>
      <div className="flex items-center gap-18.5 mt-10">
        <div className="sm:w-131.25 w-78 shrink-0">
          <h1 className="font-inter font-semibold text-[54px] mb-10">
            {t("About.title")}
          </h1>
          <p className="mb-6">{t("About.description_1")}</p>
          <p>{t("About.description_2")}</p>
        </div>
        <div className="hidden md:block min-w-170 max-w-176.25">
          <img className="w-full" src={Shopping} alt="" />
        </div>
      </div>
      <div>
        <OurStatus />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7.5">
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
