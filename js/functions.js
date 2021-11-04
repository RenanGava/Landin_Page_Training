window.onload = function(){
    let map;

    function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: -20.6733669, lng: -41.0106183 },
            zoom: 8,
            scrollWheel: false
            
        });

    
    }

    // function animal(){
    //     this.nome = 'cachorro'
    //     this.peso = '24kg'	
    // }
    
    
    // var meuAnimal = new animal();

    // console.log(meuAnimal);
    initMap();
}