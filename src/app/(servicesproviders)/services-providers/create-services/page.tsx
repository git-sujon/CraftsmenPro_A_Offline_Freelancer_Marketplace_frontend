"use client";

import React from "react";
import { Button, Col, Row, message } from "antd";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";

import { useRouter } from "next/navigation";
import LoadingPage from "@/app/loading";

import servicesImage from "../../../../assets/images/cleaning service-amico.png";
import FormSelectFields from "@/components/Forms/FormSelectFields";

import {
  categoriesOptions,
  homeServicesOptions,
} from "@/constants/servicesProviderOptions";
import FormTextareaInput from "@/components/Forms/FormTextareaInput";
import {
  cityOptions,
  divisionOptions,
  employeeRoleOptions,
  genderOptions,
} from "@/constants/common";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormTimePicker from "@/components/Forms/FormTimePicker";
import FormMultiSelectField from "@/components/Forms/FormMultiSelectField";
import FormSelectMultipleDateTime from "@/components/Forms/FormSelectMultipleDateTime";
import { useAddServiceMutation } from "@/redux/api/services";

type FromValues = {
  id: string;
  password: string;
};

const CreateServices: React.FC = () => {
  const [addService] = useAddServiceMutation();

  const onsubmit: SubmitHandler<FromValues> = async (data: any) => {
    console.log("data:", data);

    try {
      const response = await addService({ ...data }).unwrap();
      if (response) {
        message.success("services add successfully");
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <Row className="min-h-screen justify-center items-center max-width pt-10 pb-20">
      {/* <Col>
        <Image
          src={servicesImage}
          width={600}
          height={400}
          alt="services page image"
        />
      </Col> */}
      <Col>
        <h1 className="text-4xl font-bold text-textPrimary mb-6">Services</h1>
        <Form submitHandler={onsubmit}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="mt-3">
              <FormInput
                name="title"
                type="text"
                size="large"
                label="Services Title"
              />
            </Col>

            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="mt-3">
              <FormSelectFields
                name="category"
                label="Category"
                size="large"
                options={categoriesOptions}
                placeholder="Select"
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="mt-3">
              <FormSelectFields
                name="subcategory"
                label="Subcategory"
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
            <Col xs={24} sm={24} md={24} lg={24} xl={24} className="mt-3">
              <p className="text-textPrimary text-lg font-bold mt-3 underline">
                Service Areas:
              </p>
            </Col>

            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="mt-3">
              <FormSelectFields
                name="location.division"
                label="Division"
                size="large"
                options={divisionOptions}
                placeholder="Select"
              />
            </Col>

            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="mt-3">
              <FormSelectFields
                name="location.cityName"
                label="City Name"
                size="large"
                options={cityOptions}
                placeholder="Select"
              />
            </Col>

            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="mt-3">
              <FormInput
                name="location.areaName"
                type="text"
                size="large"
                label="Area Name"
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="mt-3">
              <FormInput name="price" type="text" size="large" label="Price" />
            </Col>

            <Col xs={24} sm={24} md={24} lg={24} xl={24} className="mt-3">
              <p className="text-textPrimary text-lg font-bold mt-3 underline">
                Add Employee Contact Information:
              </p>
            </Col>

            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="mt-3">
              <FormInput
                name="contact.name"
                type="text"
                size="large"
                label="Employee Name"
              />
            </Col>

            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="mt-3">
              <FormInput
                name="contact.email"
                type="email"
                size="large"
                label="Email"
              />
            </Col>

            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="mt-3">
              <FormInput
                name="contact.phone"
                type="text"
                size="large"
                label="Phone"
              />
            </Col>

            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="mt-3">
              <FormSelectFields
                name="contact.role"
                label="Role"
                size="large"
                options={employeeRoleOptions}
                placeholder="Select"
              />
            </Col>

            <Col xs={24} sm={24} md={24} lg={24} xl={24} className="mt-3">
              <FormSelectMultipleDateTime />
            </Col>

            <Col xs={24} sm={24} md={24} lg={24} xl={24} className="mt-3">
              <p className="text-textSecondary   font-semibold mt-1 italic ">
                (How much time you can provide at a time) Ex: 120 minutes
              </p>
            </Col>

            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="mt-3">
              <FormInput
                name="duration"
                type="text"
                size="large"
                label="Total Duration oof Services"
                placeHolder="120"
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

export default CreateServices;
