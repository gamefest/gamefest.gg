function buildMaps() {
    buildParkingMap();
    buildVenueMap();
}

function buildParkingMap() {
    var mapCanvas = document.getElementById("parkingMap");

    var center_location = new google.maps.LatLng(33.778632, -84.397713);
    var event_location = new google.maps.LatLng(33.777248, -84.396183);
    var unload_location = new google.maps.LatLng(33.777506, -84.396657);
    var park_location_1 = new google.maps.LatLng(33.779934, -84.398711);
    var park_location_2 = new google.maps.LatLng(33.778007, -84.398917);

    var mapOptions = {
        center: center_location,
        zoom: 17
    };

    var map = new google.maps.Map(mapCanvas, mapOptions);

    var infowindow = new google.maps.InfoWindow();
    var infowindowContent = document.getElementById('infowindow-content');
    infowindow.setContent(infowindowContent);

    var event_marker = new google.maps.Marker({
        position: event_location,
        map: map,
        title: "Klaus Advanced Computing Building",
        icon: 'img/map/red-dot.png'
    });
    event_marker.addListener('click', function() { openBasicInfoWindow(infowindow, map, event_marker); });

    var unload_marker = new google.maps.Marker({
        position: unload_location,
        map: map,
        title: "Klaus Unloading Deck",
        icon: 'img/map/green-dot.png'
    });
    unload_marker.addListener('click', function() { openBasicInfoWindow(infowindow, map, unload_marker); });

    var park_marker_1 = new google.maps.Marker({
        position: park_location_1,
        map: map,
        title: "North Campus Parking Deck",
        icon: 'img/map/blue-dot.png'
    });
    park_marker_1.addListener('click', function() { openBasicInfoWindow(infowindow, map, park_marker_1); });

    var park_marker_2 = new google.maps.Marker({
        position: park_location_2,
        map: map,
        title: "Howey Visitor Parking",
        icon: 'img/map/blue-dot.png'
    });
    park_marker_2.addListener('click', function() { openBasicInfoWindow(infowindow, map, park_marker_2); });
}

function openBasicInfoWindow(infoWindow, map, marker) {
    infoWindow.content.children['place-name'].textContent = marker.title;
    infoWindow.open(map, marker);
}

function buildVenueMap() {
    var mapCanvas = document.getElementById("venueMap");
}