"use client";

import React from "react";
import DashboardCover from "../../../../components/pages/Profile/DashboardCover";
import DashboardUserProfile from "../../../../components/pages/Profile/DashboardUserProfile";
import { useGetMyProfileQuery } from "@/redux/api/userApi";
import LoadingPage from "@/app/loading";

const UserProfile = () => {
  // const {data: user, isLoading} = useGetMyProfileQuery(undefined)

  // if(isLoading){
  //   return <LoadingPage />
  // }

  // console.log("user:", user)

  const user = {
    location: {
      city: "brahmanbaria",
      division: "rangpur",
    },
    _id: "652a9fba918e186d1fe22ca2",
    name: {
      firstName: "Moniruzzaman",
      lastName: "Sujon",
      _id: "652a9fba918e186d1fe22ca3",
      id: "652a9fba918e186d1fe22ca3",
    },
    email: "git.sujon@gmail.com",
    phoneNumber: "+8801623985191",
    gender: "male",
    role: "user",
    isServiceProvider: false,
    servicesBooked: [],
    reviews: [],
    createdAt: "2023-10-14T14:03:38.890Z",
    updatedAt: "2023-10-14T14:03:38.890Z",
    __v: 0,
    id: "652a9fba918e186d1fe22ca2",
  };

  return (
    <div>
      <DashboardCover />
      <div className="max-width mt-[-14vh]">
        <DashboardUserProfile user={user} />
      </div>
    </div>
  );
};

export default UserProfile;
