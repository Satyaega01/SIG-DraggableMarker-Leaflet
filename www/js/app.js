var $ = Dom7;

var app = new Framework7({
  name: "SIG - Draggable Marker", // App name
  theme: "auto", // Automatic theme detection

  el: "#app", // App root element

  // App store
  store: store,
  // App routes
  routes: routes,
});

var myLatlng = new L.LatLng(-8.7467357, 115.1668024);
// Creating map options
var mapOptions = {
  center: myLatlng,
  zoom: 9,
};

// Creating a map object
var map = new L.map("map-canvas", mapOptions);

// Creating a Layer object

// Data provider (using mapbox)
var providerUrl = "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGVhcnNhIiwiYSI6ImNrOGdvNHhkNzAzbmczZHM2ZDJzZmM2bHkifQ.pssj-AVKUumx4x6vvOubvg";
var providerAttrib =
  'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' + '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';

// Layer
var providerLayer = new L.TileLayer(providerUrl, {
  minZoom: 4,
  maxZoom: 20,
  id: "mapbox/streets-v11",
  tileSize: 512,
  zoomOffset: -1,
  attribution: providerAttrib,
});

// Adding layer to the map
map.addLayer(providerLayer);

// Add marker to the map
var marker = L.marker(myLatlng, {
  draggable: true,
}).addTo(map);

lat = marker.getLatLng().lat;
lng = marker.getLatLng().lng;

marker.on("click", function (e) {
  marker.bindPopup('<div id="content">' + '<div id="siteNotice">' + "</div>" + '<h4 id="firstHeading" class="firstHeading">' + e.latlng.lat + "</br>" + e.latlng.lng + "</h4>" + "</div>" + "</div>", { maxWidth: 700 });
  console.log("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng);
});

marker.on("drag", function (e) {
  marker.bindPopup("dragging", { maxWidth: 700 }).openPopup();
});

marker.on("dragstart", function (e) {
  marker.bindPopup("drag start", { maxWidth: 700 }).openPopup();
});

marker.on("dragend", function (e) {
  marker.bindPopup("Ini adalah marker", { maxWidth: 700 }).openPopup();
});
