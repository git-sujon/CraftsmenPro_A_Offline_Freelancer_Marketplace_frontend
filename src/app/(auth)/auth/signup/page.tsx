import SignUp from "@/components/pages/SignUp/SignUp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'CraftsmenPro | Login',
  description: 'This is the login page',
}

const SignUpPage = () => {
    return <SignUp /> 
};

export default SignUpPage;