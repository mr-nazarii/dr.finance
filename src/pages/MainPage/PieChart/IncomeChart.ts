import React from "react";

export const IncomeData = (uniqueExp: any, amount: any) => {
  const data = {
    labels: uniqueExp,
    datasets: [
      {
        label: "chart",
        data: amount,
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(173, 192, 75, 0.2)",
          "rgba(126, 192, 75, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgb(195, 216, 89)",
          "rgb(85, 192, 75)",
        ],
        borderWidth: 1,
        legend: {
          display: true,
        },
      },
    ],
  };

  return data;
};
