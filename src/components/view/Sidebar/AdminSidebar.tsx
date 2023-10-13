import Sidebar from "@/components/Ui/Sidebar/Sidebar";

const AdminSidebar = ({ children }: { children: React.ReactNode }) => {
  const items = [
    { key: "1", label: "Profile", href: "/admin/profile" },
    { key: "2", label: "Create", href: "/admin/create-admin" },

  ];

  return <Sidebar items={items}>{children}</Sidebar>;
};

export default AdminSidebar;
