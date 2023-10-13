import Navbar from "@/components/Ui/Navbar/Navbar";

const AdminHeader = () => {
    const items = [
        { key: "1", label: "Home", href: "/" },
        { key: "2", label: "Create", href: "/admin/create-admin" },
        // { key: "3", label: "Blog", href: "/blog" },
      ];
    return (
        <Navbar items={items} />
    );
};

export default AdminHeader;