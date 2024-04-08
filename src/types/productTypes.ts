type ProductObject = {
  _id: string;
  name: string;
  categoryId: string;
  brandId: string;
  description: string;
  specification: string;
  image: string;
  amount: string;
  price: string;
  rating: string;
  type: string;
  size: [];
  availability: string;
  color: string;
  noOfItems: string;
  dateCreated: string;
  dateModified: string;
}[];

type ProductDetailObject = {
  _id: string;
  name: string;
  categoryId: string;
  brandId: string;
  description: string;
  specification: string;
  image: string;
  amount: string;
  price: string;
  rating: string;
  type: string;
  size: [];
  availability: string;
  color: string;
  noOfItems: string;
  dateCreated: string;
  dateModified: string;
};

export type ProductResponse = {
  data: ProductObject;
  message: string;
  isSuccess: boolean;
};

export type ProductDetailResponse = {
  data: ProductDetailObject;
  message: string;
  isSuccess: boolean;
};

export type BrandResType = {
  data: {
    _id: string;
    name: string;
    dateCreated: string;
    dateModified: string;
  }[];
  message: string;
  isSuccess: boolean;
};

export type CategoryResType = {
  data: {
    _id: string;
    name: string;
    dateCreated: string;
    dateModified: string;
  }[];
  message: string;
  isSuccess: boolean;
};

export type ImageResponse = {
  data: {
    image: string
  },
  message: string;
  isSuccess: boolean;
}

export type ImageRequest = { image: object | any }

export type ProductRequestObject = {
  name: string;
  categoryId: string;
  brandId: string;
  description: string;
  specification: string;
  image: string[];
  amount: string;
  price: string;
  type: string;
  size: string[];
  availability: string;
  color: string;
  noOfItems: string;
};