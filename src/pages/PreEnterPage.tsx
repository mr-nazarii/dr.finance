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

        <GS.MainText>
          You are here because you finally want to get in control of your
          finances and put them to work for you.
          <GS.SpanLogo>Dr.Finance</GS.SpanLogo> provides you all the tools
          necessary to manage your finances and eventually to collect enough
          money to buy that house you always wanted along the beach
        </GS.MainText>
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
