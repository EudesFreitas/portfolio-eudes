const button = document.getElementById("toggleTheme");
  const html = document.documentElement;

  button.addEventListener("click", () => {
    if (html.getAttribute("data-theme") === "dark") {
      html.removeAttribute("data-theme");
      button.textContent = "◐";
    } else {
      html.setAttribute("data-theme", "dark");
      button.textContent = "◑";
    }
  });

  const translations = {

  pt: {
    title: "Eudes Freitas",
    INÍCIO: "INÍCIO",
    SOBRE: "SOBRE",
    PROJETOS: "PROJETOS",
    greeting: "Olá!",
    aboutText: "Sou Eudes, tenho 41 anos e estou em transição de carreira para a área de desenvolvimento de software. Após uma trajetória sólida no universo do cinema, onde trabalhei por muitos anos com criatividade, produção e narrativa, estou agora direcionando minha paixão por resolver problemas e criar soluções para o mundo da tecnologia. Estou estudando desenvolvimento de software com foco em construir sistemas que façam a diferença na vida das pessoas, unindo lógica, inovação e experiência de vida."
  },

  en: {
    title: "Eudes Freitas",
    INÍCIO: "HOME",
    SOBRE: "ABOUT",
    PROJETOS: "PROJECTS",
    greeting: "Hi!",
    aboutText: "I’m Eudes, I’m 41 years old and currently transitioning my career into software development. After a solid journey in the film industry, where I worked for many years with creativity, production, and storytelling, I am now directing my passion for solving problems and creating solutions toward the world of technology. I am studying software development with the goal of building systems that make a difference in people's lives, combining logic, innovation, and life experience."

  }

};

function changeLanguage(lang) {

  const elements = document.querySelectorAll("[data-lang]");

  elements.forEach(el => {

    const key = el.getAttribute("data-lang");
    el.textContent = translations[lang][key];

  });

}

let currentLanguage = "pt";

const button2 = document.getElementById("languageToggle");

button2.addEventListener("click", () => {

  if (currentLanguage === "pt") {
    changeLanguage("en");
    button2.textContent = "EN";
    currentLanguage = "en";
  } else {
    changeLanguage("pt");
    button2.textContent = "PT-BR";
    currentLanguage = "pt";
  }

});


// para abrir o menu
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});