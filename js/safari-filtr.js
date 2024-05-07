document.addEventListener('DOMContentLoaded', function() {


  //Селект Дропдаун - Выбрать товар.
  const subtitleOb = document.querySelector(".subtitle__product")// Для обёртки if
  if (subtitleOb) { // Обёртка if. Спасение Gulp-а от null в браузере. Здесь обёртка т.к. селект на 3-х страниц.
    const subtitleSelect = () => {
      const element = document.querySelector('.subtitle__select');
        const choices = new Choices(element, {
          searchEnabled: false,//убирает Ентер*/
          /*работает если отключить searchEnabled: false. будет поиск по селекту*/
          noResultsText: 'Ничего не найдено'
        }); 
    };
    
    subtitleSelect();

  }



  /* .Фильтр */  
  const filters = document.querySelectorAll('[data-filter]'),
  cards = document.querySelectorAll('[data-filter-card]');
  let filterData = [];

  function setFilterData(filterDataArr, value) {
    if(filterDataArr.length === 0){
        filterDataArr.push(value);
    }
    else {
        if(filterDataArr.indexOf(value) !== -1 ) {
            filterDataArr = filterDataArr.filter(i => i!== value)
        }
        else {
            filterDataArr.push(value);
        }
    }
    return filterDataArr;
  }

  function isMatch(data, compareData) {
    let matchCounter = 0;
    data.forEach(item => {
      if(compareData.indexOf(item) !== -1) {
        matchCounter += 1;
      }
    })
    return matchCounter;
  }

  filters.forEach((filterElement, filterIndex) => {
    filterElement.addEventListener('click', e => {
      const filter = filterElement.getAttribute('data-filter');
      filterData = setFilterData(filterData, filter);
      filterElement.classList.toggle('state-active');
      cards.forEach((card) => {
        let cardFilter = card.getAttribute('data-filter-card').replace(/\s/g, '').split(',');
        if(isMatch(filterData, cardFilter) < 1) {
          card.classList.add('state-hidden');
        }

        else {
          card.classList.remove('state-hidden');
        }
      })
    })
  });
  
  
  
  
  //Фильтр dropfilter catalog btn  
  const catalogDropfilter = document.querySelector(".catalog__dropfilter")// Для обёртки if
  if (catalogDropfilter) {// Обёртка if. Спасение Gulp-а от null в браузере 
    const params = {
      activeClassName: "is-active",
      disabledClassName: "is-disabled"
    }
  
    function onDisable(evt) {
      if (evt.target.classList.contains(params.disabledClassName)) {
        evt.target.classList.remove(params.disabledClassName, params.activeClassName);
        evt.target.removeEventListener("animationend", onDisable);
      }
    }
  
    function setMenuListener() {
      document.body.addEventListener("click", (evt) => {
        const activeElements = document.querySelectorAll(`.${params.activeClassName}`);
    
        if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
          activeElements.forEach((current) => {
            if (current.classList.contains(params.btnClassName)) {
              current.classList.remove(params.activeClassName);
            } else {
              current.classList.add(params.disabledClassName);
            }
          });
        }
    
        if (evt.target.closest(`.${params.btnClassName}`)) {
          const btn = evt.target.closest(`.${params.btnClassName}`);
          const path = btn.dataset.path;
          const drop = document.querySelector(`[data-target="${path}"]`);
    
          btn.classList.toggle(params.activeClassName);
    
          if (!drop.classList.contains(params.activeClassName)) {
            drop.classList.add(params.activeClassName);
            drop.addEventListener("animationend", onDisable);
          } else {
            drop.classList.add(params.disabledClassName);
          }
        }
      });
    }
    
    setMenuListener();

    // Clear x - Размер
    const clearSize = document.querySelectorAll(".clear-size-js");
    const sizeTags = document.querySelectorAll(".clear-size");
    const sizeBtn = document.querySelectorAll(".size-btn");

    clearSize.forEach(function(size) {
      size.addEventListener("change", function() {
        sizeTags.forEach(function(sizeTag) {
          sizeTag.classList.toggle("size-active")         
        })
      })
    })

    sizeBtn.forEach(function(sizeBtns) {
      sizeBtns.addEventListener("click", function() {
        sizeTags.forEach(function(sizeDeleteClass) {
          sizeDeleteClass.classList.remove("size-active")      
        })
        clearSize.forEach(function(sizeInput) {
          if ( sizeInput.checked ) {
            sizeInput.checked = false
          }
        })
      })
    })
    

    // Clear x - Цвет   
    const clearColor = document.querySelectorAll(".clear-color-js");
    const colorTags = document.querySelectorAll(".clear-color");
    const colorBtn = document.querySelectorAll(".color-btn");

    clearColor.forEach(function(color) {
      color.addEventListener("change", function() {
        colorTags.forEach(function(colorTag) {
          colorTag.classList.toggle("color-active")
        })
      })
    })

    colorBtn.forEach(function(colorBtns) {
      colorBtns.addEventListener("click", function() {
        colorTags.forEach(function(colorDeleteClass) {
          colorDeleteClass.classList.remove("color-active")
        })
        clearColor.forEach(function(colorInput) {
          if ( colorInput.checked ) {
            colorInput.checked = false
          }
        })
      })
    })

    
    // Clear x - Ценик
    const clearPrice = document.querySelectorAll(".clear-price-js");
    const priceTags = document.querySelectorAll(".clear-price");
    const priceBtn = document.querySelectorAll(".price-btn");

    clearPrice.forEach(function(price) {
      price.addEventListener("change", function() {
        priceTags.forEach(function(priceTag) {
          priceTag.classList.toggle("price-active")          
        })
      })
    })

    priceBtn.forEach(function(priceBtns) {
      priceBtns.addEventListener("click", function() {
        priceTags.forEach(function(priceDeleteClass) {
          priceDeleteClass.classList.remove("price-active")          
        })
        clearPrice.forEach(function(priceInput) {
          if ( priceInput.checked ) {
            priceInput.checked = false
          }
        })
      })
    })
    
  };//Обёртка if .catalog__dropfilter
     
  
  
  });