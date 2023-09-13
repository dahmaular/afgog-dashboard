import { Col } from "reactstrap";

interface DetailsProp {
  fname: string | undefined;
  lname: string | undefined;
}

const MarkJecno = ({ fname, lname }: DetailsProp) => {
  return (
    <Col sm="12" lg="4" className="order-sm-0 order-xl-1">
      <div className="user-designation step4">
        <div className="title">
          <a target="_blank" href="#javascript">
            {fname}
          </a>
        </div>
        <div className="desc mt-2">{lname}</div>
      </div>
    </Col>
  );
};

export default MarkJecno;
