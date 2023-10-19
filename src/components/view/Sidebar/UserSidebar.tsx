"use client"

import Sidebar from "@/components/Ui/Sidebar/Sidebar";
import LoadingPage from "@/app/loading";
import { isUserLoggedIn } from "@/services/auth.services";

import {  useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const UserSidebar = ({ children }: { children: React.ReactNode }) => {
  const IsLoggedIn = isUserLoggedIn()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(()=>{
    if(!IsLoggedIn){
      return router.push("/auth/login")
    }
    setIsLoading(true)
  }, [router, IsLoggedIn, isLoading])
  
  if(!isLoading){
    return <LoadingPage />
  }

  const items = [
    { key: "1", label: "Profile", href: "/user/profile" },
    { key: "2", label: "My Booking", href: "/user/my-booking" },

  ];

  return <Sidebar items={items}>{children}</Sidebar>;
};

export default UserSidebar;
