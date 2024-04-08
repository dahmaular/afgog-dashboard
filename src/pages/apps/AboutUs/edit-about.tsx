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

import {
  useGetAboutQuery,
  useUpdateAboutMutation,
} from "../../../Service/about/service";
import storage from "../../../Firebase/firebase";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import { Href, UpdateProfile } from "../../../Constant";
import MdeEditorContainer from "../../../Components/apps/editors/MdeEditor";
import { giveCurrentDateTime } from "../../../Components/components/currentDateTime";
import { Btn, H4, P } from "../../../AbstractElements";
import CommonModal from "../../../Common/modal";
import HeadingCommon from "../../../Common/HeadingCommon";

const Success = require("../../../assets/images/Successmark.png");

const AboutPage = () => {
  const [title, setTitle] = useState<string>("");
  const [subHeader, setSubHeader] = useState<string>("");
  const [itemTitle, setItemTitle] = useState<string>("");
  const [itemTitle2, setItemTitle2] = useState<string>("");
  const [itemTitle3, setItemTitle3] = useState<string>("");
  const [itemTitle4, setItemTitle4] = useState<string>("");
  const [itemText, setItemText] = useState<string>("");
  const [itemText2, setItemText2] = useState<string>("");
  const [itemText3, setItemText3] = useState<string>("");
  const [itemText4, setItemText4] = useState<string>("");
  const [serviceTitle3, setServiceTitle3] = useState<string>("");
  const [header, setHeader] = useState<string>("");
  const [modal, setModal] = useState(false);
  const [showItem2, setShowItem2] = useState<boolean>(false);
  const [showItem3, setShowItem3] = useState<boolean>(false);
  const [showItem4, setShowItem4] = useState<boolean>(false);
  const toggle = () => setModal(!modal);

  const { data: about } = useGetAboutQuery();
  const [updateAbout] = useUpdateAboutMutation();

  console.log("service", about);

  const onChange = useCallback((value: string) => {
    // console.log("title", value.target.value);
    setSubHeader(value);
  }, []);

  const onChangeST = useCallback((value: string, type: string) => {
    switch (type) {
      case "text":
        setItemText(value);
        break;
      case "text2":
        setItemText2(value);
        break;
      case "text3":
        setItemText3(value);
        break;
      case "text4":
        setItemText4(value);
        break;
    }
    // setServiceText(value);
  }, []);

  const [imagePreview, setImagePreview] = useState<string>("");
  const [serviceImagePreview, setServiceImagePreview] = useState<string>("");
  const [serviceImagePreview2, setServiceImagePreview2] = useState<string>("");
  const [serviceImagePreview3, setServiceImagePreview3] = useState<string>("");
  const [serviceImagePreview4, setServiceImagePreview4] = useState<string>("");

  const handleOnChange = async (
    event: ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    const dateTime = giveCurrentDateTime();
    console.log(event.target.files);
    if (event?.target?.files === null) {
      // toastifyError("Please select an image");
      return;
    }
    const image = event.target.files[0];
    const imageRef = storageRef(storage, `products/${dateTime}+${image.name}`);

    uploadBytes(imageRef, image)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            switch (type) {
              case "banner":
                setImagePreview(url);
                break;
              case "image1":
                setServiceImagePreview(url);
                break;
              case "image2":
                setServiceImagePreview2(url);
                break;
              case "image3":
                setServiceImagePreview3(url);
                break;
              case "image4":
                setServiceImagePreview4(url);
                break;
            }
            // setImagePreview(url);
            // console.log("Url", url);
          })
          .catch((error) => {
            // toastifyError(error.message);
            console.log("error", error);
          });
      })
      .catch((error) => {
        // toastifyError(error.message);
        console.log("catch error", error);
      });
  };

  const onSubmit = async () => {
    // console.log("data", imagePreview, title, subTitle);
    const data = {
      image: imagePreview || (about?.data[0].image as string),
      title: title || (about?.data[0].title as string),
      subHeader: subHeader || (about?.data[0].subHeader as string),
      header: header || (about?.data[0].header as string),
      itemImage: serviceImagePreview || (about?.data[0].itemImage as string),
      itemText: itemText || (about?.data[0].itemText as string),
      itemTitle: itemTitle || (about?.data[0].itemTitle as string),
      itemImage2: serviceImagePreview2 || (about?.data[0].itemImage2 as string),
      itemText2: itemText2 || (about?.data[0].itemText2 as string),
      itemTitle2: itemTitle2 || (about?.data[0].itemTitle2 as string),
      itemImage3: serviceImagePreview3 || (about?.data[0].itemImage3 as string),
      itemText3: itemText3 || (about?.data[0].itemText3 as string),
      itemTitle3: itemTitle3 || (about?.data[0].itemTitle3 as string),
      itemImage4: serviceImagePreview4 || (about?.data[0].itemImage4 as string),
      itemText4: itemText4 || (about?.data[0].itemText4 as string),
      itemTitle4: itemTitle4 || (about?.data[0].itemTitle4 as string),
      id: about?.data[0]._id as string,
    };
    console.log("data", data);
    try {
      const update = await updateAbout(data).unwrap();
      console.log("res", update);
      toggle();
    } catch (error) {
      console.log("erro", error);
    }
  };

  return (
    <div className="page-body">
      <Breadcrumbs parent="Home" title="About-Section" />
      <Col md="12 mb-3">
        <Row>
          <Col xl="4">
            <Card>
              <CardHeader>
                <H4 className="card-title mb-0">AboutUs Banner</H4>
              </CardHeader>
              <CardBody>
                <form onSubmit={(event) => event.preventDefault()}>
                  <Col md="12 mb-3">
                    <Card>
                      {about?.data[0]?.image && (
                        <Item original={imagePreview} width="250" height="250">
                          {({ ref, open }) => (
                            <a href={Href} onClick={open}>
                              <div>
                                <img
                                  className="img-thumbnail"
                                  ref={
                                    ref as React.MutableRefObject<HTMLImageElement>
                                  }
                                  src={about?.data[0]?.image}
                                  alt=""
                                  style={{ width: "300px", height: "200px" }}
                                />
                              </div>
                            </a>
                          )}
                        </Item>
                      )}
                    </Card>
                  </Col>
                  <Card>
                    <Label htmlFor="exampleInputPassword2">
                      Choose new banner
                    </Label>
                    {/* <HeadingCommon Heading="Banner" /> */}
                    {imagePreview && (
                      <Item original={imagePreview} width="150" height="150">
                        {({ ref, open }) => (
                          <a href={Href} onClick={open}>
                            <div>
                              <img
                                className="img-thumbnail"
                                ref={
                                  ref as React.MutableRefObject<HTMLImageElement>
                                }
                                src={imagePreview || about?.data[0].image}
                                alt=""
                                style={{ width: "300px", height: "200px" }}
                              />
                            </div>
                          </a>
                        )}
                      </Item>
                    )}
                    <Col sm="6">
                      <Input
                        type="file"
                        name="file"
                        aria-label="file example"
                        required
                        onChange={(e) => handleOnChange(e, "banner")}
                      />
                    </Col>

                    <div className="valid-feedback">{"Looks good!"}</div>
                  </Card>
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
                    <Label>AboutUs Title</Label>
                    <Input
                      type="text"
                      placeholder={about?.data[0]?.title}
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </FormGroup>

                  {/* <div className="form-footer">
                    <Btn color="primary" className="d-block w-100">
                      Update Password
                    </Btn>
                  </div> */}
                </form>
              </CardBody>
            </Card>
          </Col>
          <Col xl="8">
            <form className="card">
              <CardHeader>
                <H4 className="card-title mb-0">Service Content</H4>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="5">
                    <FormGroup>
                      <Label>Header</Label>
                      <Input
                        type="text"
                        placeholder={about?.data[0]?.header}
                        value={header}
                        onChange={(e) => setHeader(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  {/* <Col sm="6" md="3">
                    <FormGroup>
                      <Label>Service Item Title</Label>
                      <Input
                        type="text"
                        placeholder="Home Address"
                        // value={user.businessAddress}
                        // onChange={(e) => setBusinessAdd(e.target.value)}
                      />
                    </FormGroup>
                  </Col> */}
                  {/* <Col sm="6" md="4">
              <FormGroup>
                <Label>{EmailAddress}</Label>
                <Input type="email" placeholder="Email" />
              </FormGroup>
            </Col> */}
                  {/* <Col sm="6" md="4">
                    <FormGroup>
                      <Label>Header</Label>
                      <Input
                        type="text"
                        placeholder={serviceData?.data[0].header}
                        // value={user.accountNumber}
                        // onChange={(e) => setAccountNumber(e.target.value)}
                      />
                    </FormGroup>
                  </Col> */}
                  <Col md="12">
                    <MdeEditorContainer
                      title="Sub Header"
                      placeholder={about?.data[0]?.subHeader}
                      editorValue={subHeader}
                      onChange={(e) => onChange(e)}
                      autoFocusEditor
                    />
                  </Col>
                  <div>
                    <HeadingCommon Heading="Service Item" />

                    <Col sm="6" md="6" className="mt-4">
                      <FormGroup>
                        <Label>Service Item Title</Label>
                        <Input
                          type="text"
                          placeholder={about?.data[0]?.itemTitle}
                          value={itemTitle}
                          onChange={(e) => setItemTitle(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                    <Col sm="6" md="6" className="mt-4">
                      <Card>
                        <Label htmlFor="exampleInputPassword2">
                          Service Image
                        </Label>
                        {/* <HeadingCommon Heading="Banner Image" /> */}
                        {serviceImagePreview && (
                          <Item
                            original={serviceImagePreview}
                            width="250"
                            height="250"
                          >
                            {({ ref, open }) => (
                              <a href={Href} onClick={open}>
                                <div>
                                  <img
                                    className="img-thumbnail"
                                    ref={
                                      ref as React.MutableRefObject<HTMLImageElement>
                                    }
                                    src={
                                      serviceImagePreview ||
                                      about?.data[0].itemImage2
                                    }
                                    alt=""
                                    style={{ width: "300px", height: "200px" }}
                                  />
                                </div>
                              </a>
                            )}
                          </Item>
                        )}
                        <Col sm="3">
                          <Input
                            type="file"
                            name="file"
                            aria-label="file example"
                            required
                            onChange={(e) => handleOnChange(e, "image1")}
                          />
                        </Col>

                        <div className="valid-feedback">{"Looks good!"}</div>
                      </Card>
                    </Col>

                    <Col md="12">
                      <MdeEditorContainer
                        title="Service Item Text"
                        placeholder={about?.data[0]?.itemText}
                        editorValue={itemText}
                        onChange={(e) => onChangeST(e, "text")}
                        autoFocusEditor
                      />
                    </Col>
                  </div>
                  <CardFooter className="text-end">
                    <Btn
                      color="primary"
                      onClick={() => setShowItem2(!showItem2)}
                    >
                      Add Item 2
                    </Btn>
                  </CardFooter>
                  {showItem2 && (
                    <div>
                      <HeadingCommon Heading="Service Item 2" />

                      <Col sm="6" md="6" className="mt-4">
                        <FormGroup>
                          <Label>Service Item Title</Label>
                          <Input
                            type="text"
                            placeholder={about?.data[0]?.itemTitle2}
                            value={itemTitle2}
                            onChange={(e) => setItemTitle2(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col sm="6" md="6" className="mt-4">
                        <Card>
                          <Label htmlFor="exampleInputPassword2">
                            Service Image
                          </Label>
                          {/* <HeadingCommon Heading="Banner Image" /> */}
                          {serviceImagePreview2 && (
                            <Item
                              original={serviceImagePreview2}
                              width="250"
                              height="250"
                            >
                              {({ ref, open }) => (
                                <a href={Href} onClick={open}>
                                  <div>
                                    <img
                                      className="img-thumbnail"
                                      ref={
                                        ref as React.MutableRefObject<HTMLImageElement>
                                      }
                                      src={
                                        serviceImagePreview2 ||
                                        about?.data[0].itemImage2
                                      }
                                      alt=""
                                      style={{
                                        width: "300px",
                                        height: "200px",
                                      }}
                                    />
                                  </div>
                                </a>
                              )}
                            </Item>
                          )}
                          <Col sm="3">
                            <Input
                              type="file"
                              name="file"
                              aria-label="file example"
                              required
                              onChange={(e) => handleOnChange(e, "image2")}
                            />
                          </Col>

                          <div className="valid-feedback">{"Looks good!"}</div>
                        </Card>
                      </Col>

                      <Col md="12">
                        <MdeEditorContainer
                          title="Service Item Text"
                          placeholder={about?.data[0]?.itemText2}
                          editorValue={itemText2}
                          onChange={(e) => onChangeST(e, "text2")}
                          autoFocusEditor
                        />
                      </Col>
                    </div>
                  )}

                  {
                    <CardFooter className="text-end">
                      <Btn
                        color="primary"
                        onClick={() => setShowItem3(!showItem3)}
                      >
                        Add Item 3
                      </Btn>
                    </CardFooter>
                  }
                  {showItem3 && (
                    <div>
                      <HeadingCommon Heading="Service Item 3" />

                      <Col sm="6" md="6" className="mt-4">
                        <FormGroup>
                          <Label>Service Item Title</Label>
                          <Input
                            type="text"
                            placeholder={about?.data[0]?.itemTitle3}
                            value={itemTitle3}
                            onChange={(e) => setItemTitle3(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col sm="6" md="6" className="mt-4">
                        <Card>
                          <Label htmlFor="exampleInputPassword2">
                            Service Image
                          </Label>
                          {/* <HeadingCommon Heading="Banner Image" /> */}
                          {serviceImagePreview3 && (
                            <Item
                              original={serviceImagePreview3}
                              width="250"
                              height="250"
                            >
                              {({ ref, open }) => (
                                <a href={Href} onClick={open}>
                                  <div>
                                    <img
                                      className="img-thumbnail"
                                      ref={
                                        ref as React.MutableRefObject<HTMLImageElement>
                                      }
                                      src={
                                        serviceImagePreview3 ||
                                        about?.data[0].itemImage3
                                      }
                                      alt=""
                                      style={{
                                        width: "300px",
                                        height: "200px",
                                      }}
                                    />
                                  </div>
                                </a>
                              )}
                            </Item>
                          )}
                          <Col sm="3">
                            <Input
                              type="file"
                              name="file"
                              aria-label="file example"
                              required
                              onChange={(e) => handleOnChange(e, "image3")}
                            />
                          </Col>

                          <div className="valid-feedback">{"Looks good!"}</div>
                        </Card>
                      </Col>

                      <Col md="12">
                        <MdeEditorContainer
                          title="Service Item Text"
                          placeholder={about?.data[0]?.itemText3}
                          editorValue={itemText3}
                          onChange={(e) => onChangeST(e, "text3")}
                          autoFocusEditor
                        />
                      </Col>
                    </div>
                  )}
                </Row>
              </CardBody>
              <CardFooter className="text-start">
                <Btn color="primary" onClick={onSubmit}>
                  {UpdateProfile}
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
              <P>About Page Updated Successfully</P>
            </div>
          </Col>
        </Row>
      </CommonModal>
    </div>
  );
};

export default AboutPage;
