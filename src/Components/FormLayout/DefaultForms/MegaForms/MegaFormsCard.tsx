import { Card, Col } from "reactstrap";
import { MegaForm } from "../../../../Constant";
import MegaFormCardBody from "./MegaFormCardBody";
import MegaFormCardFooter from "./MegaFormCardFooter";
import HeadingCommon from "../../../../Common/HeadingCommon";

const MegaFormsCard = () => {
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={MegaForm} />
        <MegaFormCardBody />
        <MegaFormCardFooter />
      </Card>
    </Col>
  );
};

export default MegaFormsCard;
