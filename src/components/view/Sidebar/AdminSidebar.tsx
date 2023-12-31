"use client"

import Sidebar from "@/components/Ui/Sidebar/Sidebar";
import LoadingPage from "@/app/loading";
import { isAdminLoggedIn } from "@/services/auth.services";

import {  useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const AdminSidebar = ({ children }: { children: React.ReactNode }) => {
  const IsLoggedIn = isAdminLoggedIn()
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
    { key: "1", label: "Profile", href: "/admin/profile" },
    { key: "2", label: "Create", href: "/admin/create-admin" },

  ];

  return <Sidebar items={items}>{children}</Sidebar>;
};

export default AdminSidebar;
