import Image from "next/image";
import joinUsImage from "../../../../assets/images/joinus.jpg";

import { BiSolidMessageSquareCheck } from "react-icons/bi";
import Link from "next/link";

const JoinUs = () => {
  return (
    <div className="max-width ">
      <div className="py-20 grid grid-cols-1 lg:grid-cols-2 gap-x-16 ">
        <div className="space-y-5 mb-10">
          <h1 className="text-textPrimary text-xl md:text-3xl  ">
            Your Journey Starts Here.{" "}
            <Link
              href={"/auth/service-provider-registration"}
              className="underline underline-offset-8 text-primary hover:text-secondary"
            >
              Join
            </Link>{" "}
            Now and Flourish
          </h1>

          <p className="text-sm leading-relaxed text-justify text-textSecondary">
            Embark on a remarkable journey towards personal and professional
            growth with CraftsmenPro. If you are a skilled professional looking
            to showcase your talents or a discerning user seeking top-notch
            services.
          </p>

          <div className="max-w-sm ">
            <div className="flex items-center gap-2 ">
              <BiSolidMessageSquareCheck className="text-xl" />
              <p className="text-textSecondary text-sm">
                Homeowners seeking skilled professionals for repairs and
                maintenance tasks.
              </p>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <BiSolidMessageSquareCheck className="text-xl" />
              <p className="text-textSecondary text-sm">
                Skilled professionals looking to offer their expertise to a
                broad clientele.
              </p>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <BiSolidMessageSquareCheck className="text-xl" />
              <p className="text-textSecondary text-sm">
                Individuals in search of top-notch, reliable service providers.
              </p>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <BiSolidMessageSquareCheck className="text-xl" />
              <p className="text-textSecondary text-sm">
                Anyone interested in connecting with a network of talented
                craftsmen.
              </p>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <BiSolidMessageSquareCheck className="text-xl" />
              <p className="text-textSecondary text-sm">
                Those who value convenience and quality in service provision.
              </p>
            </div>
          </div>
        </div>

        <div>
          <Image
            className=""
            src={joinUsImage}
            layout="responsive"
            width={800}
            height={600}
            alt={"Find best talent"}
          />
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
