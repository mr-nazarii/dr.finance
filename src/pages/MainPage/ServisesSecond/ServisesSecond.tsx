import React from "react";
import { Link } from "react-router-dom";

import GS from "../../../styles/styles";
import ExpensesModal from "../Finance/AddExpense/ExpensesModal";
import IncomeModal from "../Finance/AddIncome/IncomeModal";

const ServisesSecond = () => {
  let num = 0;

  return (
    <GS.LogoWrapper jContent="center">
      <IncomeModal />
      <ExpensesModal />
      <Link to="/mainPage/stats">
        <GS.BlockWrapper key={num++}>
          <GS.BlockImg src={process.env.PUBLIC_URL + `stats.png`} />
        </GS.BlockWrapper>
      </Link>
      <GS.BlockWrapper key={num++}>
        <GS.BlockImg src={process.env.PUBLIC_URL + `wallet.png`} />
      </GS.BlockWrapper>
    </GS.LogoWrapper>
  );
};

export default ServisesSecond;
