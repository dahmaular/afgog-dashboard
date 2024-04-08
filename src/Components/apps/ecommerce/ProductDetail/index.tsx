import {
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import CommonFormGroup from "../../../forms/forms-control/BaseInputs/BasicHtmlForm/common/CommonFormGroup";
import {
  Number,
  Password,
  SimpleInput,
  Placeholder,
  Telephone,
  URL,
  DateAndTime,
  Date,
  Month,
  Week,
  Time,
  ColorPicker,
  MaximumLength,
  StaticText,
  Textarea,
  Submit,
  Cancel,
  Href,
} from "../../../../Constant";
import { Btn, Image, Spinner } from "../../../../AbstractElements";
import { useParams } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import {
  useGetBrandQuery,
  useGetCategoryQuery,
  useLazyGetProductQuery,
  useLazyGetUploadImageQuery,
  useUploadImageMutation,
} from "../../../../Service/products/service";
import { dynamicImage } from "../../../../Service";
import { Item } from "react-photoswipe-gallery";
// import storage from "../../../../Firebase/firebase";
// import {
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
//   StorageError,
// } from "firebase/storage";

type ProductObject = {
  _id: string;
  name: string;
  categoryId: string;
  brandId: string;
  description: string;
  specification: string;
  image: string;
  amount: string;
  price: string;
  rating: string;
  type: string;
  size: [];
  availability: string;
  color: string;
  noOfItems: string;
  dateCreated: string;
  dateModified: string;
};

const ProductDetailContainer = () => {
  const [getProduct, result] = useLazyGetProductQuery();
  const [uploadImage, uploadResult] = useUploadImageMutation();
  const { data } = useGetBrandQuery();
  const { data: categoryData } = useGetCategoryQuery();

  const [getUploadImage, { data: imageUrl }] = useLazyGetUploadImageQuery();
  const { id } = useParams();

  const [productBrand, setProductBrand] = useState<{
    name: string;
    id: string;
  }>({
    name: "",
    id: "",
  });
  const [productCategory, setProductCategory] = useState<{
    name: string;
    id: string;
  }>({
    name: "",
    id: "",
  });

  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);
  const [productData, setProductData] = useState<ProductObject>();
  const [name, setName] = useState<string>("");
  const [imagePreview, setImagePreview] = useState<string>("");
  //   const [name, setName] = useState('');
  //   const [name, setName] = useState('');
  //   const [name, setName] = useState('');
  //   const [name, setName] = useState('');

  const getProductById = async () => {
    const res = await getProduct({ id }).unwrap();
    console.log(res);
    setProductData(res.data);
    // getUploadImage("f56a10e8d3027451fb6c9a3bcc4a486c");
  };
  useEffect(() => {
    getProductById();
  }, []);

  const filterSpecial = async () => {
    if (data?.data) {
      const getBrand = data?.data?.filter(
        (b) => b._id === productData?.brandId
      );
      console.log("brand", getBrand);
      setProductBrand({ name: getBrand![0]?.name, id: getBrand![0]?._id });
    }

    if (categoryData?.data) {
      const getCat = categoryData?.data.filter(
        (b) => b._id === productData?.categoryId
      );
      setProductCategory({ name: getCat![0]?.name, id: getCat![0]?._id });
    }
  };

  useEffect(() => {
    filterSpecial();
  }, [productData]);
  // console.log("Prod", productData);
  // console.log("brand", productBrand);
  //   console.log("category", categoryData);

  const handleOnChange = async (event: any) => {
    // setFile(event.target.files[0]);
    console.log(event.target.files[0]);
    // const fileImage = await handleUpload(event.target.files[0]);
    // console.log(fileImage);
    const file = new FormData();
    file.append("image", event.target.files[0]);
    const res = await uploadImage(file).unwrap();
    console.log("fileImage", res);
    setImagePreview(res.imageUrl);
  };

  return (
    <Container fluid={true}>
      {result?.isLoading ? (
        <Spinner className="loader-26" />
      ) : (
        <>
          <Card>
            <Row className="product-page-main">
              <Col xl="3">{/* <ImageSlider /> */}</Col>
              <Col xl="9">{/* <ProductDetails /> */}</Col>
              <Form
                className="form theme-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <CardBody>
                  <Row>
                    <Col>
                      <CommonFormGroup
                        label="Product"
                        ColSm={9}
                        InputType="text"
                        defaultValue={productData?.name}
                        onChange={(e) => setName(e.target.value)}
                      />

                      <CommonFormGroup
                        label="Product Brand"
                        ColSm={9}
                        InputType="text"
                        defaultValue={productBrand?.name || ""}
                        placeholder={productBrand?.name}
                        disabled={true}
                      />
                      <CommonFormGroup
                        label="Product Category"
                        ColSm={9}
                        InputType="text"
                        defaultValue={productCategory?.name || ""}
                        placeholder={productCategory?.name}
                        disabled={true}
                      />
                      <FormGroup className="row">
                        <CommonFormGroup
                          label="Amount (N)"
                          ColSm={2}
                          InputType="text"
                          defaultValue={productData?.amount}
                          placeholder="Amount"
                        />
                        <CommonFormGroup
                          label="Sales price (N)"
                          ColSm={2}
                          InputType="text"
                          defaultValue={productData?.price}
                          placeholder="Price"
                        />
                      </FormGroup>

                      <FormGroup className="row mb-0">
                        <Label className="col-sm-3 col-form-label">
                          Description
                        </Label>
                        <Col sm="9">
                          <textarea
                            className="form-control"
                            rows={5}
                            cols={5}
                            placeholder="Product description"
                            defaultValue={productData?.description}
                          ></textarea>
                        </Col>
                      </FormGroup>
                      <FormGroup className="row mb-0">
                        <Label className="col-sm-3 col-form-label">
                          Images
                        </Label>
                        <Col sm="9">
                          <Item
                            original={productData?.image}
                            width="120"
                            height="90"
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
                                      imagePreview !== ""
                                        ? imagePreview
                                        : productData?.image
                                    }
                                    alt=""
                                    style={{ width: "120px", height: "90px" }}
                                  />
                                </div>
                              </a>
                            )}
                          </Item>

                          <Col sm="3">
                            <Input
                              type="file"
                              name="file"
                              aria-label="file example"
                              required
                              onChange={(e) => handleOnChange(e)}
                            />
                          </Col>
                        </Col>
                      </FormGroup>

                      <CommonFormGroup
                        label="Size"
                        ColSm={9}
                        InputType="text"
                        placeholder="12 | 14"
                        defaultValue={productData?.size}
                      />
                      <CommonFormGroup
                        label="Rating"
                        ColSm={9}
                        InputType="text"
                        defaultValue={productData?.rating}
                      />
                      <CommonFormGroup
                        label="Items Available"
                        ColSm={9}
                        InputType="text"
                        defaultValue={productData?.noOfItems}
                      />

                      <FormGroup className="row mb-0">
                        <Label className="col-sm-3 col-form-label">
                          Specification
                        </Label>
                        <Col sm="9">
                          <textarea
                            className="form-control"
                            rows={5}
                            cols={5}
                            placeholder="Product Specification"
                            defaultValue={productData?.specification}
                          ></textarea>
                        </Col>
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <Col sm="9" className=" offset-sm-3">
                    <Btn color="primary" type="submit" className="me-2">
                      Update
                    </Btn>
                    <Btn color="light" type="reset">
                      {Cancel}
                    </Btn>
                  </Col>
                </CardFooter>
              </Form>
            </Row>
          </Card>
          <Card>
            <Row className="product-page-main">
              <Col sm="12">{/* <ClothsDetails /> */}</Col>
            </Row>
          </Card>
        </>
      )}
    </Container>
  );
};

export default ProductDetailContainer;
