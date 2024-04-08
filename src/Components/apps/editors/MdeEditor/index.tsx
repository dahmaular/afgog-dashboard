import { Card, CardBody, Col, Row } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { MdeEditorExample, MdeEditorText } from "../../../../Constant";
import { SimpleMdeReact } from "react-simplemde-editor";
import SmallEditor from "./SmallEditor";
import { useCallback, useState } from "react";
import { useGetBannerQuery } from "../../../../Service/homepage/homeService";

type EditorProps = {
  title?: string;
  placeholder?: string;
  editorValue: string;
  onChange: (e: string) => void;
  autoFocusEditor?: boolean;
};

const MdeEditorContainer = ({
  title,
  editorValue,
  placeholder,
  onChange,
  autoFocusEditor,
}: EditorProps) => {
  // const [content, setTitle] = useState<string>("");
  // const [subTitle, setSubTitle] = useState<string>("");

  // const { data: BannerData } = useGetBannerQuery();
  // console.log(BannerData);

  // const onChange = useCallback((value: string) => {
  //   setTitle(value);
  // }, []);
  return (
    <>
      <Row>
        <Col sm="12">
          <Card>
            <HeadingCommon Heading={title} />
            <CardBody>
              <SimpleMdeReact
                id="editor_container"
                placeholder={placeholder}
                value={editorValue}
                onChange={onChange}
                // options={{ autofocus: autoFocusEditor, spellChecker: false }}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default MdeEditorContainer;
