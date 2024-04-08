import { Card, CardBody, CardHeader, Container, Row } from "reactstrap";
import { Col } from "react-bootstrap";
import Registration from "./Registration";
import { useState } from "react";
import { Stepper, Step } from "react-form-stepper";
import { H5 } from "../../../../AbstractElements";
import ProductStep2 from "./ProductStep2";
import ProductStep3 from "./ProductStep3";

const AddProductContainer = () => {
  const [goSteps, setGoSteps] = useState(0);
  return (
    <Container fluid={true}>
      <Row>
        <Col sm="12">
          <Card>
            <CardHeader>
              <H5>Create new product</H5>
            </CardHeader>
            <CardBody>
              {/* <Stepper activeStep={goSteps}>
                <Step onClick={() => setGoSteps(0)} label="StepOne" />
                <Step onClick={() => setGoSteps(1)} label="StepTwo" />
                <Step onClick={() => setGoSteps(2)} label="StepThree" />
              </Stepper> */}
              {goSteps === 0 && <Registration setGoSteps={setGoSteps} />}
              {goSteps === 1 && (
                <ProductStep2 goSteps={goSteps} setGoSteps={setGoSteps} />
              )}
              {goSteps === 2 && (
                <ProductStep3 goSteps={goSteps} setGoSteps={setGoSteps} />
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default AddProductContainer;
