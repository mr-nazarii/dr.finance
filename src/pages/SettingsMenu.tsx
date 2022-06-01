import React from "react";
import { Link } from "react-router-dom";
import SelectInput from "../components/form/SelectInput";
import GS from "../styles/styles";

const SettingsMenu = (props: any) => {
  return (
    <>
      <GS.SettingsMenu right={props.right}>
        <GS.SettingsMenuLI>
          <GS.LogoMain fontSize="30px">Dr.Finance</GS.LogoMain>
        </GS.SettingsMenuLI>
        <GS.SettingsMenuLI>
          <Link to="/mainPage/profile">Profile</Link>
        </GS.SettingsMenuLI>

        <GS.SettingsMenuLI>
          <Link to="/feedback">Feedback</Link>
        </GS.SettingsMenuLI>
        <GS.SettingsMenuLI>
          Curency
          <SelectInput currency={["USD", "EUR", "GBP"]} />
        </GS.SettingsMenuLI>
      </GS.SettingsMenu>
      {props.right ? (
        <GS.MenuBackground onClick={() => props.setRight(!props.right)} />
      ) : null}
    </>
  );
};

export default SettingsMenu;
