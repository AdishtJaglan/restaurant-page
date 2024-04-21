import Icon from "./pizza-home.jpeg";

export default function HomePage() {
    const mainContent = document.querySelector("#content");
    const innerDiv = document.createElement("div");
    const descriptionOne = document.createElement("p");
    const descriptionTwo = document.createElement("p");
    const descriptionBtn = document.createElement("button");
    const img = new Image();

    descriptionOne.textContent = "Life's too short for bland pizza,";
    descriptionTwo.textContent = "come experience a flavor explosion with us.";
    descriptionBtn.textContent = "try it->";

    innerDiv.appendChild(descriptionOne);
    innerDiv.appendChild(descriptionTwo);
    innerDiv.appendChild(descriptionBtn);

    img.src = Icon;
    img.classList.add("landing-page-img");
    innerDiv.classList.add("heading-container");
    mainContent.classList.add("home-styles");

    mainContent.appendChild(innerDiv);
    mainContent.appendChild(img);
}