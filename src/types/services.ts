export interface IService {
  _id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  serviceBanner: string;
  servicesImages?: string[];
  location: {
    areaName: string[];
    cityName: string;
    division: string;
  };
  contact: {
    name: string;
    email: string;
    phone: string;
    role: string;
  };
  servicesProvider?: any;
  averageRating?: number;
  availableTimeSlots: Array<{ date: Date; time: string }>;
  bookedTimeSlots?: Array<{ date: Date; time: string }>;
  duration: number;
  searchEngineOptimizationTags?: string[];
  features?: string[];
  faqs?: {
    key: string;
    label: string;
    children: string;
  }[];
  isPopular?: boolean;
}
