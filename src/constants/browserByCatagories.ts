import {
  FaHome,
  FaWrench,
  FaUserMd,
  FaHeartbeat,
  FaRegCalendar,
  FaChalkboardTeacher,
  FaBriefcase,
  FaCar,
  FaDesktop,
  FaPaw,
  FaUtensils,
  FaPaintBrush,
} from "react-icons/fa";

export interface ICategory {
  fieldValue: string;
  totalCount: string;
}

export const categories= [
  {
    id: 1,
    label: "Home Services",
    value: "home-services",
    icon: FaHome,
    description: "Household solutions for your everyday needs.",
  },
  {
    id: 2,
    label: "Maintenance and Repairs",
    value: "maintenance-repairs",
    icon: FaWrench,
    description: "Fixing and upgrading for peace of mind.",
  },
  {
    id: 3,
    label: "Personal Care",
    value: "personal-care",
    icon: FaUserMd,
    description: "Self-care and grooming at its best.",
  },
  {
    id: 4,
    label: "Health and Wellness",
    value: "health-wellness",
    icon: FaHeartbeat,
    description: "Embrace a healthy, active lifestyle.",
  },
  {
    id: 5,
    label: "Event Services",
    value: "event-services",
    icon: FaRegCalendar,
    description: "Plan memorable events with ease.",
  },
  {
    id: 6,
    label: "Education and Tutoring",
    value: "education-tutoring",
    icon: FaChalkboardTeacher,
    description: "Unlock the power of knowledge and learning.",
  },
  {
    id: 7,
    label: "Professional Services",
    value: "professional-services",
    icon: FaBriefcase,
    description: "Expertise for your business and career.",
  },
  {
    id: 8,
    label: "Automotive Services",
    value: "automotive-services",
    icon: FaCar,
    description: "Keep your vehicles in top shape.",
  },
  {
    id: 9,
    label: "Technology and IT",
    value: "technology-it",
    icon: FaDesktop,
    description: "Tech solutions for a digital world.",
  },
  {
    id: 10,
    label: "Pet Care",
    value: "pet-care",
    icon: FaPaw,
    description: "Caring for your furry friends with love.",
  },
  {
    id: 11,
    label: "Food and Catering",
    value: "food-catering",
    icon: FaUtensils,
    description: "Delicious dishes for every occasion.",
  },
  {
    id: 12,
    label: "Arts and Crafts",
    value: "arts-crafts",
    icon: FaPaintBrush,
    description: "Unleash your creativity and artistic talents.",
  },
].map((category) => ({
  id: category.id,
  label: category.label,
  value: category.value,
  icon: category.icon,
  description: category.description,
}));
