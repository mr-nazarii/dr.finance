import React from "react";
import GS from "../../styles/styles";

const ServisesSecond = (props: any) => {
  return (
    <GS.LogoWrapper jContent="center">
      {props.services.map((service: any) => (
        <GS.BlockWrapper>
          <GS.BlockImg src={process.env.PUBLIC_URL + `${service}.png`} />
        </GS.BlockWrapper>
      ))}
    </GS.LogoWrapper>
  );
};

export default ServisesSecond;
