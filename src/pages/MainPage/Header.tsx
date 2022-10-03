import React, { useState } from "react";
import { Image, Row } from "react-bootstrap";
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
    console.log("Header load token", token);
    loadUser(dispatch, token, "setUser");
    loadUser(dispatch, token, "expenses");
    loadUser(dispatch, token, "incomes");
  });

  return (
    <>
      <Row className="d-flex justify-content-between align-items-start m-3">
        <GS.BlockWallet
          xs="auto"
          className="d-flex align-items-center gap-3 p-2 px-3 ps-2"
        >
          <Image
            style={{ width: "40px", height: "40px" }}
            fluid
            src={process.env.PUBLIC_URL + `/${currency}.png`}
          />
          <p>{(total as any) || 0}</p>
        </GS.BlockWallet>
        <GS.BlockWrapperSettings
          className="p-1"
          xs="auto"
          onClick={() => setShow(!show)}
        >
          <Image
            style={{ width: "60px", height: "60px" }}
            fluid
            src={process.env.PUBLIC_URL + `/settings.png`}
          />
        </GS.BlockWrapperSettings>

        <SettingsDrawer
          anchor={"right"}
          open={show}
          onClose={() => setShow(!show)}
        >
          <SettingsMenu show={show} setShow={setShow} />
        </SettingsDrawer>
      </Row>
      <Outlet />
    </>
  );
};

export default Header;
