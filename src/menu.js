import pizza_1 from "./images/1-pizza.png";
import pizza_2 from "./images/2-pizza.png";
import pizza_3 from "./images/3-pizza.png";
import pizza_4 from "./images/4-pizza.png";
import pizza_5 from "./images/5-pizza.png";
import pizza_6 from "./images/6-pizza.png";
import pizza_7 from "./images/7-pizza.png";
import pizza_8 from "./images/8-pizza.png";

export default function Menu() {
    const mainContent = document.querySelector("#content");

    mainContent.appendChild(
        createMenuItem(
            "Margherita",
            "Tomato sauce, mozzarella cheese, fresh basil leaves, extra virgin olive oil, salt.",
            1
        )
    );

    mainContent.appendChild(
        createMenuItem(
            "Marinara",
            "Tomato sauce, garlic, oregano, extra virgin olive oil, ham (prosciutto cotto), mushrooms, salt.",
            2
        )
    );

    mainContent.appendChild(
        createMenuItem(
            "Quattro Stagioni",
            "Tomato sauce, mozzarella cheese, mushrooms, artichokes, ham (prosciutto cotto), olives, extra virgin olive oil.",
            3
        )
    );

    mainContent.appendChild(
        createMenuItem(
            "Quattro Formaggi",
            "Tomato sauce (sometimes), mozzarella cheese, gorgonzola cheese, fontina cheese, Parmesan cheese, extra virgin olive oil.",
            4
        )
    );

    mainContent.appendChild(
        createMenuItem(
            "Pizza Napoletana",
            "Tomato sauce, mozzarella cheese, fresh basil leaves, extra virgin olive oil, salt.",
            5
        )
    );

    mainContent.appendChild(
        createMenuItem(
            "Pizza Bianca",
            "Mozzarella cheese, ricotta cheese, garlic, rosemary, sea salt, extra virgin olive oil.",
            6
        )
    );

    mainContent.appendChild(
        createMenuItem(
            "Pizza Capricciosa",
            "Tomato sauce, mozzarella cheese, ham (prosciutto cotto), mushrooms, artichokes, olives, extra virgin olive oil.",
            7
        )
    );

    mainContent.appendChild(
        createMenuItem(
            "Pizza Pugliese",
            "Tomato sauce, mozzarella cheese, onions, capers, black olives, oregano, anchovies, extra virgin olive oil.",
            8
        )
    );
}

function createMenuItem(name, ingredient, num) {
    const mainContent = document.querySelector("#content");
    const card = document.createElement("div");
    const name_ingredient_holder = document.createElement("div");
    const item_ingredient = document.createElement("p");
    const item_name = document.createElement("p");
    const item_img = new Image();

    item_name.textContent = name;
    item_ingredient.textContent = ingredient;

    name_ingredient_holder.appendChild(item_name);
    name_ingredient_holder.appendChild(item_ingredient);

    item_img.src = `./images/${num}-pizza.png`;

    card.appendChild(item_img);
    card.appendChild(name_ingredient_holder);

    card.classList.add("menu-card");
    name_ingredient_holder.classList.add("name-ingredient-holder");
    mainContent.classList.add("menu-container");

    return card;
}