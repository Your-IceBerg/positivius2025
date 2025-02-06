const burger = document.querySelector('.header__burger'); // кнопка бургера
const menu = document.querySelector('.header__menu'); // меню 
const body = document.body;

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('lock');
})



document.addEventListener("DOMContentLoaded", function () {
  const heroImage = document.querySelector('.hero__image');
  const heroTitle = document.querySelector('.hero__title');
  const heroBody = document.querySelector('.hero__body');

  function rearrangeHeroImage() {
    if (window.innerWidth <= 767) {
      // Перемещаем hero__image под hero__title
      if (heroTitle && heroImage) {
        heroTitle.insertAdjacentElement('afterend', heroImage);
      }
    } else {
      // Возвращаем hero__image обратно в hero__body
      if (heroBody && heroImage) {
        heroBody.appendChild(heroImage);
      }
    }
  }

  // Инициализация
  rearrangeHeroImage();

  // Перестроение при изменении размера окна
  window.addEventListener('resize', rearrangeHeroImage);
});





const accordions = document.querySelectorAll('.accordion-item');

accordions.forEach(function (item) {
  item.addEventListener('click', function () {
    const content = this.querySelector('.accordion-content');
    content.classList.toggle('hidden');
    this.classList.toggle('__open');
  });
});



// Инициализация Swiper
const swiper = new Swiper('.swiper-container', {
  loop: false, // Не бесконечная прокрутка (для твоего запроса)
  slidesPerView: 1, // Показывать по одному слайду на экране
  spaceBetween: 30, // Расстояние между слайдами
  navigation: {
    nextEl: '.swiper-button-next', // Стрелка "вперед"
    prevEl: '.swiper-button-prev', // Стрелка "назад"
  },
  pagination: {
    el: '.swiper-pagination', // Пагинация
    clickable: true, // Возможность клика по пагинации
  },
  breakpoints: {
    768: {
      slidesPerView: 1.5, // Показывать 2 слайда на экране для разрешений больше 768px
    },
    // 1024: {
    //   slidesPerView: 1., // Показывать 3 слайда на экране для разрешений больше 1024px
    // }
  }
});

// footer

window.addEventListener('resize', moveFooterElements);
window.addEventListener('load', moveFooterElements);

function moveFooterElements() {
  const footerNav = document.querySelector('.footer__nav');
  const footerHeader = document.querySelector('.footer__header');
  const footerLogo = document.querySelector('.footer__logo');
  const footerSocial = document.querySelector('.footer__social');
  const footerColumns = document.querySelector('.footer__columns');
  const footerBottom = document.querySelector('.footer__bottom');

  // При разрешении меньше 900px перемещаем footer__nav между footer__header и footer__columns
  if (window.innerWidth < 900) {
    if (!footerColumns.contains(footerNav)) {
      footerHeader.parentNode.insertBefore(footerNav, footerColumns);
    }
  } else {
    if (!footerHeader.contains(footerNav)) {
      footerHeader.insertBefore(footerNav, footerSocial); // Вставляем перед footer__social
    }
  }

  // При разрешении меньше 500px перемещаем footer__social между footer__columns и footer__bottom
  if (window.innerWidth < 500) {
    if (!footerBottom.contains(footerSocial)) {
      footerColumns.parentNode.insertBefore(footerSocial, footerBottom); // Вставляем перед footer__bottom
    }
  } else {
    if (!footerHeader.contains(footerSocial)) {
      footerHeader.appendChild(footerSocial); // Возвращаем в footer__header
    }
  }
}