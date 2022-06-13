import React from "react";
import { Doughnut } from "react-chartjs-2";
import { colorVariables } from "../../../styles/colors";
import GS from "../../../styles/styles";
import { hoverLabel } from "./pieData";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useAppSelector } from "../../../hooks/hooks";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const { expenses }: any = useAppSelector((state) => state.profile);

  let uniqueExp: any[] = [];
  let amount: any[] = [];

  const exp = expenses?.map((exp: any) => {
    uniqueExp.push(exp.type);
  });

  const data = {
    labels: uniqueExp,
    datasets: [
      {
        label: "chart",
        data: expenses,
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(126, 192, 75, 0.2)",
          "rgba(165, 150, 36, 0.2)",
          "rgb(70, 48, 161,0.2)",
          "rgb(146, 33, 33,0.2)",
          "rgb(255, 133, 82, 0.2)",
          "rgba(247, 99, 255, 0.2)",
          "rgba(153, 192, 75, 0.2)",
          "rgba(36, 137, 165, 0.2)",
          "rgb(117, 88, 233, 0.2)",
          "rgb(88, 233, 216, 0.2)",
          "rgb(255, 82, 82, 0.2)",
          "rgb(233, 215, 88, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
          "rgb(85, 192, 75)",
          "rgb(233, 215, 88)",
          "rgb(117, 88, 233)",
          "rgb(233, 88, 88)",
          "rgb(255, 133, 82)",
          "rgb(247, 99, 255)",
          "rgb(153, 192, 75)",
          "rgb(36, 137, 165)",
          "rgb(233, 215, 88)",
          "rgb(117, 88, 233)",
          "rgb(88, 233, 216)",
          "rgb(255, 82, 82)",
        ],
        borderWidth: 1,
        legend: {
          display: true,
        },
      },
    ],
  };

  const options = {
    parsing: {
      key: "amount",
    },
  };

  return (
    <GS.FinanceWrapper>
      <GS.SectionTitle> Finance chart</GS.SectionTitle>
      <Doughnut data={data} options={options} plugins={[hoverLabel]} />
    </GS.FinanceWrapper>
  );
};

export default PieChart;
