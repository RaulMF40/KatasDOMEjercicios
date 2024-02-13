//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
//!solucion1
const buttonShowme = document.querySelector('.showme')
console.log(buttonShowme)

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
//!solucion2
const pilladoH1 = document.querySelector('#pillado')
console.log(pilladoH1)

//1.3 Usa querySelector para mostrar por consola todos los p
//!solucion3
const allP = document.querySelectorAll('p')
console.log(allP)

//1.4 Usa querySelector para mostrar por consola todos los elementos con
//la clase.pokemon
//!solucion4
const todosPokemon = document.querySelectorAll('.pokemon')
console.log(todosPokemon)

//1.5 Usa querySelector para mostrar por consola todos los elementos con
//el atributo data-function="testMe".
//!solucion5
const elements = document.querySelectorAll('[data-function]')
console.log(elements)

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
//data-function="testMe".

const elementThird = document.querySelectorAll('[data-function=testMe]')[2]
console.log(elementThird)
