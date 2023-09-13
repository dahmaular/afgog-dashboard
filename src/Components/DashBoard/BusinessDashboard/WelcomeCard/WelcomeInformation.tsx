import { useSelector } from "react-redux";
import { H5, P } from "../../../../AbstractElements";
import { WelcomeText } from "../../../../Constant";
import WelcomeInformationBody from "./WelcomeInformationBody";
import { CardHeader } from "reactstrap";
import { RootState } from "../../../../redux-toolkit/store";
const WelcomeInformation = () => {
  const {
    user: { authData },
  } = useSelector((state: RootState) => state);

  return (
    <CardHeader className=" card-no-border o-hidden total-sale-widget">
      <div className="d-flex">
        <div className="flex-grow-1">
          <H5 className="f-w-600">
            Hello {authData.firstName} {authData.lastName} !
          </H5>
          <P> {WelcomeText}</P>
        </div>
      </div>
      <WelcomeInformationBody />
    </CardHeader>
  );
};

export default WelcomeInformation;
