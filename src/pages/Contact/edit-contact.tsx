import { ChangeEvent, useCallback, useState } from "react";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { Item } from "react-photoswipe-gallery";

import {
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";
import { giveCurrentDateTime } from "../../Components/components/currentDateTime";
import storage from "../../Firebase/firebase";
import Breadcrumbs from "../../CommonElements/Breadcrumbs";
import { Btn, H4, P } from "../../AbstractElements";
import { Href, UpdateProfile } from "../../Constant";
import MdeEditorContainer from "../../Components/apps/editors/MdeEditor";
import HeadingCommon from "../../Common/HeadingCommon";
import CommonModal from "../../Common/modal";
import {
  useGetContactQuery,
  useUpdateContactMutation,
} from "../../Service/contact/service";

const Success = require("../../assets/images/Successmark.png");

const ContactPage = () => {
  const [title, setTitle] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [location2, setLocation2] = useState<string>("");
  const [location3, setLocation3] = useState<string>("");
  const [title2, setTitle2] = useState<string>("");
  const [title3, setTitle3] = useState<string>("");
  const [contactTitle, setContactTitle] = useState<string>("");
  const [contactPhone, setContactPhone] = useState<string>("");
  const [contactTitle2, setContactTitle2] = useState<string>("");
  const [contactPhone2, setContactPhone2] = useState<string>("");
  const [contactTitle3, setContactTitle3] = useState<string>("");
  const [contactPhone3, setContactPhone3] = useState<string>("");
  const [header, setHeader] = useState<string>("");
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const { data: contact } = useGetContactQuery();
  const [updateContact] = useUpdateContactMutation();

  console.log("service", contact);

  //   const onChange = useCallback((value: string) => {
  //     // console.log("title", value.target.value);
  //     setSubHeader(value);
  //   }, []);

  //   const onChangeST = useCallback((value: string, type: string) => {
  //     switch (type) {
  //       case "text":
  //         setItemText(value);
  //         break;
  //       case "text2":
  //         setItemText2(value);
  //         break;
  //       case "text3":
  //         setItemText3(value);
  //         break;
  //       case "text4":
  //         setItemText4(value);
  //         break;
  //     }
  //   }, []);

  const onSubmit = async () => {
    // console.log("data", imagePreview, title, subTitle);
    const data = {
      title: title || (contact?.data[0]?.title as string),
      location: location || (contact?.data[0]?.location as string),
      title2: title2 || (contact?.data[0]?.title2 as string),
      location2: location2 || (contact?.data[0]?.location2 as string),
      title3: title3 || (contact?.data[0]?.title3 as string),
      location3: location3 || (contact?.data[0]?.location3 as string),
      contactTitle: contactTitle || contact?.data[0]?.contactTitle,
      contactPhone: contactPhone || contact?.data[0]?.contactPhone,
      contactTitle2:
        contactTitle2 || (contact?.data[0]?.contactTitle2 as string),
      contactPhone2:
        contactPhone2 || (contact?.data[0]?.contactPhone2 as string),
      contactTitle3:
        contactTitle3 || (contact?.data[0]?.contactTitle3 as string),
      contactPhone3:
        contactPhone3 || (contact?.data[0]?.contactPhone3 as string),
      id: contact?.data[0]?._id as string,
    };
    console.log("data", data);
    // try {
    //   const update = await updateContact(data).unwrap();
    //   console.log("res", update);
    //   toggle();
    // } catch (error) {
    //   console.log("erro", error);
    // }
  };

  return (
    <div className="page-body">
      <Breadcrumbs parent="Home" title="Contact-Section" />
      <Col md="12 mb-3">
        <Row>
          <Col xl="4">
            <Card>
              <CardHeader>
                <H4 className="card-title mb-0">Phone Contact Address</H4>
              </CardHeader>
              <CardBody>
                <form onSubmit={(event) => event.preventDefault()}>
                  <Col md="12 mb-3"></Col>
                  <FormGroup>
                    <Label>{contact?.data[0]?.contactTitle}</Label>
                    <Input
                      type="text"
                      placeholder={contact?.data[0]?.contactPhone}
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>{contact?.data[0]?.contactTitle2}</Label>
                    <Input
                      type="text"
                      placeholder={contact?.data[0]?.contactPhone2}
                      value={contactPhone2}
                      onChange={(e) => setContactPhone2(e.target.value)}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label>{contact?.data[0]?.contactTitle3}</Label>
                    <Input
                      type="text"
                      placeholder={contact?.data[0]?.contactPhone3}
                      value={contactPhone3}
                      onChange={(e) => setContactPhone3(e.target.value)}
                    />
                  </FormGroup>
                </form>
              </CardBody>
            </Card>
          </Col>
          <Col xl="8">
            <form className="card">
              <CardHeader>
                <H4 className="card-title mb-0">Office Address</H4>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="8">
                    <FormGroup>
                      <Label>Office 1</Label>
                      <Input
                        type="text"
                        placeholder={contact?.data[0]?.title}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="12">
                    <FormGroup>
                      <Label>Address</Label>
                      <Input
                        type="text"
                        placeholder={contact?.data[0]?.location}
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </FormGroup>
                  </Col>

                  <Col md="8">
                    <FormGroup>
                      <Label>Office 2</Label>
                      <Input
                        type="text"
                        placeholder={contact?.data[0]?.title2}
                        value={title2}
                        onChange={(e) => setTitle2(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="12">
                    <FormGroup>
                      <Label>Address</Label>
                      <Input
                        type="text"
                        placeholder={contact?.data[0]?.location2}
                        value={location2}
                        onChange={(e) => setLocation2(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="8">
                    <FormGroup>
                      <Label>Office 3</Label>
                      <Input
                        type="text"
                        placeholder={contact?.data[0]?.title3}
                        value={title3}
                        onChange={(e) => setTitle3(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="12">
                    <FormGroup>
                      <Label>Address</Label>
                      <Input
                        type="text"
                        placeholder={contact?.data[0]?.location3}
                        value={location3}
                        onChange={(e) => setLocation3(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter className="text-start">
                <Btn color="primary" onClick={onSubmit}>
                  Update Contact
                </Btn>
              </CardFooter>
            </form>
          </Col>
        </Row>
      </Col>
      <CommonModal
        centered="centered"
        isOpen={modal}
        title="Info"
        toggler={toggle}
      >
        <Row className="col-md-6 offset-md-3">
          <Col>
            <img
              src={Success}
              alt="Success"
              width={90}
              height={90}
              className="col-md-6 offset-md-3 mb-4"
            />
            <div style={{ alignItems: "center", textAlign: "center" }}>
              <P>Contact Page Updated Successfully</P>
            </div>
          </Col>
        </Row>
      </CommonModal>
    </div>
  );
};

export default ContactPage;
