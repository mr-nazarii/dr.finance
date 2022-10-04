import { useEffect } from "react";
import { Image, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { loadUser } from "../store/loadUser";
import { colorVariables } from "../styles/colors";
import { FormButton } from "../styles/muiStyles";
import GS from "../styles/styles";

const ProfilePage = () => {
  const { name, surname, email } = useAppSelector((state) => state.profile);

  return (
    <GS.Background
      className="d-flex align-items-start justify-content-center
    "
    >
      <Row className="d-flex flex-column">
        <GS.LoginBackground className="d-flex align-items-center justify-content-center flex-column  px-3 px-sm-5 py-4">
          <GS.SectionTitle className="px-3">Profile</GS.SectionTitle>
          <div style={{ width: "250px" }}>
            <Image
              fluid
              src={process.env.PUBLIC_URL + "/defaultProfile.webp"}
            />
          </div>
          <GS.SectionTitle
            color={colorVariables.white}
            bgColor={colorVariables.black}
          >
            {name} {surname}
          </GS.SectionTitle>
          <GS.ProfileEmail>{email}</GS.ProfileEmail>
          <GS.ButtonsLinks
            to={false}
            className="text-center fw-bolder fs-5 text-uppercase py-3 m-0 "
          >
            change password
          </GS.ButtonsLinks>
        </GS.LoginBackground>
        <GS.LoginBackground
          bgColor="white"
          className="d-flex align-items-center justify-content-center flex-column flex-sm-row p-0"
        >
          <GS.ButtonsLinks
            to="/"
            className="text-center fw-bolder fs-5 text-uppercase py-3 m-0 "
            type="submit"
          >
            Log out
          </GS.ButtonsLinks>
        </GS.LoginBackground>
      </Row>
    </GS.Background>
  );
};

export default ProfilePage;
