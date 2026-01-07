import searchIcon from "@/assets/icons/search.svg";
import wishlistIcon from "@/assets/icons/wishlist.svg";
import cartIcon from "@/assets/icons/cart.svg";

const NavbarIcons = ({ openSearch }) => {
  return (
    <>
      <button className="md:hidden cursor-pointer">
        <img src={searchIcon} alt="search icon" onClick={openSearch} />
      </button>
      <button className="cursor-pointer">
        <img src={wishlistIcon} alt="wishlist icon" />
      </button>
      <button className="cursor-pointer">
        <img src={cartIcon} alt="cart icon" />
      </button>
    </>
  );
};
export default NavbarIcons;
