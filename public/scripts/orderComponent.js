const list = document.querySelectorAll('.component--order');
list.forEach((element) => {
    element.addEventListener('click', () => {
        const id = element.getAttribute('id');
        // console.log(id)
        window.location.href = `/api/v1/history/order/${id}`
    })
})