import React from "react";

export const TotalData = (amount: any) => {
  const data = {
    labels: ["Expenses", "Income"],
    datasets: [
      {
        label: "chart",
        data: amount,
        backgroundColor: ["rgb(255, 82, 82, 0.2)", "rgba(126, 192, 75, 0.2)"],
        borderColor: ["rgb(255, 82, 82)", "rgb(85, 192, 75)"],
        borderWidth: 1,
        legend: {
          display: true,
        },
      },
    ],
  };

  return data;
};
