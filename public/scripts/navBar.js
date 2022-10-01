const dropMenu = document.querySelector('.btn-drop-menu');
const emailMenu = document.querySelector('.email-menu');
const logOut = document.getElementById('logOutBtn');
let categorySelected = document.querySelectorAll("#categorySelected")

const params = new URLSearchParams(window.location.search)
const paramPosition = params.get("category").split('/')[0]
const paramOptions = params.get("category").split('/')
const categoryOption = document.getElementById("categoryOption")

const arrayCategories = JSON.parse(categories)
console.log()
if(Number(paramOptions[0]) > arrayCategories[arrayCategories.length - 1].id) categoryOption.innerHTML = paramOptions[1]


dropMenu.addEventListener('click', ()=> {
	emailMenu.classList.toggle('show-hidden')
})

logOut.addEventListener('click', async() => {
	await fetch('http://localhost:3000/logout', {
		method: 'POST',
	})
    window.location.reload()
})

const primerId = arrayCategories[0].id


categorySelected.forEach(element => {
	if(categorySelected[paramPosition-primerId] == element){
		element.classList.add("seleccionado")
	}
	element.addEventListener("click", async () => {
		categorySelected.forEach(minCategory => {
			if (minCategory.getAttribute('value') != element.getAttribute('value')) {
				minCategory.classList.remove("seleccionado");
			}
		})

		element.classList.add("seleccionado")
});
});
