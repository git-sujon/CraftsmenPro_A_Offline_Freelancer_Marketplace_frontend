import SignUp from "@/components/pages/SignUp/SignUp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'CraftsmenPro | Sign Up',
  description: 'This is the sign up page',
}

const SignUpPage = () => {
    return <SignUp /> 
};

export default SignUpPage;