import React from "react";
import GS from "../styles/styles";
import Button from "../components/buttons/Button";
import Logo from "../components/texts/Logo";

import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <GS.Background>
      <GS.LoginBackground>
        <Logo />

        <GS.SectionTitle>
          Ooops Looks like this page dos'nt exist
        </GS.SectionTitle>

        <GS.SafeImage src={process.env.PUBLIC_URL + "/tools.png"} />

        <Link to="/">
          <Button bgColor="#DAAAFF">Home Page</Button>
        </Link>
      </GS.LoginBackground>
    </GS.Background>
  );
};

export default NoPage;
