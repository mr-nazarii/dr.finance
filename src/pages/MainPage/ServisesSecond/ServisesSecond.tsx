import React from "react";

import GS from "../../../styles/styles";
import ExpensesModal from "../Finance/AddExpense/ExpensesModal";
import IncomeModal from "../Finance/AddIncome/IncomeModal";

const ServisesSecond = () => {
  let num = 0;
  return (
    <GS.LogoWrapper jContent="center">
      <IncomeModal />
      <ExpensesModal />
      <GS.BlockWrapper key={num++}>
        <GS.BlockImg src={process.env.PUBLIC_URL + `stats.png`} />
      </GS.BlockWrapper>
      <GS.BlockWrapper key={num++}>
        <GS.BlockImg src={process.env.PUBLIC_URL + `wallet.png`} />
      </GS.BlockWrapper>
    </GS.LogoWrapper>
  );
};

export default ServisesSecond;
