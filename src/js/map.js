let directionsDisplay;
let directionsService = new google.maps.DirectionsService();

function initMap() {
    directionsDisplay = new google.maps.DirectionsRenderer();
    let chennai = new google.maps.LatLng(13.0850, 80.2101);
    let mapOptions = {
        zoom: 16,
        center: chennai
    }
    let map = new google.maps.Map(document.getElementById('map'), mapOptions);
    directionsDisplay.setMap(map);
    calcRoute(map);
}

function calcRoute(map) {
    let start = new google.maps.LatLng(13.0850, 80.2101);
    let end = new google.maps.LatLng(13.0950, 80.2501);
    let request = {
        origin: start,
        destination: end,
        travelMode: 'DRIVING'
    };

    directionsService.route(request, function (response, status) {
        if (status == 'OK') {
            directionsDisplay.setDirections(response);
        } else {
            console.log("directions request failed, status=" + status)
        }
    });
}
google.maps.event.addDomListener(window, "load", initMap);
