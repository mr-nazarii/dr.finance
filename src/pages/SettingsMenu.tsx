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
  CurrencyItemText,
  HeaderListItem,
  SettingsItemIcon,
  SettingsItemText,
  SettingsListItem,
} from "../styles/muiStyles";
import { colorVariables } from "../styles/colors";

const SettingsMenu = (props: any) => {
  return (
    <>
      <List>
        <HeaderListItem>
          <Close onClick={() => props.setShow(!props.show)} />
        </HeaderListItem>
        <HeaderListItem>
          <GS.LogoMain
            color={colorVariables.white}
            bgcolor={colorVariables.black}
            fontSize="30px"
          >
            Dr.Finance
          </GS.LogoMain>
        </HeaderListItem>

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

        <HeaderListItem>
          <SettingsItemIcon>
            <CurrencyExchange />
          </SettingsItemIcon>
          <CurrencyItemText>Curency</CurrencyItemText>

          <SelectInput currency={["USD", "EUR", "GBP"]} />
        </HeaderListItem>
      </List>
    </>
  );
};

export default SettingsMenu;
