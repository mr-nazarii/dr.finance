export const ExpensesData = (uniqueExp: any, amount: any) => {
  const data = {
    labels: uniqueExp,
    datasets: [
      {
        label: "chart",
        data: amount,
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
          "rgb(150, 97, 255)",
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

  return data;
};

export const hoverLabelExpenses = (rawExpenses: any) => {
  const hoverLabel = {
    id: "hoverLabel",
    afterDraw(chart: any, args: any, options: any) {
      const {
        ctx,
        chartArea: { left, right, top, bottom, width, height },
      } = chart;

      ctx.save();

      if (chart._active.length > 0) {
        const textLabel = `$${
          chart.config.data.datasets[0].data[chart._active[0].index]
        }`;
        ctx.font = "bolder 24px Arial";
        ctx.fillStyle = "rgba(255,255,255,0.)";
        ctx.textAlign = "center";
        ctx.fillText(textLabel, width / 2, height / 2 + top);
      } else {
        ctx.font = "bolder 24px Arial";
        ctx.fillStyle = "rgba(255,255,255,0.)";
        ctx.textAlign = "center";
        ctx.fillText(
          `$${rawExpenses.reduce(
            (partialSum: any, a: any) => +partialSum + +a,
            0
          )}`,
          width / 2,
          height / 2 + top
        );
      }
    },
  };

  return hoverLabel;
};
