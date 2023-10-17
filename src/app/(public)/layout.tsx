import PublicHeader from "@/components/view/Header/PublicHeader";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PublicHeader />
      {children}
      
    </>
  );
};

export default PublicLayout;
