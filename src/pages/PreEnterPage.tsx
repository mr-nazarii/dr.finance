import React from "react";
import GS from "../styles/styles";
import Logo from "../components/texts/Logo";

import { Link } from "react-router-dom";
import { FormButton } from "../styles/muiStyles";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/esm/Col";

const PreEnterPage = () => {
  return (
    <GS.Background
      className="d-flex align-items-center justify-content-center
    "
    >
      <Row className="d-flex flex-column">
        <GS.LoginBackground className="d-flex align-items-center justify-content-center flex-column  px-3 px-sm-5 py-4">
          <GS.SectionTitle className="px-3 py-1">Welcome to</GS.SectionTitle>
          <GS.LogoMain fontSize="33px">Dr.Finance </GS.LogoMain>
          <GS.SafeImage src={process.env.PUBLIC_URL + "/welcome.png"} />
        </GS.LoginBackground>
        <GS.LoginBackground
          bgColor="white"
          className="d-flex align-items-center justify-content-center flex-column p-0"
        >
          <GS.ButtonsLinks
            to="/login"
            className="text-center fw-bolder fs-5 text-uppercase py-3 m-0 "
          >
            Log In
          </GS.ButtonsLinks>
          <GS.ButtonsLinks
            to="/register"
            theme="dark"
            className="text-center fw-bolder fs-5 text-uppercase py-3 m-0 "
          >
            Register
          </GS.ButtonsLinks>
        </GS.LoginBackground>
      </Row>
    </GS.Background>
  );
};

export default PreEnterPage;
