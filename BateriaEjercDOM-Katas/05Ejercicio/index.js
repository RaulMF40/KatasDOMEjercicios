//Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.
/*
const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
]; */
//!SOLUCION
const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
]

const listAlbums = document.createElement('ul')

for (const album of albums) {
  const elementLi = document.createElement('li')
  elementLi.textContent = album
  listAlbums.appendChild(elementLi)
}

document.body.appendChild(listAlbums)
