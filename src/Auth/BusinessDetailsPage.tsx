import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { H2, P } from "../AbstractElements";
import {
  AccountMissed,
  NewUser,
  OneOfUs,
  SignIn,
  SignUp,
  SignUpOpportunities,
} from "../Constant";
import { toggleLoginForm } from "../Service";
import BusinessDetailsForm from "./BusinessForm";

const BusinessDetailsPage = () => {
  const [signInOpen, setSignInOpen] = useState(false);
  return (
    <div className={`cont text-center ${signInOpen ? "s--signup" : ""} mt-5`}>
      {/* <LoginForm /> */}
      <BusinessDetailsForm />
      <div className="sub-cont">
        <div className="img">
          <div className="img__text m--up">
            <H2>{NewUser}</H2>
            <P>{SignUpOpportunities}</P>
          </div>
          <div className="img__text m--in">
            <H2>{OneOfUs}</H2>
            <P>{AccountMissed}</P>
          </div>
          {/* <div className="img__btn" onClick={toggleLoginForm}>
            <span className="m--up" onClick={() => setSignInOpen(true)}>
              {SignUp}
            </span>
            <span className="m--in" onClick={() => setSignInOpen(false)}>
              {SignIn}
            </span>
          </div> */}
        </div>
      </div>
      <div className="mt-5"></div>
    </div>
  );
};

export default BusinessDetailsPage;
