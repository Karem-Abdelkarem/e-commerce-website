import Banner from "../components/layout/Banner";
import BestSelling from "../components/layout/BestSelling";
import Categories from "../components/layout/Categories";
import Featured from "../components/layout/Featured";
import FlashSale from "../components/layout/FlashSale";
import HeroSection from "../components/layout/HeroSection";
import OurProducts from "../components/layout/OurProducts";
import Services from "../components/layout/Services";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FlashSale />
      <Categories />
      <BestSelling />
      <Banner />
      <OurProducts />
      <Featured />
      <Services />
    </>
  );
};
export default Home;
