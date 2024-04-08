import { useNavigate } from "react-router-dom";
import { Btn, H4, H6 } from "../AbstractElements";
import { useState } from "react";
import { FormGroup, Input, Label } from "reactstrap";
import { toast } from "react-toastify";
import {
  Login,
  LoginDetails,
  Password,
  RememberMe,
  YourName,
} from "../Constant";
import SocialIcons from "./SocialIcons";
import { useLoginMutation } from "../Service/auth/service";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, { isLoading }] = useLoginMutation();

  const SimpleLoginHandle = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (isLoading) {
        return;
      }
      const data = {
        email,
        password,
      };
      if (email === "" && password == "") {
        toast.error("Please Enter valid email or password...!");
      }
      const resp = await login(data).unwrap();
      console.log("Here", resp);
      if (resp.isSuccess) {
        console.log("Here", resp.authData);
        toast.success("Login Success...!");
        navigate(`${process.env.PUBLIC_URL}/dashboard/`);
      }
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  };

  // console.log("res", result);
  return (
    <div>
      <form onSubmit={SimpleLoginHandle} className="theme-form">
        <H4 className="text-uppercase">{Login}</H4>
        <H6>{LoginDetails}</H6>
        <FormGroup>
          <Label className="pt-0">{YourName}</Label>
          <Input
            type="text"
            defaultValue={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>{Password}</Label>
          <Input
            type="password"
            defaultValue={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </FormGroup>
        <div className="checkbox p-0">
          <Input id="checkbox1" type="checkbox" />
          <Label htmlFor="checkbox1">{RememberMe}</Label>
        </div>
        <FormGroup className="row g-2 mt-3 mb-0">
          <Btn color="primary" className="d-block w-100">
            {isLoading ? "Loading" : Login}
          </Btn>
        </FormGroup>
        <SocialIcons />
      </form>
    </div>
  );
};

export default LoginForm;
