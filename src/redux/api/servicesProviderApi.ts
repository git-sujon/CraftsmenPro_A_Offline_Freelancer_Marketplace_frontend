import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const urlExtension = "/services-provider";

export const servicesProviderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getServicesProviders: build.query({
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

    getServicesProvider: build.query({
      query: (id) => ({
        url: `${urlExtension}/${id}`,
        method: "GET",
      }),

      providesTags: [tagTypes.user],
    }),

    addServicesProvider: build.mutation({
      query: (data) => ({
        url: `${urlExtension}`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    updateServicesProvider: build.mutation({
      query: (data) => ({
        url: `${urlExtension}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    deleteServicesProvider: build.mutation({
      query: (id) => ({
        url: `${urlExtension}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useGetServicesProvidersQuery,
  useGetServicesProviderQuery,
  useAddServicesProviderMutation,
  useUpdateServicesProviderMutation,
  useDeleteServicesProviderMutation,
} = servicesProviderApi;
