import React from "react";
import GS from "../../styles/styles";

const ServisesSecond = (props: any) => {
  let num = 0;
  return (
    <GS.LogoWrapper jContent="center">
      {props.services.map((service: any) => (
        <GS.BlockWrapper key={num++}>
          <GS.BlockImg src={process.env.PUBLIC_URL + `${service}.png`} />
        </GS.BlockWrapper>
      ))}
    </GS.LogoWrapper>
  );
};

export default ServisesSecond;
