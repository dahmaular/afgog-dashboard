import { retry } from "@reduxjs/toolkit/dist/query";
import { apis } from "../../api";
import {
  ServiceResponse,
  UpdateServiceRequest,
} from "../../types/ServiceTypes";

export const devtageServiceApi = apis.injectEndpoints({
  endpoints: (build) => ({
    getService: build.query<ServiceResponse, void>({
      query: () => ({
        url: "service",
        method: "GET",
      }),
      // providesTags: ["getBanner"],
    }),
    updateService: build.mutation<ServiceResponse, UpdateServiceRequest>({
      query: ({
        id,
        header,
        image,
        serviceImage,
        serviceText,
        serviceTitle,
        serviceImage2,
        serviceImage3,
        serviceText2,
        serviceText3,
        serviceTitle2,
        serviceTitle3,
        subHeader,
        title,
      }) => ({
        url: `service/${id}`,
        method: "PUT",
        body: {
          header,
          image,
          serviceImage,
          serviceText,
          serviceTitle,
          subHeader,
          serviceImage2,
          serviceImage3,
          serviceText2,
          serviceText3,
          serviceTitle2,
          serviceTitle3,
          title,
        },
      }),
      // invalidatesTags: ["getBanner"],

      async onQueryStarted(args, { queryFulfilled, dispatch }: any) {
        try {
          const { data: updatedBanner } = await queryFulfilled;

          console.log("updte", updatedBanner);
          console.log("args", args);

          dispatch(
            devtageServiceApi.util.updateQueryData(
              "getService",
              undefined,
              (draft) => {
                console.log("draft", JSON.stringify(draft));
                Object.assign(draft, updatedBanner);
              }
            )
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useGetServiceQuery, useUpdateServiceMutation } =
  devtageServiceApi;
