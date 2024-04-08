import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";
import { devtageAuthApi } from "./service";

export type UserDataType = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  middleName: string;
};

export interface IMyBankInitialState {
  status:
    | "login"
    | "login-success"
    | "login-error"
    | "verify"
    | "verify-success"
    | "verify-error"
    | "idle";
  authData: UserDataType;
  token?: string | undefined;
  message: string;
  isSuccess: boolean;
  isAuthenticated: boolean;
}

const initState: IMyBankInitialState = {
  status: "idle",
  authData: {
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    middleName: "",
  },
  token: "",
  isAuthenticated: false,
  message: "",
  isSuccess: false,
};

export const devtageAuthSlice = createSlice({
  name: "user",
  initialState: initState,
  reducers: {
    logout: (state) => {
      // state.status = "idle";
      state.isAuthenticated = false;
    },
    login: (state) => {
      state.status = "login";
    },
    loginSuccess: (state) => {
      state.status = "login-success";
    },
    loginError: (state) => {
      state.status = "login-error";
      state.isAuthenticated = false;
    },
    verify: (state) => {
      state.status = "verify";
    },
    verifySuccess: (state) => {
      state.status = "verify-success";
    },
    verifyError: (state) => {
      state.status = "verify-error";
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(devtageAuthApi.endpoints.login.matchPending, (state) => {
      state.status = "login";
    });
    builder.addMatcher(
      devtageAuthApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        const { token, isSuccess, authData } = payload;
        if (isSuccess) {
          state.authData = {
            _id: authData?._id,
            email: authData.email,
            firstName: authData.firstName,
            lastName: authData.lastName,
            middleName: authData.middleName,
            phone: authData.phone,
          };
          state.token = token;
          state.status = "login-success";
          state.isAuthenticated = true;

          return;
        }
        state.status = "login-error";
        state.isAuthenticated = false;
      }
    );
    builder.addMatcher(devtageAuthApi.endpoints.login.matchRejected, (state) => {
      state.status = "login-error";
      state.isAuthenticated = false;
    });
    // builder.addMatcher(
    //     afgogAuthApi.endpoints.verifyEmail.matchPending,
    //   (state) => {
    //     state.status = "verify";
    //   }
    // );
    // builder.addMatcher(
    //     afgogAuthApi.endpoints.verifyEmail.matchFulfilled,
    //   (state, { payload }) => {
    //     console.log("payload", payload);
    //     const { isSuccess, data } = payload;
    //     if (isSuccess) {
    //       console.log("success", isSuccess, data);
    //       state.authData = {
    //         _id: data?._id,
    //         email: data?.email,
    //         firstName: data?.firstName,
    //         lastName: data?.lastName,
    //         phone: data?.phone,
    //       };
    //       state.status = "verify-success";
    //       state.isAuthenticated = true;

    //       return;
    //     }
    //     state.status = "verify-error";
    //     state.isAuthenticated = false;
    //   }
    // );
    // builder.addMatcher(
    //     afgogAuthApi.endpoints.verifyEmail.matchRejected,
    //   (state) => {
    //     state.status = "verify-error";
    //     state.isAuthenticated = false;
    //   }
    // );
  },
});

export const {
  logout,
  login,
  loginSuccess,
  loginError,
  verify,
  verifyError,
  verifySuccess,
} = devtageAuthSlice.actions;
export const selectIsAuthenticated = (state: RootState) =>
  state.user.isAuthenticated;
export default devtageAuthSlice.reducer;
