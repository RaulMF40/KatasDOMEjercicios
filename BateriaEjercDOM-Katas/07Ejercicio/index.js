// Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
/* const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"]; */
//!SOLUCION
const places = ['Gondor', 'Mordor', 'Rivendel', 'La Comarca', 'Nümenor']

const divLiPlaces = document.querySelector('[data-function="printHere"]') //* para meter el atributo utilizamos el queryselector
const lisPlaces = document.createElement('ul')

for (const place of places) {
  const elementLi = document.createElement('li')
  elementLi.textContent = place
  lisPlaces.appendChild(elementLi)
}

document.body.appendChild(lisPlaces)
