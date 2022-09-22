class Carrousel {
  constructor() {}

  render(div, container, dots) {
    setTimeout(() =>{
      container.style.display = 'block';
      return new Glider(div, {
        slidesToShow: 1,
        slidesToScroll: 1,
        rewind: true,
        draggable: true,
        dots: dots,
        duration: 5.0,
        responsive: [
          {
            rewind: true,
            breakpoint: 300,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 4,
            },
          },
          {
            rewind: true,
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            rewind: true,
            breakpoint: 700,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
        ],
      });

    }, 2)
     
    
  }

}


window.onload = () => {
    new Carrousel().render(document.getElementById('glider1'), document.querySelector(".contenedor-carousel"), document.getElementById('dots1') )
    new Carrousel().render(document.getElementById('glider2'), document.querySelector(".contenedor-carousel2"),document.getElementById('dots2') )
};
