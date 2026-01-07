import { HeroCarousel } from "../ui/HeroCarousel";
import Sidebar from "../ui/Sidebar";

const HeroSection = () => {
  return (
    <section className="flex items-start justify-between gap-11 max-w-292.5 mx-auto max-h-102">
      <Sidebar />
      <HeroCarousel />
    </section>
  );
};
export default HeroSection;
