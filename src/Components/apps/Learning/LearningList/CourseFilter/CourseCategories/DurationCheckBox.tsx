import { Label, Input } from "reactstrap";
import { Duration } from "../../../../../../Constant";
import { DurationCheckBoxData } from "../../../../../../Data/apps/Learning";

const DurationCheckBox = () => {
  return (
    <div className="checkbox-animated mt-0">
      <div className="learning-header">
        <span className="f-w-600">{Duration}</span>
      </div>
      {DurationCheckBoxData.map((data, index) => (
        <Label key={index} className="d-block" htmlFor={`Duration-${index}`}>
          <Input className="checkbox_animated" id={`Duration-${index}`} type="checkbox" />
          {data}
        </Label>
      ))}
    </div>
  );
};

export default DurationCheckBox;
