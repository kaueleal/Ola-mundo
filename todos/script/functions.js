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

		let removeElement = document.createElement('a')
		removeElement.setAttribute('href', '#')
		let removeText = document.createElement('i')

		removeElement.setAttribute('onclick', `removeTodo(${pos})`)
		liElement.classList.add('template')
		removeText.classList.add('fas')
		removeText.classList.add('fa-trash-alt')

		label.appendChild(todoText)
		removeElement.appendChild(removeText)
		div.appendChild(label)
		div.appendChild(removeElement)
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