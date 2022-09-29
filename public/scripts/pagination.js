
//request value
const current = document.getElementById('currentPagination').value
// console.log(current)
//request value total de registros de la consulta
const total = document.getElementById('total').value

let currentPage = parseInt(current);
let totalPages = parseInt(total);

totalPages = Math.round((totalPages / 11));
// console.log(totalPages);
// console.log(currentPage);

//html value
const prev = document.getElementById('prev')
const next = document.getElementById('next')

let prevPage = 0;
let nextPage = 2;
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
        // console.log(prevPage, currentPage, nextPage);
        window.location.replace(`/movies/paginate/${currentPage}`)
    }
    
})

next.addEventListener('click', () => {

    prev.classList.remove('disabled');

    if (currentPage < totalPages - 1) {
        nextPage++;
        currentPage++;
        prevPage++;
        // current.innerHTML = currentPage;
        // console.log(prevPage, currentPage, nextPage);
        window.location.replace(`/movies/paginate/${currentPage}`)
    } else {
        console.log("highest limit reached")
        next.classList.add('disabled');
    }
    
})
