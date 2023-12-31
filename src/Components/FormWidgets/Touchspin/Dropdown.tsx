import React, { useState } from "react";
import { Card, CardBody, Col, Input, InputGroupText} from "reactstrap";
import { Btn } from "../../../AbstractElements";
import HeadingCommon from "../../../Common/HeadingCommon";
import { TouchSpinWithDropdown } from "../../../Constant";

const DropdownTouchspin = () => {
  const [val, setVal] = useState(69);
  const Minus = () => {
    setVal(val - 0.25);
  };
  const Addition = () => {
    setVal(val + 0.25);
  };
  const onChangeHandel = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const number = Number(event.target.value);
    setVal(number);
  };
  const spanText = `Use <code>data-bts-prefix & data-bts-postfix</code>attribute to set Prefix and Postfix to touchspin input with button.`;
  return (
    <Col sm="12" md="6">
      <Card>
        <HeadingCommon dangerouslySetInnerHTML={spanText} Heading={TouchSpinWithDropdown} H5ClassName="card-title"/>
        <CardBody>
          <div className="input-group bootstrap-touchspin">
            <Btn className="bootstrap-touchspin-down" onClick={Minus}>
              <i className="fa fa-minus"></i>
            </Btn>
            <InputGroupText>Pre</InputGroupText>
            <Input className="touchspin" type="text" value={val} onChange={(e) => onChangeHandel(e)}/>
            <InputGroupText>Post</InputGroupText>
            <Btn className="btn-square bootstrap-touchspin-up" onClick={Addition}>
              <i className="fa fa-plus"></i>
            </Btn>
            <div className="dropdown-basic">
              <div className="dropdown">
                <div className="btn-group mb-0 me-0">
                  <Btn className="dropbtn btn-light txt-dark">
                    Action
                    <span><i className="icofont icofont-arrow-down"></i></span>
                  </Btn>
                  <div className="dropdown-content">
                    <a href="#javascript">Action</a>
                    <a href="#javascript">Another Action</a>
                    <a href="#javascript">Something Else Here</a>
                    <div className="dropdown-divider"></div>
                    <a href="#javascript">Separated Link </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default DropdownTouchspin;
