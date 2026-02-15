import crossIcon from "@/assets/icons/cross.svg";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import UserDropdown from "../UserDropdown";
import { useAuth } from "../../../context/AuthContext";
import { NavLink } from "react-router-dom";

const SidebarNavLinks = ({ isMenuOpen, setIsMenuOpen }) => {
  const { t } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  const { user } = useAuth();

  return (
    <nav
      className={` md:hidden flex items-start justify-between font-poppins bg-white fixed top-0 h-full w-[90%] transition-transform duration-300 ease-in-out z-50 ${
        isRTL ? "right-0" : "left-0"
      }
        ${
          isMenuOpen
            ? "translate-x-0"
            : isRTL
              ? "translate-x-full"
              : "-translate-x-full"
        }`}
    >
      <div className="flex flex-col justify-between w-[80%] h-full">
        <div className="mt-14 px-5 space-y-2.5">
          <NavLink
            to={"/"}
            end
            className="block p-2 text-sm font-medium rounded-md transition-colors hover:bg-muted"
          >
            {t("home")}
          </NavLink>
          <NavLink
            to={"/contact"}
            end
            className="block p-2 text-sm font-medium rounded-md transition-colors hover:bg-muted"
          >
            {t("contact")}
          </NavLink>
          <NavLink
            to={"/about"}
            end
            className="block p-2 text-sm font-medium rounded-md transition-colors hover:bg-muted"
          >
            {t("about")}
          </NavLink>
          <NavLink
            to={"/signup"}
            end
            className="block p-2 text-sm font-medium rounded-md transition-colors hover:bg-muted"
          >
            {t("signUp")}
          </NavLink>
        </div>
        <div className="flex items-center gap-4 px-5 mb-5">
          <UserDropdown />
          <div className="flex flex-col">
            <span>{user?.firstName}</span>
            <span>{user?.email}</span>
          </div>
        </div>
      </div>

      <div className=" px-5 pb-6 mt-10">
        <button
          className=" mb-4 w-10 cursor-pointer"
          aria-label="Close menu"
          onClick={() => setIsMenuOpen(false)}
        >
          <img src={crossIcon} alt="cross icon" />
        </button>
      </div>
    </nav>
  );
};
export default SidebarNavLinks;
