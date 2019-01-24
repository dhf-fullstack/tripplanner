const mapboxgl = require("mapbox-gl");
const marker = require('./marker.js');

mapboxgl.accessToken = 'pk.eyJ1IjoiZGhmMjAxNCIsImEiOiJjanI5b2FvMDQwMmUwNDRxbjN5Mnh6eWViIn0.zkxd8SDREL9M-qDgyfzDHg';
const mapContainer = document.getElementById("map");

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

/*
Test code
marker.makeMarker(marker.HOTEL, [-74.009, 40.705]).addTo(map);
marker.makeMarker(marker.ACTIVITY, [-74.009, 40.706]).addTo(map);
marker.makeMarker(marker.RESTAURANT, [-74.009, 40.707]).addTo(map);
*/