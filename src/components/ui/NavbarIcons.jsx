import searchIcon from "@/assets/icons/search.svg";
import wishlistIcon from "@/assets/icons/wishlist.svg";
import cartIcon from "@/assets/icons/cart.svg";
import UserDropdown from "./UserDropdown";
import { useAuth } from "../../context/AuthContext";
import { useWishlist } from "../../context/WishlistContext";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const NavbarIcons = ({ openSearch }) => {
  const { user } = useAuth();
  const { wishlist } = useWishlist();
  const { cart } = useCart();

  return (
    <>
      <button className="md:hidden cursor-pointer">
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
      {user && <UserDropdown />}
    </>
  );
};
export default NavbarIcons;
