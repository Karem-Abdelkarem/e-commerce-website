import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const ProductGallery = ({ images = [] }) => {
  const [activeImage, setActiveImage] = useState(images[0]);

  useEffect(() => {
    setActiveImage(images[0]);
  }, [images]);

  return (
    <div className="flex flex-col sm:flex-row gap-7.5">
      {/* Thumbnails */}
      <div className="flex flex-row sm:flex-col gap-4 order-1 sm:order-0">
        {images.map((img) => (
          <button
            key={img}
            onClick={() => setActiveImage(img)}
            className={cn(
              "flex items-center justify-center w-[80%] sm:w-42.5 h-34.5 border rounded-md overflow-hidden cursor-pointer",
              activeImage === img ? "border-primary" : "border-muted",
            )}
          >
            <img src={img} className="w-[80%] h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex items-center justify-center w-full sm:w-125 h-150 bg-muted rounded-md px-7 overflow-hidden">
        <img
          src={activeImage}
          alt="Product preview"
          className="w-111 h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default ProductGallery;
