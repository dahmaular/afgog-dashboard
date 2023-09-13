import { FormGroup, Label, Input } from "reactstrap";
import { Col } from "react-bootstrap";
import { ChangeEventHandler, HTMLAttributes } from "react";
interface propsType {
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  ColSm?: number;
  InputClass?: string;
  defaultValue?: string | [];
  id?: string;
  maxLength?: number;
  labelClass?: string;
  inlineStyle?: string;
  InputType:
    | "text"
    | "email"
    | "select"
    | "file"
    | "radio"
    | "checkbox"
    | "switch"
    | "textarea"
    | "button"
    | "reset"
    | "submit"
    | "date"
    | "datetime-local"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "range"
    | "search"
    | "tel"
    | "url"
    | "week"
    | "password"
    | "datetime"
    | "time"
    | "color";
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}
const CommonFormGroup = (props: propsType) => {
  return (
    <FormGroup className="row">
      <Label className={`col-sm-3 col-form-label ${props.labelClass} `}>
        {props.label}
      </Label>
      <Col sm={props.ColSm}>
        <Input
          className={props.InputClass && props.InputClass}
          type={props.InputType}
          placeholder={props.placeholder}
          defaultValue={props.defaultValue && props.defaultValue}
          id={props.id && props.id}
          maxLength={props.maxLength && props.maxLength}
          style={{ height: props.inlineStyle && props.inlineStyle }}
          onChange={props.onChange}
          disabled={props.disabled}
        />
      </Col>
    </FormGroup>
  );
};

export default CommonFormGroup;
