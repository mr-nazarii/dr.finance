import React from "react";
import GS from "../styles/styles";
import Logo from "../components/texts/Logo";

import { Link } from "react-router-dom";
import { FormButton } from "../styles/muiStyles";

const NoPage = () => {
  return (
    <GS.Background>
      <GS.LoginBackground>
        <Logo />

        <GS.SectionTitle>
          Ooops Looks like this page dos'nt exist
        </GS.SectionTitle>

        <GS.SafeImage src={process.env.PUBLIC_URL + "/tools.png"} />

        <FormButton variant="contained" size="large" to="/" component={Link}>
          Home Page{" "}
        </FormButton>
      </GS.LoginBackground>
    </GS.Background>
  );
};

export default NoPage;
