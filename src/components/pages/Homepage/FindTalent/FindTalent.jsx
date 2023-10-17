import SectionSubPera from "@/components/Ui/Typography/SectionSubPera";
import SectionTitle from "@/components/Ui/Typography/SectionTitle";
import Image from "next/image";
import findTalentImage from "../../../../assets/images/cleaning service-bro.png"
import {  SiOpenbadges } from "react-icons/si";


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
        <div className="space-y-7 w-96">
        
        <h1 className="text-primary text-xl md:text-3xl  ">A whole world of freelance talent at your fingertips</h1>


         <div >
            <div className="flex gap-x-5">
                {/* icon  */}
                <div className="h-24">
                    <SiOpenbadges className="w-12 h-12 text-textSecondary" />
                </div>

                {/* description  */}

                <div className="space-y-2">
                    <h3 className="text-textPrimary font-semibold">Proof of quality</h3>
                    <p className="text-textSecondary">Check any pro’s work samples, client reviews, and identity verification.</p>
                </div>

            </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default FindTalent;
