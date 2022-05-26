import React from "react";
import GS from "../../styles/styles";

const Logo = () => {
  return (
    <GS.LogoWrapper>
      <GS.LogoMain>Dr.Finance</GS.LogoMain>
      <GS.ImageDollar src={process.env.PUBLIC_URL + "dollar.png"} />
    </GS.LogoWrapper>
  );
};

export default Logo;
