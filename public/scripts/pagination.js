//html value
const prev = document.getElementById('prev')
const next = document.getElementById('next')
//request value
const current = document.getElementById('currentPagination').value
const categoria = document.getElementById('category').value
// console.log(current)
//request value total de registros de la consulta
const total = document.getElementById('total').value

let currentPage = parseInt(current);
let totalPages = parseInt(total);

let prevPage = 0;
let nextPage = 2;

if (currentPage > 0 && currentPage > 1) {
    prevPage = currentPage - 1;
    nextPage = currentPage + 1;
}

if (totalPages > 11) {
    totalPages = Math.round(Math.ceil(totalPages / 11));
} else {
    totalPages = 1
}

console.log(categoria);
console.log(totalPages);

// let lastUrl = '';

prev.classList.add('disabled');

prev.addEventListener('click', () => {

    next.classList.remove('disabled');
    if (currentPage <= 1) {
        prev.classList.add('disabled');
        console.log("lowest limit reached")
    } else {
        prev.classList.remove('disabled');
        prevPage--;
        currentPage--;
        nextPage--;

        if (categoria > 0) {
            return window.location.replace(`/movies/category/${currentPage}?category=${categoria}`)
        } else if (typeof categoria === 'string') {
            window.location.replace(`/movies/search/${currentPage}?search=${categoria}`)
        } else {
            window.location.replace(`/movies/paginate/${currentPage}`)
        }
        // console.log(prevPage, currentPage, nextPage);
    }

})

next.addEventListener('click', () => {

    prev.classList.remove('disabled');

    if (currentPage <= totalPages - 1) {
        nextPage++;
        currentPage++;
        prevPage++;
        // current.innerHTML = currentPage;
        // console.log(prevPage, currentPage, nextPage);
        if (categoria > 0) {
            return window.location.replace(`/movies/category/${currentPage}?category=${categoria}`)
        } else if (typeof categoria === 'string') {
            window.location.replace(`/movies/search/${currentPage}?search=${categoria}`)
        } else {
            window.location.replace(`/movies/paginate/${currentPage}`)
        }
    } else {
        console.log(currentPage, nextPage, prevPage, totalPages);
        console.log("highest limit reached")
        next.classList.add('disabled');
    }

})

