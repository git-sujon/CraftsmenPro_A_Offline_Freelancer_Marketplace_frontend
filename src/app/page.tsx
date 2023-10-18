import HomeHeader from "@/components/view/Header/HomeHeader";
import Banner from "@/components/pages/Homepage/Banner/Banner";
import BrowseByCatagories from "@/components/pages/Homepage/BrowseByCatagories/BrowseByCatagories";
import PopularServices from "@/components/pages/Homepage/PopularServices/PopularServices";
import FindTalent from "@/components/pages/Homepage/FindTalent/FindTalent";
import JoinUs from "@/components/pages/Homepage/JoinUs/JoinUs";
import FAQ from "@/components/pages/Homepage/FAQ/FAQ";
import LatestBlogs from "@/components/pages/Homepage/LatestBlogs/LatestBlogs";

const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <Banner />
      <PopularServices />
      <BrowseByCatagories />
      <FindTalent />
      <JoinUs />
      <FAQ />
      <LatestBlogs />
    </>
  );
};

export default HomePage;
