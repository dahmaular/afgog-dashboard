import { retry } from "@reduxjs/toolkit/dist/query";
import {
  LoginRequest,
  LoginResponse,
  SignUpRequest,
  SignUpResponse,
} from "../../types/authTypes";
import { apis } from "../../api";

export const devtageAuthApi = apis.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: "auth",
        method: "POST",
        body: credentials,
      }),
    }),
    createAccount: build.mutation<SignUpResponse, SignUpRequest>({
      query: (body) => ({
        url: "vendors",
        method: "POST",
        body,
      }),
      extraOptions: {
        backoff: () => {
          retry.fail({ fake: "error" });
        },
      },
    }),

    // verifyEmail: build.mutation<ChangePasswordResponse, VerifyEmailRequest>({
    //   query: body => ({
    //     url: 'verify-email',
    //     method: 'POST',
    //     body,
    //   }),
    //   extraOptions: {
    //     backoff: () => {
    //       retry.fail({fake: 'error'});
    //     },
    //   },
    // }),
  }),
});

export const { useLoginMutation, useCreateAccountMutation } = devtageAuthApi;
