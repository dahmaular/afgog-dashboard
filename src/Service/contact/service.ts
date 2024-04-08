import { retry } from "@reduxjs/toolkit/dist/query";
import { apis } from "../../api";
import {
  ContactResponse,
  ContactUpdateRequest,
} from "../../types/contactTypes";

export const devContactApi = apis.injectEndpoints({
  endpoints: (build) => ({
    getContact: build.query<ContactResponse, void>({
      query: () => ({
        url: "contact",
        method: "GET",
      }),
    }),
    updateContact: build.mutation<ContactResponse, ContactUpdateRequest>({
      query: ({
        id,
        contactPhone,
        contactPhone2,
        contactPhone3,
        contactTitle,
        contactTitle2,
        contactTitle3,
        location,
        location2,
        location3,
        title,
        title2,
        title3,
      }) => ({
        url: `contact/${id}`,
        method: "PUT",
        body: {
          contactPhone,
          contactPhone2,
          contactPhone3,
          contactTitle,
          contactTitle2,
          contactTitle3,
          location,
          location2,
          location3,
          title,
          title2,
          title3,
        },
      }),
      // invalidatesTags: ["getBanner"],

      async onQueryStarted(args, { queryFulfilled, dispatch }: any) {
        try {
          const { data: updatedBanner } = await queryFulfilled;

          console.log("updte", updatedBanner);
          console.log("args", args);

          dispatch(
            devContactApi.util.updateQueryData(
              "getContact",
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

export const { useGetContactQuery, useUpdateContactMutation } = devContactApi;
