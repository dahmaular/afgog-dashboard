import { CardFooter } from "reactstrap";
import { Btn } from "../../../../AbstractElements";
import { Cancel, Submit } from "../../../../Constant";

const HorizontalFormCardFooter = () => {
  return (
    <CardFooter>
      <Btn color="primary" className="me-2">
        {Submit}
      </Btn>
      <Btn color="secondary">{Cancel}</Btn>
    </CardFooter>
  );
};

export default HorizontalFormCardFooter;
