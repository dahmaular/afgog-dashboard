import { Col, Row } from "reactstrap";
import { H6 } from "../../../../../AbstractElements";

interface DetailsProp {
  phone: string | undefined;
  address: string | undefined;
}

const MarkJecnoDeatails = ({ phone, address }: DetailsProp) => {
  return (
    <Col sm="6" lg="4" className=" order-sm-2 order-xl-2">
      <Row>
        <Col md="6">
          <div className="ttl-info text-start ttl-xs-mt">
            <H6>
              <i className="fa fa-phone" />
              &nbsp;&nbsp;&nbsp;Contact Us
            </H6>
            <span>{phone}</span>
          </div>
        </Col>
        <Col md="6">
          <div className="ttl-info text-start ttl-sm-mb-0">
            <H6>
              <i className="fa fa-location-arrow" />
              &nbsp;&nbsp;&nbsp;Location
            </H6>
            <span>{address}</span>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default MarkJecnoDeatails;
