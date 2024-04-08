import { ActiveUser, HomePage, TotalIncome, TotalTax, Totalsales } from "../../../Constant";

export let datas = [
  {
    cardBodyClassName: "mb-0",
    Heading: HomePage,
    amount: "8162",
    firstLi: "100% goal reached",
    secondLi: "1,00,000",
    ProgressBarColor: "bg-primary",
    page: `${process.env.PUBLIC_URL}/home/banner`,
  },
  {
    cardBodyClassName: "mb-0",
    Heading: "Service Page",
    amount: "4,685",
    firstLi: "45% goal reached",
    secondLi: "1,00,000",
    ProgressBarColor: "bg-success",
    page: `${process.env.PUBLIC_URL}/home/service`
  },
  {
    cardBodyClassName: "pt-0",
    Heading: "Contact Page",
    amount: "3,513",
    firstLi: "70% goal reached",
    secondLi: "1,00,000",
    ProgressBarColor: "bg-primary-light",
    page: `${process.env.PUBLIC_URL}/home/contact`,
  },
  {
    cardBodyClassName: "pt-0",
    Heading: "About Us Page",
    amount: "2,749",
    firstLi: "52% goal reached",
    secondLi: "1,00,000",
    ProgressBarColor: "sm-progress-bar",
    page: `${process.env.PUBLIC_URL}/home/about`,
  },
];
