var xValues = ["Parking", "Battery", "Tyre sections",];
var yValues = [80, 49, 34,];
var barColors = [
  "#008000",
  "#FFA500",
  "red"
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Parkville Stats 2022"
    }
  }
});



