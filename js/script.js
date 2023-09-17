// Fitur Dropdown Navigasi Bar
const hamburgerMenu = document.querySelector(".hamburger-menu");
const dropdownItem = document.querySelector("#dropdown");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  dropdownItem.classList.toggle("active");
});

// Fitur Button back to top, ketika di click otomatis akan scroll ke paling atas
const buttonBackTop = document.querySelector(".button-backtop");
buttonBackTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Fitur Navigasi Bar ketika di scroll akan muncul shadow dibawahnya
const navigationBar = document.querySelector("nav");

function handleScroll() {
  if (window.innerWidth >= 1024) {
    if (window.scrollY > 30 || document.documentElement.scrollY > 30) {
      navigationBar.style.boxShadow = "0 0.5px 6px 0 rgba(0, 0, 0, 0.2)";
    } else {
      navigationBar.style.boxShadow = "0 0.5px 6px 0 rgba(0, 0, 0, 0)";
    }
  }
  if (window.scrollY > 30 || document.documentElement.scrollY > 30) {
    buttonBackTop.style.display = "block";
  } else {
    buttonBackTop.style.display = "none";
  }
}

window.addEventListener("scroll", handleScroll);

window.addEventListener("resize", handleScroll);

window.addEventListener("load", handleScroll);

// Fitur handle form, supaya tidak merefresh saat menekan submit
const formSubmit = document.querySelector("#form-contact");

formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
});

// Fitur Darkmode
const htmlTag = document.querySelector("html");
const toggleDarkMode = document.getElementById("dark-toggle");
let count = 1;

toggleDarkMode.addEventListener("click", () => {
  htmlTag.classList.toggle("dark");
  if(count % 2 == 1) {
    toggleDarkMode.setAttribute("class", "bx bxs-moon");
    count++;
  } else {
    toggleDarkMode.setAttribute("class", "bx bxs-sun");
    count--;
  }
});
