window.addEventListener('scroll',function(){
    let animacion = document.getElementById('skills');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    let tamañoDePantalla = window.innerHeight/10;
    console.log(posicionObj1);


    if(posicionObj1 < tamañoDePantalla){
        document.body.classList.add('animation-skills');
    }
})