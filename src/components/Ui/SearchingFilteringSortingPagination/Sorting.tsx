"use client"

import React from "react";
import { Select, Space } from "antd";
import { sortingOptions } from "@/constants/filteringAndSortingServices";
const Sorting = () => {
  const handleChange = (value: string) => {

    const output = value.split("|")
    const sortBy = output[0];

   

    const sortOrder = output[1];

    



  };
  return (
    <div>
      <div className=" font-bold text-textSecondary">
        Sort By:{" "}
        <Select
        className="w-44"
          defaultValue="Show all"
          onChange={handleChange}
          options={sortingOptions}
        />
      </div>
    </div>
  );
};

export default Sorting;
