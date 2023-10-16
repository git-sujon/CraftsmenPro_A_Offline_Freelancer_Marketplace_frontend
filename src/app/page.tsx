import Banner from "@/components/pages/Homepage/Banner/Banner";
import PopularServices from "@/components/pages/Homepage/PopularServices/PopularServices";
import HomeHeader from "@/components/view/Header/HomeHeader";

const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <Banner />
      <PopularServices />
    </>
  );
};

export default HomePage;
