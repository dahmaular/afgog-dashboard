import { Card, Col, Container, Row } from "reactstrap";
import DataTable from "react-data-table-component";
import { productsTableColumns } from "../../../../Data/apps/ecommerce/productListTableData";
import { useProductsQuery } from "../../../../Service/products/service";
import { Btn, H5, Spinner } from "../../../../AbstractElements";
import { Link } from "react-router-dom";

const ProductListContainer = () => {
  const { isLoading, data } = useProductsQuery();

  console.log("data", data?.data);
  return (
    <Container fluid>
      <Row>
        <Col sm="12">
          <Card>
            <div className="card-body">
              <div className="table-responsive product-table">
                <Link to="/addProduct">
                  <Btn color="primary" type="button" className="me-2">
                    Add New Product
                  </Btn>
                </Link>
                {isLoading ? (
                  <Spinner className={"loader-26"} />
                ) : (
                  <DataTable
                    data={data?.data as []}
                    columns={productsTableColumns}
                    className="display dataTable no-footer"
                    noHeader
                    pagination
                    paginationServer
                  />
                )}
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductListContainer;
