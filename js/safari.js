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




  // Активность кнопки - галка и Отправить(.account__btn_filled:disabled) .account
  const formDis = document.querySelector(".form-disabled");
  if (formDis) {
    const e = formDis.querySelector(".checkbox-disabled");
    if (e) {
      const t = formDis.querySelector(".account__btn_jsDis");
      e.addEventListener("change", () => {
        e.checked ? t.removeAttribute("disabled") : t.setAttribute("disabled", "")
      })
    }
  }




  // Спасибо модал - main-form
  const btnCloseBuy = document.querySelector('.main-form__modal-close_js');
  const modalBuy = document.querySelector('.main-form__slonik_js');
  if (modalBuy) {
    btnCloseBuy.addEventListener('click', function () {
      document.querySelector('.main-form__slonik_js').classList.toggle('main-form__slonik_js_active');
    });
    modalBuy.addEventListener('click', function (event) {
      if (event._notClick) return;
      modalBuy.classList.remove('main-form__slonik_js_active');
      document.querySelector('.main-form__slonik-sps_js').classList.remove('main-form__slonik-sps_js_active');
    });
  }
  

  


  // inputmask - Телефон account__form
  const form = document.querySelector('.account__form');
  if (form) {// Обёртка if. Спасение Gulp-а от null в браузере 
    const telSelector = form.querySelector('input[type="tel"]');
    const inputMask = new Inputmask('+7 (999) 999-99-99');
    inputMask.mask(telSelector);

    new window.JustValidate('.account__form', {
      rules: {
        nameF: {
          required: true,
          minLength: 2,
          maxLenght: 10,
          strength: {
            //custom: '^[А-яёЁ\s-]'только по русски текст
            //custom: '^[а-яёЁ\s]+$'только по русски и маленькими буквами
            custom: '^[a-yeO\s]+$'//только по английски текст
          }
        },  
        nameL: {
          required: true,
          minLength: 2,
          maxLenght: 10,
          strength: {
            //custom: '^[А-яёЁ\s-]'только по русски текст
            //custom: '^[а-яёЁ\s]+$'только по русски и маленькими буквами
            custom: '^[a-yeO\s]+$'//только по английски текст
          }
        }, 
        tel: {
          required: true,
          function: () => {
            const phone = telSelector.inputmask.unmaskedvalue();
            return Number(phone) && phone.length === 10;
          }
        },
        checkbox: { // Обязательная галка
        required: true
        }
      },
      colorWrong: '#ff6972',
      messages: {
        nameF: {
          required: 'Введите ваше имя',
          minLength: 'Введите 3 и более символов',
          maxLength: 'Запрещено вводить более 15 символов',
          // strength: 'Текст только по русски'
          //strength: 'Текст только по русски и маленькими буквами'
          strength: 'Текст только по английски'
        },
        nameL: {
          required: 'Введите ваше имя',
          minLength: 'Введите 3 и более символов',
          maxLength: 'Запрещено вводить более 15 символов',
          // strength: 'Текст только по русски'
          //strength: 'Текст только по русски и маленькими буквами'
          strength: 'Текст только по английски'
        },
        email: {
          email: 'Недопустимый формат',
          required: 'Введите email'
        },
        tel: {
          required: 'Введите ваш телефон',
          function: 'Здесь должно быть 10 символов без +7'
        },
        checkbox: {
          required: 'Поставьте галочку',
          function: 'Здесь должна быть галка'
        }
      },

      //*отправка формы*/
      submitHandler: function (thisForm) {
        let formData = new FormData(thisForm);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('Отправлено');
            } //if xhr
          }
        }


        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);
        thisForm.reset();
        document.querySelector('.main-form__slonik_js').classList.toggle('main-form__slonik_js_active');
        document.querySelector('.main-form__slonik-sps_js').classList.toggle('main-form__slonik-sps_js_active');
      }
    })
  }

  

  //Селект Gender(.account)
  const citySelect = () => {
    const element = document.querySelector('.account__select');
      const choices = new Choices(element, {
        searchEnabled: false,//убирает Ентер//
        //работает если отключить searchEnabled: false. будет поиск по селекту//
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



  // Модальное окно для нескольких окон. Модалка не прокручиваеться.//
  const activeClass = "modal-active";
  const buttons = document.querySelectorAll(".modalBtn-js");

  for (let button of buttons) {
    modalEvent(button);
  }
  
  function closeModal (modal) {
	 modal.classList.remove(activeClass);
	 document.body.style.overflow  = '';
  }
	  
  function modalEvent(button) {
    button.addEventListener("click", (e) => {//(e) - дефолт - чтобы при нажитие на модального окна, модалка не улетала вверх.
      e.preventDefault();

      const trigger = button.getAttribute("data-modal-trigger");
      const modal = document.querySelector(`[data-modal=${trigger}]`);
      const modalContent = modal.querySelector(".modal-container");
      const close = modal.querySelector(".modal-close");
           
      /* --Cтили body при открытие модального окна-- */
      modal.classList.add('modal-active');		 
      if (modal.classList.contains(activeClass)) {
        document.body.style.overflow  = 'hidden';
      }

      close.addEventListener("click", () =>  {
		 closeModal (modal); 
	  });
      modal.addEventListener("click", () => {
		 closeModal (modal); 
	  });
      modalContent.addEventListener("click", (e) => e.stopPropagation());
      
    });
  }; 





  // Плавный скролл по якорям. В любое место можно кинуть.
  // const smoothLinks = document.querySelectorAll('a[href^="#"]');
  // for (let smoothLink of smoothLinks) {
  //   smoothLink.addEventListener('click', function (e) {
  //     e.preventDefault();
  //     const id = smoothLink.getAttribute('href');

  //     document.querySelector(id).scrollIntoView({
  //         behavior: 'smooth',
  //         block: 'start'
  //     });
  //   });
  // };




  
});