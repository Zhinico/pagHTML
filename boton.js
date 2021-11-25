window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__list'), {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: '.carousel__indicadores',
        arrows: {
          prev: '.carousel__anterior',
          next: '.carousel__siguiente'
        }
      });
});

const enlaces= document.querySelector('.enlaces-menu');
const boton= document.querySelector('.boton');

const toggle= document.querySelector('#toggle')

const cambiarTheme = (event)=>{
    if(event.target.checked){
        document.documentElement.setAttribute('data-dark', 'oscuro')
    }else{
        document.documentElement.setAttribute('data-dark', null)
    }
};


toggle.addEventListener('click', cambiarTheme);

boton.addEventListener('click', () =>{
  enlaces.classList.toggle('activado');
  barra.forEach(child=>{child.classList.toggle('animado')});
});