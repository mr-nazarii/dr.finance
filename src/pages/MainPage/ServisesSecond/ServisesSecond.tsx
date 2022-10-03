import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SecondaryServiceLink } from "../../../styles/muiStyles";

import GS from "../../../styles/styles";
import ExpensesModal from "../Finance/AddExpense/ExpensesModal";
import IncomeModal from "../Finance/AddIncome/IncomeModal";

const ServisesSecond = () => {
  let num = 0;

  return (
    <>
      <IncomeModal />
      <ExpensesModal />

      <GS.BlockWrapper
        xs="2"
        key={num++}
        className="d-flex flex-column text-center p-0"
      >
        <SecondaryServiceLink to={"/mainPage/stats"}>
          <GS.BlockImg src={process.env.PUBLIC_URL + `stats.png`} />
        </SecondaryServiceLink>
        <div className="pt-2">
          <p className="fs-5">View</p>
          <p className="fs-2">History</p>
        </div>
      </GS.BlockWrapper>
    </>
  );
};

export default ServisesSecond;
