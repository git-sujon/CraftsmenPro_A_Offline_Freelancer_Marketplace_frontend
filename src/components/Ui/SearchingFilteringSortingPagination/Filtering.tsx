"use client";
import { Divider, List, Space, Typography } from "antd";
import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";
import { Rate } from "antd";
import { ICategory, categories } from "@/constants/browserByCatagories";
const Filtering = () => {
  const [categoryValue, setCategoryValue] = useState(0);
  const [ratingValue, setRatingValue] = useState(5);

  const onFilterChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setCategoryValue(e.target.value);
  };
  const onRatingChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setRatingValue(e.target.value);
  };

  return (
    <div>
      {/* Catagories */}
      <div className="my-10">
        <p className="text-textSecondary text-xl font-bold">Catagories</p>
        <div className="h-44 overflow-auto  py-5 w-60">
          <Radio.Group
            name="catagories"
            onChange={onFilterChange}
            defaultValue={1}
          >
            <Space direction="vertical">
              {categories?.map((category: ICategory) => (
                <Radio key={category.id} value={category.value}>
                  {category.label}
                </Radio>
              ))}
            </Space>
          </Radio.Group>
        </div>
      </div>
      {/* Rating */}
      <div className="my-10">
        <p className="text-textSecondary text-xl font-bold">Rating</p>
        <div className=" mt-5 flex flex-col">
          <Radio.Group
            name="ratings"
            onChange={onRatingChange}
            defaultValue={5}
            className="text"
            size="small"
          >
           <Space direction="vertical">
            {[5, 4, 3, 2, 1].map((rating) => (
              <Radio.Button key={rating} value={rating}>
                <Rate disabled defaultValue={rating} className="px-1" />
              </Radio.Button>
            ))}
          </Space>
          </Radio.Group>
        </div>
      </div>
    </div>
  );
};

export default Filtering;
