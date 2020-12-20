function iniciaModal(modalID) {
	const modal = document.getElementById(modalID)
	if(modal) { //verifica a existência da Id
		modal.classList.add('mostrar')
		modal.addEventListener('click', (event) => {
			if (event.target.id == modalID || event.target.className == 'fechar') {
				modal.classList.remove('mostrar')
			}
		})
	}
}

const add = document.querySelector('#add')
add.addEventListener('click', () => iniciaModal('modal-add'))

