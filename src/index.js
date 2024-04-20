import home from "./home";
import location from "./location";
import clear from "./clear";
import menu from "./menu";

const locationButton = document.querySelector(".location");
const menuButton = document.querySelector(".menu");
const homeButton = document.querySelector(".home");

home();

homeButton.addEventListener("click", () => {
    clear();
    home();
});

locationButton.addEventListener("click", () => {
    clear();
    location();
});

menuButton.addEventListener("click", () => {
    clear();
    menu();
});