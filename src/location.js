export default function LocationPage() {
    const location = document.createElement("p");
    const mainContent = document.querySelector("#content");

    location.textContent = "New Delhi";
    mainContent.appendChild(location);
}