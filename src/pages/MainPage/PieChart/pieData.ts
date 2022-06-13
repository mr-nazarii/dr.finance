export const hoverLabel = {
  id: "hoverLabel",
  afterDraw(chart: any, args: any, options: any) {
    const {
      ctx,
      chartArea: { left, right, top, bottom, width, height },
    } = chart;

    ctx.save();

    if (chart._active.length > 0) {
      const textLabel = `$${
        chart.config.data.datasets[0].data[chart._active[0].index].amount
      }`;

      ctx.font = "bolder 24px Arial";
      ctx.fillStyle = "rgba(255,255,255,0.)";
      ctx.textAlign = "center";
      ctx.fillText(textLabel, width / 2, height / 2 + top);
    } else {
      ctx.font = "bolder 24px Arial";
      ctx.fillStyle = "rgba(255,255,255,0.)";
      ctx.textAlign = "center";
      ctx.fillText("Data", width / 2, height / 2 + top);
    }
  },
};
