    const prev = document.getElementById('prev')
    const next = document.getElementById('next')
    const current = document.getElementById('current')
    let prevPage = 0;
    let currentPage = 1;
    let nextPage = 2;
    // let lastUrl = '';
    let totalPages = 10;

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
            current.innerHTML = currentPage;
            console.log(prevPage, currentPage, nextPage);
        }

    })

    next.addEventListener('click', () => {
        prev.classList.remove('disabled');

        if (currentPage < totalPages) {
            nextPage++;
            currentPage++;
            prevPage++;
            current.innerHTML = currentPage;
            console.log(prevPage, currentPage, nextPage);
        } else {
            console.log("highest limit reached")
            next.classList.add('disabled');
        }
    })
