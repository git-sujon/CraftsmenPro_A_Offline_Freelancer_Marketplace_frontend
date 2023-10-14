import PublicHeader from "@/components/view/Header/PublicHeader";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PublicHeader />
      {children}
    </>
  );
};

export default AuthLayout;
