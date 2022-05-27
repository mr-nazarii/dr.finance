import React from "react";
import GS from "../../styles/styles";

const Logo = () => {
  return (
    <GS.LogoWrapper jContent="center">
      <GS.LogoMain>
        Dr.Finance{" "}
        <GS.ImageDollar src={process.env.PUBLIC_URL + "dollar.png"} />
      </GS.LogoMain>
    </GS.LogoWrapper>
  );
};

export default Logo;
