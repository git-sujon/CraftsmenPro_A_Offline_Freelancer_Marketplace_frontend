"use client";
import SectionSubPera from "@/components/Ui/Typography/SectionSubPera";
import SectionTitle from "@/components/Ui/Typography/SectionTitle";
import {useState} from 'react'
import { IBlogs, blogs } from "@/constants/fakeBlogs";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Row } from "antd";
import Link from "next/link";
import BlogCard from "../../Blogs/BlogCard";
import { Swiper, SwiperSlide }
 from "swiper/react";
// import {
//     Autoplay,
//     Pagination,
//     Navigation,
//     EffectCoverflow,
//     Mousewheel,
//   } from "swiper";
import { Thumbs } from 'swiper/modules';

import 'swiper/css';
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const LatestBlogs = () => {


  return (
    <div className="max-width py-20">
      {/* section header  */}
      <div className="mb-10 lg:flex items-center justify-between">
        <div>
          <SectionTitle text="Our Latest Blogs​" />
          <SectionSubPera text="Stay Informed with Our Latest Articles and Updates" />
        </div>
        <div className="ml-[-16px] lg:ml-0">
          <Link href={`/blogs`}>
            <Button
              type="text"
              className="text-primary text-sm md:text-base font-semibold hover:text-textSecondary "
            >
              Find More <ArrowRightOutlined />{" "}
            </Button>
          </Link>
        </div>
      </div>
      {/* blogs  */}

      {/* <Row gutter={[16, 16]}>
        {blogs?.map((blog: IBlogs) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </Row> */}

      <Swiper
        spaceBetween={50}
     
        breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
       
          navigation={true}
          modules={[Autoplay, Navigation]}
      >
        {blogs?.map((blog: IBlogs) => (
          <SwiperSlide key={blog._id}>
            <BlogCard blog={blog} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LatestBlogs;
