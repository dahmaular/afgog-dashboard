import { ChangeEvent, useCallback, useState } from "react";
import Breadcrumbs from "../../CommonElements/Breadcrumbs";
import MdeEditorContainer from "../../Components/apps/editors/MdeEditor";
import { useUpdateBannerMutation } from "../../Service/homepage/homeService";
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
import { Href, UpdateProfile } from "../../Constant";
import storage from "../../Firebase/firebase";
import {
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";
import { Btn, H3, H4, Image, P } from "../../AbstractElements";
import CommonModal from "../../Common/modal";
import { giveCurrentDateTime } from "../../Components/components/currentDateTime";
import {
  useGetServiceQuery,
  useUpdateServiceMutation,
} from "../../Service/ServicePage/service";
import HeadingCommon from "../../Common/HeadingCommon";

const Success = require("../../assets/images/Successmark.png");

const ServicePage = () => {
  const [title, setTitle] = useState<string>("");
  const [subTitle, setSubTitle] = useState<string>("");
  const [subHeader, setSubHeader] = useState<string>("");
  const [serviceText, setServiceText] = useState<string>("");
  const [serviceTitle, setServiceTitle] = useState<string>("");
  const [serviceText2, setServiceText2] = useState<string>("");
  const [serviceTitle2, setServiceTitle2] = useState<string>("");
  const [serviceText3, setServiceText3] = useState<string>("");
  const [serviceTitle3, setServiceTitle3] = useState<string>("");
  const [header, setHeader] = useState<string>("");
  const [modal, setModal] = useState(false);
  const [showItem2, setShowItem2] = useState<boolean>(false);
  const [showItem3, setShowItem3] = useState<boolean>(false);
  const [showItem4, setShowItem4] = useState<boolean>(false);
  const toggle = () => setModal(!modal);

  const { data: serviceData } = useGetServiceQuery();
  const [updateService, { isLoading }] = useUpdateServiceMutation();

  console.log("service", serviceData);

  const onChange = useCallback((value: string) => {
    // console.log("title", value.target.value);
    setSubHeader(value);
  }, []);

  const onChangeST = useCallback((value: string, type: string) => {
    switch (type) {
      case "text":
        setServiceText(value);
        break;
      case "text2":
        setServiceText2(value);
        break;
      case "text3":
        setServiceText3(value);
        break;
    }
    // setServiceText(value);
  }, []);

  const [imagePreview, setImagePreview] = useState<string>("");
  const [serviceImagePreview, setServiceImagePreview] = useState<string>("");
  const [serviceImagePreview2, setServiceImagePreview2] = useState<string>("");
  const [serviceImagePreview3, setServiceImagePreview3] = useState<string>("");

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
    console.log("data", imagePreview, title, subTitle);
    const data = {
      image: imagePreview || serviceData?.data[0].image,
      title: title || serviceData?.data[0].title,
      subHeader: subTitle || (serviceData?.data[0].subHeader as string),
      header: header || (serviceData?.data[0].header as string),
      serviceImage:
        serviceImagePreview || (serviceData?.data[0].serviceImage as string),
      serviceText: serviceText || (serviceData?.data[0].serviceText as string),
      serviceTitle:
        serviceTitle || (serviceData?.data[0].serviceTitle as string),
      serviceImage2:
        serviceImagePreview2 || (serviceData?.data[0].serviceImage2 as string),
      serviceText2:
        serviceText2 || (serviceData?.data[0].serviceText2 as string),
      serviceTitle2:
        serviceTitle2 || (serviceData?.data[0].serviceTitle2 as string),
      serviceImage3:
        serviceImagePreview3 || (serviceData?.data[0].serviceImage3 as string),
      serviceText3:
        serviceText3 || (serviceData?.data[0].serviceText3 as string),
      serviceTitle3:
        serviceTitle3 || (serviceData?.data[0].serviceTitle3 as string),
      id: serviceData?.data[0]._id as string,
    };
    console.log("data", data);
    try {
      const update = await updateService(data).unwrap();
      console.log("res", update);
      toggle();
    } catch (error) {
      console.log("erro", error);
      // throw error;
    }
  };

  return (
    <div className="page-body">
      <Breadcrumbs parent="Home" title="Service-Section" />
      <Col md="12 mb-3">
        <Row>
          <Col xl="4">
            <Card>
              <CardHeader>
                <H4 className="card-title mb-0">Service Banner</H4>
              </CardHeader>
              <CardBody>
                <form onSubmit={(event) => event.preventDefault()}>
                  <Col md="12 mb-3">
                    <Card>
                      {serviceData?.data[0]?.image && (
                        <Item original={imagePreview} width="250" height="250">
                          {({ ref, open }) => (
                            <a href={Href} onClick={open}>
                              <div>
                                <img
                                  className="img-thumbnail"
                                  ref={
                                    ref as React.MutableRefObject<HTMLImageElement>
                                  }
                                  src={serviceData?.data[0]?.image}
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
                                src={imagePreview || serviceData?.data[0].image}
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
                    <Label>Service Title</Label>
                    <Input
                      type="text"
                      placeholder={serviceData?.data[0]?.title}
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
                        placeholder={serviceData?.data[0]?.header}
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
                      placeholder={serviceData?.data[0]?.subHeader}
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
                          placeholder={serviceData?.data[0]?.serviceTitle}
                          value={serviceTitle}
                          onChange={(e) => setServiceTitle(e.target.value)}
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
                                      serviceData?.data[0].serviceImage
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
                        placeholder={serviceData?.data[0]?.serviceText}
                        editorValue={serviceText}
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
                            placeholder={serviceData?.data[0]?.serviceTitle2}
                            value={serviceTitle2}
                            onChange={(e) => setServiceTitle2(e.target.value)}
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
                                        serviceData?.data[0].serviceImage2
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
                          placeholder={serviceData?.data[0]?.serviceText2}
                          editorValue={serviceText2}
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
                            placeholder={serviceData?.data[0]?.serviceTitle3}
                            value={serviceTitle3}
                            onChange={(e) => setServiceTitle3(e.target.value)}
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
                                        serviceData?.data[0].serviceImage3
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
                          placeholder={serviceData?.data[0]?.serviceText3}
                          editorValue={serviceText3}
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
              <P>Service Page Updated Successfully</P>
            </div>
          </Col>
        </Row>
      </CommonModal>
    </div>
  );
};

export default ServicePage;
