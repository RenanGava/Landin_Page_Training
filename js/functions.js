window.onload = function(){
    let map;

    function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -20.6733669, lng: -41.0106183 },
        zoom: 8,
        
    });
    }

    initMap();
}