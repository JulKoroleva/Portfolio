
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    smooth: 1.5,
    effects: true,
  });

  gsap.fromTo(
    ".photo-section",
    { opacity: 1 },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: ".photo-section",
        start: "center",
        end: "720",
        scrub: true,
      },
    }
  );

  let itemsL = gsap.utils.toArray(".gallery__left .gallery__item");

  itemsL.forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: "-850",
          end: "-100",
          scrub: true,
        },
      }
    );
  });

  let itemsR = gsap.utils.toArray(".gallery__right .gallery__item");

  itemsR.forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: "-750",
          end: "top",
          scrub: true,
        },
      }
    );
  });
}

const sliderMain = new Swiper(".slider_main", {
  freeMode: true,
  mousewheel: true,
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    680: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
  initialSlide: 0,
});
const sliderBg = new Swiper(".slider_bg", {
  centeredSlides: true,
  parallax: true,
  spaceBetween: 10,
  slidesPerView: 5,
});

sliderMain.controller.control = sliderBg;

const firstTitle = gsap.timeline();

firstTitle.fromTo(
  ".first-title",
  {
    x: -400,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 0.7,
    duration: 1.5,
    delay: 0, // Начальная задержка для первого заголовка (можете настроить по вашему желанию)
  }
);

const secondTitle = gsap.timeline();

secondTitle.fromTo(
  ".second-title",
  {
    x: -400,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 0.7,
    duration: 1.5,
    delay: 0.3, // Начальная задержка для второго заголовка (можете настроить по вашему желанию)
  }
);

const menu = gsap.timeline();

menu
  .fromTo(
    ".main-name",
    {
      y: -50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 0.7,
      delay: 0,
      duration: 0.8, // Начальная задержка для второго заголовка (можете настроить по вашему желанию)
    }
  )
  .fromTo(
    ".menu li",
    {
      y: -50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 0.7,
      delay: 0,
      duration: 0.8, // Начальная задержка для второго заголовка (можете настроить по вашему желанию)
      stagger: 0.15,
    }
  );

// Получите все слайды
const sliderItems = document.querySelectorAll(".slider__item");
// Установите начальный активный слайд
let activeIndex = 0;
sliderItems[activeIndex].classList.add("active");

// Обработчик прокрутки слайдов
sliderMain.on("slideChange", () => {
  // Удалите класс активного слайда с предыдущего активного слайда
  sliderItems[activeIndex].classList.remove("active");

  // Определите новый активный слайд
  activeIndex = sliderMain.activeIndex;

  // Добавьте класс активного слайда к новому активному слайду
  sliderItems[activeIndex].classList.add("active");
});

sliderItems.forEach((item, index) => {
  if (window.screen.width > 800) {
    item.addEventListener("click", () => {
      // Переместите слайдер к выбранному слайду
      sliderMain.slideTo(index);
    });
  }
});

const sections = document.querySelectorAll(".section");

// Добавляем анимации для каждой секции
sections.forEach((section, index) => {
  gsap.to(section, {
    opacity: 1, // Пример анимации, замените на свои
    y: 0, // Пример анимации, замените на свои
    scrollTrigger: {
      trigger: section,
      start: "top top", // Начать анимацию, когда верх секции появляется по центру окна
      end: "bottom center", // Закончить анимацию, когда низ секции появляется по центру окна
      toggleActions: "play none none reverse",
      onEnter: () => {
        // Прокручиваем страницу к началу следующей секции, когда текущая секция полностью видима
        const nextSection = sections[index + 1];
        if (nextSection) {
          window.scrollTo({ top: nextSection.offsetTop, behavior: "smooth" });
        }
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const smoothScrollLinks = document.querySelectorAll(".smooth-scroll");

  smoothScrollLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("data-target");
      console.log("targetId = ", targetId);
      const targetElement = document.getElementById(targetId);
      console.log("targetElement = ", targetElement);
      // Вычисляем offsetY, чтобы верхняя часть секции была видимой
      const offsetY =
        targetElement.getBoundingClientRect().top + window.scrollY;
      console.log("offsetY = ", offsetY);
      window.scrollTo({
        top: offsetY,
        behavior: "auto",
      });
    });
  });
});





