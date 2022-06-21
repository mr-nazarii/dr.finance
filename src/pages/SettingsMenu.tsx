import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import SelectInput from "../components/form/SelectInput";
import {
  AccountCircle,
  ThumbUpAlt,
  CurrencyExchange,
  Close,
  Home,
} from "@mui/icons-material";
import GS from "../styles/styles";
import {
  SettingsItemIcon,
  SettingsItemText,
  SettingsListItem,
} from "../styles/muiStyles";

const SettingsMenu = (props: any) => {
  return (
    <>
      <List>
        <SettingsListItem>
          <Close onClick={() => props.setShow(!props.show)} />
        </SettingsListItem>
        <SettingsListItem>
          <GS.LogoMain fontSize="30px">Dr.Finance</GS.LogoMain>
        </SettingsListItem>

        <SettingsListItem component={Link} to="/mainPage">
          <SettingsItemIcon>
            <Home />
          </SettingsItemIcon>

          <SettingsItemText>Home</SettingsItemText>
        </SettingsListItem>

        <SettingsListItem component={Link} to="/mainPage/profile">
          <SettingsItemIcon>
            <AccountCircle />
          </SettingsItemIcon>

          <SettingsItemText>Profile</SettingsItemText>
        </SettingsListItem>
        <SettingsListItem component={Link} to="/mainPage/feedback">
          <SettingsItemIcon>
            <ThumbUpAlt />
          </SettingsItemIcon>

          <SettingsItemText>Feedback</SettingsItemText>
        </SettingsListItem>

        <SettingsListItem>
          <SettingsItemIcon>
            <CurrencyExchange />
          </SettingsItemIcon>
          <SettingsItemText>Curency</SettingsItemText>

          <SelectInput currency={["USD", "EUR", "GBP"]} />
        </SettingsListItem>
      </List>
    </>
  );
};

export default SettingsMenu;
