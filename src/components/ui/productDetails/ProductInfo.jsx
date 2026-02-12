import { useTranslation } from "react-i18next";
import StarRating from "../rating/StarRating";
import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";
import { useState } from "react";
import { Button } from "../button";
import { useWishlist } from "../../../context/WishlistContext";
import deliveryIcon from "@/assets/icons/icon-delivery.svg";
import returnIcon from "@/assets/icons/icon-return.svg";
import { useNavigate } from "react-router-dom";
import { useCheckout } from "../../../context/CheckoutContext";
import toast from "react-hot-toast";

const ProductInfo = ({
  product,
  selectedColor,
  onColorChange,
  isWishlistPage,
}) => {
  const { t } = useTranslation();
  const { removeFromWishlist, addToWishlist, isInWishlist } = useWishlist();
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { setCheckoutData } = useCheckout();

  const navigate = useNavigate();

  const handleBuyNow = () => {
    if (product.colors && !selectedColor) {
      toast.error("Please select a color");
      return;
    }

    if (product.sizes && !selectedSize) {
      toast.error("Please select a size");
      return;
    }

    const checkoutItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: quantity,
      color: selectedColor || null,
      size: selectedSize || null,
      imageSrc:
        product.imagesByColor?.[selectedColor]?.[0] || product.images?.[0],
    };

    setCheckoutData({
      items: [checkoutItem],
      total: product.price,
      paymentMethod: null,
      billingData: null,
    });

    navigate("/checkout");
  };

  return (
    <section className="w-100">
      <div className="border-b-2">
        <h1 className="font-inter font-semibold text-2xl">
          {t(product.title)}
        </h1>
        <div className="flex items-center justify-between gap-4 w-50 my-4">
          <StarRating rating={product.stars} reviews={product.rates} />
          <span>|</span>
          <span className="font-poppins text-sm text-destructive mt-0.5">
            In Stock
          </span>
        </div>
        <span className="font-inter text-2xl">${product.price}</span>
        <p className="font-poppins text-sm my-6 w-94">{t(product.details)}</p>
      </div>
      <div className="space-y-6 mt-6">
        {product.colors && (
          <ColorSelector
            colors={product.colors}
            selectedColor={selectedColor}
            onSelectColor={onColorChange}
          />
        )}

        {product.sizes && (
          <SizeSelector
            sizes={product.sizes}
            selectedSize={selectedSize}
            onSelectSize={setSelectedSize}
          />
        )}
      </div>
      <div className="mt-6 mb-10 flex items-center gap-4">
        <div className="flex items-center gap-8 border rounded-md w-fit">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="w-10 h-11 px-2 py-1 border-r cursor-pointer"
          >
            −
          </button>

          <span className="text-center text-xl font-poppins">{quantity}</span>

          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="w-10 h-11 border-l rounded-tr-md rounded-br-md bg-secondary text-white cursor-pointer"
          >
            +
          </button>
        </div>
        <Button onClick={handleBuyNow}>Buy Now</Button>
        <button
          onClick={() =>
            isWishlistPage
              ? removeFromWishlist(product.id)
              : addToWishlist(product)
          }
          className="flex items-center justify-center bg-white rounded-md size-10 border cursor-pointer"
        >
          {isWishlistPage ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 5.57143H5.33333L6.66667 21H17.3333L18.6667 5.57143H4M12 9.42857V17.1429M15.3333 9.42857L14.6667 17.1429M8.66667 9.42857L9.33333 17.1429M9.33333 5.57143L10 3H14L14.6667 5.57143"
                stroke="black"
                strokeWidth="1.56"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : isInWishlist(product.id) ? (
            <svg
              className="fill-red-500 stroke-red-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 5C5.7912 5 4 6.73964 4 8.88594C4 10.6185 4.7 14.7305 11.5904 18.8873C11.7138 18.961 11.8555 19 12 19C12.1445 19 12.2862 18.961 12.4096 18.8873C19.3 14.7305 20 10.6185 20 8.88594C20 6.73964 18.2088 5 16 5C13.7912 5 12 7.35511 12 7.35511C12 7.35511 10.2088 5 8 5Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 5C5.7912 5 4 6.73964 4 8.88594C4 10.6185 4.7 14.7305 11.5904 18.8873C11.7138 18.961 11.8555 19 12 19C12.1445 19 12.2862 18.961 12.4096 18.8873C19.3 14.7305 20 10.6185 20 8.88594C20 6.73964 18.2088 5 16 5C13.7912 5 12 7.35511 12 7.35511C12 7.35511 10.2088 5 8 5Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>
      <div className="font-poppins border rounded-md py-6">
        <div className="flex items-center gap-4 border-b">
          <div className="pl-4 mb-2">
            <img src={deliveryIcon} alt="" />
          </div>
          <div className="pl-4">
            <h3>Free Delivery</h3>
            <p className="text-[12px] mt-2 mb-4">
              Enter your postal code for Delivery Availability
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="pl-4 mt-3">
            <img src={returnIcon} alt="" />
          </div>
          <div className="pl-4 mt-4">
            <h3>Return Delivery</h3>
            <p className="text-[12px] mt-2">
              Free 30 Days Delivery Returns. Details
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductInfo;
