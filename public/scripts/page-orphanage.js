const options = {
    draggin:false,
    touchzoom:false,
    doubleClickZoom:false,
    scrollWheelZoom:false,
    zoomControl:false
}

//create map
const map = L.map('mapid', options).setView([-19.9023386,-44.1041341], 15)

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//create icon
const icon =L.icon({
    iconUrl: "./public/images/map-marker.svg ",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})


//create and add marker
L
.marker([-19.9023386,-44.1041341], { icon })
.addTo(map)

/*image galery*/

function selectImage(event){
    const button = event.currenttarget


    //remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button) => {
        button.classList.remove("active")
    })

    
// selecionar a imagem clicada
const image = button.children[0];
const imageContainer = document.querySelector(".orphanage-details > img")

// atualizar o container de imagem
imageContainer.src = image.src

// adicionar a classe .active para este botao
button.classList.add("active");
}


    

