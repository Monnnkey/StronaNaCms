const filterToggle = document.getElementById('filterToggle')
const filterBody = document.getElementById('filterBody')

filterToggle.addEventListener('click', () => {
	const isOpen = filterBody.classList.toggle('open')
	filterToggle.setAttribute('isOpen', isOpen)
	filterToggle.textContent = isOpen ? 'Zamknij filtry' : 'Filtry'
})
