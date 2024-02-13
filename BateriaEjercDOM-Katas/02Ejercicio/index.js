//1.1 Inserta dinamicamente en un html un div vacio con javascript.
//!solucion1
const emptyDiv = document.createElement('div')
document.body.appendChild(emptyDiv)

//1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
//!solucion2
const divP = document.createElement('div')
const p = document.createElement('p')

divP.appendChild(p)
document.body.appendChild(divP)

//1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 	loop(bucle) con javascript.
//!solucion3
const divSixP = document.createElement('div')
for (let i = 0; i < 6; i++) {
  const p = document.createElement('p')
  divSixP.appendChild(p)
}
document.body.appendChild(divSixP)

// 1.4 Inserta dinamicamente con javascript en un html una p con el  	texto 'Soy dinámico!'.
//!solucion4
const dinamico = document.createElement('p')
dinamico.textContent = 'Soy dinámico'

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
//!solucion5
const h2 = document.querySelector('.fn-insert-here')
h2.textContent = 'Wubba Lubba dub dub'

// 1.6 Basandote en el siguiente array crea una lista ul > li con  los textos del array.
/* const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']; */
//!solucion6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']

const ul = document.createElement('ul')
for (const app of apps) {
  const li = document.createElement('li')
  li.textContent = app
  ul.appendChild(li)
}
document.body.appendChild(ul)

//1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
//!solucion7
const elementsRemoveMe = document.querySelectorAll('.fn-remove-me')
for (const element of elementsRemoveMe) {
  element.parentNode.removeChild(element)
}

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
//!solucion8
const divs = document.querySelectorAll('div')
const medioP = document.createElement('p')
medioP.textContent = 'Voy en medio'
document.body.insertBefore(medioP, divs[1])

// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase  	.fn-insert-here
//!solucion9
const insertsDiv = document.querySelectorAll('.fn-insert-here')
for (const insert of insertsDiv) {
  const p = document.createElement('p')
  p.textContent = 'Voy dentro!'
  insert.appendChild(p)
}
