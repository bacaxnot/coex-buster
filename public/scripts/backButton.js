const BACK = document.getElementById('od-back-arrow');
BACK.addEventListener('click', () => {
    const url = window.location.href
    if(url.includes('/history/order/')){
        window.location.href = "/history";
    }else if (url.includes('/detail')){
        history.back();
    }else{
        window.location.href = "/movies";
    }
});