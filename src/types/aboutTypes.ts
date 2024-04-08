type AboutObject = {
  _id: string;
  image: string;
  title: string;
  subHeader: string;
  header: string;
  itemTitle: string;
  itemText: string;
  itemImage: string;
  itemTitle2: string;
  itemText2: string;
  itemImage2: string;
  itemTitle3: string;
  itemText3: string;
  itemImage3: string;
  itemTitle4: string;
  itemText4: string;
  itemImage4: string;
  dateCreated: string;
  dateModified: string;
};

export type AboutResponse = {
  data: AboutObject[];
  message: string;
  isSuccess: boolean;
};

export type AboutUpdateRequest = {
  id: string;
  title: string;
  subHeader: string;
  image: string;
  header: string;
  itemTitle: string;
  itemText: string;
  itemImage: string;
  itemTitle2: string;
  itemText2: string;
  itemImage2: string;
  itemTitle3: string;
  itemText3: string;
  itemImage3: string;
  itemTitle4: string;
  itemText4: string;
  itemImage4: string;
};
