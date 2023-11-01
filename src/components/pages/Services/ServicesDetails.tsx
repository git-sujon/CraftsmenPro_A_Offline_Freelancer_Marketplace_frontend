"use client";

import LoadingPage from "@/app/loading";
import DescriptionParagraph from "@/components/Ui/DescriptionParagraph/DescriptionParagraph";
import ImageCarousel from "@/components/Ui/ImageCarousel/ImageCarousel";
import { useGetServiceQuery } from "@/redux/api/servicesApi";
import {
  Avatar,
  Button,
  Card,
  Divider,
  List,
  Rate,
  Tag,
  Typography,
} from "antd";
import { GiClockwork, GiCrown } from "react-icons/gi";

import {
  BsFillPinMapFill,
  BsBookmarksFill,
  BsHourglassTop,
} from "react-icons/bs";
import { FaScrewdriverWrench, FaMapLocationDot } from "react-icons/fa6";
import { AiFillFolderAdd } from "react-icons/ai";
import { TbCurrencyTaka } from "react-icons/tb";
import FaqWithParagraphTag from "@/components/Ui/FaqWithParagraphTag/FaqWithParagraphTag";
import ServiceCalender from "@/components/Ui/ServiceCalender/ServiceCalender";
import SelectServiceTime from "@/components/Ui/SelectServiceTime/SelectServiceTime";
import ServicesProviderProfileHeader from "@/components/ServicesProvider/ServicesProviderProfileHeader/ServicesProviderProfileHeader";
import ServicesProviderSchedule from "@/components/ServicesProvider/ServicesProviderSchedule/ServicesProviderSchedule";

const ServicesDetails = ({ id }: { id: string }) => {
    const { data:service, isLoading } = useGetServiceQuery(id);


    if (isLoading) {
      return <LoadingPage />;
    }


  const data = service?.features;
  return (
    <div>
      {/* part 1  */}

      <div className="mt-5 grid  grid-cols-6  gap-10">
        <div className="space-y-2  col-span-6 lg:col-span-4">
          <h1 className="text-textPrimary text-2xl lg:text-4xl font-bold">
            {service.title}
          </h1>

          {/* avatar and ratings */}

          <div className="flex items-center justify-between flex-wrap gap-3">
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
                  />
                  <p
                    dangerouslySetInnerHTML={{
                      __html: `(${Math.floor(Math.random() * 200)} Reviews)`,
                    }}
                  ></p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-textSecondary font-semibold">
              <GiClockwork className="text-2xl text-primary" />2 contracts in
              progress
            </div>

            <div>
              {service?.isPopular ? (
                <div className="flex items-center gap-x-1 text-textSecondary  font-bold">
                  <GiCrown className="text-amber-500 w-10 h-10" /> Popular
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

          {/* Images */}

          <ImageCarousel images={service?.servicesImages} />

          {/* location */}

          <div className="flex flex-wrap items-center justify-between gap-x-5 my-5">
            {/* categroy */}
            <div className="flex items-center  gap-x-2 mt-2">
              <AiFillFolderAdd className="text-2xl text-primary" />
              <p>{service?.category}</p>
            </div>
            <div className="flex items-center  gap-x-2 mt-2">
              <BsBookmarksFill className="text-2xl text-primary" />
              <p>{service?.subcategory}</p>
            </div>

            {/* city */}
            <div className="flex items-center  gap-x-2 mt-2">
              <BsFillPinMapFill className="text-2xl text-primary" />
              <p>{service?.location?.cityName}</p>
            </div>
            {/* Area */}
            <div className="flex items-center  gap-x-2 mt-2">
              <FaMapLocationDot className="text-2xl text-primary" />
              <p>{service?.location?.areaName?.join(", ")}</p>
            </div>
          </div>
        </div>
        <div className="col-span-6 lg:col-span-2 ">
          <div className="">
            {/* duration and price  */}
            <Card className="bg-green-50">
              <div className="flex items-center justify-between ">
                {/* duration */}
                <div className="flex items-center gap-x-1">
                  <BsHourglassTop className="w-8 h-8 text-primary" />
                  <p className="text-xl font-bold text-textPrimary">
                    {service.duration / 60}
                    <span className="text-sm font-bold text-textPrimary">
                      {" Hours"}
                    </span>
                  </p>
                </div>
                {/* Price */}
                <div className="flex items-center gap-x-1">
                  <p className="text-2xl font-extrabold text-textPrimary">
                    {service?.price}0
                  </p>
                  <TbCurrencyTaka className="w-8 h-8 text-primary" />
                </div>
              </div>
            </Card>

            {/* Schedule  */}

            <Card size="small" className="my-5">
              <Divider
                orientation="left"
                className="text-textPrimary text-xl font-bold"
              >
                Schedule
              </Divider>
              <ServiceCalender bookedTimeSlots={service?.availableTimeSlots} />
              <SelectServiceTime
                bookedTimeSlots={service?.availableTimeSlots}
              />
            </Card>
            {/* button  */}
            <Card className="" size="small">
              <Button type="primary" className="w-full block">
                Grab Your Service
              </Button>
            </Card>
          </div>
        </div>
      </div>

      {/* part 2  */}

      <div className="mt-5 grid  grid-cols-6  gap-10">
        <div className="space-y-2  col-span-6 lg:col-span-4">
          {/* ........................ */}
          {/* services details */}
          <div className="space-y-2 pt-5">
            <h2 className="text-textPrimary text-2xl font-bold">
              Service Details
            </h2>
            <div>
              <DescriptionParagraph description={service?.description} />
            </div>
          </div>

          <h3 className="text-textPrimary text-2xl font-bold pt-10">
            Features
          </h3>
          <List
            className=""
            size="small"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <Typography.Text >
                  <FaScrewdriverWrench className="mx-2"  />
                </Typography.Text>
                {item}
              </List.Item>
            )}
          ></List>

          {/* ........................ */}
        </div>
        <div className="col-span-6 lg:col-span-2 ">
          <Card className="bg-blue-50" size="small">
            <h2 className="text-textPrimary text-xl font-bold">
              About Service Provider
            </h2>

            <div className="mt-10">
              <ServicesProviderProfileHeader
                servicesProvider={service?.servicesProvider}
              />
            </div>
          </Card>

          <Card className="bg-blue-50 mt-5" size="small">
            

            <div className="">
              <ServicesProviderSchedule businessHours={service?.servicesProvider?.businessHours} />
            </div>
          </Card>




        </div>
      </div>

      <div className="pt-10 ">
        <h3 className="text-textPrimary text-2xl font-bold">FAQ</h3>
        <FaqWithParagraphTag faqs={service?.faqs} />
      </div>
    </div>
  );
};

export default ServicesDetails;
