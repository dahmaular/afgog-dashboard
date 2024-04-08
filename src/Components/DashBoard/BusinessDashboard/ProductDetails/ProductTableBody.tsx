import { Link } from "react-router-dom";
import { ProductDetailsData } from "../../../../Data/DashBoard/BusinessDashboard/ProductDetails";
import { useProductsQuery } from "../../../../Service/products/service";
import { Image } from "../../../../AbstractElements";
// import { useOrdersQuery } from "../../../../Service/about/service";

const ProductTableBody = () => {
  // const { isLoading, data } = useOrdersQuery();
  // console.log(data);

  // console.log("product order", data?.data);
  return (
    <tbody>
      {/* {data?.data.map((data, index) => (
        <tr key={index}>
          <td>
            <div className="d-flex">
              <div className="round-product round-product-dark m-r-15 content-center">
                {data?.productId?.image && (
                  <Image
                    src={data.productId.image[0]}
                    alt={"img"}
                    width={30}
                    height={30}
                  />
                )}
              </div>
              <Link to={`${process.env.PUBLIC_URL}/ECommerce/Product`}>
                <span>{data?.productId?.name}</span>
              </Link>
            </div>
          </td>
          <td>
            <span className="f-12">{data?.unit}</span>
          </td>
          <td>
            <div className="progress-showcase">
              
              {data.status}
            </div>
          </td>
          <td>{data?.amount}</td>
          <td>{data?.productId?.availability}</td>
        </tr>
      ))} */}
    </tbody>
  );
};

export default ProductTableBody;
