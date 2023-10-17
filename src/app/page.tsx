import HomeHeader from "@/components/view/Header/HomeHeader";
import Banner from "@/components/pages/Homepage/Banner/Banner";
import BrowseByCatagories from "@/components/pages/Homepage/BrowseByCatagories/BrowseByCatagories";
import PopularServices from "@/components/pages/Homepage/PopularServices/PopularServices";
import FindTalent from "@/components/pages/Homepage/FindTalent/FindTalent";
import Footer from "@/components/Ui/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <Banner />
      <PopularServices />
      <BrowseByCatagories />
      <FindTalent />

      <Footer />
    </>
  );
};

export default HomePage;
