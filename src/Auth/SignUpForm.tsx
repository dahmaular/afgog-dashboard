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
  VendorPersonal,
} from "../Constant";
import SocialIcons from "./SocialIcons";
import { toggleLoginForm } from "../Service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [fName, setFName] = useState<string>("");
  const [lName, setLName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const signUpPersonalInfo = {
      email,
      password,
      phone,
      fName,
      lName,
    };
    if (
      email !== "" &&
      password !== "" &&
      phone !== "" &&
      lName !== "" &&
      fName !== ""
    ) {
      localStorage.setItem("personalInfo", JSON.stringify(signUpPersonalInfo));
      // toast.success("Login Success...!");
      navigate(`${process.env.PUBLIC_URL}/auth/business-details`);
    } else {
      toast.error("Please Enter details to continue...!");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="theme-form">
        <H4 className="text-center text-uppercase">{Vendor}</H4>
        <H6 className="text-center mt-5">{VendorPersonal}</H6>
        <Row className="g-2">
          <Col md="6">
            <FormGroup>
              <Input
                type="text"
                value={fName}
                onChange={(event) => setFName(event.target.value)}
                placeholder="First Name"
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Input
                type="text"
                value={lName}
                onChange={(event) => setLName(event.target.value)}
                placeholder="Last Name"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row className="g-2">
          <Col md="6">
            <FormGroup>
              <Input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email"
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Input
                type="text"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="Phone Number"
              />
            </FormGroup>
          </Col>
        </Row>

        <FormGroup>
          <Input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
          />
        </FormGroup>
        <Row className="g-2">
          <Col sm="4">
            <Btn color="primary">Continue</Btn>
          </Col>
          <Col sm="8">
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
          </Col>
        </Row>
        {/* <SocialIcons /> */}
      </form>
    </div>
  );
};

export default SignUpForm;
