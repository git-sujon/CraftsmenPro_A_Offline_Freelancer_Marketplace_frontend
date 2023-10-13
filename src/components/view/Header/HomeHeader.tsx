import Navbar from "@/components/Ui/Navbar/Navbar";

const HomeHeader = () => {
    const items = [
        { key: "1", label: "Home", href: "/" },
        { key: "2", label: "Services", href: "/services" },
        { key: "3", label: "Blog", href: "/blog" },
      ];
    return (
        <Navbar items={items} />
    );
};

export default HomeHeader;