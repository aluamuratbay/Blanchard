/* header */
 /* top */
const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');
const menuLinks = document.querySelectorAll('.nav__link')

burger.addEventListener('click',
  function() {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
});

menuLinks.forEach(function(el) {
  el.addEventListener('click', function() {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  });
});

const search = document.querySelector('.search__wrap');
const searchBtn = document.querySelector('.search__btn');
const searchClose = document.querySelector('.search__close');

searchBtn.addEventListener('click',
  function() {
    search.classList.add('search__wrap--active');
  }
)

searchClose.addEventListener('click',
  function() {
    search.classList.remove('search__wrap--active');
  }
)

 /* bottom */
const headerBtn = document.querySelectorAll('.header__btn');
const headerDropdown = document.querySelectorAll('.header__dropdown');
const headerSvg = document.querySelectorAll('.header__svg');

headerBtn.forEach(function(element) {
  element.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    if(!document.querySelector(`[data-target="${path}"]`).classList.contains('is-active')) {
      headerDropdown.forEach((e) => { e.classList.remove('is-active');});
      headerSvg.forEach((e) => { e.classList.remove('header__svg--active')});
    }

    document.querySelector(`[data-target="${path}"]`).classList.toggle('is-active');
    document.querySelector(`[data-point="${path}"]`).classList.toggle('header__svg--active');
  });
});

/* hero */
new Swiper('.hero__swiper', {
  loop: true,
  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
    paginationBulletMessage: 'Go to slide {{index}}',
  },
});

/* gallery */
  /* select */
  const element = document.querySelector('.gallery__select');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
    position: 'bottom'
  });

    /* gallery-swiper */
  const gallerySlider = new Swiper(".gallery__swiper", {
    breakpoints: {
      1920: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      1210: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 34,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 38,
      },
      750: {
        slidesPerView: 2,
        spaceBetween: 38,
      },
      550: {
        slidesPerView: 1,
        spaceBetween: 38,
      },
      320: {
        slidesPerView: 1,
      }
    },

    pagination: {
      el: ".gallery__pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".gallery__btn.btn__next",
      prevEl: ".gallery__btn.btn__prev"
    },
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      paginationBulletMessage: 'Go to slide {{index}}',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
  });

    /* gallery-card*/
  const cardOpen = document.querySelector('.gallery__slide-2');
  const galleryCard = document.querySelector('.gallery__card');
  const cardClose = document.querySelector('.card__btn')

  cardOpen.addEventListener('click',
    function() {
      galleryCard.classList.add('card-open');
      document.body.classList.add('stop-scroll');
  });

  cardClose.addEventListener('click',
    function() {
      galleryCard.classList.remove('card-open');
      document.body.classList.remove('stop-scroll');
  });

/* catalog */
new Accordion('.catalog__list', {
	elementClass: 'accordion',
	triggerClass: 'accordion__control',
	panelClass: 'accordion__content',
	activeClass: 'accordion--active'
});

const catalogBtn = document.querySelectorAll('.accordion__link');
const catalogItem = document.querySelectorAll('.catalog__card');

catalogBtn.forEach(function(element) {
  element.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    catalogItem.forEach(function(element){ element.classList.remove('catalog__card--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('catalog__card--active');
  });
});

/* events */
new Swiper('.events__swiper', {
  breakpoints: {
    1920: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 27,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 34,
    },
    630: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    }
  },
  navigation: {
    nextEl: '.events__btn.btn__next',
    prevEl: '.events__btn.btn__prev',
  },
  pagination: {
    el: '.events__pagination',
    type: 'bullets',
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
})

/* projects */
new Swiper('.projects__swiper', {
  breakpoints: {
    1920: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 33,
    },
    320: {
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: '.projects__btn.btn__next',
    prevEl: '.projects__btn.btn__prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewPort: true,
  },
});

/* contacts */
  /* map */
	ymaps.ready(init);
	function init(){
    const myMap = new ymaps.Map(
    "map",
    {
      center: [55.75846806898367, 37.60108849999989],
      zoom: 14,
      controls: ["geolocationControl", "zoomControl"]
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition: { top: "300px", right: "20px" },
      geolocationControlFloat: "none",
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "200px", right: "20px" }
    }
  );

  if (window.matchMedia("(max-width: 1280px)").matches) {
    if (Object.keys(myMap.controls._controlKeys).length) {
      myMap.controls.remove('zoomControl');
      myMap.controls.remove('geolocationControl');
    }
  }

  myMap.behaviors.disable("scrollZoom");

  myMap.events.add("sizechange", function (e) {
    if (window.matchMedia("(max-width: 1280px)").matches) {
      if (Object.keys(myMap.controls._controlKeys).length) {
        myMap.controls.remove('zoomControl');
        myMap.controls.remove('geolocationControl');
      }
    } else {
      if (!Object.keys(myMap.controls._controlKeys).length) {
        myMap.controls.add('zoomControl');
        myMap.controls.add('geolocationControl');
      }
    }
  });

  const myPlacemark = new ymaps.Placemark(
    [55.75846806898367, 37.60108849999989],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: 'img/map.svg',
      iconImageSize: [20, 20],
			iconImageOffset: [-3, -42]
    }
  );

  myMap.geoObjects.add(myPlacemark);
	}


/* form */
const form = document.querySelector('.form');
var validation = new JustValidate('.form');

validation
  .addField('.name', [{
    rule: 'required',
    errorMessage: 'Enter your name',
  },
  {
    validator: (value) => {
    return 	/^[a-zA-Zа-яА-Я]+$/i.test(value);
    },
    errorMessage: 'Invalid format',
  },])

  .addField('.tel', [{
    rule: 'required',
    errorMessage: 'Enter your phone number',
  }])

form.addEventListener('submit', () => {
  form.reset();
})


