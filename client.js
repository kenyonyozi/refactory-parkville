var exp1 = "x";
var exp2 = "1.5*x";
var exp3 = "1.5*x + 7";
// Generate values

var x1Values = [];
var x2Values = [];
var x3Values = [];
var y1Values = [];
var y2Values = [];
var y3Values = [];

for (var x = 0; x <= 10; x += 1) {
  x1Values.push(x);
  x2Values.push(x);
  x3Values.push(x);
  y1Values.push(eval(exp1));
  y2Values.push(eval(exp2));
  y3Values.push(eval(exp3));
}

// Define Data
var data = [
  {x: x1Values, y: y1Values, mode:"lines"},
  {x: x2Values, y: y2Values, mode:"lines"},
  {x: x3Values, y: y3Values, mode:"lines"}
];

//Define Layout
var layout = {title: "[y=" + exp1 + "]  [y=" + exp2 + "]  [y=" + exp3 + "]"};

// Display using Plotly
Plotly.newPlot("myPlot", data);



window.addEventListener('DOMContentLoaded', event => {

  // Toggle the side navigation
  const sidebarToggle = document.body.querySelector('#sidebarToggle');
  if (sidebarToggle) {
      // Uncomment Below to persist sidebar toggle between refreshes
      // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
      //     document.body.classList.toggle('sb-sidenav-toggled');
      // }
      sidebarToggle.addEventListener('click', event => {
          event.preventDefault();
          document.body.classList.toggle('sb-sidenav-toggled');
          localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
      });
  }

});

