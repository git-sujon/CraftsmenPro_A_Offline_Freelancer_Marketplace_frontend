"use client";
import React, { useState } from "react";
import { AudioOutlined, ReloadOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import Search, { SearchProps } from "antd/es/input/Search";
import { BiSearch } from "react-icons/bi";

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#00d084",
      fontWeight: "bold",
    }}
  />
);

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");


  const audioIcon = true;



  const resetFilter = () => {
    setSearchTerm("");
  };

  return (
    <div className="px-10">
      <div className="max-w-3xl mx-auto border-2 border-slate-700 rounded-full bg-white px-8">
        <Form
         className="flex  items-center py-3"
         //@ts-ignore
            onSubmitCapture={(e)=> setSearchTerm(e.target.search.value)}
         >
            
          <Input
            allowClear
            placeholder="search here..."
            size="large"
            name="search"
            suffix={audioIcon ? suffix : null}
            prefix={<BiSearch className="text-primary text-xl" />}
            // className=" border-t-0 border-b border-r-0 border-l-0 rounded-none  outline-none "
            className=" border-none  outline-none "
          />

            <Button className="rounded-full " type="primary" htmlType="submit" size="large">
              Search
            </Button>

        </Form>
      </div>
    </div>
  );
};

export default SearchBar;
