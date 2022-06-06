import React, { useState } from "react";

import GS from "../../../styles/styles";
import IncomeModal from "./IncomeModal";

const ServisesSecond = () => {
  const [show, setShow] = useState(false);

  let num = 0;
  return (
    <GS.LogoWrapper jContent="center">
      <IncomeModal show={show} setShow={setShow} />
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
