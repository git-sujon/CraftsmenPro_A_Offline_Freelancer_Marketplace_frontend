import { authKey } from "@/constants/storageKeys";
import { tagTypes } from "@/redux/tagTypes";
import { IJwtDecoded } from "@/types/user";
import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/localStorage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken);
};
export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);

  if (authToken) {
    const decodeData = decodedToken(authToken);
    return decodeData;
  } else {
    return "";
  }
};

export const isUserLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);

  if (authToken) {
    const userInfo = decodedToken(authToken) as IJwtDecoded;

    if (userInfo?.role === tagTypes.user) {
      return true;
    }
  }
};

export const isServiceProviderLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);

  if (authToken) {
    const userInfo = decodedToken(authToken) as IJwtDecoded;

    if (userInfo?.role === tagTypes.serviceProvider) {
      return true;
    }
  }
};

export const isAdminLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);

  if (authToken) {
    const userInfo = decodedToken(authToken) as IJwtDecoded;

    if (userInfo?.role === tagTypes.user) {
      return true;
    }
  }
};

export const isSuperAdminLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);

  if (authToken) {
    const userInfo = decodedToken(authToken) as IJwtDecoded; // Type assertion

    if (userInfo?.role === "superAdmin") {
      return true;
    }
  }
};

export const removeUserInfo = (key: string) => {
  return localStorage.removeItem(key);
};

// export const checkCorrectUser =(userProfileData: any) => {
//   const authToken = getFromLocalStorage(authKey); // Get the token from local storage

//   if (authToken && userProfileData) {

//     console.log("userProfileData:", userProfileData)

//     const userInfo = decodedToken(authToken) as IJwtDecoded;

//     if (
//       userInfo?.role === userProfileData?.role &&
//       userInfo?.email === userProfileData?.email
//     ) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// };
