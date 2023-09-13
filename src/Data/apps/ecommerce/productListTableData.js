import { Fragment } from "react";
import { Btn, H6, Image } from "../../../AbstractElements";
import { dynamicImage } from "../../../Service";
import { Delete, Edit } from "../../../Constant";
import { Link } from "react-router-dom";
// import { useProductsQuery } from "../../../Service/products/service";
const style2 = { width: 60, fontSize: 13, padding: 3 };

// const { isLoading, data } = useProductsQuery();
// console.log("Here",data?.data);

// export const productTableData = [
//   {
//     Image: <Image src={dynamicImage("ecommerce/product-table-1.png")} />,
//     Details: (
//       <Fragment>
//         <H6> Red Lipstick </H6>
//         <span>
//           Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens
//         </span>
//       </Fragment>
//     ),
//     Amount: "$10",
//     Stock: <div className="font-success">In Stock</div>,
//     Start_date: "2023/04/25",
//     Action: (
//       <div>
//         <Btn style={style2} color="danger me-2" size="xs">
//           {Delete}
//         </Btn>
//         <Btn style={style2} color="success" size="xs">
//           {Edit}
//         </Btn>
//       </div>
//     ),
//   },
//   {
//     Image: <Image src={dynamicImage("ecommerce/product-table-2.png")} />,
//     Details: (
//       <Fragment>
//         <H6> Pink Lipstick </H6>
//         <span>
//           Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens
//         </span>
//       </Fragment>
//     ),
//     Amount: "$20",
//     Stock: <div className="font-primary">Low Stock</div>,
//     Start_date: "2023/04/25",
//     Action: (
//       <div>
//         <Btn style={style2} color="danger me-2" size="xs">
//           {Delete}
//         </Btn>
//         <Btn style={style2} color="success" size="xs">
//           {Edit}
//         </Btn>
//       </div>
//     ),
//   },
//   {
//     Image: <Image src={dynamicImage("ecommerce/product-table-3.png")} />,
//     Details: (
//       <Fragment>
//         <H6> Gray Lipstick </H6>
//         <span>
//           Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens
//         </span>
//       </Fragment>
//     ),
//     Amount: "$12",
//     Stock: <div className="font-danger">out of Stock</div>,
//     Start_date: "2023/04/25",
//     Action: (
//       <div>
//         <Btn style={style2} color="danger me-2" size="xs">
//           {Delete}
//         </Btn>
//         <Btn style={style2} color="success" size="xs">
//           {Edit}
//         </Btn>
//       </div>
//     ),
//   },
//   {
//     Image: <Image src={dynamicImage("ecommerce/product-table-4.png")} />,
//     Details: (
//       <Fragment>
//         <H6> Green Lipstick </H6>
//         <span>
//           Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens
//         </span>
//       </Fragment>
//     ),
//     Amount: "$25",
//     Stock: <div className="font-primary">Low Stock</div>,
//     Start_date: "2023/04/25",
//     Action: (
//       <div>
//         <Btn style={style2} color="danger me-2" size="xs">
//           {Delete}
//         </Btn>
//         <Btn style={style2} color="success" size="xs">
//           {Edit}
//         </Btn>
//       </div>
//     ),
//   },
//   {
//     Image: <Image src={dynamicImage("ecommerce/product-table-5.png")} />,
//     Details: (
//       <Fragment>
//         <H6> Black Lipstick </H6>
//         <span>
//           Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens
//         </span>
//       </Fragment>
//     ),
//     Amount: "$23",
//     Stock: <div className="font-success">In Stock</div>,
//     Start_date: "2023/04/25",
//     Action: (
//       <div>
//         <Btn style={style2} color="danger me-2" size="xs">
//           {Delete}
//         </Btn>
//         <Btn style={style2} color="success" size="xs">
//           {Edit}
//         </Btn>
//       </div>
//     ),
//   },
//   {
//     Image: <Image src={dynamicImage("ecommerce/product-table-6.png")} />,
//     Details: (
//       <Fragment>
//         <H6> White Lipstick </H6>
//         <span>
//           Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens
//         </span>
//       </Fragment>
//     ),
//     Amount: "$18",
//     Stock: <div className="font-primary">Low Stock</div>,
//     Start_date: "2023/04/25",
//     Action: (
//       <div>
//         <Btn style={style2} color="danger me-2" size="xs">
//           {Delete}
//         </Btn>
//         <Btn style={style2} color="success" size="xs">
//           {Edit}
//         </Btn>
//       </div>
//     ),
//   },
//   {
//     Image: <Image src={dynamicImage("ecommerce/product-table-1.png")} />,
//     Details: (
//       <Fragment>
//         <H6> light Lipstick </H6>
//         <span>
//           Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens
//         </span>
//       </Fragment>
//     ),
//     Amount: "$27",
//     Stock: <div className="font-danger">out of Stock</div>,
//     Start_date: "2023/04/25",
//     Action: (
//       <div>
//         <Btn style={style2} color="danger me-2" size="xs">
//           {Delete}
//         </Btn>
//         <Btn style={style2} color="success" size="xs">
//           {Edit}
//         </Btn>
//       </div>
//     ),
//   },
//   {
//     Image: <Image src={dynamicImage("ecommerce/product-table-2.png")} />,
//     Details: (
//       <Fragment>
//         <H6> Gliter Lipstick </H6>
//         <span>
//           Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens
//         </span>
//       </Fragment>
//     ),
//     Amount: "$23",
//     Stock: <div className="font-danger">out of Stock</div>,
//     Start_date: "2023/04/25",
//     Action: (
//       <div>
//         <Btn style={style2} color="danger me-2" size="xs">
//           {Delete}
//         </Btn>
//         <Btn style={style2} color="success" size="xs">
//           {Edit}
//         </Btn>
//       </div>
//     ),
//   },
//   {
//     Image: <Image src={dynamicImage("ecommerce/product-table-3.png")} />,
//     Details: (
//       <Fragment>
//         <H6> Green Lipstick </H6>
//         <span>
//           Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens
//         </span>
//       </Fragment>
//     ),
//     Amount: "$32",
//     Stock: <div className="font-success">In Stock</div>,
//     Start_date: "2023/04/25",
//     Action: (
//       <div>
//         <Btn style={style2} color="danger me-2" size="xs">
//           {Delete}
//         </Btn>
//         <Btn style={style2} color="success" size="xs">
//           {Edit}
//         </Btn>
//       </div>
//     ),
//   },
//   {
//     Image: <Image src={dynamicImage("ecommerce/product-table-4.png")} />,
//     Details: (
//       <Fragment>
//         <H6> yellow Lipstick </H6>
//         <span>
//           Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens
//         </span>
//       </Fragment>
//     ),
//     Amount: "$35",
//     Stock: <div className="font-danger">out of Stock</div>,
//     Start_date: "2023/04/25",
//     Action: (
//       <div>
//         <Btn style={style2} color="danger me-2" size="xs">
//           {Delete}
//         </Btn>
//         <Btn style={style2} color="success" size="xs">
//           {Edit}
//         </Btn>
//       </div>
//     ),
//   },
// ];
// export const productTableColumns = [
//   {
//     name: "Image",
//     selector: (Row) => Row["image"],
//     sortable: true,
//     center: true,
//   },
//   {
//     name: "Details",
//     selector: (Row) => Row["name"],
//     sortable: true,
//     center: true,
//   },
//   {
//     name: "Amount",
//     selector: (Row) => Row["amount"],
//     sortable: true,
//     center: true,
//   },
//   {
//     name: "Stock",
//     selector: (Row) => Row["availability"],
//     sortable: true,
//     center: true,
//   },
//   {
//     name: "Start date",
//     selector: (Row) => Row["Start_date"],
//     sortable: true,
//     center: true,
//   },
//   {
//     name: "Action",
//     selector: (Row) => Row["Action"],
//     sortable: true,
//     center: true,
//   },
// ];

export const productsTableColumns = [
  {
    name: "Image",
    // selector: (Row) => Row["image"],
    cell: (row) => (
      <img
        src={row.image}
        alt={row.name}
        style={{ width: "50px", height: "50px" }}
      />
    ),
    sortable: true,
    // center: true,
  },
  {
    name: "Name",
    selector: (Row) => Row["name"],
    sortable: true,
    // center: true,
  },
  {
    name: "Price",
    selector: (Row) => Row["price"],
    sortable: true,
    // center: true,
  },
  {
    name: "Status",
    selector: (Row) => Row["availability"],
    sortable: true,
    center: true,
  },
  {
    name: "Stock",
    selector: (Row) => Row["noOfItems"],
    sortable: true,
    center: true,
  },
  // {
  //   name: "Start date",
  //   selector: (Row) => Row["Start_date"],
  //   sortable: true,
  //   center: true,
  // },
  {
    name: "Action",
    cell: (row) => (
      <div>
        <Btn style={style2} color="danger me-2" size="xs">
          {Delete}
        </Btn>
        <Link to={`${process.env.PUBLIC_URL}/ECommerce/ProductDetails/${row._id}`}>
          <Btn style={style2} color="success" size="xs">
            View
          </Btn>
        </Link>
      </div>
    ),
    sortable: true,
    center: true,
  },
];
