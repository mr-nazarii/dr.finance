import React from "react";
import GS from "../styles/styles";
import Logo from "../components/texts/Logo";

import { Link } from "react-router-dom";
import { FormButton } from "../styles/muiStyles";

const PreEnterPage = () => {
  return (
    <GS.Background>
      <GS.LoginBackground>
        <GS.SectionTitle>Welcome to</GS.SectionTitle>
        <Logo />
        <GS.SafeImage src={process.env.PUBLIC_URL + "/safe.png"} />
        <GS.LogoWrapper jContent="space-around">
          <FormButton
            variant="contained"
            size="large"
            backgroundcolor="login"
            component={Link}
            to="/login"
          >
            Log In
          </FormButton>
          <FormButton
            component={Link}
            to="/register"
            variant="contained"
            size="large"
          >
            Register
          </FormButton>
        </GS.LogoWrapper>
      </GS.LoginBackground>
    </GS.Background>
  );
};

export default PreEnterPage;
