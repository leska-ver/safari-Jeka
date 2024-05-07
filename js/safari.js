document.addEventListener('DOMContentLoaded', function() {
  


  // slider hero //
  const swiperHero = new Swiper('.hero__slider', {
    speed: 3000,//Интервал ожидания
    effect: 'fade',//Слайдер постепенно исчезает.
    // allowslidenext: false, Блокирует слайдер. На будущее
    allowTouchMove: false,//Уберает прокрутку мыши
    
    autoplay: {
      delay: 5000,//Интервал ожидания
      disableOnInteraction: false,
    },

    // If we need pagination(Разбивка на страницы)
    pagination: {
     el: '.hero__pagination',
     clickable: 'true',
    },
  });



  // slider shop(Home) //
  let swiperShop = new Swiper(".shop__swiper", {
    slidesPerView: 4,
    // Ставим здесь rows, т.к. в css стоит display: flex; у .swiper-wrapper. Грид в слайдере глучить. 
    grid: {rows: 4, fill: "row"},
    spaceBetween: 50,

    /*/Бесконечное листание страниц
    speed: 2000, //Интервал ожидания

    autoplay: {
      delay: 3000,//Интервал ожидания
        disableOnInteraction: false,      
    },*/

    pagination: {
      el: ".mixins__pagination",
      clickable: true,
      renderBullet: function (index, className) {
        /* цифры с низу
        return '<span class="' + className + '">' + (index + 1) + "</span>";*/
        /* цифры с верху */
        return '<span class="' + className + '">' + '<span class="number"' + className + '">' + (index + 1) + "</span>" + "</span>";
      },
    },

    navigation: {
    nextEl: ".mixins__next",
    prevEl: ".mixins__prev"
    },

    //Стили для галереи
    breakpoints: {
      // 581: {
      //   slidesPerView: 2,
      //   grid: {rows: 2},
      //   spaceBetween: 30
      // },

      // 768: {
      //   slidesPerView: 2,
      //   grid: {rows: 2}, 
      //   spaceBetween: 32 
      // },

      // 1024: {
      //   slidesPerView: 3,
      //   grid: {rows: 3}, 
      //   spaceBetween: 34 
      // },

      // 1920: {
      //   slidesPerView: 4,
      //   grid: {rows: 4},
      //   spaceBetween: 50
      // }
    }
  });

  

  // slider clothes //
  let swiperСlothes = new Swiper(".clothes__swiper", {
    slidesPerView: 3,
    // Ставим здесь rows, т.к. в css стоит display: flex; у .swiper-wrapper. Грид в слайдере глучить. 
    grid: {rows: 4, fill: "row"},
    spaceBetween: 20,

    //Бесконечное листание страниц
    speed: 2000, //Интервал ожидания

    autoplay: {
      delay: 3000,//Интервал ожидания
        disableOnInteraction: false,      
    },

    pagination: {
      el: ".mixins__pagination",
      clickable: true,
      renderBullet: function (index, className) {
        /* цифры с низу
        return '<span class="' + className + '">' + (index + 1) + "</span>";*/
        /* цифры с верху */
        return '<span class="' + className + '">' + '<span class="number"' + className + '">' + (index + 1) + "</span>" + "</span>";
      },
    },

    navigation: {
    nextEl: ".mixins__next",
    prevEl: ".mixins__prev"
    },

    //Стили для галереи
    breakpoints: {
      // 581: {
      //   slidesPerView: 2,
      //   grid: {rows: 2},
      //   spaceBetween: 30
      // },

      // 768: {
      //   slidesPerView: 2,
      //   grid: {rows: 2}, 
      //   spaceBetween: 32 
      // },

      // 1024: {
      //   slidesPerView: 3,
      //   grid: {rows: 3}, 
      //   spaceBetween: 34 
      // },

      // 1920: {
      //   slidesPerView: 4,
      //   grid: {rows: 4},
      //   spaceBetween: 50
      // }
    }
  });



  
  //Табы в CATEGORY Миксин и clothes__tabs
  let tabsBtn = document.querySelectorAll('.tabs-button');//Находим все кнопки
  let tabsItem = document.querySelectorAll('.tabs-itemJs');//Находим все li-ки

  tabsBtn.forEach(function(element){//Создаём цикл element
    //Каждой кнопке навешиваем обработчик click
    element.addEventListener('click', function(e){
      const path = e.currentTarget.dataset.path;//dataset позволяет нам получить data-path

      //Задали команды в цикле btn
      tabsBtn.forEach(function(btn){ btn.classList.remove('tabs-button--active')});//Удалили    
      e.currentTarget.classList.add('tabs-button--active');//Добавили
      // let active = document.querySelector('.catalog__button--active');Меняли стили css
      // active.style.color = 'black'

      //Задали команды в цикле element
      tabsItem.forEach(function(element){ element.classList.remove('tabs-itemJs--active')});//Удалили    
      document.querySelector(`[data-target="${path}"]`).classList.add('tabs-itemJs--active');//Добавили
    });
  });




  // slider shoes //
  let swiperShoes = new Swiper(".shoes__swiper", {
    slidesPerView: 3,
    // Ставим здесь rows, т.к. в css стоит display: flex; у .swiper-wrapper. Грид в слайдере глучить. 
    grid: {rows: 4, fill: "row"},
    spaceBetween: 20,

    //Бесконечное листание страниц
    speed: 2000, //Интервал ожидания

    autoplay: {
      delay: 3000,//Интервал ожидания
        disableOnInteraction: false,      
    },

    pagination: {
      el: ".mixins__pagination",
      clickable: true,
      renderBullet: function (index, className) {
        /* цифры с низу
        return '<span class="' + className + '">' + (index + 1) + "</span>";*/
        /* цифры с верху */
        return '<span class="' + className + '">' + '<span class="number"' + className + '">' + (index + 1) + "</span>" + "</span>";
      },
    },

    navigation: {
    nextEl: ".mixins__next",
    prevEl: ".mixins__prev"
    },

    //Стили для галереи
    breakpoints: {
      // 581: {
      //   slidesPerView: 2,
      //   grid: {rows: 2},
      //   spaceBetween: 30
      // },

      // 768: {
      //   slidesPerView: 2,
      //   grid: {rows: 2}, 
      //   spaceBetween: 32 
      // },

      // 1024: {
      //   slidesPerView: 3,
      //   grid: {rows: 3}, 
      //   spaceBetween: 34 
      // },

      // 1920: {
      //   slidesPerView: 4,
      //   grid: {rows: 4},
      //   spaceBetween: 50
      // }
    }
  });



  // slider accessories //
  let swiperAccessories = new Swiper(".accessories__swiper", {
    slidesPerView: 3,
    // Ставим здесь rows, т.к. в css стоит display: flex; у .swiper-wrapper. Грид в слайдере глучить. 
    grid: {rows: 4, fill: "row"},
    spaceBetween: 20,

    //Бесконечное листание страниц
    /*speed: 2000, //Интервал ожидания

    autoplay: {
      delay: 3000,//Интервал ожидания
        disableOnInteraction: false,      
    },*/

    pagination: {
      el: ".mixins__pagination",
      clickable: true,
      renderBullet: function (index, className) {
        /* цифры с низу
        return '<span class="' + className + '">' + (index + 1) + "</span>";*/
        /* цифры с верху */
        return '<span class="' + className + '">' + '<span class="number"' + className + '">' + (index + 1) + "</span>" + "</span>";
      },
    },

    navigation: {
    nextEl: ".mixins__next",
    prevEl: ".mixins__prev"
    },

    //Стили для галереи
    breakpoints: {
      // 581: {
      //   slidesPerView: 2,
      //   grid: {rows: 2},
      //   spaceBetween: 30
      // },

      // 768: {
      //   slidesPerView: 2,
      //   grid: {rows: 2}, 
      //   spaceBetween: 32 
      // },

      // 1024: {
      //   slidesPerView: 3,
      //   grid: {rows: 3}, 
      //   spaceBetween: 34 
      // },

      // 1920: {
      //   slidesPerView: 4,
      //   grid: {rows: 4},
      //   spaceBetween: 50
      // }
    }
  });
  


  //Селект Gender(.account)
  const citySelect = () => {
    const element = document.querySelector('.account__select');
      const choices = new Choices(element, {
        searchEnabled: false,//убирает Ентер*/
        /*работает если отключить searchEnabled: false. будет поиск по селекту*/
        noResultsText: 'Ничего не найдено'
      }); 
  };

  citySelect();



  //.up(footer__arrow) - стрелка "Вверх-Вниз". 
  const offset = 2420;
  const scrollUp = document.querySelector('.up');

  function getTop() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  window.addEventListener('scroll', () => {
    if (getTop() > offset) {
      scrollUp.classList.add('up--active');
    } else {
      scrollUp.classList.remove('up--active');
    }
  });

  scrollUp.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });




  // Плавный скролл по якорям. В любое место можно кинуть.
  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
      e.preventDefault();
      const id = smoothLink.getAttribute('href');

      document.querySelector(id).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
    });
  };




  
});