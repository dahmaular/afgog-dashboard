import { Col, FormGroup, Input, Row } from "reactstrap";
import { Btn, H4, H6 } from "../AbstractElements";
import {
  AlreadyUser,
  Href,
  Login,
  NewUser,
  SignUp,
  UserNameAndPassword,
  Vendor,
} from "../Constant";
import SocialIcons from "./SocialIcons";
import { toggleLoginForm } from "../Service";

const BusinessDetailsForm = () => {
  return (
    <div className="mt-5">
      <form onSubmit={(event) => event.preventDefault()} className="theme-form">
        <H4 className="text-center text-uppercase">{Vendor}</H4>
        <H6 className="text-center">{UserNameAndPassword}</H6>
        <Row className="g-2">
          <Col md="6">
            <FormGroup>
              <Input type="text" placeholder="First Name" />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Input type="text" placeholder="Last Name" />
            </FormGroup>
          </Col>
        </Row>
        <Row className="g-2">
          <Col md="6">
            <FormGroup>
              <Input type="email" placeholder="Email" />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Input type="text" placeholder="Phone Number" />
            </FormGroup>
          </Col>
        </Row>

        <FormGroup>
          <Input type="password" placeholder="Password" />
        </FormGroup>
        <Row className="">
          <Col sm="12">
            <Btn color="primary">{SignUp}</Btn>
          </Col>
          {/* <Col sm="8">
            <div className="text-start mt-2 m-l-20">
              {AlreadyUser}&nbsp;&nbsp;
              <a
                className="btn-link text-capitalize"
                href={Href}
                onClick={toggleLoginForm}
              >
                {Login}
              </a>
            </div>
          </Col> */}
        </Row>
        {/* <SocialIcons /> */}
      </form>
    </div>
  );
};

export default BusinessDetailsForm;
