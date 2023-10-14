
import Login from "@/components/pages/Login/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'CraftsmenPro | Login',
  description: 'This is the login page',
}


const LoginPage = () => {
  return <Login />;
};

export default LoginPage;
