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
		let linkText = document.createElement('i')

		linkElement.setAttribute('onclick', `removeTodo(${pos})`)
		liElement.classList.add('template')
		linkText.classList.add('fas')
		linkText.classList.add('fa-trash-alt')

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
function removeAll() {
	todos = []
	renderTodos()
	saveToStorage()
}
let removeall = document.querySelector('#removeall')
removeall.addEventListener('click', removeAll)

function saveToStorage() {
	localStorage.setItem('li_todos', JSON.stringify(todos))
}