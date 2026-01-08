import Banner from "../components/layout/Banner";
import BestSelling from "../components/layout/BestSelling";
import Categories from "../components/layout/Categories";
import FlashSale from "../components/layout/FlashSale";
import HeroSection from "../components/layout/HeroSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FlashSale />
      <Categories />
      <BestSelling />
      <Banner />
    </>
  );
};
export default Home;
