import Banner from "@/components/pages/Homepage/Banner/Banner";
import BrowseByCatagories from "@/components/pages/Homepage/BrowseByCatagories/BrowseByCatagories";
import PopularServices from "@/components/pages/Homepage/PopularServices/PopularServices";
import HomeHeader from "@/components/view/Header/HomeHeader";

const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <Banner />
      <PopularServices />
      <BrowseByCatagories />
    </>
  );
};

export default HomePage;
