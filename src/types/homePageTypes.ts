export type BannerResponse = {
  data: BannerData[];
  message: string;
  isSuccess: boolean;
};

export type BannerData = {
  _id: string;
  image: string;
  title: string;
  subTitle: string;
  dateCreated: string;
  dateModified: string;
};

export type UpdateBannerResponse = {
  data: {
    _id: string;
    image: string;
    title: string;
    subTitle: string;
  };
  message: string;
  isSuccess: boolean;
};

export type UpdateBannerRequest = {
  image: string | undefined;
  title: string | undefined;
  subTitle: string | undefined;
  id: string;
};
