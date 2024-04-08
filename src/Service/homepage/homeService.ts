import { retry } from "@reduxjs/toolkit/dist/query";
import { apis } from "../../api";
import {
  BannerResponse,
  UpdateBannerRequest,
  UpdateBannerResponse,
} from "../../types/homePageTypes";

export const devtageHomeServiceApi = apis.injectEndpoints({
  endpoints: (build) => ({
    getBanner: build.query<BannerResponse, void>({
      query: () => ({
        url: "hero",
        method: "GET",
      }),
      // providesTags: ["getBanner"],
    }),
    updateBanner: build.mutation<UpdateBannerResponse, UpdateBannerRequest>({
      query: ({ id, image, subTitle, title }) => ({
        url: `hero/${id}`,
        method: "PUT",
        body: {
          image,
          subTitle,
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
            devtageHomeServiceApi.util.updateQueryData(
              "getBanner",
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

export const { useGetBannerQuery, useUpdateBannerMutation } =
  devtageHomeServiceApi;
