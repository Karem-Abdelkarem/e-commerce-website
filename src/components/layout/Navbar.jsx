import burgerMenu from "@/assets/icons/burger-menu.svg";
import { useState } from "react";
import Searchsidebar from "../ui/navbar/SearchSidebar";
import NavbarLinks from "../ui/navbar/NavbarLinks";
import { Link } from "react-router-dom";
import NavbarIcons from "../ui/navbar/NavbarIcons";
import NavbarSearch from "../ui/navbar/NavbarSearch";
import SidebarNavLinks from "../ui/navbar/SidebarNavLinks";
import { useTranslation } from "react-i18next";
import { ITEMS } from "../../data/products";

const Navbar = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = ITEMS.filter((item) =>
    t(item.title).toLowerCase().includes(searchQuery.toLowerCase()),
  );

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
          <SidebarNavLinks
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />

          <div className="flex items-center gap-1.5 sm:gap-4">
            <NavbarSearch
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              filteredItems={filteredItems}
            />
            <NavbarIcons openSearch={openSearch} />
          </div>
        </div>
      </header>
      {/* Sidebars */}

      <Searchsidebar
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filteredItems={filteredItems}
      />
    </>
  );
};
export default Navbar;
