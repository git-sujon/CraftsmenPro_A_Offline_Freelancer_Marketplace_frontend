import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const urlExtension = "/users";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${urlExtension}`,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response, meta) => {
        return {
          departments: response,
          meta,
        };
      },
      providesTags: [tagTypes.user],
    }),

    getUser: build.query({
      query: (id) => ({
        url: `${urlExtension}/${id}`,
        method: "GET",
      }),

      providesTags: [tagTypes.user],
    }),

    getMyProfile: build.query({
      query: () => ({
        url: `${urlExtension}/my-profile`,
        method: "GET",
      }),

      providesTags: [tagTypes.user],
    }),

    // addUser: build.mutation({
    //   query: (data) => ({
    //     url: `${urlExtension}`,
    //     method: "POST",
    //     data: data,
    //   }),
    //   invalidatesTags: [tagTypes.user],
    // }),

    updateUser: build.mutation({
      query: (data) => ({
        url: `${urlExtension}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    updateMyProfile: build.mutation({
      query: (data) => ({
        url: `${urlExtension}/my-profile`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    deleteUser: build.mutation({
      query: (id) => ({
        url: `${urlExtension}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useGetMyProfileQuery,
  useUpdateUserMutation,
  useUpdateMyProfileMutation,
  useDeleteUserMutation,
} = userApi;
