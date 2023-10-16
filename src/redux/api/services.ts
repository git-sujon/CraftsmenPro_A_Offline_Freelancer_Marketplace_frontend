import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const urlExtension = "/services";

export const servicesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getServices: build.query({
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

    getService: build.query({
      query: (id) => ({
        url: `${urlExtension}/${id}`,
        method: "GET",
      }),

      providesTags: [tagTypes.user],
    }),

    addService: build.mutation({
      query: (data) => ({
        url: `${urlExtension}`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    updateService: build.mutation({
      query: (data) => ({
        url: `${urlExtension}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    deleteService: build.mutation({
      query: (id) => ({
        url: `${urlExtension}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useGetServicesQuery,
  useGetServiceQuery,
  useAddServiceMutation,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
} = servicesApi;
