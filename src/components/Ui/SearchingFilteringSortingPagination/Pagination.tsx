import React, { useState } from "react";
import type { PaginationProps } from "antd";
import { Pagination } from "antd";
import { FaHandPointLeft, FaHandPointRight } from "react-icons/fa";

const PaginationBar: React.FC = () => {
  const [current, setCurrent] = useState(3);

  console.log("current:", current);

  const onShowSizeChange: PaginationProps["onShowSizeChange"] = (
    current,
    pageSize
  ) => {
    console.log(pageSize);
  };

  const onChange: PaginationProps["onChange"] = (page) => {
    console.log(page);
    setCurrent(page);
  };

  const itemRender: PaginationProps["itemRender"] = (
    _,
    type,
    originalElement
  ) => {
    if (type === "prev") {
      return (
        <a>
          <FaHandPointLeft className="text-primary text-xl" />
        </a>
      );
    }
    if (type === "next") {
      return (
        <a>
          <FaHandPointRight className="text-primary text-xl"/>
        </a>
      );
    }
    return originalElement;
  };
  return (
    <Pagination
      className=""
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={1}
      total={100}
      onChange={onChange}
      itemRender={itemRender}
    />
  );
};
export default PaginationBar;
