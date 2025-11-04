let imagenes = [
    {
        "url": "Imagenes/Ducato.jpg",
        "titulo": "Ducato",
        "descripcion": "Vehículo FIAT Ducato con capacidad de 12 pasajeros, ideal para una familia grande"

    },
    {
        "url": "Imagenes/Master.jpg",
        "titulo": "Master",
        "descripcion": "Vehículo Renoult Master con capacidad de 15 pasajeros, ideal para llevar un equipo deportivo o grupo de trabajo"

    },
    {
        "url": "Imagenes/Minibus.webp",
        "titulo": "MiniBus",
        "descripcion": "Vehículo Mercedes-Benz Sprinter con capacidad para 20 pasajeros, ideal para grupo de estudiantes"

    },
]
let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('imagen');
let texto = document.getElementById('texto-deslizador');
let posicion = 0;

function siguienteimagen() {
    posicion += 1

    if (posicion == imagenes.length) {
        posicion = 0
    }

    imagen.innerHTML = ` <img class="div-deslizador" src="${imagenes[posicion].url}">`
    texto.innerHTML = `
    <h3>${imagenes[posicion].titulo}</h3>
    <p>${imagenes[posicion].descripcion}</p>
    `

}
function retrocederimagen() {
    posicion -= 1

    if (posicion == -1) {
        posicion = imagenes.length
    }

    imagen.innerHTML = ` <img class="div-deslizador" src="${imagenes[posicion].url}">`
    texto.innerHTML = `
    <h3>${imagenes[posicion].titulo}</h3>
    <p>${imagenes[posicion].descripcion}</p>
    `

}
adelante.addEventListener('click', siguienteimagen)
atras.addEventListener('click', retrocederimagen)
console.log(posicion);