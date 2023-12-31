import {  useEffect, useState } from "react";
import { CardBody, Form, FormGroup } from "reactstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import axios from "axios";

const DefaultTypeaheadCardBody = () => {
  const multiple = false;
  const [options, setOptions] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.PUBLIC_URL}/api/typeaheadData.json`)
      .then((res) => setOptions(res.data));
  }, []);
  return (
      <CardBody>
        <div id="the-basics">
          <Form>
            <FormGroup>
              <Typeahead id="basic-typeahead" labelKey="name" multiple={multiple} options={options} placeholder="Choose a state..."/>
            </FormGroup>
          </Form>
        </div>
      </CardBody>
  );
};
export default DefaultTypeaheadCardBody;