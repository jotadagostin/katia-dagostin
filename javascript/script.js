// Function para efeito scroll do header:
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Fecha o menu ao clicar em qualquer link

const checkbox = document.getElementById("menu-checkbox");
const menuLinks = document.querySelectorAll("#menu a");
const consultaBtn = document.querySelector(".button-consulta_mobile");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    checkbox.checked = false;
  });
});

// Fecha o menu se clicar no botão de agendar
consultaBtn.addEventListener("click", () => {
  checkbox.checked = false;
});

// Smooth scrowlling:

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  });
});
