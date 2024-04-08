import { retry } from "@reduxjs/toolkit/dist/query";
import { apis } from "../../api";
import { AboutResponse, AboutUpdateRequest } from "../../types/aboutTypes";

export const devAboutApi = apis.injectEndpoints({
  endpoints: (build) => ({
    getAbout: build.query<AboutResponse, void>({
      query: () => ({
        url: "about",
        method: "GET",
      }),
    }),
    updateAbout: build.mutation<AboutResponse, AboutUpdateRequest>({
      query: ({
        id,
        header,
        image,
        itemImage,
        itemImage2,
        itemImage3,
        itemImage4,
        itemText,
        itemText2,
        itemText3,
        itemText4,
        itemTitle,
        itemTitle2,
        itemTitle3,
        itemTitle4,
        subHeader,
        title,
      }) => ({
        url: `about/${id}`,
        method: "PUT",
        body: {
          header,
          image,
          itemImage,
          itemImage2,
          itemImage3,
          itemImage4,
          itemText,
          itemText2,
          itemText3,
          itemText4,
          itemTitle,
          itemTitle2,
          itemTitle3,
          itemTitle4,
          subHeader,
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
            devAboutApi.util.updateQueryData("getAbout", undefined, (draft) => {
              console.log("draft", JSON.stringify(draft));
              Object.assign(draft, updatedBanner);
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useGetAboutQuery, useUpdateAboutMutation } = devAboutApi;
