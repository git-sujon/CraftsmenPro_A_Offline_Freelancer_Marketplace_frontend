"use client";

import React from "react";
import { Button, Col, Row, message } from "antd";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";

import { useRouter } from "next/navigation";
import LoadingPage from "@/app/loading";

import signUpImage from "../../../assets/images/signup.png";
import FormSelectFields from "@/components/Forms/FormSelectFields";
import { cityOptions, divisionOptions, genderOptions } from "@/constants/common";

type FromValues = {
  id: string;
  password: string;
};

const SignUp: React.FC = () => {
  const router = useRouter();

  const onsubmit: SubmitHandler<FromValues> = async (data: any) => {
    console.log("data:", data);

    try {
      // const response = await userLogin({ ...data }).unwrap();
      // if (isLoading) {
      //   return <LoadingPage />;
      // }
      // if (response?.accessToken) {
      //   router.push("/profile");
      //   message.success("Welcome Back")
      // }
      // storeUserInfo({ accessToken: response?.accessToken });
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <Row className="min-h-screen justify-center items-center max-width">
      <Col sm={12} md={12} lg={10}>
       <h1 className="text-4xl font-bold text-textPrimary mb-6">Sign Up</h1>
        <Form submitHandler={onsubmit}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <FormInput
                name="name.firstName"
                type="text"
                size="large"
                label="First Name"
              />
            </Col>

            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <FormInput
                name="name.lastName"
                type="text"
                size="large"
                label="last Name"
              />
            </Col>

            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <FormInput name="email" type="text" size="large" label="Email" />
            </Col>

            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <FormInput
                name="password"
                type="password"
                size="large"
                label="Password"
              />
            </Col>

            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <FormInput
                name="phoneNumber"
                type="text"
                size="large"
                label="Phone Number"
              />
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <FormSelectFields
                name="gender"
                label="Gender"
                size="large"
                options={genderOptions}
                placeholder="Select"
              />
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <FormSelectFields
                name="location.division"
                label="Division"
                size="large"
                options={divisionOptions}
                placeholder="Select"
              />
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <FormSelectFields
                name="location.city"
                label="City"
                size="large"
                options={cityOptions}
                placeholder="Select"
              />
            </Col>
          </Row>
          <Button type="primary" htmlType="submit" className="mt-5">
            Login
          </Button>
        </Form>
      </Col>
      <Col sm={12} md={12} lg={10}>
        <Image src={signUpImage} width={500} height={500} alt="signup image" />
      </Col>
    </Row>
  );
};

export default SignUp;
