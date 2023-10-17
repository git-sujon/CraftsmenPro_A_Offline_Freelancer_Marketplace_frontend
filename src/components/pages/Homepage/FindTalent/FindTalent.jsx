import Image from "next/image";
import findTalentImage from "../../../../assets/images/cleaning service-bro.png";

import { PiLightbulbFilamentFill } from "react-icons/pi";
import { GrUserWorker } from "react-icons/gr";
import { HiOutlineUserGroup } from "react-icons/hi";

const FindTalent = () => {
  return (
    <div className="max-width  bg-orange-50">
      <div className="py-20 grid grid-cols-1 lg:grid-cols-2 gap-x-36 items-center ">
        <div>
          <Image
            className=""
            src={findTalentImage}
            layout="responsive"
            width={700}
            height={500}
            alt={"Find best talent"}
          />
        </div>
        <div className="space-y-5 w-96">
          <h1 className="text-primary text-xl md:text-3xl  ">
            A whole world of freelance talent at your fingertips
          </h1>

          <div className="flex gap-x-5">
            {/* icon  */}
            <div className="h-24">
              <PiLightbulbFilamentFill className="w-12 h-12 text-textSecondary" />
            </div>

            {/* description  */}

            <div className="space-y-2">
              <h3 className="text-textPrimary font-semibold">
                Payment after work
              </h3>
              <p className="text-textSecondary">
                Unleash creativity and expertise from local freelancers.
              </p>
            </div>
          </div>

          <div className="flex gap-x-5">
            {/* icon  */}
            <div className="h-24">
              <GrUserWorker className="w-12 h-12 text-textSecondary" />
            </div>

            {/* description  */}

            <div className="space-y-2">
              <h3 className="text-textPrimary font-semibold">
                Local Talent Network
              </h3>
              <p className="text-textSecondary">
                Access a local pool of skilled freelancers.
              </p>
            </div>
          </div>

          <div className="flex gap-x-5">
            {/* icon  */}
            <div className="h-24">
              <HiOutlineUserGroup className="w-12 h-12 text-textSecondary" />
            </div>

            {/* description  */}

            <div className="space-y-2">
              <h3 className="text-textPrimary font-semibold">
                Diverse Freelancers
              </h3>
              <p className="text-textSecondary">
                Explore a variety of local freelance talents and skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindTalent;
