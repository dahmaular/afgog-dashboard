import { Card, CardBody, Col, Row } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { CKEditorExample } from "../../../../Constant";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CkEditorContainer = () => {
  return (
    <Row>
      <Col sm="12">
        <Card>
          <HeadingCommon Heading={CKEditorExample} />
          <CardBody>
            {/* <CKEditor
              editor={ClassicEditor}
              data="<p>Hello from CKEditor 5!</p>"
            /> */}
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default CkEditorContainer;
