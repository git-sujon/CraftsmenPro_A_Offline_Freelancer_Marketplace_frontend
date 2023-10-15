"use client";

import ProfilePhoto from "./ProfilePhoto";

import profic from "../../../assets/images/User/profilePhoto.png";
import { FaLocationArrow } from "react-icons/fa";

const DashboardUserProfile = ({ user }) => {
  return (
    <div className="bg-green-50 py-5 border border-slate-200 rounded-xl">
      <div className="px-[10%] 2xl:px-10 mx-auto">
        {/* info side  */}
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold  ">
            {user?.name?.firstName}
          </h1>
          <p className="text-sm font-semibold italic">
            <span className=" px-1 py-0.5 bg-slate-50 bg-opacity-10">
              {" "}
              {user?.email}
            </span>
          </p>
          <h2 className="text-xl md:text-2xl  font-bold ">
            <span className=" py-1 px-2 bg-slate-100">{user?.role}</span>
          </h2>

          <div className="lg:flex  item-center justify-between pt-5">
            <div className="flex items-center gap-x-5">
              <ProfilePhoto image={user?.profileImage || profic} />

              <div className="italic flex items-center gap-x-5">
                <div>
                  <h5 className="font-lg font-semibold ">Location</h5>
                  <div className="flex items-center gap-x-2 font-bold">
                    <FaLocationArrow />
                    <p className="capitalize">
                      {user?.location?.city}, {user?.location?.division}{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardUserProfile;
