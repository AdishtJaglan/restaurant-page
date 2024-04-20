export default function Menu() {
    const mainContent = document.querySelector("#content");
    const menu = document.createElement("p");

    menu.textContent = "This is the menu";

    mainContent.appendChild(menu);
}