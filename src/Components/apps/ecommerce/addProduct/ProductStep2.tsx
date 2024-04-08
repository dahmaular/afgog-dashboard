import { Row, Col, Form, Label, Input } from "reactstrap";
import { ConfirmPassword, Email, Href, Password } from "../../../../Constant";
import { Btn } from "../../../../AbstractElements";
import { useForm } from "react-hook-form";
import { Item } from "react-photoswipe-gallery";
import { ChangeEvent, useState } from "react";
import { useUploadImageMutation } from "../../../../Service/products/service";
import {
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";
import storage from "../../../../Firebase/firebase";

interface propsTypes {
  goSteps: number;
  setGoSteps: (value: number) => void;
}

type FormInputs = {
  availability: string;
  description: string;
  specification: string;
  image: [string];
};

const ProductStep2 = (props: propsTypes) => {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const [uploadImage, { isLoading }] = useUploadImageMutation();

  const [imagePreview, setImagePreview] = useState<[string]>([""]);

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
    console.log(event.target.files);
    // const file = new FormData();
    // file.append("image", event.target.files[0]);
    // const res = await uploadImage(file).unwrap();
    // console.log("fileImage", res);
    // setImagePreview(res.imageUrl);
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
            // saveData(url);

            // if (imagePreview[0] === "") {
            //   imagePreview.push(url);
            // }
            // imagePreview.push(url);
            setImagePreview((image) => [url]);
            console.log("Url", url);
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
    const data = getValues();
    if (
      data.availability !== null &&
      data.description !== "" &&
      data.specification !== "" &&
      imagePreview.length !== null
    ) {
      // setImagePreview((image) => [...imagePreview, image]);
      data.image = imagePreview;
      localStorage.setItem("@step2", JSON.stringify(data));
      props.setGoSteps(props.goSteps + 1);
    } else {
      console.log(errors);
    }
  };

  console.log("Image", imagePreview);

  return (
    <Row>
      <Col sm="12">
        <Form className="needs-validation" onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md="12 mb-3 row">
              <Label htmlFor="exampleFormControlInput1">Availability</Label>
              <Label className="d-block" for="edo-ani">
                <input
                  className="radio_animated"
                  id="edo-ani1"
                  type="radio"
                  value="New"
                  {...register("availability", { required: true })}
                />
                In Stock
              </Label>
              <Label className="d-block" for="edo-ani1">
                <input
                  className="radio_animated"
                  id="edo-ani1"
                  type="radio"
                  value="Used"
                  {...register("availability", { required: true })}
                />
                Out of Stock
              </Label>
              <div className="valid-feedback">{"Looks good!"}</div>
            </Col>
            <Col md="12 mb-3">
              <Label htmlFor="exampleInputPassword2">Description</Label>
              <textarea
                className="form-control"
                rows={5}
                cols={5}
                placeholder="Product Description"
                {...register("description", { required: true })}
              ></textarea>
              <div className="valid-feedback">{"Looks good!"}</div>
            </Col>
            <Col md="12 mb-3">
              <Label htmlFor="exampleInputPassword2">Specification</Label>
              <textarea
                className="form-control"
                rows={5}
                cols={5}
                placeholder="Product Specification"
                {...register("specification", { required: true })}
              ></textarea>
              <div className="valid-feedback">{"Looks good!"}</div>
            </Col>
            <Col md="12 mb-3">
              <Label htmlFor="exampleInputPassword2">Product Image</Label>
              {imagePreview && (
                <Item original={imagePreview[0]} width="120" height="90">
                  {({ ref, open }) => (
                    <a href={Href} onClick={open}>
                      <div>
                        <img
                          className="img-thumbnail"
                          ref={ref as React.MutableRefObject<HTMLImageElement>}
                          src={imagePreview[0]}
                          alt=""
                          style={{ width: "120px", height: "90px" }}
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
              {/* <Input
                className="form-control"
                type="password"
                placeholder="Password"
              /> */}
              <div className="valid-feedback">{"Looks good!"}</div>
            </Col>
            <Col>
              <Btn
                color="primary"
                onClick={() => props.setGoSteps(props.goSteps - 1)}
              >
                previous
              </Btn>
              <Btn color="primary" className="mx-2" onClick={onSubmit}>
                Next
              </Btn>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default ProductStep2;
