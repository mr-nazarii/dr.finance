import {
  Button,
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import { colorVariables } from "./colors";

export const FormButton = styled(Button, {})<any>`
  background-color: ${(props) =>
    props.backgroundColor === "login"
      ? colorVariables.buttonLogInColor
      : colorVariables.buttonRegisterColor};

  color: ${colorVariables.white};

  &:hover {
    background-color: ${(props) =>
      props.backgroundColor === "login"
        ? colorVariables.buttonLogInColor
        : colorVariables.buttonRegisterColor};
  }
`;

export const FormTextarea = styled(TextField, {})<any>`
  & .MuiInputBase-input {
    background-color: white;

    min-width: 230px;
    max-width: 230px;
    flex: 1;
  }
`;

export const SecondaryServiceLink = styled(Link, {})<any>`
  background-color: ${colorVariables.white};
  display: inline-block;
  box-shadow: 0px 4px 4px ${colorVariables.blackWithOpacity};
  border-radius: 20px;
  margin: 20px;
  min-width: 100px;
  max-width: 180px;
  flex: 1;
`;

export const SettingsItemIcon = styled(ListItemIcon, {})<any>`
  &.MuiListItemIcon-root {
    min-width: 32px !important;
    color: ${colorVariables.buttonRegisterColorDarker};
  }
`;

export const SettingsListItem = styled(ListItem, {})<any>`
  &.MuiListItem-root {
    display: flex;
    justify-content: flex-end;
  }
`;

export const SettingsItemText = styled(ListItemText, {})<any>`
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
    border-radius: 13px;
    min-width: 230px;
    max-width: 230px;
    flex: 1;
  }

  & .MuiInputBase-root .MuiFilledInput-underline .MuiInputBase-colorPrimary {
    padding: 0px;
  }

  & .MuiInput-underline:after {
    border-radius: 13px;
  }

  & .MuiInput-underline {
    border-bottom-color: red;
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-width: 3px;
      border-color: ${colorVariables.buttonRegisterColorDarker};
      border-radius: 13px;
    }
    &:hover fieldset {
      border-color: ${colorVariables.buttonRegisterColorDarker};
    }
    &.Mui-focused fieldset {
      border-color: ${colorVariables.buttonRegisterColor};
      border-radius: 13px;
    }
  }
`;

export const SettingsDrawer = styled(Drawer, {})<any>``;
