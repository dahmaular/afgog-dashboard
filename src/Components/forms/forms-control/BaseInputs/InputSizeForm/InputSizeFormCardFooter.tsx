import { CardFooter } from "reactstrap";
import { Btn } from "../../../../../AbstractElements";
import { Cancel, Submit } from "../../../../../Constant";

const InputSizeFormCardFooter = () => {
  return (
    <CardFooter >
      <Btn color="primary" type="submit" className="me-2">
        {Submit}
      </Btn>
      <Btn color="light" type="reset">
        {Cancel}
      </Btn>
    </CardFooter>
  );
};

export default InputSizeFormCardFooter;
