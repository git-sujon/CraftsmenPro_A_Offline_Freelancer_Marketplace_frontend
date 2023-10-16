"use client";

import React from "react";
import { Button, Col, Row, message } from "antd";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";

import { useRouter } from "next/navigation";
import LoadingPage from "@/app/loading";

import servicesProviderImage from "../../../assets/images/Electrician-pana.png";
import FormSelectFields from "@/components/Forms/FormSelectFields";

import { getUserInfo, isUserLoggedIn } from "@/services/auth.services";
import { useEffect, useState } from "react";
import {
  categoriesOptions,
  homeServicesOptions,
} from "@/constants/servicesProviderOptions";
import FormTextareaInput from "@/components/Forms/FormTextareaInput";
import { IJwtDecoded } from "@/types/user";
import { useGetMyProfileQuery } from "@/redux/api/userApi";

import { tagTypes } from "@/redux/tagTypes";
import { useAddServicesProviderMutation } from "@/redux/api/servicesProviderApi";

type FromValues = {
  id: string;
  password: string;
};

const ServiceProviderRegistration: React.FC = () => {
  const router = useRouter();
  const IsLoggedIn = isUserLoggedIn();
  const [isLoading, setIsLoading] = useState(false);
  const { data: userProfileData, isLoading: userProfileDataLoading } =
    useGetMyProfileQuery(undefined);
    const [addServicesProvider] = useAddServicesProviderMutation()
  const user: IJwtDecoded = getUserInfo() as IJwtDecoded;



  useEffect(() => {
    if (userProfileDataLoading) {
      // If user profile data is still loading, you can handle it here, but don't return JSX.
      return;
    }
    if (!IsLoggedIn || !(userProfileData?.email === user?.email)) {
      message.error("Please Login First");
      router.push("/auth/login");
    } else {
      setIsLoading(true);
    }
  }, [
    router,
    IsLoggedIn,
    isLoading,
    user?.email,
    userProfileData?.email,
    userProfileDataLoading,
  ]);

  if (!isLoading) {
    return <LoadingPage />;
  }

  if ( userProfileData && userProfileData?.role === tagTypes?.serviceProvider){
   message.error("You already a Services Provider")
  }

  const onsubmit: SubmitHandler<FromValues> = async (data: any) => {
    try {
      const userData = {
        user: userProfileData?._id,
        ...data,
      };

      console.log("userData:", userData)


    
        const response = await addServicesProvider({ ...userData }).unwrap();
        console.log("response:", response);
        // message.success("Now you are a services provider");
        // message.success("Please Login Again");
    
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <Row className="min-h-screen justify-center items-center max-width py-20">
      <Col>
        <Image
          src={servicesProviderImage}
          width={600}
          height={300}
          alt="services provider page image"
        />
      </Col>
      <Col>
        <h1 className="text-4xl font-bold text-textPrimary mb-6">
          Services Provider
        </h1>
        <Form submitHandler={onsubmit}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="mt-3">
              <FormInput
                name="companyName"
                type="text"
                size="large"
                label="Company Name"
              />
            </Col>

            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="mt-3">
              <FormSelectFields
                name="serviceCategory"
                label="Service Category"
                size="large"
                options={categoriesOptions}
                placeholder="Select"
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="mt-3">
              <FormSelectFields
                name="serviceType"
                label="Service Type"
                size="large"
                options={homeServicesOptions}
                placeholder="Select"
              />
            </Col>

            <Col xs={24} sm={24} md={24} lg={24} xl={24} className="mt-3">
              <FormTextareaInput
                name="description"
                label="Description"
                rows={8}
              />
            </Col>

            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="mt-3">
              <FormSelectFields
                name="serviceAreas.division"
                label="Division"
                size="large"
                options={homeServicesOptions}
                placeholder="Select"
              />
            </Col>

            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="mt-3">
              <FormSelectFields
                name="serviceAreas.cityName"
                label="City Name"
                size="large"
                options={homeServicesOptions}
                placeholder="Select"
              />
            </Col>

            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="mt-3">
              <FormInput
                name="serviceAreas.areaName"
                type="text"
                size="large"
                label="Area Name"
              />
            </Col>

            <Col xs={24} sm={24} md={24} lg={24} xl={24} className="mt-3">
              <FormTextareaInput
                name="servicesOffered"
                label="Services Offered"
                rows={4}
              />
            </Col>
          </Row>
          <Button type="primary" htmlType="submit" className="mt-3">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default ServiceProviderRegistration;
