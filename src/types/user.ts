type GenderEnum = 'male' | 'female' | 'other' | 'prefer-not-to-say';
export interface IUser {
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
  password: string;
  phoneNumber: string;
  gender: GenderEnum;
  location: {
    city: string;
    division: string;
  };
  role: string;
  isServiceProvider: boolean;
  isOnline?: boolean;
  isBlocked?: boolean;

  profilePicture?: string;
  lastLogin?: Date;
  servicesBooked?: string;
  reviews?: string[];
  isVerified?: boolean;
  forgotPasswordToken?: String;
  forgotPasswordTokenExpiry?: Date;
  verifyToken?: String;
  verifyTokenExpiryDate?: Date;
}

  export interface IJwtDecoded {
    email: string;
    role: string;
    iat: number;
    exp: number;
}