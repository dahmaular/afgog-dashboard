import { Fragment } from "react";
import MarkJecno from "./MarkJecno";
import MarkJecnoDeatails from "./MarkJecnoDeatails";

interface UserDetails {
  fname: string | undefined;
  lname: string | undefined;
  phone: string | undefined;
  address: string | undefined;
}

const Userdesignation = ({ fname, lname, phone, address }: UserDetails) => {
  return (
    <Fragment>
      <MarkJecno fname={fname} lname={lname} />
      <MarkJecnoDeatails address={address} phone={phone} />
    </Fragment>
  );
};

export default Userdesignation;
