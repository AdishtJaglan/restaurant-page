import location from "./images/location.png";

export default function LocationPage() {
    const mainContent = document.querySelector("#content");
    const locationImg = new Image();
    const phNo = document.createElement("p");
    const address = document.createElement("p");

    phNo.textContent = "📞 +91 12345 67890";
    address.textContent = "🏠 Rashtrapati Bhawan, President's Estate, New Delhi, Delhi 110004, India";

    locationImg.src = location;
    locationImg.classList.add("location-img");

    mainContent.appendChild(locationImg);
    mainContent.appendChild(phNo);
    mainContent.appendChild(address);
}