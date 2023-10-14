import React from 'react';
import { useGetMyProfileQuery } from "@/redux/api/userApi";
const UserProfile = () => {

      // const {data} = useGetMyProfileQuery(undefined)

  // console.log("data:", data)

    return (
        <div>
           {/* <DashboardCover /> */}
        <div className="max-width mt-[-14vh]">
          {/* <DashboardUserProfile user={user} /> */}
        </div>
        </div>
    );
};

export default UserProfile;