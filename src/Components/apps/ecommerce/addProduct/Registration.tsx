import { useForm } from "react-hook-form";
import { Row, Col, Form, Label, FormGroup, Input } from "reactstrap";
import Select from "react-select";
import { Categories, FirstName, LastName } from "../../../../Constant";
import { Btn } from "../../../../AbstractElements";
import {
  useGetBrandQuery,
  useGetCategoryQuery,
} from "../../../../Service/products/service";
import { SelectFormOptions } from "../../../../Data/Forms/FormWidget/SelectTwo";
import CommonSelectBox from "../../../forms/forms-control/Common/CommonSelectBox";
import { useState } from "react";

interface propsTypes {
  setGoSteps: (value: number) => void;
}

type FormInputs = {
  name: string;
  type: string;
  brand: string;
  category: string;
};

const Registration = (props: propsTypes) => {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const { data: brands } = useGetBrandQuery();
  const { data: prodCategory } = useGetCategoryQuery();
  const [name, setName] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [type, setType] = useState<string>("");

  console.log("cat", prodCategory, brands);

  const onSubmit = async () => {
    const data = getValues();
    // props.setGoSteps(1);
    if (
      data.brand !== "" &&
      data.category !== "" &&
      data.name !== "" &&
      data.type !== ""
    ) {
      const getBrandId = brands?.data.filter((brd) => brd.name === data.brand);
      const getCategorydId = prodCategory?.data.filter(
        (cate) => cate.name === data.category
      );
      // console.log(getValues(), getCategorydId![0]._id);
      data.brand = getBrandId![0]._id;
      data.category = getCategorydId![0]._id;
      localStorage.setItem("@step1", JSON.stringify(data));
      props.setGoSteps(1);
    } else {
      console.log(errors);
    }
    // props.setGoSteps(1);
  };

  return (
    <Row>
      <Col sm="12">
        <Form className="needs-validation" onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md="12 mb-3">
              <Label>Product Name</Label>
              <input
                className="form-control"
                type="text"
                placeholder="Product name"
                {...register("name", { required: true })}
              />
              {errors.name && "Product name is required"}
              <div className="valid-feedback">{"Looks good!"}</div>
            </Col>
            <Col md="12 mb-3">
              <Label>Product Category</Label>
              <Col md="12 mb-3">
                <select
                  className="form-control"
                  {...register("category", { required: true })}
                >
                  {prodCategory?.data.map((category) => (
                    <>
                      <option>{category.name}</option>
                    </>
                  ))}
                </select>
              </Col>
              {errors.category && "Product Category is required"}
              <div className="valid-feedback">{"Looks good!"}</div>
            </Col>
            <Col md="12 mb-3">
              <Label>Brand Type (optional)</Label>
              <Col md="12 mb-3">
                <select
                  className="form-control"
                  {...register("brand", { required: false })}
                >
                  {brands?.data.map((brand) => (
                    <>
                      <option>{brand.name}</option>
                    </>
                  ))}
                </select>
              </Col>
              <div className="valid-feedback">{"Looks good!"}</div>
            </Col>
            <Col md="12 mb-3">
              <Label>Product Type</Label>
              <Label className="d-block" for="edo-ani">
                <input
                  className="radio_animated"
                  id="edo-ani1"
                  type="radio"
                  value="New"
                  //  name="rdo-ani"
                  {...register("type", { required: true })}
                />
                New
              </Label>
              <Label className="d-block" for="edo-ani1">
                <input
                  className="radio_animated"
                  id="edo-ani1"
                  type="radio"
                  value="Used"
                  {...register("type", { required: true })}
                />
                Used
              </Label>
              {errors.type && "Product Type is required"}
              <div className="valid-feedback">{"Looks good!"}</div>
            </Col>

            <Col>
              <Btn color="primary" onClick={onSubmit}>
                Next
              </Btn>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};
export default Registration;
