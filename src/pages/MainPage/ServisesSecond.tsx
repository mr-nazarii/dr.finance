import React from "react";
import GS from "../../styles/styles";
// import ModifyFinance from "./Finance/ModifyFinance";

const ServisesSecond = () => {
  let num = 0;
  return (
    <GS.LogoWrapper jContent="center">
      <GS.BlockWrapper onClick={() => alert("Hello")} key={num++}>
        <GS.BlockImg src={process.env.PUBLIC_URL + `thumbUp.png`} />
      </GS.BlockWrapper>
      {/* <ModifyFinance /> */}
      <GS.BlockWrapper key={num++}>
        <GS.BlockImg src={process.env.PUBLIC_URL + `thumbDown.png`} />
      </GS.BlockWrapper>
      <GS.BlockWrapper key={num++}>
        <GS.BlockImg src={process.env.PUBLIC_URL + `stats.png`} />
      </GS.BlockWrapper>
      <GS.BlockWrapper key={num++}>
        <GS.BlockImg src={process.env.PUBLIC_URL + `wallet.png`} />
      </GS.BlockWrapper>
    </GS.LogoWrapper>
  );
};

export default ServisesSecond;
