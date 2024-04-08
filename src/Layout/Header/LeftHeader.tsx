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
        <Link to={`${process.env.PUBLIC_URL}/dashboard`}>
          <Image
            body={true}
            src={dynamicImage("devtage.png")}
            alt="logo"
            width={160}
            height={35}
          />
        </Link>
      </div>
    </div>
  );
};

export default LeftHeader;
