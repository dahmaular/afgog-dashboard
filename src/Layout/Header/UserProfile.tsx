import { ChevronRight, LogIn, User } from "react-feather";
import { Image, LI, UL } from "../../AbstractElements";
import { ProfilesMessage } from "../../Data/Layout/Header/Profiles";
import { dynamicImage } from "../../Service";
import { Admin, ElanaSaint, Logout, Profile } from "../../Constant";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Service/auth/slice";
import { RootState } from "../../redux-toolkit/store";
const UserProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    localStorage.clear();
    dispatch(logout());
    navigate(`${process.env.PUBLIC_URL}/login`);
  };
  const {
    user: { authData },
  } = useSelector((state: RootState) => state);
  return (
    <LI className="onhover-dropdown px-0">
      <span className="d-flex user-header">
        <Image
          className="me-2 rounded-circle img-35"
          src={dynamicImage("dashboard/user.png")}
          alt="userdp"
        />
        <span className="flex-grow-1">
          <span className="f-12 f-w-600">
            {authData.firstName} {authData.lastName}
          </span>
          <span className="d-block">User</span>
        </span>
      </span>
      <UL className="profile-dropdown  onhover-show-div simple-list">
        <LI>
          <Link to={`${process.env.PUBLIC_URL}/user/user-profile`}>
            <User />
            {Profile}
          </Link>
        </LI>
        {/* <LI className="f-w-600">Home</LI>
        {ProfilesMessage.map((detail, index) => (
          <LI key={index} className="f-12">
            <Link to={`${process.env.PUBLIC_URL}/email/email-app`}>
              <ChevronRight />
              {detail.name}
            </Link>
          </LI>
        ))} */}
        <LI onClick={handleLogOut}>
          <LogIn />
          {Logout}
        </LI>
      </UL>
    </LI>
  );
};

export default UserProfile;
