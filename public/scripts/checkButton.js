const CHECK_BUTTON = document.getElementById('checkButton');

const CART_LIST = document.querySelector('.cart-list');


CHECK_BUTTON.addEventListener('click', () => {
	const NODES = CART_LIST.childNodes;
    const IDES = []
	NODES.forEach((element, index) => {
        if (index % 2 != 0) {
            // console.log('a: ', element.id);
            IDES.push(element.id)
		}
	});
    window.location.href = `/history/store?ides=${IDES}`
});
