import { Col, Card, CardHeader } from "reactstrap";
import Userprofile from "./Userprofile";
import Info from "./Info";
import { Image } from "../../../../../AbstractElements";

const UserProfileFirst = () => {
  const images = require.context("../../../../../assets/images/user", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };
  return (
    <Col sm="12">
      <Card className=" hovercard text-center">
        <CardHeader>
          <Image
            // body={true}
            src={dynamicImage("bg.jpg")}
            alt="#"
            className="step1"
          />
        </CardHeader>
        <Userprofile />
        <Info />
      </Card>
    </Col>
  );
};

export default UserProfileFirst;
