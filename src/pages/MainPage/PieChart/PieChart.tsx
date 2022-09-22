import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import GS from "../../../styles/styles";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useAppSelector } from "../../../hooks/hooks";

import { ExpensesData, hoverLabelExpenses } from "./ExpensesChart";
import { IncomeData } from "./IncomeChart";
import { TotalData } from "./TotalChart";
import { PieHeader } from "./PieHeader";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const expenses: any = useAppSelector((state) => state.expenses);
  const incomes: any = useAppSelector((state) => state.income);

  const expensesAll: any = useAppSelector((state) => state.profile.expenses);
  const incomeAll: any = useAppSelector((state) => state.profile.income);

  const [page, setPage] = useState(0);

  let rawExpenses: any = [];
  let rawIncome: any = [];

  expensesAll.map((expense: any) => {
    return rawExpenses.push(expense.amount);
  });

  incomeAll.map((income: any) => {
    return rawIncome.push(income.amount);
  });

  let uniqueExp: any[] = [];
  let amountExp: any[] = [];

  let uniqueInc: any[] = [];
  let amountInc: any[] = [];

  for (const [key, value] of Object.entries(incomes)) {
    uniqueInc.push(key);
    amountInc.push(value);
  }

  for (const [key, value] of Object.entries(expenses)) {
    uniqueExp.push(key);
    amountExp.push(value);
  }
  // Fix on mobile devices the Total chart
  return (
    <GS.FinanceWrapper>
      <PieHeader page={page} setPage={setPage} />
      {page === 0 ? (
        <GS.Calculations fSize={"18px"} color="brown">
          Spent $
          {rawExpenses.reduce((partialSum: any, a: any) => +partialSum + +a, 0)}
        </GS.Calculations>
      ) : page === 1 ? (
        <GS.Calculations fSize={"18px"} color="green">
          Gained $
          {rawIncome.reduce((partialSum: any, a: any) => +partialSum + +a, 0)}
        </GS.Calculations>
      ) : (
        <GS.LogoWrapper jContent={"space-around"} width="none">
          <GS.Calculations fSize={"18px"} color="green">
            Gained $
            {rawIncome.reduce((partialSum: any, a: any) => +partialSum + +a, 0)}
          </GS.Calculations>
          <GS.Calculations fSize={"18px"} color="brown">
            Spent $
            {rawExpenses.reduce(
              (partialSum: any, a: any) => +partialSum + +a,
              0
            )}
          </GS.Calculations>
          <GS.Calculations fSize={"18px"}>
            Saved $
            {rawIncome.reduce(
              (partialSum: any, a: any) => +partialSum + +a,
              0
            ) -
              rawExpenses.reduce(
                (partialSum: any, a: any) => +partialSum + +a,
                0
              )}
          </GS.Calculations>
        </GS.LogoWrapper>
      )}

      {page === 0 ? (
        <Doughnut
          data={ExpensesData(uniqueExp, amountExp)}
          plugins={[hoverLabelExpenses(rawExpenses)]}
        />
      ) : page === 1 ? (
        <Doughnut
          data={IncomeData(uniqueInc, amountInc)}
          plugins={[hoverLabelExpenses(rawIncome)]}
        />
      ) : (
        <Doughnut
          data={TotalData([
            rawExpenses.reduce(
              (partialSum: any, a: any) => +partialSum + +a,
              0
            ),
            rawIncome.reduce((partialSum: any, a: any) => +partialSum + +a, 0),
          ])}
          plugins={[hoverLabelExpenses(rawExpenses)]}
        />
      )}
    </GS.FinanceWrapper>
  );
};

export default PieChart;
