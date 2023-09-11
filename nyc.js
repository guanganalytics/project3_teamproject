
//creating ploty chars to show the borough in scope
const url1= "../SQL/borough_in_scope_and_corresponding_counts.json";
function show_borough() {
  d3.json(url1).then(function(data) {
    // console.log(data)
    let borough_frequency = data.map(item => item.frequency);
    // console.log(borough_frequency)
    let borough = data.map(item => item.borough);
    // console.log(borough)
    let trace1 = {
    x: borough,
    y: borough_frequency,
    type: "bar",
}
    let layout3= {
      title: "borough_in_scope_and_corresponding_counts"
};
    let bar_data1 = [trace1]
    Plotly.newPlot("bar", bar_data1, layout3);
})}
show_borough();


//creating ploty chars to show the street in scope
const url2= "../SQL/top_20_street_and_its_corresponding_count.json";
function show_street() {
  d3.json(url2).then(function(data2) {
    let street= data2.map(item => item.on_street);
    let street_frequency = data2.map(item => item.frequency);
    let trace2 = {
    x: street,
    y: street_frequency,
    type: "bar",  
};
    let layout2= {
      title: "top 20 street and its corresponding counts"
};
    let bar_data2 = [trace2];
    Plotly.newPlot("bar2", bar_data2, layout2);
})}
show_street();


//creating ploty chars to show the meter_hours in scope
const url3= "../SQL/meterhours_and_its_corresponding_count.json";
function show_meterhours() {
  d3.json(url3).then(function(data3) {
    let meter_hours= data3.map(item => item.meter_hours);
    let meterhour_frequency = data3.map(item => item.frequency);
    let trace3 = {
    x: meter_hours,
    y: meterhour_frequency,
    type: "bar",
}
    let layout3= {
      title: "meterhours_and_its_corresponding_count"
};
    let bar_data3 = [trace3]
    Plotly.newPlot("bar3", bar_data3, layout3);
})}
show_meterhours();

// *****************************************************************
// *****************************************************************


//creating information charts for each meter with drop down menu to select
const url4= "../data_cleaned.json";


function create_information(objectid){
  d3.json(url4).then(function(data4) {
  let Info = data4.filter(eachmeter=>eachmeter.objectid==objectid)[0];
  console.log(`create_information ID: ${objectid} info: ${Info}`);
  let displaydata = d3.select("#sample-metadata");
  displaydata.html("")
  for (item in Info){
    displaydata.append("h6").text(`${item.toLowerCase()}: ${Info[item]}`)
    
  }});
};


function optionChanged(objectid) {
  d3.json(url4).then(function(data4) {
  create_information(objectid);
});
};

function sort_by_id(meter_a, meter_b){
  return meter_a.objectid - meter_b.objectid;
}

function init() {
  d3.json(url4).then(function(data4) {
    data4.sort(sort_by_id);
    let selector = d3.select("#selDataset");
    for (let i = 0; i < data4.length; i++){
      selector
        .append("option")
        .text(data4[i].objectid)
        .property("value", data4[i].objectid);
    };
  let firstMeter = data4[0];
  let firstid = firstMeter.objectid;
  console.log(firstid)
  create_information(firstid);
});
}


init();


