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
};

type Order = {
  productId: ProductObject;
  userId: string;
  storeId: string;
  status: string;
  amount: string;
  deliveryMode: string;
  deliveryAddress: string;
  paymentMethod: string;
  paymentStatus: string;
  transactionId: string;
  unit: string;
  dateCreated: string;
  dateModified: string;
  _id: string;
}[];

export type OrderResponse = {
  data: Order;
  message: string;
  isSuccess: boolean;
};

export type OrderRequest = {
  productId: string;
  userId: string;
  status: string;
  amount: string;
  deliveryMode: string;
  deliveryAddress: string;
  paymentMethod: string;
  paymentStatus: string;
  transactionId: string;
};
