import { ISelectOptions } from "@/types/common";

export const divisionOptions: ISelectOptions[] = [
    'Dhaka',
    'Chittagong',
    'Rajshahi',
    'Khulna',
    'Barishal',
    'Sylhet',
    'Rangpur',
    'Mymensingh'
  ].map((division) => ({
    label: division,
    value: division.toLowerCase(),
  }));


  export const genderOptions: ISelectOptions[] = [
    {
      label: 'Male',
      value: 'male',
    },
    {
      label: 'Female',
      value: 'female',
    },
    {
      label: 'Other',
      value: 'other',
    },
    {
      label: 'Prefer not to say',
      value: 'prefer-not-to-say',
    },
  ].map((gender) => ({
    label: gender.label,
    value: gender.value,
  }));

  export const cityOptions: ISelectOptions[] = [
    {
      label: 'Bagerhat',
      value: 'bagerhat',
    },
    {
      label: 'Bandarban',
      value: 'bandarban',
    },
    {
      label: 'Barguna',
      value: 'barguna',
    },
    {
      label: 'Barisal',
      value: 'barisal',
    },
    {
      label: 'Bhola',
      value: 'bhola',
    },
    {
      label: 'Bogra',
      value: 'bogra',
    },
    {
      label: 'Brahmanbaria',
      value: 'brahmanbaria',
    },
    {
      label: 'Chandpur',
      value: 'chandpur',
    },
    {
      label: 'Chapainawabganj',
      value: 'chapainawabganj',
    },
    {
      label: 'Chattogram',
      value: 'chattogram',
    },
    {
      label: 'Chuadanga',
      value: 'chuadanga',
    },
    {
      label: 'Comilla',
      value: 'comilla',
    },
    {
      label: "Cox's Bazar",
      value: "cox's-bazar",
    },
    {
      label: 'Dhaka',
      value: 'dhaka',
    },
    {
      label: 'Dinajpur',
      value: 'dinajpur',
    },
    {
      label: 'Faridpur',
      value: 'faridpur',
    },
    {
      label: 'Feni',
      value: 'feni',
    },
    {
      label: 'Gaibandha',
      value: 'gaibandha',
    },
    {
      label: 'Gazipur',
      value: 'gazipur',
    },
    {
      label: 'Gopalganj',
      value: 'gopalganj',
    },
    {
      label: 'Habiganj',
      value: 'habiganj',
    },
    {
      label: 'Jamalpur',
      value: 'jamalpur',
    },
    {
      label: 'Jashore',
      value: 'jashore',
    },
    {
      label: 'Jhalokati',
      value: 'jhalokati',
    },
    {
      label: 'Jhenaidah',
      value: 'jhenaidah',
    },
    {
      label: 'Joypurhat',
      value: 'joypurhat',
    },
    {
      label: 'Khagrachari',
      value: 'khagrachari',
    },
    {
      label: 'Khulna',
      value: 'khulna',
    },
    {
      label: 'Kishoreganj',
      value: 'kishoreganj',
    },
    {
      label: 'Kurigram',
      value: 'kurigram',
    },
    {
      label: 'Kushtia',
      value: 'kushtia',
    },
    {
      label: 'Lakshmipur',
      value: 'lakshmipur',
    },
    {
      label: 'Lalmonirhat',
      value: 'lalmonirhat',
    },
    {
      label: 'Madaripur',
      value: 'madaripur',
    },
    {
      label: 'Magura',
      value: 'magura',
    },
    {
      label: 'Manikganj',
      value: 'manikganj',
    },
    {
      label: 'Meherpur',
      value: 'meherpur',
    },
    {
      label: 'Moulvibazar',
      value: 'moulvibazar',
    },
    {
      label: 'Munshiganj',
      value: 'munshiganj',
    },
    {
      label: 'Mymensingh',
      value: 'mymensingh',
    },
    {
      label: 'Naogaon',
      value: 'naogaon',
    },
    {
      label: 'Narail',
      value: 'narail',
    },
    {
      label: 'Narayanganj',
      value: 'narayanganj',
    },
    {
      label: 'Narsingdi',
      value: 'narsingdi',
    },
    {
      label: 'Natore',
      value: 'natore',
    },
    {
      label: 'Nawabganj',
      value: 'nawabganj',
    },
    {
      label: 'Netrakona',
      value: 'netrakona',
    },
    {
      label: 'Nilphamari',
      value: 'nilphamari',
    },
    {
      label: 'Noakhali',
      value: 'noakhali',
    },
    {
      label: 'Pabna',
      value: 'pabna',
    },
    {
      label: 'Panchagarh',
      value: 'panchagarh',
    },
    {
      label: 'Pirojpur',
      value: 'pirojpur',
    },
    {
      label: 'Rajbari',
      value: 'rajbari',
    },
    {
      label: 'Rajshahi',
      value: 'rajshahi',
    },
    {
      label: 'Rangamati',
      value: 'rangamati',
    },
    {
      label: 'Rangpur',
      value: 'rangpur',
    },
    {
      label: 'Satkhira',
      value: 'satkhira',
    },
    {
      label: 'Shariatpur',
      value: 'shariatpur',
    },
    {
      label: 'Sherpur',
      value: 'sherpur',
    },
    {
      label: 'Sirajganj',
      value: 'sirajganj',
    },
    {
      label: 'Sunamganj',
      value: 'sunamganj',
    },
    {
      label: 'Sylhet',
      value: 'sylhet',
    },
    {
      label: 'Tangail',
      value: 'tangail',
    },
    {
      label: 'Thakurgaon',
      value: 'thakurgaon',
    },
    {
      label: 'others',
      value: 'unknown', // For any cases where the district is not known or relevant
    },
  ].map((city) => ({
    label: city.label,
    value: city.value,
  }));
  


export const employeeRoleOptions: ISelectOptions[] = [
  {
    label: 'Self',
    value: 'Self',
  },
  {
    label: 'CEO',
    value: 'ceo',
  },
  {
    label: 'Manager',
    value: 'manager',
  },
  {
    label: 'Supervisor',
    value: 'supervisor',
  },
  {
    label: 'Team Lead',
    value: 'team-lead',
  },
  {
    label: 'Sales Representative',
    value: 'sales-representative',
  },
  {
    label: 'Human Resources',
    value: 'hr',
  },
  {
    label: 'Accountant',
    value: 'accountant',
  },
  {
    label: 'Customer Support',
    value: 'customer-support',
  },
].map((role) => ({
  label: role.label,
  value: role.value,
}));
