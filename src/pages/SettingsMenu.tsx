import React from "react";
import SelectInput from "../components/form/SelectInput";
import GS from "../styles/styles";

const SettingsMenu = (props: any) => {
  return (
    <>
      <GS.SettingsMenu right={props.right}>
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
      {props.right ? (
        <GS.MenuBackground onClick={() => props.setRight(!props.right)} />
      ) : null}
    </>
  );
};

export default SettingsMenu;
