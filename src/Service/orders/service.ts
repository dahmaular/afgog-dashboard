import { retry } from "@reduxjs/toolkit/dist/query";
import { apis } from "../../api";
import { OrderRequest, OrderResponse } from "../../types/orderTypes";

export const afgogOrderApi = apis.injectEndpoints({
  endpoints: (build) => ({
    orders: build.query<OrderResponse, void>({
      query: (credentials) => ({
        url: "orders",
        method: "GET",
        body: credentials,
      }),
      extraOptions: {
        backoff: () => {
          retry.fail({ fake: "error" });
        },
      },
    }),
    
  }),
});

export const {useOrdersQuery
} = afgogOrderApi;
