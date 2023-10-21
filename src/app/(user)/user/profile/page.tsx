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
  "location": {
      "city": "dhaka",
      "division": "dhaka"
  },
  "_id": "6532a562d9ffd784f438d106",
  "name": {
      "firstName": "Moniruzzaman",
      "lastName": "Sujon",
      "_id": "6532a562d9ffd784f438d107",
      "id": "6532a562d9ffd784f438d107"
  },
  "email": "git.sujon@gmail.com",
  "phoneNumber": "+8801623985191",
  "gender": "male",
  "role": "user",
  "isServiceProvider": false,
  "isOnline": true,
  "isBlocked": false,
  "servicesBooked": [],
  "reviews": [],
  "createdAt": "2023-10-20T16:05:54.428Z",
  "updatedAt": "2023-10-20T16:05:54.428Z",
  "__v": 0,
  "id": "6532a562d9ffd784f438d106"
}
  console.log("user:", user)

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
