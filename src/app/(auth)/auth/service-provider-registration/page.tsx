import ServiceProviderRegistration from "@/components/pages/ServicesProviderRegistration/ServicesProviderRegistration";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'CraftsmenPro | Service Provider Registration',
  description: 'Be a Service Provider.',
}

const ServiceProviderRegistrationPage = () => {
    return <ServiceProviderRegistration /> 
};

export default ServiceProviderRegistrationPage;