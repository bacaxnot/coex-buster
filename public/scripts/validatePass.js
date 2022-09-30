const formulario = document.getElementById('form_login');
const inputPassword1 = document.getElementById('password');
const inputPassword2 = document.getElementById('passwordComfirm');

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    if(inputPassword1.value !== inputPassword2.value){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Password not mach'
          });
    }else{
        Swal.fire({
            icon: 'success',
            text: 'User add succes',
            confirmButtonText: 'Login'
        }).then((result)=>{
            if (result.isConfirmed) {
                formulario.submit();
            }});
    }
});