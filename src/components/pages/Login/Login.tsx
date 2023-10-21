"use client";

import React from "react";
import { Button, Col, Row, message } from "antd";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";

import loginImage from "../../../assets/images/login.png";
import { useRouter } from "next/navigation";
import LoadingPage from "@/app/loading";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.services";

type FromValues = {
  id: string;
  password: string;
};

const Login: React.FC = () => {
  const router = useRouter();
  const [userLogin, { isLoading }] = useUserLoginMutation();

  const onsubmit: SubmitHandler<FromValues> = async (data: any) => {
    try {
      const response = await userLogin({ ...data }).unwrap();

      if (isLoading) {
        return <LoadingPage />;
      }
      if (response?.accessToken) {
        storeUserInfo({ accessToken: response?.accessToken });
        router.push("/");
        message.success("Welcome Back");
      }
      else{
        message.error("incorrect email or password");
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <Row className="min-h-screen justify-center items-center max-width">
      <Col sm={12} md={12} lg={10}>
        <Image
          src={loginImage}
          width={500}
          height={500}
          alt="login page image"
        />
      </Col>
      <Col sm={12} md={12} lg={10}>
        <div
          style={{
            margin: "15px 0",
          }}
        >
          <h1 className="text-4xl font-bold text-textPrimary mb-6">Login</h1>
          <div className="text-textSecondary">
            {"Doesn't have an account?"}
            <Button type="primary" className="ml-2" href="/auth/signup">
              Sign up
            </Button>
          </div>
          <Form submitHandler={onsubmit}>
            <div>
              <FormInput name="email" type="email" size="large" label="Email" />
            </div>
            <div
              style={{
                margin: "15px 0",
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                label="Password"
              />
            </div>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
