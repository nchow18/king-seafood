const items = {
    meat: [],
    seafood: [],
    vegetables: [],
    fruits: []
}


function generateMeat() {

console.log('displaying meat');

const meatEl = document.getElementById("meat");
const cardEl = document.createElement("div");
cardEl.setAttribute("class", "card");
const pictureEl = document.createElement("div");
pictureEl.setAttribute("class", "picture");
const nameEl = document.createElement("div");
nameEl.setAttribute("class", "name");
const priceEl = document.createElement("div");
priceEl.setAttribute("class", "price")
const cartEl = document.createElement("div");
cartEl.setAttribute("class", "cart");
const addcartEl = document.createElement("button");
addcartEl.setAttribute("id", "add-cart");
addcartEl.innerHTML = "ADD TO CART"

meatEl.appendChild(cardEl);
cardEl.appendChild(pictureEl);
cardEl.appendChild(nameEl);
cardEl.appendChild(priceEl);
cardEl.appendChild(cartEl);
cartEl.appendChild(addcartEl);

}

generateMeat();