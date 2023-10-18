import React from "react";
import { Breadcrumb } from "antd";
import Link from "next/link";
import { HomeOutlined } from "@ant-design/icons";
const TopBreadCrump = ({
  items,
}: {
  items: {
    label: string;
    link: string;
  }[];
}) => {
  const breadcrumbItems = [
    {
      title: (
        <Link href={"/"} className="text-textSecondary font-bold">
          <HomeOutlined  /> Home
        </Link>
      ),
    },
    ...items?.map((item) => {
      return {
        title: item.link ? (
          <Link href={item.link} className="text-textSecondary font-semibold " > {item.label} </Link>
        ) : (
          <span>{item.label}</span>
        ),
      };
    }),
  ];

  return <Breadcrumb items={breadcrumbItems}></Breadcrumb>;
};

export default TopBreadCrump;
