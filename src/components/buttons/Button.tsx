import React from "react";
import GS from "../../styles/styles";

const Button = (props: any) => {
  return <GS.ButtonStyleLogin {...props}>{props.children}</GS.ButtonStyleLogin>;
};

export default Button;
