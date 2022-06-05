import React from "react";
import { Link } from "react-router-dom";
import SelectInput from "../components/form/SelectInput";

import GS from "../styles/styles";

const SettingsMenu = (props: any) => {
  return (
    <>
      <GS.SettingsMenu right={props.show}>
        <GS.SettingsMenuLI jContent={"flex-end"}>
          <GS.BlockWrapperSettingsInside
            onClick={() => props.setShow(!props.show)}
          >
            <GS.BlockImg src={process.env.PUBLIC_URL + "/settings.png"} />
          </GS.BlockWrapperSettingsInside>
        </GS.SettingsMenuLI>
        <GS.SettingsMenuLI>
          <Link to="/mainPage" style={{ textDecoration: "none" }}>
            <GS.LogoMain fontSize="30px">Dr.Finance</GS.LogoMain>
          </Link>
        </GS.SettingsMenuLI>{" "}
        <Link to="/mainPage/profile" style={{ textDecoration: "none" }}>
          <GS.SettingsMenuLI>Profile</GS.SettingsMenuLI>
        </Link>{" "}
        <Link to="/mainPage/feedback" style={{ textDecoration: "none" }}>
          <GS.SettingsMenuLI>Feedback</GS.SettingsMenuLI>{" "}
        </Link>
        <GS.SettingsMenuLI>
          Curency
          <SelectInput currency={["USD", "EUR", "GBP"]} />
        </GS.SettingsMenuLI>
      </GS.SettingsMenu>
      {props.show ? (
        <GS.MenuBackground onClick={() => props.setShow(!props.show)} />
      ) : null}
    </>
  );
};

export default SettingsMenu;
