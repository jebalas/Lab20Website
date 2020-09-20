let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.6020, lng: 87.3772 },
    zoom: 8
  });
}