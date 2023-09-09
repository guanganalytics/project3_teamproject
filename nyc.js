
// import {csv} from 'd3-request';
// import url from '/project3_teamproject/SQL/borough in scope and corresponding counts.csv';
// Load the CSV when the document is loaded
// function loadCSV() {
//   d3.csv("/SQL/borough in scope and corresponding counts.csv").then(data => {
//   let output = '';
//     data.forEach(row => {
//   output += JSON.stringify(row) + '\n';
//     });
//     document.getElementById('csv-output').textContent = output;
//   })  
// }
// loadCSV();

function test(){
  d3.json("SQL/borough_in_scope_and_correspinding_counts.json").then((data) => {
    let street=data;
    console.log(street)
  })
 
}

// let url = "/SQL/top 20 street and its corresponding counts"
// d3.csv(url).then(function(data) {
//   let street_frequency = data.frequency
//   let on_street = data.on_street
// let trace2 = {
//   x: on_street,
//   y: street_frequency,
//   type: "bar",
//   orientation: "h",
//   title: "Streets With Most Meters"
// }
// let bar_data = [trace2]
// Plotly.newPlot("bar", bar_data);
// });