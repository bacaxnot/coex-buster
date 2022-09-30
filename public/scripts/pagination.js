//html value
const prev = document.getElementById('prev')
const next = document.getElementById('next')
//request value
const current = document.getElementById('currentPagination').value
let categoria = document.getElementById('category').value

if(categoria == '0'){
    categoria = 0;
}else if(categoria == '1'){
    categoria = 1;
}else if(categoria == '2'){
    categoria = 2;
}else if(categoria == '3'){
    categoria = 3;
}else if(categoria == '4'){
    categoria = 4;
}else if(categoria == '5'){
    categoria = 5;
}else{
    categoria = categoria
}




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



// let lastUrl = '';

prev.classList.add('disabled');

prev.addEventListener('click', () => {

    next.classList.remove('disabled');
    if (currentPage <= 1) {
        prev.classList.add('disabled');
        
    } else {
        prev.classList.remove('disabled');
        prevPage--;
        currentPage--;
        nextPage--;

        if (typeof categoria === 'string') {  
            return window.location.replace(`/movies/search/${currentPage}?search=${categoria}`)
        } else if (categoria > 0) {
            return window.location.replace(`/movies/category/${currentPage}?category=${categoria}`)
        } else {
            return window.location.replace(`/movies/paginate/${currentPage}`)
        }
        // 
    }

})

next.addEventListener('click', () => {

    prev.classList.remove('disabled');

    if (currentPage <= totalPages - 1) {
        nextPage++;
        currentPage++;
        prevPage++;
        // current.innerHTML = currentPage;
        // 
        if (typeof categoria === 'string') {  
            return window.location.replace(`/movies/search/${currentPage}?search=${categoria}`)
        } else if (categoria > 0) {
            return window.location.replace(`/movies/category/${currentPage}?category=${categoria}`)
        } else {
            return window.location.replace(`/movies/paginate/${currentPage}`)
        }
    } else {
        
        
        next.classList.add('disabled');
    }

})

