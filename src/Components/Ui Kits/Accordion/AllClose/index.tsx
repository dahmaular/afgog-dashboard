import { useState } from "react";
import { Accordion, Col } from "react-bootstrap";
import { Card, CardBody, CardHeader, Collapse } from "reactstrap";
import { Btn, H5 } from "../../../../AbstractElements";
import DynamicAccordion from "./DynamicAccordion";
import HeadingCommon from "../../../../Common/HeadingCommon";

const AllClose = () => {
  const span = `Using the <a href="#javascript">card</a> component, you can extend
  the default collapse behavior to create an accordion.`;
  const [isOpen, setIsOpen] = useState<number | null>(0);
  const Id = [2, 3, 4, 5];
  const toggle = (id: number) =>
    isOpen === id ? setIsOpen(null) : setIsOpen(id);
  return (
    <Col sm="12" xl="6">
      <Accordion defaultActiveKey="0">
        <Card>
          <HeadingCommon
            Heading="All Close Accordion"
            dangerouslySetInnerHTML={span}
          />
          <CardBody>
            <div className="default-according" id="accordion">
              <Card>
                <HeadingCommon
                  H5ClassName="mb-0"
                  Btn={true}
                  span={true}
                  BtnclassName="btn-link"
                  BtnColor="default"
                  BtnOnClick={() => toggle(1)}
                  BtnText="CollapsibleGroupItem"
                  BtnSpanClass="digits"
                  BtnSpanText={`#1`}
                />
                <Collapse isOpen={isOpen === 1}>
                  <CardBody>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  </CardBody>
                </Collapse>
              </Card>
              <DynamicAccordion toggle={toggle} isOpen={isOpen} id={Id} />
            </div>
          </CardBody>
        </Card>
      </Accordion>
    </Col>
  );
};
export default AllClose;
