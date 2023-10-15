

import { ISelectOptions } from "@/types/common";

export const categoriesOptions: ISelectOptions[] = [
  {
    label: 'Home Services',
    value: 'home-services',
  },
  {
    label: 'Maintenance and Repairs',
    value: 'maintenance-repairs',
  },
  {
    label: 'Personal Care',
    value: 'personal-care',
  },
  {
    label: 'Health and Wellness',
    value: 'health-wellness',
  },
  {
    label: 'Event Services',
    value: 'event-services',
  },
  {
    label: 'Education and Tutoring',
    value: 'education-tutoring',
  },
  {
    label: 'Professional Services',
    value: 'professional-services',
  },
  {
    label: 'Automotive Services',
    value: 'automotive-services',
  },
  {
    label: 'Technology and IT',
    value: 'technology-it',
  },
  {
    label: 'Pet Care',
    value: 'pet-care',
  },
  {
    label: 'Food and Catering',
    value: 'food-catering',
  },
  {
    label: 'Arts and Crafts',
    value: 'arts-crafts',
  },
].map((category) => ({
  label: category.label,
  value: category.value,
}));





export const homeServicesOptions: ISelectOptions[] = [
    {
      label: 'House Cleaning',
      value: 'house-cleaning',
    },
    {
      label: 'Plumbing',
      value: 'plumbing',
    },
    {
      label: 'Electrical Repairs',
      value: 'electrical-repairs',
    },
    {
      label: 'HVAC Services',
      value: 'hvac-services',
    },
    {
      label: 'Appliance Repair',
      value: 'appliance-repair',
    },
    {
      label: 'Pest Control',
      value: 'pest-control',
    },
    {
      label: 'Gardening and Landscaping',
      value: 'gardening-landscaping',
    },
    {
      label: 'Interior Design',
      value: 'interior-design',
    },
    {
      label: 'Furniture Assembly',
      value: 'furniture-assembly',
    },
    {
      label: 'Home Renovation',
      value: 'home-renovation',
    },
    {
      label: 'Carpet Cleaning',
      value: 'carpet-cleaning',
    },
    {
      label: 'Roof Repair',
      value: 'roof-repair',
    },
  ].map((service) => ({
    label: service.label,
    value: service.value,
  }));
  