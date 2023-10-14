import PublicHeader from "@/components/view/Header/PublicHeader";
import UserSidebar from "@/components/view/Sidebar/UserSidebar";


const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PublicHeader />
      <UserSidebar>{children}</UserSidebar>
    </>
  );
};

export default UserLayout;
