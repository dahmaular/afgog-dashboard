import {
  CardHeader,
  Col,
  CardBody,
  Row,
  FormGroup,
  Label,
  Input,
  CardFooter,
} from "reactstrap";
import { Btn, H4 } from "../../../../AbstractElements";
import {
  Aus,
  Canada,
  EditProfile,
  FirstName,
  Germany,
  LastName,
  Select,
  UpdateProfile,
  Usa,
} from "../../../../Constant";
import { useState } from "react";

interface ProfileProps {
  user: {
    accountNumber?: string | undefined;
    bankName?: string | undefined;
    businessAddress?: string | undefined;
    businessType?: string | undefined;
    bvn?: string | undefined;
    email: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    phone: string | undefined;
    storeName?: string | undefined;
  };
}

const EditprofileForm = ({ user }: ProfileProps) => {
  const [storeName, setStoreName] = useState<string>("");
  const [accountNumber, setAccountNumber] = useState<string>("");
  const [bankName, setBankName] = useState<string>("");
  const [businessAdd, setBusinessAdd] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [fName, setFName] = useState<string>("");
  const [lName, setLName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [businessType, setBusinessType] = useState<string>("");

  return (
    <Col xl="8">
      <form className="card">
        <CardHeader>
          <H4 className="card-title mb-0">{EditProfile}</H4>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md="5">
              <FormGroup>
                <Label>Store Name</Label>
                <Input
                  type="text"
                  placeholder="Store Name"
                  value={user.storeName}
                  onChange={(e) => setStoreName(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col sm="6" md="3">
              <FormGroup>
                <Label>Bank Name</Label>
                <Input
                  type="text"
                  placeholder="Username"
                  value={user.bankName}
                  onChange={(e) => setBankName(e.target.value)}
                />
              </FormGroup>
            </Col>
            {/* <Col sm="6" md="4">
              <FormGroup>
                <Label>{EmailAddress}</Label>
                <Input type="email" placeholder="Email" />
              </FormGroup>
            </Col> */}
            <Col sm="6" md="4">
              <FormGroup>
                <Label>Account Number</Label>
                <Input
                  type="email"
                  placeholder="Email"
                  value={user.accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md="12">
              <FormGroup>
                <Label>Business Address</Label>
                <Input
                  type="text"
                  placeholder="Home Address"
                  value={user.businessAddress}
                  onChange={(e) => setBusinessAdd(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col sm="6" md="6">
              <FormGroup>
                <Label>{FirstName}</Label>
                <Input
                  type="text"
                  placeholder="Company"
                  value={user.firstName}
                  onChange={(e) => setFName(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col sm="6" md="6">
              <FormGroup>
                <Label>{LastName}</Label>
                <Input
                  type="text"
                  placeholder="Last Name"
                  value={user.lastName}
                  onChange={(e) => setLName(e.target.value)}
                />
              </FormGroup>
            </Col>

            <Col sm="6" md="4">
              <FormGroup>
                <Label>Phone Number</Label>
                <Input
                  type="text"
                  placeholder="City"
                  value={user.phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col sm="6" md="4">
              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="text"
                  placeholder="City"
                  value={user.email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
            </Col>
            {/* <Col sm="6" md="3">
              <FormGroup>
                <Label>{PostalCode}</Label>
                <Input type="number" placeholder="ZIP Code" />
              </FormGroup>
            </Col> */}
            {/* <Col md="5">
              <FormGroup>
                <Label>Business Type</Label>
                <select className="form-control btn-square form-select">
                  <option value={0}>{Select}</option>
                  <option value={1}>{Germany}</option>
                  <option value={2}>{Canada}</option>
                  <option value={3}>{Usa}</option>
                  <option value={4}>{Aus}</option>
                </select>
              </FormGroup>
            </Col> */}
            {/* <Col md="12">
              <Label>{AboutMe}</Label>
              <textarea
                className="form-control"
                rows={5}
                placeholder="Enter About your description"
              />
            </Col> */}
          </Row>
        </CardBody>
        <CardFooter className="text-end">
          <Btn color="primary" type="submit">
            {UpdateProfile}
          </Btn>
        </CardFooter>
      </form>
    </Col>
  );
};

export default EditprofileForm;
