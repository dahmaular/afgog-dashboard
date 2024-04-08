type ContactObject = {
    _id: string;
    title: string;
    location: string;
    title2: string;
    location2: string;
    title3: string;
    location3: string;
    contactTitle: string;
    contactPhone: string;
    contactTitle2: string;
    contactPhone2: string;
    contactTitle3: string;
    contactPhone3: string;
  };
  
  export type ContactResponse = {
    data: ContactObject[];
    message: string;
    isSuccess: boolean;
  };
  
  export type ContactUpdateRequest = {
    id: string;
    title: string;
    location: string;
    title2: string;
    location2: string;
    title3: string;
    location3: string;
    contactTitle: string;
    contactPhone: string;
    contactTitle2: string;
    contactPhone2: string;
    contactTitle3: string;
    contactPhone3: string;
  };
  