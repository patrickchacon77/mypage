window.addEventListener('scroll',function(){
    let animacion = document.getElementById('skills');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    let tamañoDePantalla = window.innerHeight/5;
    console.log(posicionObj1);


    if(posicionObj1 < tamañoDePantalla){
        document.body.classList.add('animation-skills');
    }
})