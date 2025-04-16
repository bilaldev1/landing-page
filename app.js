$('.groupcard').slick({
    infinite: false,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<span class="prev_arrow" ><i class="fa-solid fa-arrow-left"></i></span>',
    nextArrow: '<span class="next_arrow" ><i class="fa-solid fa-arrow-right"></i></span>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          dots: false,
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
          breakpoint: 550,
           settings: {
             dots: false,
             slidesToShow: 1,
            slidesToScroll: 1,
             infinite: false,
           }
         },
    ]
  });
  $('.cardjorup').slick({
    infinite: true,
    dots: false,
  slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<span class="prev_arrow" ><i class="fa-solid fa-chevron-left"></i></span>',
    nextArrow: '<span class="next_arrow" ><i class="fa-solid fa-chevron-right"></i></span>',
    responsive: [
      {
        breakpoint: 992,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        }
      },
     //  {
     //    breakpoint: 600,
     //    settings: {
     //      slidesToShow: 2,
     //      slidesToScroll: 2,
     //  }
     //  },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


 
