import { ChangeEvent, useCallback, useState } from "react";
import Breadcrumbs from "../../CommonElements/Breadcrumbs";
import CkEditorContainer from "../../Components/apps/editors/CkEditor";
import MdeEditorContainer from "../../Components/apps/editors/MdeEditor";
import {
  useGetBannerQuery,
  useUpdateBannerMutation,
} from "../../Service/homepage/homeService";
import { Card, Col, Input, Label, Row } from "reactstrap";
import { Item } from "react-photoswipe-gallery";
import { Href } from "../../Constant";
import storage from "../../Firebase/firebase";
import {
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";
import HeadingCommon from "../../Common/HeadingCommon";
import { Btn, P } from "../../AbstractElements";
import CommonModal from "../../Common/modal";

const Success = require("../../assets/images/Successmark.png");

const BannerEditPage = () => {
  const [title, setTitle] = useState<string>("");
  const [subTitle, setSubTitle] = useState<string>("");
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const { data: BannerData } = useGetBannerQuery();
  const [updateBanner, { isLoading }] = useUpdateBannerMutation();

  console.log("da", BannerData?.data);

  const onChange = useCallback((value: string) => {
    // console.log("title", value.target.value);
    setTitle(value);
  }, []);

  const [imagePreview, setImagePreview] = useState<string>("");

  const giveCurrentDateTime = () => {
    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    const time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + " " + time;
    return dateTime;
  };

  const handleOnChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const dateTime = giveCurrentDateTime();

    if (event?.target?.files === null) {
      return;
    }
    const image = event.target.files[0];
    const imageRef = storageRef(storage, `products/${dateTime}+${image.name}`);

    uploadBytes(imageRef, image)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            setImagePreview(url);
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
      image: imagePreview || BannerData?.data[0]?.image,
      title: title || BannerData?.data[0]?.title,
      subTitle: subTitle || BannerData?.data[0]?.subTitle,
      id: BannerData?.data[0]._id as string,
    };
    console.log("data", data);
    try {
      const update = await updateBanner(data).unwrap();
      // console.log("res", update);
      if (update.isSuccess) {
        toggle();
      }
    } catch (error) {
      console.log("erro", error);
      throw error;
    }
  };

  return (
    <div className="page-body">
      <Breadcrumbs parent="Home" title="Banner-Section" />
      <Col md="12 mb-3">
        <Card>
          {/* <Label htmlFor="exampleInputPassword2">Banner Image</Label> */}
          <HeadingCommon Heading="Banner Image" />
          {imagePreview && (
            <Item original={imagePreview} width="250" height="250">
              {({ ref, open }) => (
                <a href={Href} onClick={open}>
                  <div>
                    <img
                      className="img-thumbnail"
                      ref={ref as React.MutableRefObject<HTMLImageElement>}
                      src={imagePreview || BannerData?.data[0]?.image}
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
              onChange={(e) => handleOnChange(e)}
            />
          </Col>

          <div className="valid-feedback">{"Looks good!"}</div>
        </Card>
      </Col>
      <Col md="12 mb-3">
        <Card>
          {BannerData?.data[0].image && (
            <Item original={imagePreview} width="250" height="250">
              {({ ref, open }) => (
                <a href={Href} onClick={open}>
                  <div>
                    <img
                      className="img-thumbnail"
                      ref={ref as React.MutableRefObject<HTMLImageElement>}
                      src={BannerData?.data[0]?.image}
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
      <MdeEditorContainer
        title="Banner Title"
        placeholder={BannerData?.data[0]?.title}
        editorValue={title}
        onChange={(e) => onChange(e)}
        autoFocusEditor
      />

      <MdeEditorContainer
        title="Sub Title"
        placeholder={BannerData?.data[0]?.subTitle}
        editorValue={subTitle}
        onChange={(e) => setSubTitle(e)}
        autoFocusEditor
      />
      <Card>
        <Col sm="12">
          <Btn color="primary" className="mx-2" onClick={onSubmit}>
            Update
          </Btn>
        </Col>
      </Card>
      <CommonModal
        centered="centered"
        isOpen={modal}
        title="Info"
        toggler={toggle}
      >
        <Row style={{ alignItems: "center" }} className="col-md-6 offset-md-3">
          <Col style={{ alignItems: "center" }}>
            <img
              src={Success}
              alt="Success"
              width={90}
              height={90}
              className="col-md-6 offset-md-3 mb-4"
            />
            <div style={{ alignItems: "center", textAlign: "center" }}>
              <P>Updated successfully</P>
            </div>
          </Col>
        </Row>
      </CommonModal>
    </div>
  );
};

export default BannerEditPage;
