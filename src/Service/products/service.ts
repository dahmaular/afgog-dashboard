import { retry } from "@reduxjs/toolkit/dist/query";
import { apis } from "../../api";
import {
  BrandResType,
  CategoryResType,
  ImageRequest,
  ImageResponse,
  ProductDetailResponse,
  ProductRequestObject,
  ProductResponse,
} from "../../types/productTypes";

export const afgogProductApi = apis.injectEndpoints({
  endpoints: (build) => ({
    addProduct: build.mutation<ProductResponse, ProductRequestObject>({
      query: (body) => ({
        url: "product",
        method: "POST",
        body
      }),
      extraOptions: {
        backoff: () => {
          retry.fail({ fake: "error" });
        },
      },
    }),
    products: build.query<ProductResponse, void>({
      query: () => ({
        url: "product",
        method: "GET",
      }),
      extraOptions: {
        backoff: () => {
          retry.fail({ fake: "error" });
        },
      },
    }),
    getProduct: build.query<ProductDetailResponse, { id: string | undefined }>({
      query: ({ id }) => ({
        url: `product/${id}`,
        method: "GET",
      }),
      extraOptions: {
        backoff: () => {
          retry.fail({ fake: "error" });
        },
      },
    }),
    getBrand: build.query<BrandResType, void>({
      query: () => ({
        url: `product-brand`,
        method: "GET",
      }),
      extraOptions: {
        backoff: () => {
          retry.fail({ fake: "error" });
        },
      },
    }),
    getCategory: build.query<CategoryResType, void>({
      query: () => ({
        url: `product-category`,
        method: "GET",
      }),
      extraOptions: {
        backoff: () => {
          retry.fail({ fake: "error" });
        },
      },
    }),
    uploadImage: build.mutation({
      query: (credentials) => {
        console.log("service",credentials)
        return{
        url: "image",
        method: "POST",
        body: credentials,
        formData: true
      }},
      extraOptions: {
        backoff: () => {
          retry.fail({ fake: "error" });
        },
      },
    }),
    getUploadImage: build.query({
      query: (id) => {
        console.log("service",id)
        return{
        url: `image/${id}`,
        method: "GET",
      }},
      extraOptions: {
        backoff: () => {
          retry.fail({ fake: "error" });
        },
      },
    }),
  }),
});

export const {
  useAddProductMutation,
  useProductsQuery,
  useLazyGetProductQuery,
  useGetBrandQuery,
  useGetCategoryQuery,
  useUploadImageMutation,
  useLazyGetUploadImageQuery,
} = afgogProductApi;
