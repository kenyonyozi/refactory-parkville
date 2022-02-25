// for the circle
var xValues = ["Parking", "Battery", "Tyre sections",];
var yValues = [80, 49, 34,];
var barColors = [
  "#b91d47",
  "#00aba9",
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
// Get the modal for the reg button
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// // JAVASCRIPT FOR GRAPH
// var xValues = ["Parking", "Battery", "Tyres"];
// var yValues = [55, 49, 44,];
// var barColors = ["red", "green","blue"];

// new Chart("myChart", {
//   type: "bar",
//   data: {
//     labels: xValues,
//     datasets: [{
//       backgroundColor: barColors,
//       data: yValues
//     }]
//   },
//   options: {
//     legend: {display: false},
//     title: {
//       display: true,
//       text: "Parkville Production"
//     }
//   }
// });



