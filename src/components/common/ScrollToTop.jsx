import { useEffect, useState } from "react";
import ArrowUp from "@/assets/icons/icons_arrow-up.svg";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="
        fixed bottom-8 right-8
        z-50
        w-12 h-12
        rounded-full
        bg-muted text-white
        flex items-center justify-center
        shadow-lg
        hover:scale-105
        transition
        cursor-pointer
      "
      aria-label="Scroll to top"
    >
      <img src={ArrowUp} alt="" />
    </button>
  );
};

export default ScrollToTop;
