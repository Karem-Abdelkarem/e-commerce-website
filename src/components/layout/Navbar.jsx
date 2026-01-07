import burgerMenu from "@/assets/icons/burger-menu.svg";
import searchIcon from "@/assets/icons/search.svg";
import crossIcon from "@/assets/icons/cross.svg";
import { useState } from "react";
import Searchsidebar from "../common/SearchSidebar";
import NavbarLinks from "../ui/NavbarLinks";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import NavbarIcons from "../ui/NavbarIcons";
import i18n from "../../i18n";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { t } = useTranslation();

  const isRTL = i18n.dir() === "rtl";

  const openSearch = () => {
    setIsSearchOpen(true);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="relative px-3 pt-5 sm:pt-10 pb-4 border-b">
        <div className="flex items-center justify-between max-w-292.5 mx-auto">
          <button
            className="w-10 p-2 cursor-pointer md:hidden"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(true)}
          >
            <img src={burgerMenu} alt="" />
          </button>

          <Link to={"/"} className="font-inter font-bold text-2xl">
            Exclusive
          </Link>
          <div className="hidden md:block">
            <NavbarLinks />
          </div>

          {/* mobile navLinks */}
          <nav
            className={` md:hidden flex items-start justify-between font-poppins bg-white fixed top-0 h-full w-[90%] overflow-y-auto transition-transform duration-300 ease-in-out z-50 ${
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
            <div>
              <div className="mt-14 px-5 space-y-2.5">
                {[t("home"), t("contact"), t("about"), t("signUp")].map(
                  (link) => (
                    <a
                      key={link}
                      className="block rounded-md p-2 hover:bg-muted"
                      href="#"
                    >
                      {link}
                    </a>
                  )
                )}
                {[
                  t("Woman's Fashion"),
                  t("Men's Fashion"),
                  t("Electronics"),
                  t("Home & Lifestyle"),
                  t("Medicine"),
                  t("Sports & Outdoor"),
                  t("Baby's & Toys"),
                  t("Groceries & Pets"),
                  t("Health & Beauty"),
                ].map((category) => (
                  <a
                    key={category}
                    className="block rounded-md p-2 hover:bg-muted"
                    href="#"
                  >
                    {category}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-end px-5 pb-6 mt-10 h-full justify-between">
              <button
                className=" mb-4 w-10 cursor-pointer"
                aria-label="Close menu"
                onClick={() => setIsMenuOpen(false)}
              >
                <img src={crossIcon} alt="cross icon" />
              </button>
              <a className="block rounded-md p-2 mb-4 hover:bg-muted" href="#">
                {t("account")}
              </a>
            </div>
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-4">
            <div className=" hidden md:flex items-center py-2 pl-5 pr-3 bg-muted rounded-md w-60.75">
              <input
                type="search"
                className="outline-0 w-full"
                placeholder={t("What are you looking for?")}
              />
              <img src={searchIcon} alt="search icon" />
            </div>
            <NavbarIcons openSearch={openSearch} />
          </div>
        </div>
      </header>
      {/* Sidebars */}

      <Searchsidebar
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
};
export default Navbar;
