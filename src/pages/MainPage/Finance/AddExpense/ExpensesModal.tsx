import React, { useState } from "react";
import GS from "../../../../styles/styles";
import ModifyFinance from "../ModifyFinance";

const ExpensesModal = (props: any) => {
  const date = new Date().getTime();

  const [show, setShow] = useState(false);

  return (
    <>
      <GS.BlockWrapper
        onClick={() => setShow(!show)}
        key={Math.floor(Math.random() * date)}
      >
        <GS.BlockImg src={process.env.PUBLIC_URL + `thumbDown.png`} />
      </GS.BlockWrapper>
      {show ? (
        <>
          <ModifyFinance income={false} />
          <GS.MenuBackground onClick={() => setShow(!show)} />
        </>
      ) : null}
    </>
  );
};

export default ExpensesModal;
