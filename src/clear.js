export default function Clear() {
    const mainContent = document.querySelector("#content");
    mainContent.removeAttribute("class");

    mainContent.innerHTML = " ";
}