// Elements:
let loader = document.getElementById('loader')
let main = document.getElementById('wallpapers')

// Functions:

// Funcion para cargar el loader
function Loader() { loader.style.display = 'none' }

// Funcion para cargar los wallpapers
async function loadWallpapers() {

    main.innerHTML = '';

    let response = await fetch('http://localhost:3000/')
    let wallpapers = await response.json()

    // Iterar entre los elementos del array
    for (let wallpaper of wallpapers) {

        // Crea una nueva div para cada wallpaper y agrega la clase wall
        let wall = document.createElement('div')
        wall.classList.add('wall')

        // Crea una nueva imagen para cada wallpaper y agrega el src
        let img = document.createElement('img')
        img.src = wallpaper.wall
        img.alt = wallpaper.token

        // Agrega la imagen a la div
        wall.appendChild(img)

        // Agrega la div a la pagina
        main.appendChild(wall)

    }

}

// Events:
window.addEventListener('load', Loader)
window.addEventListener('DOMContentLoaded', loadWallpapers)

// Intervalo para cargar los wallpapers
setInterval(loadWallpapers, 60000)