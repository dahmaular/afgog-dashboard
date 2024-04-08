import { Card, CardBody, CardFooter, Col, Row } from "reactstrap";
import { Btn, H5, H6, LI, UL } from "../../../../AbstractElements";
import { datas } from "../../../../Data/DashBoard/BusinessDashboard/SalesReport";
import { Link, useNavigate } from "react-router-dom";
// import { useOrdersQuery } from "../../../../Service/about/service";

const SalesReport = () => {
  let navigate = useNavigate();
  return (
    <CardFooter className=" p-0">
      <Row className=" growth-revenue-footer">
        {datas?.map((data, index) => (
          <Col xs="6" key={index}>
            <Card className="ecommerce-widget mb-0">
              <CardBody
                className={`support-ticket-font ${data.cardBodyClassName}`}
              >
                <div className="d-flex">
                  <div className="data-left-ticket">
                    {/* <span className="f-12" style={{ marginRight: 15 }}>
                      {data.Heading}
                    </span> */}
                    <Btn
                      color="primary"
                      type="button"
                      className="me-2"
                      onClick={() => navigate(data.page)}
                    >
                      <H5 className="total-num">
                        {/* <span className="me-1">₦</span> */}
                        <span className="counter" style={{ color: "white" }}>
                          {" "}
                          {data.Heading}
                        </span>
                      </H5>
                    </Btn>
                  </div>
                  {/* <div className="data-right-ticket">
                    <div className="text-md-end">
                      <UL className="simple-list">
                        <LI>
                          <span className="f-12">{data.firstLi}</span>
                        </LI>
                        <LI>
                          <H6 className="mb-0">{data.secondLi}</H6>
                        </LI>
                      </UL>
                    </div>
                  </div> */}
                </div>
                <div className="progress-showcase">
                  <div className="progress sm-progress-bar">
                    <div
                      className={`progress-bar ${data.ProgressBarColor}`}
                      role="progressbar"
                      style={{ width: "100%" }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </CardFooter>
  );
};
export default SalesReport;
