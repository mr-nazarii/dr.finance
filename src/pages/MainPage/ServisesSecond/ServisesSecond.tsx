import React from "react";
import { Link } from "react-router-dom";
import { SecondaryServiceLink } from "../../../styles/muiStyles";

import GS from "../../../styles/styles";
import ExpensesModal from "../Finance/AddExpense/ExpensesModal";
import IncomeModal from "../Finance/AddIncome/IncomeModal";

const ServisesSecond = () => {
  let num = 0;

  return (
    <GS.LogoWrapper jContent="center">
      <IncomeModal />
      <ExpensesModal />

      <SecondaryServiceLink key={num++} to={"/mainPage/stats"}>
        <GS.BlockImg src={process.env.PUBLIC_URL + `stats.png`} />
      </SecondaryServiceLink>

      <GS.BlockWrapper key={num++}>
        <GS.BlockImg src={process.env.PUBLIC_URL + `wallet.png`} />
      </GS.BlockWrapper>
    </GS.LogoWrapper>
  );
};

export default ServisesSecond;
