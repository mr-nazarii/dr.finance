import { Modal } from "@mui/material";
import React, { useState } from "react";
import GS from "../../../../styles/styles";
import ModifyFinance from "../ModifyFinance";

const IncomeModal = (props: any) => {
  const date = new Date().getTime();

  const [show, setShow] = useState(false);

  return (
    <>
      <GS.BlockWrapper
        onClick={() => setShow(!show)}
        key={Math.floor(Math.random() * date)}
      >
        <GS.BlockImg src={process.env.PUBLIC_URL + `thumbUp.png`} />
      </GS.BlockWrapper>

      <Modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        open={show}
        onClose={() => setShow(false)}
      >
        <ModifyFinance setShow={setShow} show={show} income={true} />
      </Modal>
    </>
  );
};

export default IncomeModal;
