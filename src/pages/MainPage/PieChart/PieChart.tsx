import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import GS from "../../../styles/styles";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useAppSelector } from "../../../hooks/hooks";
import { ChevronRight, ChevronLeft } from "@mui/icons-material/";
import { ExpensesData, hoverLabelExpenses } from "./ExpensesChart";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const expenses: any = useAppSelector((state) => state.finances);
  const expensesAll: any = useAppSelector((state) => state.profile.expenses);
  const incomeAll: any = useAppSelector((state) => state.profile.income);
  const [page, setPage] = useState(0);

  let rawExpenses: any = [];
  let rawIncome: any = [];

  expensesAll.map((expense: any) => {
    rawExpenses.push(expense.amount);
  });

  incomeAll.map((income: any) => {
    rawIncome.push(income.amount);
  });

  let uniqueExp: any[] = [];
  let amount: any[] = [];

  let pages = [0, 1, 2];

  for (const [key, value] of Object.entries(expenses)) {
    uniqueExp.push(key);
    amount.push(value);
  }

  return (
    <GS.FinanceWrapper>
      <GS.SectionTitle>
        <GS.CloseButton right={"286px"}>
          <ChevronLeft
            onClick={() => {
              if (page === 0) {
                setPage(2);
              } else if (page === 1) {
                setPage(0);
              } else if (page === 2) {
                setPage(1);
              }
            }}
            fontSize="large"
          />
        </GS.CloseButton>
        {page === 0 ? "Expenses" : page === 1 ? "Income" : "Total"} chart
        <GS.CloseButton>
          <ChevronRight
            onClick={() => {
              if (page === 0) {
                setPage(1);
              } else if (page === 1) {
                setPage(2);
              } else if (page === 2) {
                setPage(0);
              }
            }}
            fontSize="large"
          />
        </GS.CloseButton>
      </GS.SectionTitle>

      <GS.SectionTitle fSize={"18px"} color="green">
        Gained $
        {rawIncome.reduce((partialSum: any, a: any) => +partialSum + +a, 0)}
      </GS.SectionTitle>
      <GS.SectionTitle fSize={"18px"} color="brown">
        Spent $
        {rawExpenses.reduce((partialSum: any, a: any) => +partialSum + +a, 0)}
      </GS.SectionTitle>
      {page === 0 ? (
        <Doughnut
          data={ExpensesData(uniqueExp, amount)}
          plugins={[hoverLabelExpenses(rawExpenses)]}
        />
      ) : page === 1 ? (
        <Doughnut
          data={ExpensesData(uniqueExp, amount)}
          plugins={[hoverLabelExpenses(rawExpenses)]}
        />
      ) : (
        <Doughnut
          data={ExpensesData(uniqueExp, amount)}
          plugins={[hoverLabelExpenses(rawExpenses)]}
        />
      )}
    </GS.FinanceWrapper>
  );
};

export default PieChart;
