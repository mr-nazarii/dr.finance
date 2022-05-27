import React from "react";
import GS from "../styles/styles";
import Button from "../components/buttons/Button";
import Logo from "../components/texts/Logo";

import { Link } from "react-router-dom";

const PreEnterPage = () => {
  return (
    <GS.Background>
      <GS.LoginBackground>
        <GS.SectionTitle>Welcome to</GS.SectionTitle>
        <Logo />

        <GS.MainText>
          You are here because you finally want to get in control of your
          finances and put them to work for you.
          <GS.SpanLogo>Dr.finance</GS.SpanLogo> provides you all the tools
          necessary to manage your finances and eventually to collect enough
          money to buy that house you always wanted along the beach
        </GS.MainText>
        <GS.SafeImage src={process.env.PUBLIC_URL + "safe.png"} />

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
