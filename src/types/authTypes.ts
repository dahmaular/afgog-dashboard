export type SignUpRequest = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  storeName: string;
  businessAddress: string;
  businessType: string;
  bankName: string;
  accountNumber: string;
  bvn: string;
};

export type SignUpResponse = {
  data: AuthData;
  token: string;
  message: string;
  isSuccess: boolean;
};

export type LoginRequest = {
  email: string;
  password: string;
};

type AuthData = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  storeName?: string;
  businessAddress?: string;
  businessType?: string;
  bankName?: string;
  accountNumber?: string;
  bvn?: string;
};

export type LoginResponse = {
  authData: AuthData;
  token?: string | undefined;
  message: string;
  isSuccess: boolean;
};
