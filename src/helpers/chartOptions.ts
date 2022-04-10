import { IMetrics } from "../interfaces/metrics";

export const chartOptions = (metrics: IMetrics) => ({
  chart: {
    type: "column",
  },

  title: {
    text: "Engagement chart",
  },

  legend: {
    align: "right",
    verticalAlign: "middle",
    layout: "vertical",
  },

  xAxis: {
    categories: ["Likes", "Comments"],
    labels: {
      x: -10,
    },
  },

  yAxis: {
    allowDecimals: false,
    title: {
      text: "Amount",
    },
  },

  series: [
    {
      name: "Average",
      data: [metrics.target.like, metrics.target.comments],
    },
    {
      name: "Reached",
      data: [metrics.reach.like, metrics.reach.comments],
    },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            align: "center",
            verticalAlign: "bottom",
            layout: "horizontal",
          },
          yAxis: {
            labels: {
              align: "left",
              x: 0,
              y: -5,
            },
            title: {
              text: null,
            },
          },
          subtitle: {
            text: null,
          },
          credits: {
            enabled: false,
          },
        },
      },
    ],
  },
});
