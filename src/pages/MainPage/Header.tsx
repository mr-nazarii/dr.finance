import { Drawer, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import useEffectOnce from "../../hooks/useEffectOnce";
import { loadUser } from "../../store/loadUser";
import { SettingsDrawer } from "../../styles/muiStyles";

import GS from "../../styles/styles";
import SettingsMenu from "../SettingsMenu";

const Header = (props: any) => {
  // get the setting menu to the different file
  // add an exit button off the settings menu
  const { currency } = useAppSelector((state) => state.profile);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("uToken");
  const total = useAppSelector((state) => state.profile.total);

  useEffectOnce(() => {
    if (token === null) {
      navigate("/login");
    }
    loadUser(dispatch, token, "setUser");
    loadUser(dispatch, token, "expenses");
    loadUser(dispatch, token, "incomes");
  });

  return (
    <>
      <GS.LogoWrapper jContent="space-between">
        <GS.BlockWallet>
          <GS.BlockCurrencyImg
            src={process.env.PUBLIC_URL + `/${currency}.png`}
          />
          {total as any}
        </GS.BlockWallet>
        <GS.BlockWrapperSettings onClick={() => setShow(!show)}>
          <GS.BlockImg src={process.env.PUBLIC_URL + "/settings.png"} />
        </GS.BlockWrapperSettings>

        <SettingsDrawer
          anchor={"right"}
          open={show}
          onClose={() => setShow(!show)}
        >
          <SettingsMenu show={show} setShow={setShow} />
        </SettingsDrawer>
      </GS.LogoWrapper>
      <Outlet />
    </>
  );
};

export default Header;
