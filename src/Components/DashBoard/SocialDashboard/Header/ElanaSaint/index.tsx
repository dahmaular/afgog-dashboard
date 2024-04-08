import { Card, CardHeader, Col } from "reactstrap";
import { H5, Image, P } from "../../../../../AbstractElements";
import { WelcomeSocial, paragraph } from "../../../../../Constant";
import ElanaSaintBody from "./ElanaSaintBody";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../app/store";

const ElanaSaint = () => {
  const images = require.context("../../../../../assets/images/user", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };
  const {
    user: { authData },
  } = useSelector((state: RootState) => state);

  console.log("user", authData);
  return (
    <Col xl="8" className="xl-60 box-col-7">
      <div>
        <H5 className="social-title">
          {WelcomeSocial}, {authData.firstName}
        </H5>
        {/* <P>{paragraph}</P> */}
      </div>
      <Card className=" card-with-border resolve-complain insta-profile">
        <CardHeader className=" card-no-border">
          <div className="d-flex">
            <Image
              className="img-90 align-top m-r-15 rounded-circle"
              src={dynamicImage("2.png")}
              alt="ElanaSaint"
            />
            <ElanaSaintBody
              name={`${authData.firstName} ${authData.lastName}`}
            />
          </div>
        </CardHeader>
      </Card>
    </Col>
  );
};

export default ElanaSaint;
