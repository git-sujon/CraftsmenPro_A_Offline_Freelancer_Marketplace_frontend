import { tagTypes } from '../tagTypes'
import { baseApi } from './baseApi'


const urlExtension= "/auth"

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `${urlExtension}/login`,
        method: "POST",
        data:loginData

      }),
      invalidatesTags:[tagTypes.user]
    }),
    userSignUp: build.mutation({
      query: (signupData) => ({
        url: `${urlExtension}/signup`,
        method: "POST",
        data:signupData

      }),
      invalidatesTags:[tagTypes.user]
    }),

  }),
})

export const { useUserLoginMutation , useUserSignUpMutation} = authApi