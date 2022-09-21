class Carrousel {
  constructor() {}

  render(div) {
    return new Glider(div, {
        slidesToShow: 1,
        slidesToScroll: 1,
        rewind: true,
        draggable: true,
        dots: ".carousel__indicadores",
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
  }
}


window.onload = () => {

    new Carrousel().render(document.querySelector(".carousel__lista"))
    
};
