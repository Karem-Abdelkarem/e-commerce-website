import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import user from "@/assets/icons/user.svg";
import mallbag from "@/assets/icons/icon-mallbag.svg";
import cancel from "@/assets/icons/icon-cancel.svg";
import review from "@/assets/icons/Icon-Reviews.svg";
import logoutIcon from "@/assets/icons/icon-logout.svg";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function UserDropdown({ setIsMenuOpen }) {
  const { t } = useTranslation();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    if (window.confirm(t("Are you sure you want to log out?"))) {
      try {
        await logout();
        navigate("/login");
      } catch (error) {
        console.error("Logout error:", error);
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="group hover:bg-secondary w-8 h-8 rounded-full transition outline-0 cursor-pointer">
          <svg
            className="stroke-primary group-hover:stroke-white"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-64 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/30 shadow-xl text-white p-2"
      >
        <Link to="/account" onClick={() => setIsMenuOpen(false)}>
          <DropdownMenuItem>
            <div className="flex items-center gap-4 cursor-pointer">
              <img src={user} alt="" /> {t("Manage my account")}
            </div>
          </DropdownMenuItem>
        </Link>
        <Link to="/account/my-orders" onClick={() => setIsMenuOpen(false)}>
          <DropdownMenuItem>
            <div className="flex items-center gap-4 cursor-pointer">
              <img src={mallbag} alt="" /> {t("My orders")}
            </div>
          </DropdownMenuItem>
        </Link>
        <Link to="/account/cancellations" onClick={() => setIsMenuOpen(false)}>
          <DropdownMenuItem>
            <div className="flex items-center gap-4 cursor-pointer">
              <img src={cancel} alt="" /> {t("My cancellations")}
            </div>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem onClick={() => setIsMenuOpen(false)}>
          <div className="flex items-center gap-4 cursor-pointer">
            <img src={review} alt="" /> {t("My reviews")}
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout}>
          <div className="flex items-center gap-4 cursor-pointer">
            <img src={logoutIcon} alt="" /> {t("Log out")}
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserDropdown;
