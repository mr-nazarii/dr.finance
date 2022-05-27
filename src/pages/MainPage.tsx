import React from "react";
import GS from "../styles/styles";

const MainPage = () => {
  return (
    <>
      <GS.LogoWrapper jContent="space-between">
        <GS.BlockWallet>
          <GS.BlockCurrencyImg src={process.env.PUBLIC_URL + "dollarR.png"} />
          500
        </GS.BlockWallet>
        <GS.BlockWrapperSettings>
          <GS.BlockImg src={process.env.PUBLIC_URL + "settings.png"} />
        </GS.BlockWrapperSettings>
      </GS.LogoWrapper>
      <GS.LogoWrapper jContent="center">
        <GS.BlockWrapperChart>
          <GS.BlockImg src={process.env.PUBLIC_URL + "chart.png"} />
        </GS.BlockWrapperChart>
      </GS.LogoWrapper>
      <GS.LogoWrapper jContent="center">
        <GS.BlockWrapper>
          <GS.BlockImg src={process.env.PUBLIC_URL + "thumbUp.png"} />
        </GS.BlockWrapper>
        <GS.BlockWrapper>
          <GS.BlockImg src={process.env.PUBLIC_URL + "thumbDown.png"} />
        </GS.BlockWrapper>
        <GS.BlockWrapper>
          <GS.BlockImg src={process.env.PUBLIC_URL + "stats.png"} />
        </GS.BlockWrapper>
        <GS.BlockWrapper>
          <GS.BlockImg src={process.env.PUBLIC_URL + "wallet.png"} />
        </GS.BlockWrapper>
      </GS.LogoWrapper>
    </>
  );
};

export default MainPage;
