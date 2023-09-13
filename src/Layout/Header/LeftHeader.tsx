import { Image } from "../../AbstractElements";
import { Link } from "react-router-dom";
const LeftHeader = () => {
  const images = require.context("../../assets/images/logo", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };
  return (
    <div className="main-header-left">
      <div className="logo-wrapper">
        <Link to={`${process.env.PUBLIC_URL}/dashboard/business`}>
          <Image
            body={true}
            src={dynamicImage("logo1.png")}
            alt="logo"
            width={120}
            height={55}
          />
        </Link>
      </div>
    </div>
  );
};

export default LeftHeader;
