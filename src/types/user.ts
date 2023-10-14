export interface IUser {
    name: {
      firstName: string;
      lastName: string;
    };
    email: string;
    password: string;
    phoneNumber: string;
    location: {
      city: string;
      division: string;
    };
    role: string;
    isServiceProvider: boolean;
    profilePicture?: string;
    lastLogin?: Date;
    isVerified?: boolean;
  }
  

  export interface IJwtDecoded {
    email: string;
    role: string;
    iat: number;
    exp: number;
}