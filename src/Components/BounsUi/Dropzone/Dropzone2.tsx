import React, { Fragment } from 'react';
import { Col, Card, CardBody, Form, CardHeader } from 'reactstrap';
import Dropzone from 'react-dropzone-uploader';
import { H5 } from '../../../AbstractElements';
import { ToastContainer } from 'react-toastify';

const Dropzone2 = (props:any) => {
  const { getUploadParams = '', handleChangeStatus = '', handleSubmit = '' } = props;
  return (
    <Fragment>
      <Col sm="12">
        <Card>
          <CardHeader >
            <H5>Multi Image Upload</H5>
          </CardHeader>
          <CardBody>
            <Form>
              <ToastContainer />
              <div className="dz-message needsclick">
                <Dropzone
                  getUploadParams={getUploadParams}
                  onChangeStatus={handleChangeStatus}
                  onSubmit={handleSubmit}
                  accept="image/*"
                />
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default Dropzone2;