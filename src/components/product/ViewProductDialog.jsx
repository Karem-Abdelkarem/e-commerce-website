import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import eyeIcon from "@/assets/icons/Eye.svg";
import StarRating from "../ui/rating/StarRating";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function ViewProductDialog({ item }) {
  const { t } = useTranslation();
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="flex items-center justify-center bg-white rounded-full size-8.5 cursor-pointer"
        >
          <img src={eyeIcon} alt="" />
        </button>
      </DialogTrigger>
      <DialogContent className="flex items-start gap-8 p-8 sm:max-w-4xl">
        <DialogDescription className="sr-only">
          Product quick view dialog
        </DialogDescription>
        <div className="w-100 h-100 bg-muted aspect-square rounded-md flex items-center justify-center p-8">
          <img
            className="w-full h-full object-contain"
            src={item.imageSrc}
            alt={item.title}
          />
        </div>
        <div className="w-full">
          <div className="flex items-start gap-4 w-full">
            <div className="space-y-4 w-full">
              <DialogTitle className="text-4xl text-primary font-semibold">
                {t(item.title)}{" "}
              </DialogTitle>
              <div className="flex items-center gap-3">
                <StarRating rating={item.stars} reviews={item.rates} />
                <span>|</span>
                <span className="font-poppins text-base text-destructive mt-0.5">
                  In Stock
                </span>
              </div>
              <div className="flex items-center gap-3 font-medium text-[16px]">
                <span className="text-secondary text-2xl">{item.price}</span>
                {item.discount && (
                  <span className="line-through text-muted-foreground text-2xl">
                    ${item.price + (item.price * item.discount) / 100}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-8 border rounded-md w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-11 px-2 py-1 border-r cursor-pointer"
                >
                  −
                </button>

                <span className="text-center text-xl font-poppins">
                  {quantity}
                </span>

                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-11 border-l rounded-tr-md rounded-br-md bg-secondary text-white cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>
            <DialogClose asChild></DialogClose>
          </div>
          <div>
            <div className="flex items-center gap-3 mt-6">
              <Button
                className="w-[90%]"
                onClick={() => addToCart({ ...item, quantity })}
              >
                Add to Cart
              </Button>
              <button
                onClick={() => addToWishlist(item)}
                className="flex items-center justify-center shrink-0 bg-white rounded-md size-10 border cursor-pointer"
              >
                {isInWishlist(item.id) ? (
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
            <Link
              to={`/products/${item.id}`}
              className="block mt-4 text-center text-secondary hover:underline"
            >
              View Details
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
