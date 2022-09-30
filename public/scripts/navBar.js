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