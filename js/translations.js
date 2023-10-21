const translations = {
  ru: {
    title: "Юлия Королева",
    cv:'/cv_ru.pdf',
    aboutMe: "Обо мне",
    skills: "Навыки",
    portfolio: "Проекты",
    contacts: "Контакты",
    additionalSkills: "Дополнительно",
    languages: "Языки",
    russian: "Русский",
    english: "Анлийский (B2)",
    french: "Французский (B2)",
    german: "Немецкий (A2)",
    test: "открыть проект",
    personalInfo:
      "<strong>Добро пожаловать на мой личный сайт-портфолио!</strong> <br>Здесь представлены только те проекты, над которыми я работала самостоятельно. Каждый из них - это не просто код, а история моего развития и творчества. <br> Я всегда открыта к новым проектам и возможностям сотрудничества. ",
    phoneTitle: "Телефон",
    description: {
      one: " Профессионально занимаюсь Frontend-разработкой. Быстро подстраиваюсь под изменения, постоянно обновляю свои знания и расширяю навыки. Мой подход к работе включает в себя активныйпоиск новых инструментов и технологий, а также стремление выбирать наиболее эффективные средства для решения конкретных задач.",
      two: " В процессе работы я предпочитаю не только применять хорошо известные методы, но и искать креативные подходы к решению проблем, используя инструменты, которые могут быть менее распространены, но более подходящими для конкретной задачи..",
      three:
        " Мой опыт в командной работе основан на методологии Agile, что позволяет эффективно взаимодействовать с коллегами и достигать общих целей. В процессе разработки я придерживаюсь принципов методологии БЭМ для упорядочения и структурирования кодовой базы создаваемых проектов.",
      four: " В настоящее время мое внимание сосредоточено на изучении TypeScript, стремясь расширить свои навыки и улучшить качество разрабатываемого кода. Не боюсь сталкиваться с новыми задачами и всегда нацелена на личное развитие в динамичной области Frontend-разработки.",
    },

    projects: {
      ilive:
        "iLive — это платформа, предназначенная для людей, стремящихся к самосовершенствованию и самопознанию. Этот веб-сайт предлагает широкий спектр инструментов, которые могут вдохновить и поднять настроение.",
      carsar:
        "Это простой инструмент, который позволяет шифровать и расшифровывать текст с использованием техники шифра Цезаря. Шифр Цезаря предполагает сдвиг букв на определенное количество позиций в одном алфавите.",
      codehub:
        "CodeHub предоставляет удобную среду для написания и сохранения кода прямо в браузере.",
      travel:
        "Это приложение, разработанное на React с использованием TypeScript, предоставляет интуитивно понятный интерфейс для создания будущих приключений и управления ими. Это приложение поможет вам составить планы будущих путешествий и автоматически загружать фотографии интересных мест с помощью API.",
      samgram:
        "Это простой пример личной веб-страницы пользователя, предназначенной для обмена и демонстрации фотографий.",
    },
  },
  en: {
    title: "Julia Koroleva",
    cv:'/cv_en.pdf',
    aboutMe: "About me",
    skills: "Skills",
    portfolio: "Projects",
    contacts: "Contacts",
    additionalSkills: "Additional",
    languages: "Languages",
    russian: "Russian (native)",
    english: "English (B2)",
    french: "French (B2)",
    german: "German (A2)",
    test: "open project",
    personalInfo:
      "<strong>Welcome to my personal portfolio site!</strong> <br>Only those projects that I worked on on my own are presented here. Each of them is not just code, but the story of my development and creativity. <br> I am always open to new projects and cooperation opportunities. ",
    phoneTitle: "Phone",
    description: {
      one: "I am professionally engaged in Frontend development. I quickly adapt to changes, constantly update my knowledge and expand my skills. My approach to work includes an active search for new tools and technologies, as well as the desire to choose the most effective means for solving specific problems.",
      two: "When working, I prefer not only to use well-known methods, but also to look for creative approaches to solving problems, using tools that may be less common, but more suitable for a particular task.",
      three:
        " My experience in teamwork is based on the Agile methodology, which allows me to effectively interact with colleagues and achieve common goals. During the development process, I adhere to the principles of the BEM methodology to organize and structure the code base of the projects being created.",
      four: "My current focus is on learning TypeScript in an effort to expand my skills and improve the quality of the code I produce. I am not afraid to face new challenges and am always focused on personal development in the dynamic field of Frontend development.",
    },

    projects: {
      ilive:
        "iLive is a platform dedicated to individuals striving for self-improvement. This website offers a diverse range of resources to inspire and uplift users.",
      carsar:
        "This is a simple yet powerful tool that allows you to encrypt and decrypt text using the Caesar cipher technique. The Caesar cipher involves shifting letters by a certain number of positions within the same alphabet.",
      codehub:
        "CodeHub provides a convenient environment for writing and saving your code right in your browser.",
      travel:
        "Developed in React using TypeScript, this app provides an intuitive interface for creating and managing future adventures. This app will help you make future travel plans and automatically upload photos of interesting places using the API.",
      samgram:
        "This is a simple example of a user`s personal webpage designed for sharing and showing photographs..",
    },
  },
};

function setLanguage() {
  const browserLanguage =
    window.navigator.language || window.navigator.userLanguage;
  console.log("browserLanguage = ", browserLanguage);

  console.log("test_log__1");

  let lang = "";
  if (browserLanguage.toLowerCase() === "ru" || browserLanguage === "ru-RU") {
    document.documentElement.lang = "ru";
    lang = "ru";
  } else {
    document.documentElement.lang = "en";
    lang = "en";
  }

  console.log("test_log__2");

  let translation = translations[lang];

  let titleElement = document.getElementsByTagName("title")[0];
  if (titleElement) {
    titleElement.textContent = translation.title;
  }

  console.log("test_log__3");

  document.querySelector(".main-name").textContent = translations[lang].title;
  document.getElementById("about-push").textContent =
    translations[lang].aboutMe;
  document.getElementById("skills-push").textContent =
    translations[lang].skills;
  document.getElementById("portfolio-push").textContent =
    translations[lang].portfolio;
  document.getElementById("contacts-push").textContent =
    translations[lang].contacts;

  console.log("test_log__4");

  document.querySelector(".personal-info__description").innerHTML =
    translation.personalInfo;

  console.log("test_log__4.1");

  document.querySelector(".about-push").innerHTML = translations[lang].aboutMe;

  console.log("test_log__4.2");

  document.querySelector(".skills-push").textContent =
    translations[lang].skills;

  console.log("test_log__4.3");

  document.querySelector(".portfolio-push").textContent =
    translations[lang].portfolio;

  console.log("test_log__4.4");

  document.querySelector(".contacts-push").textContent =
    translations[lang].contacts;

  console.log("test_log__5");

  const aboutMeSection = document.getElementById("about-me__section");
  console.log("test_log__5.0");
  document.getElementById("one").textContent =
    translations[lang].description.one;
  console.log("test_log__5.1");
  document.getElementById("two").textContent =
    translations[lang].description.two;
  console.log("test_log__5.2");
  document.getElementById("three").textContent =
    translations[lang].description.three;
  console.log("test_log__5.3");
  document.getElementById("four").textContent =
    translations[lang].description.four;
  console.log("test_log__5.4");
  document.querySelector(".additional").textContent =
    translations[lang].additionalSkills;

  console.log("test_log__6");

  document.querySelector(".languages").textContent =
    translations[lang].languages;
    document.querySelector(".russian").textContent =
    translations[lang].russian;
    document.querySelector(".english").textContent =
    translations[lang].english;
    document.querySelector(".french").textContent =
    translations[lang].french;
    document.querySelector(".german").textContent =
    translations[lang].german;

  console.log("test_log__7");

  document.querySelector(".ilive").textContent =
    translations[lang].projects.ilive;
  document.querySelector(".caesar").textContent =
    translations[lang].projects.carsar;
  document.querySelector(".codehub").textContent =
    translations[lang].projects.codehub;
  document.querySelector(".travel").textContent =
    translations[lang].projects.travel;
  document.querySelector(".samgram").textContent =
    translations[lang].projects.samgram;

  const testLeft = document.querySelectorAll(".text-block__a_left");
  testLeft.forEach(
    (element) => (element.textContent = translations[lang].test)
  );
  const testRight = document.querySelectorAll(".text-block__a_right");
  testRight.forEach(
    (element) => (element.textContent = translations[lang].test)
  );

  document.getElementById("phoneTitle").textContent =
    translations[lang].phoneTitle;


    document.getElementById('downloadButton').href = translations[lang].cv;
    

  return lang;
}

setLanguage();
