import { Button, TextareaAutosize, TextField } from "@mui/material";
import { styled } from "@mui/system";
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
