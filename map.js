// First we’ll initialize the map and set its view to our chosen geographical coordinates and a zoom level:
var map = L.map('map').setView([38.8617, 108.1954], 4);

// Next, we’ll add a tile layer to add to our map, in this case it’s a OpenStreetMap tile layer. Creating a tile layer usually involves setting the URL template for the tile images, the attribution text, and the maximum zoom level of the layer.
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Markers, circles, and polygons

// Besides tile layers, you can easily add other things to your map, including markers, polylines, polygons, circles, and popups. Let’s add a marker:
var marker = L.marker([38.8617, 108.1954]).addTo(map);


// Adding a circle is the same (except for specifying the radius in meters as a second argument), but lets you control how it looks by passing options as the last argument when creating the object:

// Western part of China
var circle1 = L.circle([38, 90], {
    color: '#F5B041',
    fillColor: '#F5B041',
    fillOpacity: 0.5,
    radius: 999900
}).addTo(map);

// South part of China
var circle2 = L.circle([29, 109], {
    color: '#3498DB',
    fillColor: '#3498DB',
    fillOpacity: 0.5,
    radius: 995500
}).addTo(map);

// North part of China
var circle3 = L.circle([43, 120], {
    color: '#2ECC71',
    fillColor: '#2ECC71',
    fillOpacity: 0.5,
    radius: 795500
}).addTo(map);

// Wstern part of China
// var polygon = L.polygon([
    //[38, 73],
    //[45,80],
    //[50, 88],
    //[35, 104]
  
//]).addTo(map);

// North part of China
//var polygon = L.polygon([
    //[30, 100],
   // [35,104],
   // [50, 120],
    //[50, 100]
  
//]).addTo(map);


// Working with popups

// Popups are usually used when you want to attach some information to a particular object on a map. Leaflet has a very handy shortcut for this:
marker.bindPopup("<b>Welcome to the East Asia of the world!</b><br>Here is China! You will have the chance to explore the regions of origin for the above three types of dumplings (Jiaozi). :)").openPopup();
circle1.bindPopup("Here are the Western regions of China. They are the region of origin of Guotie (pot stickers).");
circle2.bindPopup("Here are the Southern regions of China. They are the region of origin of Xiaolongbao.");
circle3.bindPopup("Here are the Northern regions of China. They are the region of origin of Huntun (wonton).");
//polygon.bindPopup("I am a polygon.");

// Try clicking on our objects. The bindPopup method attaches a popup with the specified HTML content to your marker so the popup appears when you click on the object, and the openPopup method (for markers only) immediately opens the attached popup.

// You can also use popups as layers (when you need something more than attaching a popup to an object):

var popup = L.popup()
    .setLatLng([38.8617, 108.1954])
    .setContent("This is a sketch map of China for the distribution of different dumplings(Jiaozi) and the regions of origin.")
    .openOn(map);

// Dealing with events

// Every time something happens in Leaflet, e.g. user clicks on a marker or map zoom changes, the corresponding object sends an event which you can subscribe to with a function. It allows you to react to user interaction:

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);

// Each object has its own set of events — see documentation for details. The first argument of the listener function is an event object — it contains useful information about the event that happened. For example, map click event object (e in the example above) has latlng property which is a location at which the click occurred.

// Improve map by using a popup instead of an alert:
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
