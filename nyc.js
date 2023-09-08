// function barchart(borough) {
//   let url = "https://github.com/guanganalytics/project3_teamproject/blob/main/SQL/borough%20in%20scope%20and%20corresponding%20counts.csv"
//   d3.csv(url).then(function(data) {
//     let borough = data.borough
//     let frequency = data.frequency
//   // let samples_data = data.samples.filter(eachperson => eachperson.id == sample)[0];
//   // let otu_ids = samples_data.otu_ids;
//   // let otu_labels = samples_data.otu_labels;
//   // let sample_values = samples_data.sample_values;
//   // let otu_name = otu_ids.slice(0, 10).map(otu_ids => `OTU ${otu_ids}`).reverse();
//   let trace1 = {
//       x: borough,
//       y: frequency,
//       type: "bar",
//       orientation: "h",
//       title: "Meter Counts for each Borough"
//   }
//   let bar_data = [trace1]
//   Plotly.newPlot("bar", bar_data);
// });
// }

// function barchart(street) {
//   let url = "/SQL/top 20 street and its corresponding counts"
//   d3.csv(url).then(function(data) {
//     let street_frequency = data.frequency
//     let on_street = data.on_street
//   let trace2 = {
//     x: on_street,
//     y: street_frequency,
//     type: "bar",
//     orientation: "h",
//     title: "Streets With Most Meters"
//   }
//   let bar_data = [trace2]
//   Plotly.newPlot("bar", bar_data);
// });
// }



// import {csv} from 'd3-request';
// import url from '/project3_teamproject/SQL/borough in scope and corresponding counts.csv';

// csv(url, function(err, data) {
//  console.log(data);
// })
// d3.csv("../SQL/borough in scope and corresponding counts.csv").then(function(data) {
//   console.log(data)
// });


function loadCSV() {
  d3.csv("/SQL/borough in scope and corresponding counts.csv").then(data => {
      // Logging data to console for reference
      // console.log(data);
      console.log(data.frequency);

      // Displaying the data in a preformatted section
      let output = '';
      data.forEach(row => {
          output += JSON.stringify(row) + '\n';
      });
      document.getElementById('csv-output').textContent = output;

  })  
}

// Load the CSV when the document is loaded
loadCSV();

let url = "/SQL/top 20 street and its corresponding counts"
d3.csv(url).then(function(data) {
  let street_frequency = data.frequency
  let on_street = data.on_street
let trace2 = {
  x: on_street,
  y: street_frequency,
  type: "bar",
  orientation: "h",
  title: "Streets With Most Meters"
}
let bar_data = [trace2]
Plotly.newPlot("bar", bar_data);
});