import { useEffect, useRef } from "react";
import crossIcon from "@/assets/icons/cross.svg";
import i18n from "../../../i18n";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ResultsCard from "./ResultsCard";

const Searchsidebar = ({
  isOpen,
  onClose,
  searchQuery,
  setSearchQuery,
  filteredItems,
}) => {
  const inputRef = useRef(null);
  const { t } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-primary/40"
          onClick={onClose}
        ></div>
      )}
      {/* Sidebar */}
      <aside
        className={`fixed top-0 z-50 h-full w-[90%] bg-white transition-transform duration-300 ease-in-out ${
          isRTL ? "left-0" : "right-0"
        }
        ${
          isOpen
            ? "translate-x-0"
            : isRTL
              ? "-translate-x-full"
              : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-2.5">
          <button onClick={onClose} className="cursor-pointer">
            <img className="w-10 mt-2.5" src={crossIcon} alt="Close search" />
          </button>

          <input
            type="search"
            ref={inputRef}
            className="mt-2.5 w-75 rounded-md border px-4 py-3 outline-secondary focus:outline"
            placeholder={t("What are you looking for?")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {searchQuery && (
          <div className=" w-full bg-white rounded-md mt-2.5">
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
      </aside>
    </>
  );
};
export default Searchsidebar;
