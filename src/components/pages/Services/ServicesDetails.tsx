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
  //   const { data, isLoading, isSuccess, isError } = useGetServiceQuery(id);

  //   if (isLoading) {
  //     return <LoadingPage />;
  //   }

  const service = {
    _id: "6532af8fd9ffd784f438d114",
    title: "Electrical Repairs Service",
    description:
      "<p>Our electrical repair service is here to solve all your electrical issues and ensure a safe and functioning electrical system in your home or office. Our experienced electricians are experts in diagnosing and fixing a wide range of electrical problems.</p><p>Whether you're dealing with faulty wiring, power outages, or electrical appliance issues, we've got you covered. We use high-quality materials and follow best practices to deliver lasting solutions.</p><p>Don't compromise on the safety and functionality of your electrical systems. Contact us today for reliable and professional electrical repairs that ensure peace of mind.</p>",
    category: "Maintenance and Repairs",
    subcategory: "Electrical Repairs",
    price: 80,
    serviceBanner:
      "https://www.aperfectgoldman.com/wp-content/uploads/2019/05/repair-services.jpg",
    servicesImages: [
      "https://www.expertservicesutah.com/wp-content/uploads/2021/04/HomePage-HomeService-Electrical@2x.jpg",
      "https://kowallelectric.com/wp-content/uploads/bb-plugin/cache/Electrician-Fixing-Light-Switch-landscape-d5796387de5635d9bdaa632410b6df7e-jha5v0g2mw1l.jpg",
      "https://production-next-images-cdn.thumbtack.com/i/302057006217199795/width/640.jpeg",
    ],
    location: {
      areaName: ["Gulshan", "Banani"],
      cityName: "Dhaka",
      division: "Dhaka",
      _id: "6532af8fd9ffd784f438d115",
    },
    contact: {
      name: "Sarah Johnson",
      email: "sarah@example.com",
      phone: "123-456-7890",
      role: "Electrical Specialist",
      _id: "6532af8fd9ffd784f438d116",
    },
    averageRating: 4.8,
    availableTimeSlots: [
      {
        date: "2023-10-28T00:00:00.000Z",
        time: "10:00 AM",
        _id: "6532af8fd9ffd784f438d117",
      },
      {
        date: "2023-10-29T00:00:00.000Z",
        time: "02:00 PM",
        _id: "6532af8fd9ffd784f438d118",
      },
    ],
    bookedTimeSlots: [],
    duration: 120,
    servicesProvider: {
      businessHours: {
        sunday: "9:00 AM - 5:00 PM",
        monday: "9:00 AM - 5:00 PM",
        tuesday: "9:00 AM - 5:00 PM",
        wednesday: "9:00 AM - 5:00 PM",
        thursday: "9:00 AM - 5:00 PM",
        friday: "9:00 AM - 5:00 PM",
        saturday: "9:00 AM - 2:00 PM",
      },
      _id: "6532ad9fd9ffd784f438d10d",
      user: "6532a562d9ffd784f438d106",
      providerName: "Mega Repairs and Services",
      serviceCategory: "Maintenance and Repairs",
      serviceTypes: [
        "plumbing",
        "electrical-repairs",
        "appliance-repair",
        "painting-services",
      ],
      description:
        "<p>Mega Repairs and Services is your trusted partner for all your maintenance and repair needs. With a commitment to excellence, we offer a wide range of services designed to keep your home in top condition.</p><p>Our team of experts specializes in plumbing, electrical repairs, appliance repair, and painting services. We use the latest techniques and high-quality materials to ensure the best results for our customers.</p><p>Whether you have a leaky faucet, electrical issues, a malfunctioning appliance, or need a fresh coat of paint, we've got you covered. We offer competitive pricing and convenient scheduling to meet your repair and maintenance needs.</p><p>Choose Mega Repairs and Services for a reliable and professional experience. Your satisfaction is our priority, and we look forward to serving you.</p>",
      serviceAreas: [
        {
          areaName: ["Gulshan", "Banani"],
          cityName: "Dhaka",
          division: "Dhaka",
          _id: "6532ada0d9ffd784f438d10e",
        },
      ],
      servicesOffered: [
        "Plumbing Services: We handle all your plumbing needs, from fixing leaks to installing fixtures.",
        "Electrical Repairs: Our experts can diagnose and repair electrical issues to keep your home safe and functional.",
        "Appliance Repair: We specialize in fixing appliances to ensure they run smoothly.",
        "Painting Services: Give your home a fresh look with our professional painting services.",
      ],
      isVerified: true,
      isAvailable: true,
      providerProfileImage:
        "https://upload.wikimedia.org/wikipedia/commons/c/c0/Logotipo_de_Mega_%282015-2020%29.png",
      experience: 5,
      averageRating: 4.7,
      totalRatings: 85,
      companyProfileImages: [
        {
          imageName: "Employee",
          imageUrl:
            "https://www.pioneerminisplit.com/cdn/shop/articles/VpDdG2FNQ9xRE7iIlKBarBbLLHnYUz341630085147.jpg?v=1631021244",
          _id: "6532ada0d9ffd784f438d10f",
        },
        {
          imageName: "Repairing",
          imageUrl:
            "https://shelterforce.org/wp-content/uploads/2022/05/TDA-Lunce-home-1-scaled.jpg",
          _id: "6532ada0d9ffd784f438d110",
        },
        {
          imageName: "Electrical Repairs",
          imageUrl:
            "https://3.imimg.com/data3/WR/EO/MY-16023780/electrical-electronics-installation-maintenance-500x500.jpg",
          _id: "6532ada0d9ffd784f438d111",
        },
      ],
      insurance: true,
      licenses: [
        "Licensed Plumber",
        "Certified Electrician",
        "Appliance Repair Specialist",
        "Professional Painter",
      ],
      certifications: [
        "https://marketplace.canva.com/EAFIEvneNCM/1/0/1600w/canva-golden-elegant-certificate-of-appreciation-0bN-aLORS9U.jpg",
        "https://templatelab.com/wp-content/uploads/2022/06/Scholarship-Certificate-Template-1-scaled.jpg",
      ],
      serviceTags: [
        "Professional",
        "Reliable",
        "Experienced",
        "Quality Service",
        "Timely Completion",
      ],
      __v: 0,
    },
    searchEngineOptimizationTags: [
      "Electrical Repairs",
      "Professional Electricians",
      "Wiring Repair",
    ],
    features: [
      "Expert Electricians",
      "Wiring and Circuit Repair",
      "Emergency Electrical Services",
      "Transparent Pricing",
      "Quality Workmanship",
      "Satisfaction Guarantee",
    ],
    faqs: [
      {
        key: "1",
        label: "What types of electrical issues do you address?",
        children:
          "<p>We address various electrical issues, including wiring problems, power outages, and appliance repair. Our team is equipped to handle a wide range of electrical problems.</p>",
        _id: "6532af8fd9ffd784f438d119",
      },
      {
        key: "2",
        label: "Do you provide emergency electrical repair services?",
        children:
          "<p>Yes, we offer emergency electrical repair services to address urgent issues. Contact us, and our team will respond promptly to ensure your electrical systems are safe and functional.</p>",
        _id: "6532af8fd9ffd784f438d11a",
      },
      {
        key: "3",
        label:
          "Is your electrical repair service available in all areas of Dhaka?",
        children:
          "<p>We provide electrical repair services in various areas, including [list of service areas]. You can check our service coverage on our website or contact us for specific location inquiries.</p>",
        _id: "6532af8fd9ffd784f438d11b",
      },
    ],
    isPopular: true,
    __v: 0,
  };
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
                <Typography.Text>
                  <FaScrewdriverWrench />
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
