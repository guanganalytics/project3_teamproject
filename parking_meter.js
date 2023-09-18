//Map Fucntion

//Create the tile layer that will be the background
let myMap = L.map("map", {
  center: [40.7128, -74.0059],
  zoom: 11
  //  layers: [streetmap, parkingMeters]
});

// function createMap(parkingMeters) {

  // `L.tileLayer` creates a tile layer pointing to OpenStreetMap's service.
  let streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap)

  // Create a baseMaps object to hold the streetmap layer.
  let baseMaps = {
    "Street Map": streetmap
  };

  // Create an overlayMaps object to hold the parkingMeters layer.
  let overlayMaps = {
    "Parking Meters": parkingMeters
  };

  // Add layer control for baseMaps and overlayMaps
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);

  // GeoJSON Data Source to outline boroughs
  let Boroughlink = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/15-Mapping-Web/nyc.geojson";
  

  // Function to return a color based on the `borough` property of the data.
  function chooseColor(borough) {
    // The switch statement checks the value of the `borough` and returns a corresponding color.
    switch (borough) {
      case "Brooklyn": return "yellow";
      case "Bronx": return "red";
      case "Manhattan": return "orange";
      case "Queens": return "green";
      case "Staten Island": return "purple";
      default: return "black";
    }
  }

  //Retreieve GeoJSON Data and add seperate colors for each borough
  d3.json(Boroughlink).then(function (data) {
    L.geoJSON(data, {
      style: function (feature) {
        return {
          color: "white",
          fillColor: chooseColor(feature.properties.borough),
          fill0pacity: 0.5,
          weight: 1.5
        };
      }
    }).addTo(myMap);
  })
// };



//Marker Functions

// Create a layer with all the significant NYC locations as markers

//Data to create markers for significant NYC points
let nycLocations = "https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/new-york-areas-of-interest.geojson"

//Retreive GeoJSON Data and add markers for signifcant NYC locations
//Function to create markers
function createMarkers(features) {
  //Extract all of the nycLocationn coordinate properties from API data
  let coordinates = features.features
  // Initialize an array to hold location markers.
  let locationMarkers = [];
  // Loop through the coordinates array.
  for (let i = 0; i < coordinates.length; i++) {
    let coordinates_pos = coordinates[i].geometry.coordinates;
    // console.log(coordinates_pos)
    // For each location, create a marker, and bind a popup with the loations's name.
    let marker = L.marker([coordinates_pos[1], coordinates_pos[0]])
      .bindPopup("Location name: " + coordinates.name)
    // Add the marker to the locationMarkers array.
    locationMarkers.push(marker);
    // Create a layer group that's made from the location markers array, and pass it to the createMap function.
  }



  //Create a layer with all the meters in NYC in cluster groups

  //geoJSON with all meter points
  let meterLocations = "https://raw.githubusercontent.com/guanganalytics/project3_teamproject/main/Parking_Meters_Locations_and_Status.json"

  // Get the data with d3.
  d3.json(meterLocations).then(function (response) {

    // Create a new marker cluster group.
    let clusterMarkers = L.markerClusterGroup();
    // Loop through the data.
    for (let i = 0; i < response.length; i++) {
      // Set the data location property to a variable.
      let location = response[i]
      // Check for the location property.
      if (location) {
        // Add a new marker to the cluster group, and bind a popup.
        clusterMarkers.addLayer(L.marker([location.Longitude, location.Latitude])
          .bindPopup(location["Meter Number"]));
      }
      // Add the marker to the locationMarkers array.
      locationMarkers.push(clusterMarkers);
    }
    // // Add our marker cluster layer to the map.
    myMap.addLayer(clusterMarkers)
  })

  createMap(L.layerGroup(locationMarkers));

};


// Perform an API call to the parking meter API to get the station information, call create markers when complete
d3.json("https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/new-york-areas-of-interest.geojson").then(createMarkers);






