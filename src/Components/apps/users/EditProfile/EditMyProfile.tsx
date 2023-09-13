import {
  Card,
  Col,
  CardHeader,
  CardBody,
  Row,
  Label,
  Input,
  FormGroup,
} from "reactstrap";
import { Btn, H3, H4, H6, Image, P } from "../../../../AbstractElements";
import {
  AboutMe,
  Designer,
  EmailAddress,
  MarkJecno,
  MyProfile,
  Password,
  Save,
  Website,
} from "../../../../Constant";
import { dynamicImage } from "../../../../Service";

interface ProfileProps {
  fName: string | undefined;
  lName: string | undefined;
}

const EditMyProfile = ({ fName, lName }: ProfileProps) => {
  return (
    <Col xl="4">
      <Card>
        <CardHeader>
          <H4 className="card-title mb-0">{MyProfile}</H4>
        </CardHeader>
        <CardBody>
          <form onSubmit={(event) => event.preventDefault()}>
            <Row className="mb-2">
              <div className="col-auto">
                <Image
                  className="img-70 rounded-circle"
                  alt="edit-user"
                  src={dynamicImage("user/user.png")}
                />
              </div>
              <Col>
                {" "}
                <H3 className="mb-1">{fName}</H3>{" "}
                <P className="mb-4">{lName}</P>
              </Col>
            </Row>
            {/* <FormGroup>
              <H6 className="form-label">{AboutMe}</H6>
              <textarea
                rows={5}
                className="form-control"
                defaultValue={
                  "On the other hand, we denounce with righteous indignation"
                }
              />
            </FormGroup> */}
            {/* <FormGroup>
              <Label>{EmailAddress}</Label>
              <Input placeholder="your-email@domain.com" />
            </FormGroup> */}
            <FormGroup>
              <Label>Current Password</Label>
              <Input type="password" defaultValue="password" />
            </FormGroup>
            <FormGroup>
              <Label>New Password</Label>
              <Input type="password" defaultValue="password" />
            </FormGroup>
            <div className="form-footer">
              <Btn color="primary" className="d-block w-100">
                Update Password
              </Btn>
            </div>
          </form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default EditMyProfile;
