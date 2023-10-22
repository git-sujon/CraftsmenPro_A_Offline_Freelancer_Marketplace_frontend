import { IService } from "@/types/services";
import { Avatar, Card, Divider, Rate, Tag } from "antd";
import Image from "next/image";
import Link from "next/link";
import { BiSolidMapPin } from "react-icons/bi";

const ServicesCard = ({ service }: { service: IService }) => {
  const servicesCategory = service?.category.split(" ").join("-");

  return (
    <Link href={`/services/category/${servicesCategory}/${service?._id}`}>
      <Card
        cover={
          <Image
            width={600}
            height={250}
            src={service?.serviceBanner}
            alt={service?.title}
          />
        }
        size="small"
      >
        <Tag color="success" className="text-sm">
          {service.category}
        </Tag>

        <div>
          <h2 className="font-bold text-textPrimary text-lg h-16">
            {service.title}
          </h2>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <Avatar src={service?.servicesProvider?.providerProfileImage} />
              <div className="">
                <p className="text-textPrimary text-xs">
                  {service?.servicesProvider?.providerName}
                </p>
                <div className="flex items-center justify-center gap-x-1">
                  <Rate
                    allowHalf
                    defaultValue={service?.averageRating}
                    className="text-xs"
                  />{" "}
                  <p
                    dangerouslySetInnerHTML={{
                      __html: `(${Math.floor(Math.random() * 200)})`,
                    }}
                  ></p>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-textPrimary">
              {service?.price}0 ৳
            </h3>
          </div>

          {/* footer */}
          <Divider className="mb-5" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2 text-textPrimary text-sm">
              <BiSolidMapPin />
              <p className="text-xs">{service?.location?.cityName}</p>
              {/* {service?.location?.areaName?.map((area, idx) => (
              <p key={idx} className="text-xs">
                {area}
              </p>
            ))} */}
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ServicesCard;
