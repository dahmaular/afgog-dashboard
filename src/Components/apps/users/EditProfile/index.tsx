import { Container, Row } from "reactstrap";
import EditMyProfile from "./EditMyProfile";
import EditprofileForm from "./EditprofileForm";
import AddProjectsAndUpload from "./AddProjectsAndUpload";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux-toolkit/store";

const EditProfileContainer = () => {
  const {
    user: { authData },
  } = useSelector((state: RootState) => state);

  console.log(authData);
  return (
    <Container fluid>
      <div className="edit-profile">
        <Row>
          <EditMyProfile fName={authData.firstName} lName={authData.lastName} />
          <EditprofileForm user={authData} />
          {/* <AddProjectsAndUpload /> */}
        </Row>
      </div>
    </Container>
  );
};

export default EditProfileContainer;
