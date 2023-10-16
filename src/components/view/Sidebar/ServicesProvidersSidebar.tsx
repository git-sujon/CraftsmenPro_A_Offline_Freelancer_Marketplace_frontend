"use client";

import Sidebar from "@/components/Ui/Sidebar/Sidebar";
import LoadingPage from "@/app/loading";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getUserInfo, isServiceProviderLoggedIn } from "@/services/auth.services";

import { IJwtDecoded } from "@/types/user";
import { useGetMyProfileQuery } from "@/redux/api/userApi";

import { tagTypes } from "@/redux/tagTypes";
import { useAddServicesProviderMutation } from "@/redux/api/servicesProviderApi";
import { message } from "antd";

const ServicesProvidersSidebar = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data: userProfileData, isLoading: userProfileDataLoading } =
    useGetMyProfileQuery(undefined);
  const user: IJwtDecoded = getUserInfo() as IJwtDecoded;
  const router = useRouter();
  const IsLoggedIn = isServiceProviderLoggedIn();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (userProfileDataLoading) {
      // If user profile data is still loading, you can handle it here, but don't return JSX.
      return;
    }
    if (
      !IsLoggedIn ||
      !(userProfileData?.email === user?.email) ||
      !(userProfileData?.role === user?.role)
    ) {
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
    userProfileData?.role,
    user?.role,
  ]);

  if (!isLoading) {
    return <LoadingPage />;
  }

  if (
    userProfileData &&
    !(userProfileData?.role === tagTypes?.serviceProvider)
  ) {
    message.error("You're Not a Services Provider");
  }

  const items = [
    { key: "1", label: "Profile", href: "/services-providers/profile" },
    { key: "2", label: "Create Services", href: "/services-providers/create-services" },
    { key: "3", label: "My Services", href: "/services-providers/my-services" },
  ];

  return <Sidebar items={items}>{children}</Sidebar>;
};

export default ServicesProvidersSidebar;
