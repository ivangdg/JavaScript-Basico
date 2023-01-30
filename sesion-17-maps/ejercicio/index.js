let marker, marker2, marker3, map;

function initMap() {
    // console.log("Inicializando mapa")
    const posicion = {
        lat: 18.823409,
        lng: -99.241303
    }

    const posicion2 = {
        lat: 19.388646, 
        lng: -99.252188
    }

    const posicion3 = {
        lat: 19.464911, 
        lng: -99.129947
    }

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion
    })

    marker = new google.maps.Marker({
        position: posicion,
        map,
        title: "Morelos"
    })

    marker2 = new google.maps.Marker({
        position: posicion2,
        map,
        title: "Trabajo"
    })

    marker3 = new google.maps.Marker({
        position: posicion3,
        map,
        title: "Casa"
    })
    // Obtener la geolocalización
    // marker.setPosition({ lat, lng })
    //geoPosiciona()
}

