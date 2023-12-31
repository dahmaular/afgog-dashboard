import { Btn, H5, H6, P } from '../../../../AbstractElements';
import { Cancel, COD, Fast, Free, InlineStyle, Local, Standard, Submit } from '../../../../Constant';
import { Card, CardBody, CardFooter, CardHeader, Col, Form, Input, Label, Row } from 'reactstrap';

const InlineStyles = () => {
  return (
      <Col sm="12">
        <Card>
          <CardHeader>
            <H5>{InlineStyle}</H5><span>{'For Create inline megaoption add'} <code>{'.mega-inline'}</code> {'class in form tag'}</span>
          </CardHeader>
          <CardBody className="megaoptions-border-space-sm">
            <Form className="mega-inline">
              <Row>
                <Col sm="6">
                  <Card>
                    <div  className="p-20 d-flex">
                      <div className="radio radio-primary me-3">
                        <Input id="radio19" type="radio" name="radio1" value="option1" />
                        <Label for="radio19"></Label>
                      </div>
                      <div className='flex-grow-1'>
                        <H6  className= 'mt-0 mega-title-badge'>{COD}<span className="badge badge-primary pull-right digits">{'50 INR'}</span></H6>
                        <P>{'Estimated 1 Day Shipping ( Duties end tax may be due delivery )'}</P>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card>
                    <div className="p-20 d-flex">
                      <div className="radio radio-secondary me-3">
                        <Input id="radio20" type="radio" name="radio1" value="option1" />
                        <Label for="radio20"></Label>
                      </div>
                      <div className='flex-grow-1'>
                        <H6  className= 'mt-0 mega-title-badge' >{Fast}<span className="badge badge-secondary pull-right digits">{'50 INR'}</span></H6>
                        <P>{'Estimated 1 Day Shipping ( Duties end tax may be due delivery )'}</P>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card>
                    <div  className="p-20 d-flex">
                      <div className="radio radio-secondary me-3">
                        <Input id="radio21" type="radio" name="radio1" value="option1" />
                        <Label for="radio21"></Label>
                      </div>
                      <div className='flex-grow-1'>
                        <H6  className= 'mt-0 mega-title-badge' >{Standard}<span className="badge badge-secondary pull-right digits">{'80 INR'}</span></H6>
                        <P>{'Estimated 3 Day Shipping ( Duties end taxes may be due upon delivery )'}</P>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card>
                    <div className="p-20 d-flex">
                      <div className="radio radio-primary me-3">
                        <Input id="radio22" type="radio" name="radio1" value="option1" />
                        <Label for="radio22"></Label>
                      </div>
                      <div className='flex-grow-1'>
                        <H6  className= 'mt-0 mega-title-badge' >{Local} <span className="badge badge-primary pull-right digits">{Free}</span></H6>
                        <P>{'Estimated 15 Day Shipping ( Duties end taxes may be due upon delivery )'}</P>
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Form>
          </CardBody>
          <CardFooter className="text-end">
            <Btn color= 'primary'  className= 'm-r-15' type= 'submit' >{Submit}</Btn>
            <Btn color= 'light'  type= 'submit' >{Cancel}</Btn>
          </CardFooter>
        </Card>
      </Col>
  );
};
export default InlineStyles;