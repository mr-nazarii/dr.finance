import React, { useState } from "react";

import GS from "../../styles/styles";
import ModifyFinance from "./Finance/ModifyFinance";

const ServisesSecond = () => {
  const [show, setShow] = useState(false);

  let num = 0;
  return (
    <GS.LogoWrapper jContent="center">
      <GS.BlockWrapper onClick={() => setShow(!show)} key={num++}>
        <GS.BlockImg src={process.env.PUBLIC_URL + `thumbUp.png`} />
      </GS.BlockWrapper>
      {show ? (
        <>
          <ModifyFinance />
          <GS.MenuBackground onClick={() => setShow(!show)} />
        </>
      ) : null}
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
