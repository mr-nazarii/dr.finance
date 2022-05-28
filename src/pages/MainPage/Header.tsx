import React from "react";
import GS from "../../styles/styles";
import SettingsMenu from "../SettingsMenu";

const Header = (props: any) => {
  // get the setting menu to the different file
  // add an exit button off the settings menu
  return (
    <GS.LogoWrapper jContent="space-between">
      <GS.BlockWallet>
        <GS.BlockCurrencyImg src={process.env.PUBLIC_URL + "dollarR.png"} />
        500
      </GS.BlockWallet>
      <GS.BlockWrapperSettings onClick={() => props.setRight(!props.right)}>
        <GS.BlockImg src={process.env.PUBLIC_URL + "settings.png"} />
      </GS.BlockWrapperSettings>
      <SettingsMenu right={props.right} setRight={props.setRight} />
    </GS.LogoWrapper>
  );
};

export default Header;