// 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
/* const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']; */
//!solucion1.1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']

const ulCountries = document.createElement('ul')
for (const pais of countries) {
  const li = document.createElement('li')
  li.textContent = pais
  ulCountries.appendChild(li)
}

document.body.appendChild(ulCountries)

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
//!solucion1.2
const eliminado = document.querySelector('.fn-remove-me')
eliminado.remove()

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
/* const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']; */
//!solucion1.3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const divListCar = document.querySelector('[data-function="printHere"]')
ListCar = document.createElement('ul')

for (const car of cars) {
  const liCar = document.createElement('li')
  liCar.textContent = car
  ListCar.appendChild(liCar)
}

divListCar.appendChild(ListCar)

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
/* const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
]; */
//!solucion1.4
const countriesSecond = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

for (const countrysecond of countriesSecond) {
  const divImgs = document.createElement('div')
  const title = document.createElement('h4')
  const imgRandom = document.createElement('img')
  title.textContent = 'Random title'
  imgRandom.src = countrysecond.imgUrl

  divImgs.appendChild(title)
  divImgs.appendChild(imgRandom)
  document.body.appendChild(divImgs)
}

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
//!solucion1.5
const button = document.createElement('button')
button.textContent = 'Delete Button'

const deleteNow = () => {
  const allDivs = document.querySelectorAll('div')
  allDivs[allDivs.length - 1].remove()
}

button.addEventListener('click', deleteNow)
document.body.appendChild(button)

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
//!solucion1.6
const allDivs = document.querySelectorAll('div')

for (const div of allDivs) {
  const button = document.createElement('button')
  button.textContent = 'Elimino este Div'
  button.addEventListener('click', () => div.remove())
  div.appendChild(button)
}
