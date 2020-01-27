import { Chart } from "chart.js";

export default function Pie(setData) {
  var ctx = document.querySelector("#pie").getContext("2d");
  new Chart(ctx, {
    type: "pie",
    data: {
      datasets: [
        {
          data: [12, 4, 15, 10, 8],
          backgroundColor: [
            "#9233ea",
            "#c7dcea",
            "#c51162",
            "#f50057",
            "#2c8d80"
          ],
          borderWidth: 3
        }
      ],
      labels: ["value1", "value2", "value3", "value4", "value5"]
    },
    options: {
      title: {
        display: true,
        fontFamily: "Roboto",
        text: "Chart Pie",
        fontSize: 14
      }
    }
  });
}
