const CHECK_BUTTON = document.getElementById('checkButton');

const CART_LIST = document.querySelector('.cart-list');

CHECK_BUTTON.addEventListener('click', () => {
	const NODES = CART_LIST.childNodes;
	console.log("🚀 ~ file: checkButton.js ~ line 7 ~ CHECK_BUTTON.addEventListener ~ NODES", NODES)
	if (NODES.length > 0) {
		// console.log('hola')
		const IDES = [];
		NODES.forEach((element, index) => {
			if (index % 2 != 0) {
				IDES.push(element.id);
			}
		});
		window.location.href = `/history/store?ides=${IDES}`;
	} else {
		window.location.href = `/history`;
	}
});
