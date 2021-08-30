// boton dark 
const btnSwitch = document.querySelector('.switch');

btnSwitch.addEventListener('click', () =>{
    document.body.classList.toggle('dark'); //agregar clase de dark
    btnSwitch.classList.toggle('active');//cambia estado del boton


    //guardamos el modo en localstorage
    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode', 'true');
    }else{
        localStorage.setItem('dark-mode', 'false');
    }
});

//comprabación de localstoragge variable dark
if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('dark'); //agregar clase de dark
    btnSwitch.classList.add('active');//cambia estado del boton
}else{
    document.body.classList.remove('dark'); //quitar clase de dark
    btnSwitch.classList.remove('active');//cambia estado del boton
}
