export default function HomePage() {
    const mainContent = document.querySelector("#content");
    const description = document.createElement("p");
    const heading = document.createElement("h1");

    heading.textContent = "Pizzeria 7";
    description.textContent = "this is the best place for food around town.";

    mainContent.appendChild(heading);
    mainContent.appendChild(description);
}