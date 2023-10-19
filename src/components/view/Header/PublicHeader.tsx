import Navbar from "@/components/Ui/Navbar/Navbar";
import { Button } from "antd";

const PublicHeader = () => {
  const items = [
    { key: "1", label: "Home", href: "/" },
    { key: "2", label: "Services", href: "/services" },
    { key: "3", label: "Blogs", href: "/blogs" },
  ];
  return <Navbar items={items} />;
};

export default PublicHeader;
