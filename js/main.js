
// Появление меню
let nav = document.querySelector('.header__but');

nav.addEventListener('click', function (e) {

  nav.classList.toggle('_active');
  let navList = document.querySelector('.menu');
  navList.classList.toggle('_active');

  let bodyElement = document.body;
  bodyElement.classList.toggle('_hidden')
});


//переход к разделам меню
const menuBut = document.querySelectorAll('.menu__link[data-goto]');
if (menuBut.length > 0) {
  for (let i = 0; i < menuBut.length; i++) {
    const but = menuBut[i];
    but.addEventListener('click', menuClick);
  };


  function menuClick(e) {
    const button = e.target;
    if (button.dataset.goto && document.querySelector(button.dataset.goto)) {
      const block = document.querySelector(button.dataset.goto);
      const gotoBlockValue = block.getBoundingClientRect().top + window.pageYOffset;


      let navList = document.querySelector('.menu');
      navList.classList.toggle('_active');

      let bodyElement = document.body;
      bodyElement.classList.remove('_hidden')

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}

// печать карты
const linkCard = document.querySelector('.card__print');

linkCard.addEventListener('click', printing);


function printing() {
  const card = document.querySelector('.card__block').innerHTML;
  const body = document.body.innerHTML;
  document.body.innerHTML = card;
  window.print();
  document.body.innerHTML = body;
  window.location.reload();
  window.scrollTo(0, 800);
}

//анимация карточек

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll(params) {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      // проверка если анимированный обект больше по высоте, чем окно браузера, то иначе работаем
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      // проверка прокрутки для старта и добавление класса _active
      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active');
      }
      else {
        if (!animItem.classList.contains('_anim-no-hide')) {
          animItem.classList.remove('_active');
        }
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  //вызов функции при загрузке стр, если есть анимационыый объект в шапке или первой секции
  //то, что перед глазами
  animOnScroll();
}



//открытие доп пунктов 

const buttons = document.querySelectorAll('.addition__but[data-click]');
if (buttons.length > 0) {
  for (let i = 0; i < buttons.length; i++) {
    const but = buttons[i];
    but.addEventListener('click', dopClick);
  };


  function dopClick(e) {
    const button = e.target;
    if (button.dataset.click && document.querySelectorAll(button.dataset.click)) {
      const block = document.querySelectorAll(button.dataset.click);
      for (let i = 0; i < block.length; i++) {
        const item = block[i];
        item.classList.add('_active');
        item.parentElement.classList.add('_active');
        button.classList.add('_active');
        e.preventDefault();
      };
    }
  }
}


//swiper


new Swiper('.swiper-documents', {
  //стрелки
  navigation: {
    nextEl: '.swiper-arrow-next-documents',
    prevEl: '.swiper-arrow-prev-documents'
  },


  //* управление клавиатурой
  keyboard: {
    //* включает или нет впринципе возможность управления клавиатурой
    enabled: true,
    //* слайдер листается с помощью стрелок клавиатуры только в пределах видимости / когда до него доскролили кнопками 9 и 6
    onlyInViewport: true,
    // * переключение слайдов стрелочками вправо / влево
    pageUpDown: true,
  },

  //* Автовысота / булеты  будут подниматься, если высота картинки становится выше
  autoHeight: false,



  //* СТАРТОВЫЙ СЛАЙД
  //* 1  активный слайд по центру
  //* эффект не будет виден если у  slidesPerGroup:1 (будет значение 1 )
  centeredSlides: true,


  //* бесконечный слайдер
  //* он не подарузумевает скролл, поэтому его стоит отключать (он не правильно отображает пролистывание)
  //* бесконенчость не будет работать с мультирядностью (значение slidesPerColumn  должно быть не больше 1 (slidesPerColumn:1))
  //* если указать кол-во слайдов для показа со значением auto, то нужно указать количество дублируемых слайдов loopedSlides:3,чтобы бесконечность работала корректно 
  loop: true,

  slideActiveClass: 'swiper-slide-active-mod',
  //* автопрокрутка
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },


  //* скорость автопрокрутки
  //*  300-зпу
  speed: 1000,


  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 100
    }
  }
});


// swiper-news

new Swiper('.swiper-news', {
  //стрелки
  navigation: {
    nextEl: '.swiper-arrow-next-news',
    prevEl: '.swiper-arrow-prev-news'
  },


  //* управление клавиатурой
  keyboard: {
    //* включает или нет впринципе возможность управления клавиатурой
    enabled: true,
    //* слайдер листается с помощью стрелок клавиатуры только в пределах видимости / когда до него доскролили кнопками 9 и 6
    onlyInViewport: true,
    // * переключение слайдов стрелочками вправо / влево
    pageUpDown: true,
  },

  loop: true,
  speed: 1000,
  initialSlide: 0,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    1000: {
      slidesPerView: 2,
      spaceBetween: 120
    }
  }
});


//проверка формы сотрудничества
const mainForm = document.forms.main;

const formName = mainForm.formName;
const formTel = mainForm.formTel;
const formEmail = mainForm.formEmail;
const formTextarea = mainForm.formTextarea;

const fError = document.querySelector('.error-cooperation');

mainForm.addEventListener('submit', function (event) {
  event.preventDefault();
  let name = formName.value;
  let tel = formTel.value;
  let email = formEmail.value;
  let textarea = formTextarea.value;
  let em = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
  let file = "";

  if (name == "" || tel == "" || email == "" || textarea == "") {
    file = "Заполните все поля";
  }
  if (name.length <= 2) {
    file = "Введите корректное имя";
  }

  if (em == "") {
    file = "Введите правильный email";
  }

  if (file != "") {
    fError.innerHTML = file;
  }

  else {
    window.location.reload();
  }
});



//проверка формы контакты

const mainContactForm = document.forms.mainContactForm;

const formContactsName = mainContactForm.formContactsName;

const formContactsEmail = mainContactForm.formContactsEmail;

const formContactsTextarea = mainContactForm.formContactsTextarea;

// *получаем  поле для вывода ошибки
const errorContacts = document.querySelector('.error-contacts');


mainContactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  let contactsName = formContactsName.value;
  let contactsEmail = formContactsEmail.value;
  let contactsTextarea = formContactsTextarea.value;
  let fileContacts = "";

  if (contactsName == "" || contactsEmail == "" || contactsTextarea == "") {
    fileContacts = "Заполните все поля";
  }

  if (fileContacts != "") {
    errorContacts.innerHTML = fileContacts;
  } else {
    window.location.reload();
  }
});


//popap==================
// ссылки при нажатии на которые открывается попап с таким классом
const popupLinks = document.querySelectorAll('.popup-link');
//  тег body для блокировки скролла при открытом попапе
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
  for (let i = 0; i < popupLinks.length; i++) {
    const popupLink = popupLinks[i];
    popupLink.addEventListener("click", function (e) {
      const popupName = popupLink.getAttribute('href').replace('#', '');
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}


const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
  for (let i = 0; i < popupCloseIcon.length; i++) {
    const el = popupCloseIcon[i];
    el.addEventListener("click", function (e) {
      popupCloseIcon(el.closest('.popup'));
      e.preventDefault();
    });
  }
}

// получаем открытый попап и если он существует, его закрываем и у боди блокируем скролл
// далее попап, который передали (curentPopup) открываем и вешаем собитие при клике, чтобы закрылся попап только на темную область
//   if (!e.target.closest('.popup__content')) - если при клике на что-то у родителя нет такого класса т.е. это оболочка
// при клике на которую он заркывается 
// если я нажму на обект у которого есть родитель с клаасом .popup__content, то он не закроется, потому что стоит !знак НЕ
//  то есть закроется при нажатие на блоки с классами .popup__body и  .popup
function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open');
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    curentPopup.classList.add('open');
    curentPopup.addEventListener('click', function (e) {
      if (!e.target.closest('.popup__content')) {
        popupClose(e.target.closest('.popup'));
      }
    });
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove('open');
    if (doUnlock) {
      bodyUnLock();
    }
  }
}

// высчитывание ширины скролла, чтобы его скрывать при открытии попапа
function bodyLock() {
  const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
  console.log(lockPaddingValue);
  if (lockPadding.length > 0) {
    for (let i = 0; i < lockPadding.length; i++) {
      const el = lockPadding[i];
      el.style.paddingRight = lockPaddingValue;
    }
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add('lock');

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnLock() {
  setTimeout(function () {
    if (lockPadding.length > 0) {
      for (let i = 0; i < lockPadding.length; i++) {
        const el = lockPadding[i];
        el.style.paddingRight = '0px';
      }
    }
    body.style.paddingRight = '0px';
    body.classList.remove('lock');
  }, timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

//  закрытие по esc
document.addEventListener('keydown', function (e) {
  if (e.which === 27) {
    const popupActive = document.querySelector('.popup.open');
    popupClose(popupActive);
  }
});