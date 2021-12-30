window.onload = function(){
    let map;

    function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: -20.6733669, lng: -41.0106183 },
            zoom: 12,
            scrollwheel: false,
            mapTypeId: 'roadmap'
            
        });

    
    }

    function addMarker(lat, long, icon, content, click){
        var LatLng = {'lat':lat, 'lng':long }

        var marker = new google.maps.Marker({
            position: LatLng,
            map: map,
            icon:icon
        });

        var infoWindow = new google.maps.InfoWindow({
            content:content,
            maxWidth: 200,
            pixelOffset: google.maps.Size(0, 20)
        })

        if(click == true){
            google.maps.event.addListener(marker, 'click', () =>{
                infoWindow.open(map, marker)
            })
        }else{
            infoWindow.open(map, marker)
        }

    }

    // function animal(){
    //     this.nome = 'cachorro'
    //     this.peso = '24kg'	
    // }
    
    
    // var meuAnimal = new animal();

    // console.log(meuAnimal);
    var content = '<p style="color:black;font-size:13px;padding: 10px 0;">Vargem Alta</p>'
    initMap(); 
    addMarker(-20.6733669, -41.0106183,'', content, true)


    setTimeout(() => {
        map.panTo({'lat':20.6733669, 'lng': 41.0106183 })
        map.setZoom(15)
    }, 4000)
}
