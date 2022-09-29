
const cartContainer = document.querySelector('.cart-container');
const checkoutButton = document.querySelector('.checkout-button-container');

const openCart = () => {
	cartContainer.style.right = `0`;
};

const closeCart = () => {
	cartContainer.style.right = `-30%`;
};

const showCheckoutButton = (arrLength) => {
	if (arrLength > 0) {
		checkoutButton.style.display = 'block';
	} else {
		checkoutButton.style.display = 'none';
	}
};

const imageUrl = `https://image.tmdb.org/t/p/w500/`;
const moviesInCart = [];

//cargar los datos del localStorage a moviesInCart para luego renderizar las movies del shoppingCart
window.onload = () => {
	const moviesLocalStorage = localStorage.getItem('shoppingCart') || [];
	const moviesArr = JSON.parse(moviesLocalStorage);
	moviesArr.forEach((movie) => {
		moviesInCart.push(movie);
	});
	renderMovieInCart(moviesInCart);
};

const renderCart = () => {
	window.location = '/cart/index.html';
}

//Barra de error visible para el usuario
const errorBar = document.querySelector('.error-bar-container')
const messageContainer = document.getElementById('errorMessage')

const throwError = (message) => {
	messageContainer.innerText = message
	errorBar.style.display = 'block'
	errorBar.style.opacity = '1'
	setTimeout(() => {
	errorBar.style.display = 'none'
	errorBar.style.opacity = '0'
		
	}, 2000);
}

//Obtengo las pelis de la lista numero 1

//funcion para añadir una peli al shopping cart
const addToCart = async (movie) => {
	try {
		const indexMovies = moviesInCart.map((movie) => movie.id)
		//comprobamos que la pelicula seleccionada no este repetida en moviesCart
		if (!indexMovies.includes(movie.id)) {
			moviesInCart.push(movie)
			renderMovieInCart(moviesInCart)
			showCheckoutButton(moviesInCart.length)
			openCart()
			localStorage.setItem(
				'shoppingCart',
				JSON.stringify(moviesInCart)
			)
		} else {
			throwError('Peli repetida')
			return
		}
	} catch (error) {
		console.error(error)
	}
};



const cartList = document.querySelector('.cart-list')

//renderizar moviesInCart
const renderMovieInCart = async (moviesArray) => {
	try {
		let template = ``;
		moviesArray.map((movie) => {
			let url = imageUrl + movie.poster_path;
			const cart = `
				<div class="cart-item">
					<div class="cart-item-img">
						<img 
						src="${url}" alt="movie-img">
					<div class="cart-info-container">
						<h2>${movie.title}</h2>
						<span>${movie.movies_categories.categories}</span>
						<star-rating rating="${movie.vote_average}"></star-rating>
					</div>
				</div>
				<div class="delete-button" onclick="deleteMovieInCart(${movie.id})">X</div>
			</div>
			`;
			template += cart;
		});
		cartList.innerHTML = template;
	} catch (error) {
			console.log(error)
	}
};

//funcion de eliminar elemento de shopping cart
const deleteMovieInCart = (id) => {
	let indexMovie = moviesInCart.findIndex((movie) => movie.id === id);
	moviesInCart.splice(indexMovie, 1);
	showCheckoutButton(moviesInCart.length);
	localStorage.setItem('shoppingCart', JSON.stringify(moviesInCart));
	renderMovieInCart(moviesInCart);
};
