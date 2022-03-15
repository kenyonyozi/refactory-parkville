// the graph
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
var layout = {title: "Analytics"};

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);



var baseUrl = 'http://localhost:3000/';

// here the function is telling 
async function allClients(event) {
    // 
    event.preventDefault();
// 
    try {
        const response = await fetch(baseUrl + 'users/allClients', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },
            mode: 'cors',
        })

        const data = await response.json()
        console.log('>>>>>>> all clients', data);
    } catch (error) {
        console.log(error)
    }
}
