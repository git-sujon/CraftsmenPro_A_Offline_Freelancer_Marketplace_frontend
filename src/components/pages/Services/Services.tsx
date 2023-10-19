"use client";
import LoadingPage from "@/app/loading";
import Filtering from "@/components/Ui/SearchingFilteringSortingPagination/Filtering";
import PaginationBar from "@/components/Ui/SearchingFilteringSortingPagination/Pagination";
import SearchBar from "@/components/Ui/SearchingFilteringSortingPagination/SearchBar";
import Sorting from "@/components/Ui/SearchingFilteringSortingPagination/Sorting";
import { useGetServicesQuery } from "@/redux/api/servicesApi";

import { IMeta } from "@/types/common";
import React, { useState } from "react";
const Services = () => {


    const [page, setPage] = useState<number>(1);
    const [size, setSize] = useState<number>(10);
    const [sortBy, setSortBy] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState<string>("");
  


    const query = {
        limit: size,
        page: page,
        sortBy: sortBy,
        sortOrder: sortOrder,
        searchTerm: searchTerm,
      };
      
    //   const { data, isLoading } = useGetServicesQuery(query);

    // if(isLoading){
    //     return <LoadingPage />
    // }



    // const services = data?.services;
    // const meta: IMeta = data?.meta;



  return (
    <div>
      {/* Search  */}
      <div className="bg-orange-100  py-16">
        <SearchBar />
      </div>

      <div className="max-width">
        {/* total count and shorting  */}
        <div className="flex justify-between items-center">
          <div className=" font-bold">Total Services: 22</div>
          <Sorting />
        </div>

        {/* Filtering and Services  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <Filtering />
          <div>Services</div>
        </div>
        {/* Pagination  */}
        <div className="py-20">
          <PaginationBar />
        </div>
      </div>
    </div>
  );
};

export default Services;
