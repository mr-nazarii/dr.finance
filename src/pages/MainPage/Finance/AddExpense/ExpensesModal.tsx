import { Modal } from "@mui/material";
import React, { useRef, useState } from "react";
import GS from "../../../../styles/styles";
import ModifyFinance from "../ModifyFinance";

const ExpensesModal = (props: any) => {
  const date = new Date().getTime();
  const [show, setShow] = useState(false);

  return (
    <>
      <GS.BlockWrapper
        xs="2"
        onClick={() => setShow(!show)}
        key={Math.floor(Math.random() * date)}
        className="d-flex flex-column text-center p-0"
        s
      >
        <GS.BlockImg src={process.env.PUBLIC_URL + `thumbDown.png`} />
        <div className="pt-2">
          <p className="fs-5">Add</p>
          <p className="fs-2">Expense</p>
        </div>
      </GS.BlockWrapper>

      <Modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        open={show}
        onClose={() => setShow(false)}
      >
        <ModifyFinance setShow={setShow} show={show} income={false} />
      </Modal>
    </>
  );
};

export default ExpensesModal;
