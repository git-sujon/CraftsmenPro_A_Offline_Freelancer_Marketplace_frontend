import Image from "next/image";
import Link from "next/link";
import { Button } from "antd";
import homepageBannerRight from '@/assets/images/homepageBannerright.png'

const Banner = () => {
  return (
    <div
      className="h-[500px] xl:h-[550px] 2xl:h-[625px] w-full bg-cover bg-no-repeat bg-center relative overflow-hidden transition-all duration-500"
      style={{ backgroundImage: "url('/homeBanner.png')" }}
    >
      <div className="absolute top-0 bottom-0 left-0 right-0">
        <div className="max-width  grid grid-cols-1 lg:grid-cols-2 items-center ">
          <div className="w-full h-fit md:mb-8 lg:mb-12">
            <div className="space-y-5 ">
              {/* label container */}
              <div className="space-y-2 mb-3 md:mb-8 "></div>
              {/* title content */}
              <div className="space-y-2 ">
                <div className="md:space-y-2.5 text-primary">
                  <h1 className="text-5xl font-bold  ">Hire Experts &</h1>
                  <h1 className="text-5xl font-bold  ">
                    Get Your Any Job Done
                  </h1>
                </div>
                <p className="text-textSecondary text-sm sm:text-base font-semibold py-2 max-w-[500px] ">
                  Work with talented people at the most affordable price to get
                  the most out of your time and cost
                </p>
                <Link href={"/services"}>
                  <Button type="primary" size="large" >
                    View Services 
                  </Button>
                </Link>
              </div>
            </div>

     

          </div>

          <div>
                <Image src={homepageBannerRight} width={500} height={500} alt="banner_right"/>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Banner;
