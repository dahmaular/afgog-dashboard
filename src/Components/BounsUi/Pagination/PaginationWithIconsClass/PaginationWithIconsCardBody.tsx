import { CardBody, Pagination, PaginationItem, PaginationLink,} from "reactstrap";

const PaginationWithIconsCardBody = () => {
  return (
    <CardBody>
      <Pagination aria-label="Page navigation example" className="pagination-primary">
        <PaginationItem>
          <PaginationLink href="#javascript">
            <span aria-hidden="true">«</span>
            <span className="sr-only">Previous</span>
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#javascript">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#javascript">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#javascript">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#javascript">
            <span aria-hidden="true">»</span>
            <span className="sr-only">Next</span>
          </PaginationLink>
        </PaginationItem>
      </Pagination>
    </CardBody>
  );
};

export default PaginationWithIconsCardBody;
