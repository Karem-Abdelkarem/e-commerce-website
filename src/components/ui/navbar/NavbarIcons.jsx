import searchIcon from "@/assets/icons/search.svg";
import wishlistIcon from "@/assets/icons/wishlist.svg";
import cartIcon from "@/assets/icons/cart.svg";
import { Link } from "react-router-dom";
import UserDropdown from "../UserDropdown";
import { useAuth } from "../../../context/AuthContext";
import { useWishlist } from "../../../context/WishlistContext";
import { useCart } from "../../../context/CartContext";

const NavbarIcons = ({ openSearch }) => {
  const { user } = useAuth();
  const { wishlist } = useWishlist();
  const { cart } = useCart();

  return (
    <div className="flex items-center gap-1.5 sm:gap-4">
      <button className="md:hidden cursor-pointer mb-1">
        <img src={searchIcon} alt="search icon" onClick={openSearch} />
      </button>
      <Link to="/wishlist">
        <button className="relative cursor-pointer">
          {wishlist.length > 0 && (
            <span className="absolute -top-1 -right-1 rtl:left-0 rtl:right-auto w-4 h-4 rounded-full bg-secondary text-white text-xs flex items-center justify-center">
              {wishlist.length > 9 ? "9+" : wishlist.length}
            </span>
          )}
          <img src={wishlistIcon} alt="wishlist icon" />
        </button>
      </Link>
      <Link to="/cart">
        <button className="relative cursor-pointer">
          {cart.items.length > 0 && (
            <span className="absolute -top-1 -right-1 rtl:left-0 rtl:right-auto w-4 h-4 rounded-full bg-secondary text-white text-xs flex items-center justify-center">
              {cart.items.length > 9 ? "9+" : cart.items.length}
            </span>
          )}
          <img src={cartIcon} alt="cart icon" />
        </button>
      </Link>
      {user && (
        <div className="hidden md:block mb-1">
          <UserDropdown />
        </div>
      )}
    </div>
  );
};
export default NavbarIcons;
