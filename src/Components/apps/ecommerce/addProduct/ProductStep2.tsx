import { Row, Col, Form, Label, Input } from "reactstrap";
import { ConfirmPassword, Email, Href, Password } from "../../../../Constant";
import { Btn } from "../../../../AbstractElements";
import { useForm } from "react-hook-form";
import { Item } from "react-photoswipe-gallery";
import { useState } from "react";
import { useUploadImageMutation } from "../../../../Service/products/service";

interface propsTypes {
  goSteps: number;
  setGoSteps: (value: number) => void;
}

type FormInputs = {
  availability: string;
  description: string;
  specification: string;
  image: string;
};

const ProductStep2 = (props: propsTypes) => {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const [uploadImage, { isLoading }] = useUploadImageMutation();

  const [imagePreview, setImagePreview] = useState<string>("");

  const handleOnChange = async (event: any) => {
    console.log(event.target.files[0]);
    const file = new FormData();
    file.append("image", event.target.files[0]);
    const res = await uploadImage(file).unwrap();
    console.log("fileImage", res);
    setImagePreview(res.imageUrl);
  };

  const onSubmit = async () => {
    const data = getValues();
    if (
      data.availability !== null &&
      data.description !== "" &&
      data.specification !== "" &&
      imagePreview !== ""
    ) {
      data.image = imagePreview;
      localStorage.setItem("@step2", JSON.stringify(data));
      props.setGoSteps(props.goSteps + 1);
    } else {
      console.log(errors);
    }
  };

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
                <Item original={imagePreview} width="120" height="90">
                  {({ ref, open }) => (
                    <a href={Href} onClick={open}>
                      <div>
                        <img
                          className="img-thumbnail"
                          ref={ref as React.MutableRefObject<HTMLImageElement>}
                          src={imagePreview}
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
