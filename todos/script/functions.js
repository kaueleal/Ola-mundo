// const div = document.querySelector('.options')
// const label = document.querySelector('.template label')

// //desculpe o amadorismo
// var ponto = 1
// label.onclick = function() {	
// 	if (ponto != 1) {
// 		div.classList.add('hidden')
// 		ponto = 1
// 	} else {
// 		div.classList.remove('hidden')
// 		ponto = 2
// 	}
// }
// var point = 1
// document.querySelector('#check').onclick = function() {	
// 	if (point != 1) {
// 		div.classList.add('hidden')
// 		point = 1
// 	} else {
// 		div.classList.remove('hidden')
// 		point = 2
// 	}
// }

const btn = document.querySelector('form #btn')
let inputElement = document.querySelector('form #campo')
const lista = document.querySelector('.lista')
let todos = JSON.parse(localStorage.getItem('li_todos')) || []

renderTodos()
function renderTodos() {
	lista.innerHTML = ''
	for(todo of todos) {
		var todoText = document.createTextNode(todo)
		let liElement = document.createElement('li')
		let div = document.createElement('div')
		let label = document.createElement('label')
		let pos = todos.indexOf(todo)

		let linkElement = document.createElement('a')
		linkElement.setAttribute('href', '#')
		let linkText = document.createTextNode('Excluir')

		linkElement.setAttribute('onclick', `removeTodo(${pos})`)
		liElement.classList.add('template')

		label.appendChild(todoText)
		linkElement.appendChild(linkText)
		div.appendChild(label)
		div.appendChild(linkElement)
		liElement.appendChild(div)
		lista.appendChild(liElement)
	}
}
function addTodo() {
	todos.push(inputElement.value)
	inputElement.value = ""
	renderTodos()
	saveToStorage()
}
btn.addEventListener('click', addTodo)

function removeTodo(pos) {
	todos.splice(pos, 1)
	renderTodos()
	saveToStorage()
}

function saveToStorage() {
	localStorage.setItem('li_todos', JSON.stringify(todos))
}