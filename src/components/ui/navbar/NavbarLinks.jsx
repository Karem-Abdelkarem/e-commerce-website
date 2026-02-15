import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavbarLinks = () => {
  const { t } = useTranslation();

  const baseClass =
    "relative block  py-2 text-sm font-medium transition-colors";

  return (
    <nav className="flex items-center justify-between  font-poppins w-91.75">
      <NavLink
        to={"/"}
        end
        className={({ isActive }) =>
          `${baseClass} ${
            isActive
              ? " after:absolute after:content[''] after:w-full after:h-px after:bg-primary after:bottom-1 after:left-0"
              : "hover:after:absolute hover:after:content[''] hover:after:w-full hover:after:h-px hover:after:bg-primary hover:after:bottom-1 hover:after:left-0"
          }`
        }
      >
        {t("home")}
      </NavLink>
      <NavLink
        to={"/contact"}
        end
        className={({ isActive }) =>
          `${baseClass} ${
            isActive
              ? " after:absolute after:content[''] after:w-full after:h-px after:bg-primary after:bottom-1 after:left-0"
              : "hover:after:absolute hover:after:content[''] hover:after:w-full hover:after:h-px hover:after:bg-primary hover:after:bottom-1 hover:after:left-0"
          }`
        }
      >
        {t("contact")}
      </NavLink>
      <NavLink
        to={"/about"}
        end
        className={({ isActive }) =>
          `${baseClass} ${
            isActive
              ? " after:absolute after:content[''] after:w-full after:h-px after:bg-primary after:bottom-1 after:left-0"
              : "hover:after:absolute hover:after:content[''] hover:after:w-full hover:after:h-px hover:after:bg-primary hover:after:bottom-1 hover:after:left-0"
          }`
        }
      >
        {t("about")}
      </NavLink>
      <NavLink
        to={"/signup"}
        end
        className={({ isActive }) =>
          `${baseClass} ${
            isActive
              ? " after:absolute after:content[''] after:w-full after:h-px after:bg-primary after:bottom-1 after:left-0"
              : "hover:after:absolute hover:after:content[''] hover:after:w-full hover:after:h-px hover:after:bg-primary hover:after:bottom-1 hover:after:left-0"
          }`
        }
      >
        {t("signUp")}
      </NavLink>
    </nav>
  );
};
export default NavbarLinks;
