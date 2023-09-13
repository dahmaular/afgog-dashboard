import { H6 } from "../../../../AbstractElements";
import {AccountInformation,BillingInformation,CompanyInformation,ContactNumber,EmailAddress,Website,YourName,} from "../../../../Constant";
import { CardBody, Form } from "reactstrap";
import BillingInformationRow from "./BillingInformationRow";
import MegaFormCommon from "./common/MegaFormCommon";
const MegaFormCardBody = () => {
  return (
    <CardBody>
      <Form className="theme-form mega-form">
        <H6>{AccountInformation}</H6>
        <MegaFormCommon label={YourName} type="text" placeholder="Your Name" />
        <MegaFormCommon label={EmailAddress} type="email" placeholder="Enter email" />
        <MegaFormCommon label={ContactNumber} type="number" placeholder="Enter Contact number" />
        <hr className="mt-4 mb-4" />
        <H6>{CompanyInformation}</H6>
        <MegaFormCommon label={ContactNumber} type="text" placeholder="Company Name" />
        <MegaFormCommon label={Website} type="text" placeholder="WebSite" />
      </Form>
      <hr className="mt-4 mb-4" />
      <H6 className="pb-4">{BillingInformation}</H6>
      <BillingInformationRow />
    </CardBody>
  );
};
export default MegaFormCardBody;
