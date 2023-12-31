import { Fragment } from "react";
import { Col } from "reactstrap";
import { H5, H6 } from "../../../AbstractElements";

const LargeShadows = () => {
  return (
    <Fragment>
      <Col xs="12">
        <H6 className="sub-title ">LargerShadow</H6>
      </Col>
      <Col sm="4">
        <div className="shadow-lg p-25 shadow-showcase text-center">
          <H5 className="m-0 f-18">LargerShadow</H5>
        </div>
      </Col>
      <Col sm="4">
        <div className="shadow-lg p-25 shadow-showcase text-center">
          <H5 className="m-0 f-18">LargerShadow</H5>
        </div>
      </Col>
      <Col sm="4">
        <div className="shadow-lg p-25 shadow-showcase text-center">
          <H5 className="m-0 f-18">LargerShadow</H5>
        </div>
      </Col>
    </Fragment>
  );
};

export default LargeShadows;
