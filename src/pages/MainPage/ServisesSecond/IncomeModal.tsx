import React from "react";
import GS from "../../../styles/styles";
import ModifyFinance from "../Finance/ModifyFinance";

const IncomeModal = (props: any) => {
  const date = new Date().getTime();
  return (
    <>
      <GS.BlockWrapper
        onClick={() => props.setShow(!props.show)}
        key={Math.floor(Math.random() * date)}
      >
        <GS.BlockImg src={process.env.PUBLIC_URL + `thumbUp.png`} />
      </GS.BlockWrapper>
      {props.show ? (
        <>
          <ModifyFinance income={true} />
          <GS.MenuBackground onClick={() => props.setShow(!props.show)} />
        </>
      ) : null}
    </>
  );
};

export default IncomeModal;
