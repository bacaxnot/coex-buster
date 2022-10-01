let categorySelected = document.querySelectorAll("#categorySelected")
user = JSON.parse(user)

const params = new URLSearchParams(window.location.search)
let banderita = 0
if(params.get("category")){
	banderita = 1
	const paramPosition = params.get("category").split('/')[0]
	const paramOptions = params.get("category").split('/')
	const arrayCategories = JSON.parse(categories)
	const primerId = arrayCategories[0].id
	if(Number(paramOptions[0]) > arrayCategories[arrayCategories.length - 1].id) categoryOption.innerHTML = paramOptions[1]
	categorySelected.forEach(element => {
		if(paramPosition){
			if(categorySelected[paramPosition-primerId] == element){
				element.classList.add("seleccionado")
			}
		}
	})
}
const categoryOption = document.getElementById("categoryOption")


if(user.id !== 0){
	const dropMenu = document.querySelector('.btn-drop-menu');
	const emailMenu = document.querySelector('.email-menu');
	const logOut = document.getElementById('logOutBtn');
	dropMenu.addEventListener('click', ()=> {
		emailMenu.classList.toggle('show-hidden')
	})
	
	logOut.addEventListener('click', async() => {
		await fetch('http://localhost:3000/logout', {
			method: 'POST',
		})
		window.location.reload()
	})
}

categorySelected.forEach(element => {
	element.addEventListener("click", async () => {
		categorySelected.forEach(minCategory => {
			if (minCategory.getAttribute('value') != element.getAttribute('value')) {
				minCategory.classList.remove("seleccionado");
			}
		})

		element.classList.add("seleccionado")
});
});
