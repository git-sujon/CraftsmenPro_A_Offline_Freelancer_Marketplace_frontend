import HomeHeader from "@/components/view/Header/HomeHeader";
import Banner from "@/components/pages/Homepage/Banner/Banner";
import BrowseByCatagories from "@/components/pages/Homepage/BrowseByCatagories/BrowseByCatagories";
import PopularServices from "@/components/pages/Homepage/PopularServices/PopularServices";
import FindTalent from "@/components/pages/Homepage/FindTalent/FindTalent";

const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <Banner />
      <PopularServices />
      <BrowseByCatagories />
      <FindTalent />
    </>
  );
};

export default HomePage;
