import { Row, Col, Form, Label, Input } from "reactstrap";
import { DD, MM, Submit, YY } from "../../../../Constant";
import { Btn, P, Spinner } from "../../../../AbstractElements";
import { useForm } from "react-hook-form";
import { useAddProductMutation } from "../../../../Service/products/service";
import { useEffect, useState } from "react";
import CommonModal from "../../../../Common/modal";

const Success = require("../../../../assets/images/Successmark.png");
interface propsTypes {
  goSteps: number;
  setGoSteps: (value: number) => void;
}

type FormInputs = {
  amount: string;
  price: string;
  size: string;
  color: string;
  noOfItems: string;
};

type Step1Props = {
  name: string;
  type: string;
  brand: string;
  category: string;
};

type Step2Props = {
  availability: string;
  description: string;
  specification: string;
  image: string;
};

let message: string;

const ProductStep3 = (props: propsTypes) => {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const [modal, setModal] = useState(false);
  const [step1, setStep1] = useState<Step1Props>({
    brand: "",
    category: "",
    name: "",
    type: "",
  });
  const [step2, setStep2] = useState<Step2Props>({
    availability: "",
    description: "",
    image: "",
    specification: "",
  });
  const toggle = () => setModal(!modal);

  const [addProduct, { isLoading, data, originalArgs }] =
    useAddProductMutation();

  const getPreviousData = async () => {
    const step1 = localStorage.getItem("@step1");
    const step2 = localStorage.getItem("@step2");
    // setStep1(step1);
    if (step1 !== null && step2 !== null) {
      setStep1(JSON.parse(step1));
      setStep2(JSON.parse(step2));
    }
    // console.log("step1", step1, step2);
  };

  useEffect(() => {
    getPreviousData();
  }, []);

  const submitFun = async () => {
    try {
      const data = getValues();
      let sizeArray: string[] = [];
      sizeArray.push(data.size as string);

      if (
        data.amount !== "" &&
        data.color !== "" &&
        data.noOfItems !== "" &&
        data.price !== "" &&
        data.size !== ""
      ) {
        const addRequest = {
          amount: data.amount,
          availability: step2.availability,
          brandId: step1.brand,
          categoryId: step1.category,
          color: data.color,
          description: step2.description,
          image: step2.image,
          name: step1.name,
          noOfItems: data.noOfItems,
          price: data.price,
          size: sizeArray,
          specification: step2.specification,
          type: step1.type,
        };

        const response = await addProduct(addRequest).unwrap();
        console.log("Aprod", response);
        if (response.isSuccess) {
          message = response.message;
          toggle();
        }
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <Row>
      <Col sm="12">
        <Form className="needs-validation">
          <Row form>
            <Col md="3 mb-3">
              <Label>Amount</Label>
              <input
                className="form-control"
                type="text"
                placeholder="Amount in Naira"
                {...register("amount", { required: true })}
              />
              <div className="valid-feedback">{"Looks good!"}</div>
            </Col>
            <Col md="3 mb-3">
              <Label>Sales Price</Label>
              <input
                className="form-control"
                type="text"
                placeholder="Sales price"
                {...register("price", { required: true })}
              />
              <div className="valid-feedback">{"Looks good!"}</div>
            </Col>
            <Col md="6 mb-3">
              <Label>Available Color</Label>
              <input
                className="form-control"
                type="text"
                placeholder="For multiple color, seperate with comma e.g
                white,black"
                {...register("color", { required: true })}
              />
              <div className="valid-feedback">{"Looks good!"}</div>
            </Col>
            <Col md="6 mb-3">
              <Label>Size</Label>
              <input
                className="form-control"
                type="text"
                placeholder="Size"
                {...register("size", { required: true })}
              />
              <div className="valid-feedback">{"Looks good!"}</div>
            </Col>
            <Col md="6 mb-3">
              <Label>Number of items</Label>
              <input
                className="form-control"
                type="text"
                placeholder="Number of available items"
                {...register("noOfItems", { required: true })}
              />
              <div className="valid-feedback">{"Looks good!"}</div>
            </Col>
          </Row>
          <Btn
            color="primary"
            onClick={() => props.setGoSteps(props.goSteps - 1)}
          >
            previous
          </Btn>
          <Btn color="primary" className="mx-2" onClick={submitFun}>
            {isLoading ? <Spinner className="loader-6'" /> : "Create Product"}
          </Btn>
        </Form>
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
            <P>Product created successfully</P>
          </Col>
        </Row>
      </CommonModal>
    </Row>
  );
};
export default ProductStep3;
