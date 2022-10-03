import {
  Button,
  Drawer,
  InputLabel,
  ListItem,
  ListItemIcon,
  ListItemText,
  Select,
  TextField,
} from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import { colorVariables } from "./colors";

export const FormButton = styled(Button, {})<any>`
  background-color: ${(props) =>
    props.backgroundcolor === "login"
      ? colorVariables.buttonLogInColor
      : colorVariables.buttonRegisterColor};

  color: ${colorVariables.white};

  font-weight: 700;
  font-size: 17px;
  line-height: 30px;
  text-align: center;
  text-transform: uppercase;

  &:hover {
    background-color: ${(props) =>
      props.backgroundcolor === "login"
        ? colorVariables.buttonLogInColor
        : colorVariables.buttonRegisterColor};
  }
`;

export const SecondaryServiceLink = styled(Link, {})<any>``;

export const SettingsItemIcon = styled(ListItemIcon, {})<any>`
  &.MuiListItemIcon-root {
    min-width: 32px !important;
    color: ${colorVariables.buttonRegisterColorDarker};
  }
`;

export const HeaderListItem = styled(ListItem, {})<any>`
  &.MuiListItem-root {
    display: flex;
    justify-content: flex-end;
    transition: all 0.2s ease-out;
    color: black;
  }
`;

export const SettingsListItem = styled(ListItem, {})<any>`
  &.MuiListItem-root {
    display: flex;
    justify-content: flex-end;
    transition: all 0.2s ease-out;

    &:hover {
      background-color: ${colorVariables.black};
      transition: all 0.2s ease-out;
    }
  }
`;

export const SettingsItemText = styled(ListItemText, {})<any>`
  &.MuiListItemText-root {
    color: ${colorVariables.black};

    &:hover {
      color: ${colorVariables.white};
    }
  }
`;

export const CurrencyItemText = styled(ListItemText, {})<any>`
  &.MuiListItemText-root {
    color: ${colorVariables.black};
  }
`;

export const FormTextField = styled(TextField, {})<any>`
  & label.Mui-focused {
    color: ${colorVariables.buttonRegisterColorDarker};
  }

  & label {
    color: ${colorVariables.buttonRegisterColorDarker};
  }

  & .MuiInputBase-input {
    background-color: white;
  }

  & .MuiInputBase-root .MuiFilledInput-underline .MuiInputBase-colorPrimary {
    padding: 0px;
  }

  /* & .MuiInput-underline:after {
  } */

  & .MuiInput-underline {
    border-bottom-color: red;
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-width: 3px;
      border-color: ${colorVariables.buttonRegisterColorDarker};
    }
    &:hover fieldset {
      border-color: ${colorVariables.buttonRegisterColorDarker};
    }
    &.Mui-focused fieldset {
      border-color: ${colorVariables.buttonRegisterColor};
    }
  }
`;

export const SettingsDrawer = styled(Drawer, {})<any>``;

export const FormSelect = styled(Select, {})<any>`
  & .MuiSelect-select {
    border-color: green;
    border-width: 2px;
  }

  & .MuiOutlinedInput-notchedOutline {
    border-color: green !important;
    border-width: 2px;
  }

  & .MuiOutlinedInput-notchedOutline {
    border-color: green !important;
  }
`;

export const FormSelectTemp = styled(Select, {})<any>`
  & .MuiSelect-select {
    border-color: red;
    border-width: 2px;
  }

  & .MuiOutlinedInput-notchedOutline {
    border-color: red !important;
    border-width: 2px;
  }

  & .MuiOutlinedInput-notchedOutline {
    border-color: red !important;
  }
`;

export const FormAmountTemp = styled(TextField, {})<any>`
  & .MuiOutlinedInput-notchedOutline {
    border-color: red !important;
    border-width: 2px;
  }

  & .MuiInputLabel-root {
    color: red !important;
  }
`;

export const FormAmount = styled(TextField, {})<any>`
  & .MuiOutlinedInput-notchedOutline {
    border-color: green !important;
    border-width: 2px;
  }

  & .MuiInputLabel-root {
    color: green !important;
  }
`;
