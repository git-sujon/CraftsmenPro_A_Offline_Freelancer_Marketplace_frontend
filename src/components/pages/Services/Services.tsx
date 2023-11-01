"use client";
import LoadingPage from "@/app/loading";
import Filtering from "@/components/Ui/SearchingFilteringSortingPagination/Filtering";
import PaginationBar from "@/components/Ui/SearchingFilteringSortingPagination/Pagination";
import SearchBar from "@/components/Ui/SearchingFilteringSortingPagination/SearchBar";
import Sorting from "@/components/Ui/SearchingFilteringSortingPagination/Sorting";
import { useGetServicesQuery } from "@/redux/api/servicesApi";

import { IMeta } from "@/types/common";
import React, { useState } from "react";
import ServicesCard from "./ServicesCard";

import { Col, Row } from "antd";
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

    const { data, isLoading } = useGetServicesQuery(query);

  if(isLoading){
      return <LoadingPage />
  }

  const services = data?.services;



  const meta: IMeta = data?.meta;




  return (
    <div>
      {/* Search  */}
      <div className="bg-orange-100  py-16">
        <SearchBar />
      </div>

      <div className="max-width">
        {/* Filtering and Services  */}
        <Row gutter={[16, 16]} className="mt-6">
          {/* Filtering */}
          <Col xs={24} sm={24} md={24} lg={6} xl={6}>
            <Filtering />
          </Col>
          {/*  Services  */}
          <Col xs={24} sm={24} md={24} lg={18} xl={18}>
            {/* total count and shorting  */}
            <Col span={24} className="flex justify-between items-center mb-6">
              <p className="text-semibold text-textSecondary">Total Services: {meta?.total}</p>
              <Sorting />
            </Col>

            <Row gutter={[16, 16]}>
              {services?.map((service:any) => (
                <Col xs={24} sm={24} md={12} lg={8} xl={8} key={service._id}>
                  <ServicesCard service={service} />
                </Col>
              ))}
            </Row>
            {/* Pagination  */}
            <Col className="mt-16 max-w-3xl mx-auto">
              <PaginationBar />
            </Col>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Services;
