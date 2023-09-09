
//creating ploty chars to show the borough in scope
const url1= "../SQL/borough_in_scope_and_corresponding_counts.json";
function show_borough() {
  d3.json(url1).then(function(data) {
    let borough_frequency = data[0].frequency
    let borough = data[0].borough
    let trace1 = {
    x: borough,
    y: borough_frequency,
    type: "bar",
    orientation: "h",
    title: "borough_in_scope_and_corresponding_counts"
}
    let bar_data1 = [trace1]
    Plotly.newPlot("bar", bar_data1);
})}
show_borough();


//creating ploty chars to show the street in scope
const url2= "../SQL/top_20_street_and_its_corresponding_count.json";
function show_street() {
  d3.json(url2).then(function(data2) {
    let street= data2[0].on_street
    let street_frequency = data2[0].frequency
    let trace2 = {
    x: street,
    y: street_frequency,
    type: "bar",
    orientation: "h",
    title: "top 20 street and its corresponding counts"
}
    let bar_data2 = [trace2]
    Plotly.newPlot("bar", bar_data2);
})}
show_street();


//creating ploty chars to show the meter_hours in scope
const url3= "../SQL/meterhours_and_its_corresponding_count.json";
function show_meterhours() {
  d3.json(url3).then(function(data3) {
    let meter_hours= data3[0].meter_hours
    let meterhour_frequency = data3[0].frequency
    let trace3 = {
    x: meter_hours,
    y: meterhour_frequency,
    type: "bar",
    orientation: "h",
    title: "meterhours_and_its_corresponding_count"
}
    let bar_data3 = [trace3]
    Plotly.newPlot("bar", bar_data3);
})}
show_meterhours();


// function init() {
//   d3.json(url).then(function(data) {
// let selector = d3.select("#selDataset");

// // Use the D3 library to read in samples.json from the URL

//   for (let i = 0; i < data.names.length; i++){
//     selector
//       .append("option")
//       .text(data.names[i])
//       .property("value", data.names[i]);
//   };
//   let firstSample = data.names[0];
//   create_chart(firstSample);
//   create_demographic(firstSample);
// });
// };


// function create_demographic(sampleNames){
//   d3.json(url).then(function(data) {
//   let Demographic_Info = data.metadata.filter(eachperson=>eachperson.id==sampleNames);
//   console.log(Demographic_Info[0])
//   let displaydata = d3.select("#sample-metadata");
//   displaydata.html("")
//   for (item in Demographic_Info[0]){
//     displaydata.append("h6").text(`${item.toLowerCase()}: ${Demographic_Info[0][item]}`)
    
//   }});
// };

// init();


// function optionChanged(sampleNames) {
//   d3.json(url).then(function(data) {
//   create_chart(sampleNames);
//   create_demographic(sampleNames);
// });
// };