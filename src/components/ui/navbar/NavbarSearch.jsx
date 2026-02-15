import searchIcon from "@/assets/icons/search.svg";
import { useTranslation } from "react-i18next";
import ResultsCard from "./ResultsCard";
import { Link } from "react-router-dom";

const NavbarSearch = ({ searchQuery, setSearchQuery, filteredItems }) => {
  const { t } = useTranslation();

  return (
    <div className="hidden md:block relative w-60.75">
      <div className="hidden md:flex items-center py-2 pl-5 pr-3 bg-muted rounded-md w-full focus-within:outline outline-secondary ">
        <input
          type="search"
          className="outline-0 w-full"
          placeholder={t("What are you looking for?")}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <img src={searchIcon} alt="search icon" />
      </div>
      {searchQuery && (
        <div className="absolute w-full bg-white top-[125%] left-0 rounded-md shadow-lg z-999">
          {filteredItems.length === 0 ? (
            <p className="text-center text-secondary">
              {t("No results found")}
            </p>
          ) : (
            filteredItems.map((item) => (
              <Link key={item.id} to={`/products/${item.id}`}>
                <ResultsCard item={item} />
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
};
export default NavbarSearch;
