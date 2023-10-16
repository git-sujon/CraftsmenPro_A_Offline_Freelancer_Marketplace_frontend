import PublicHeader from "@/components/view/Header/PublicHeader";
import ServicesProvidersSidebar from "@/components/view/Sidebar/ServicesProvidersSidebar";


const ServicesProvidersLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <PublicHeader />
      <ServicesProvidersSidebar>{children}</ServicesProvidersSidebar>
    </>
  );
};

export default ServicesProvidersLayout;
