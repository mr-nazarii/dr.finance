import React, { useState } from "react";
import SelectInput from "../components/form/SelectInput";
import GS from "../styles/styles";

const MainPage = () => {
  // get the setting menu to the different file
  // add an exit button off the settings menu
  const [right, setRight] = useState(false);
  return (
    <GS.MainBckground>
      <GS.LogoWrapper jContent="space-between">
        <GS.BlockWallet>
          <GS.BlockCurrencyImg src={process.env.PUBLIC_URL + "dollarR.png"} />
          500
        </GS.BlockWallet>
        <GS.BlockWrapperSettings onClick={() => setRight(!right)}>
          <GS.BlockImg src={process.env.PUBLIC_URL + "settings.png"} />
        </GS.BlockWrapperSettings>
        <GS.SettingsMenu right={right}>
          <GS.SettingsMenuLI>
            <GS.LogoMain fontSize="30px">Dr.Finance</GS.LogoMain>
          </GS.SettingsMenuLI>
          <GS.SettingsMenuLI>Profile</GS.SettingsMenuLI>

          <GS.SettingsMenuLI>Feedback</GS.SettingsMenuLI>
          <GS.SettingsMenuLI>
            Curency
            <SelectInput currency={["USD", "EUR", "GBP", "UAH"]} />
          </GS.SettingsMenuLI>
        </GS.SettingsMenu>
        {right ? <GS.MenuBackground onClick={() => setRight(!right)} /> : null}
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
    </GS.MainBckground>
  );
};

export default MainPage;
