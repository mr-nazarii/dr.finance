import React from "react";
import GS from "../styles/styles";
import Logo from "../components/texts/Logo";

import { Link } from "react-router-dom";
import { FormButton } from "../styles/muiStyles";
import { Image, Row } from "react-bootstrap";

const NoPage = () => {
  return (
    <GS.Background
      className="d-flex align-items-center justify-content-center
    "
    >
      <Row className="d-flex flex-column">
        <GS.LoginBackground
          xs="auto"
          className="d-flex align-items-center justify-content-center p-0 flex-column px-sm-5 py-4"
        >
          <GS.LogoMain className="fs-1">Dr.Finance </GS.LogoMain>

          <GS.SectionTitle className="fs-5 px-2 text-center">
            Ooops Looks like this page dos'nt exist
          </GS.SectionTitle>
          <div style={{ width: "200px" }}>
            <Image fluid src={process.env.PUBLIC_URL + "/tools.png"} />
          </div>
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

export default NoPage;
