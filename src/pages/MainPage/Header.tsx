import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";

import GS from "../../styles/styles";
import SettingsMenu from "../SettingsMenu";

const Header = (props: any) => {
  // get the setting menu to the different file
  // add an exit button off the settings menu
  const { currency } = useAppSelector((state) => state.profile);
  const [show, setShow] = useState(false);

  return (
    <>
      <GS.LogoWrapper jContent="space-between">
        <GS.BlockWallet>
          <GS.BlockCurrencyImg
            src={process.env.PUBLIC_URL + `/${currency}.png`}
          />
          500
        </GS.BlockWallet>
        <GS.BlockWrapperSettings onClick={() => setShow(!show)}>
          <GS.BlockImg src={process.env.PUBLIC_URL + "/settings.png"} />
        </GS.BlockWrapperSettings>
        <SettingsMenu show={show} setShow={setShow} />
      </GS.LogoWrapper>
      <Outlet />
    </>
  );
};

export default Header;
