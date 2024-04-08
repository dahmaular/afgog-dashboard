export type ServiceResponse = {
  data: ServiceData[];
  message: string;
  isSuccess: boolean;
};

export type ServiceData = {
  _id: string;
  image: string;
  title: string;
  subHeader: string;
  header: string;
  serviceTitle: string;
  serviceText: string;
  serviceImage: string;
  serviceTitle2: string;
  serviceText2: string;
  serviceImage2: string;
  serviceTitle3: string;
  serviceText3: string;
  serviceImage3: string;
  dateCreated: string;
  dateModified: string;
};

export type UpdateServiceRequest = {
  image: string | undefined;
  title: string | undefined;
  id: string;
  subHeader: string;
  header: string;
  serviceTitle: string;
  serviceText: string;
  serviceImage: string;
  serviceTitle2: string;
  serviceText2: string;
  serviceImage2: string;
  serviceTitle3: string;
  serviceText3: string;
  serviceImage3: string;
};
