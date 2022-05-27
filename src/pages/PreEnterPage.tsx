import React from "react";
import GS from "../styles/styles";
import Button from "../components/buttons/Button";
import Logo from "../components/texts/Logo";

import { Link } from "react-router-dom";

const PreEnterPage = () => {
  return (
    <GS.Background>
      <GS.LoginBackground>
        <Logo />
        <GS.SectionTitle>Welcome</GS.SectionTitle>

        <GS.LogoWrapper jContent="space-around">
          <Link to="/login">
            <Button>Log In</Button>
          </Link>
          <Link to="/register">
            <Button bgColor="#DAAAFF">Register</Button>
          </Link>
        </GS.LogoWrapper>
      </GS.LoginBackground>
    </GS.Background>
  );
};

export default PreEnterPage;
