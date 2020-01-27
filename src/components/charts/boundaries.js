import { Chart } from "chart.js";

export default function Boundaries(setData) {
  var ctx = document.querySelector("#boundaries").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [5, 8, 3, 5, 2, 3],
          borderColor: "#2c8d80",
          borderWidth: 3,
          fill: "start"
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      spanGaps: false,
      elements: {
        line: {
          tension: 0.000001
        }
      },
      plugins: {
        filler: {
          propagate: false
        }
      },
      scales: {
        x: {
          ticks: {
            autoSkip: false,
            maxRotation: 0
          }
        }
      },
      title: {
        display: true,
        fontFamily: "Roboto",
        text: "Chart Line",
        fontSize: 14
      }
    }
  });
}
