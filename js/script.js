
const items = {
    meat: [
        {name:"	meat	", price: "	200	", id: "	100	", img: "	./media/meat/1.jpg	"}	
    ],
    seafood: [
        {
            name: "seafood",
            price: "200",
            id: "200",
            img: "./media/seafood/1.jpg"
        }
    ],
    vegetables: [
        {
            name: "vegetables",
            price: "200",
            id: "300",
            img: "./media/vegetables/1.jpg"
        }
    ],
    fruits: [
        {
            name: "fruits",
            price: "200",
            id: "400",
            img: "./media/fruits/1.jpg"
        }
    ]
}

const cart = JSON.parse(localStorage.getItem("cart")) || [];

function generateMeat() {

    console.log('displaying meat');

    for (var i = 0; i < items.meat.length; i++) {

    const meatEl = document.getElementById("meat");
    const cardEl = document.createElement("div");
    cardEl.setAttribute("class", "card");
    const pictureEl = document.createElement("img");
    pictureEl.setAttribute("class", "picture");
    pictureEl.setAttribute("src", items.meat[i].img)
    const nameEl = document.createElement("div");
    nameEl.setAttribute("class", "name");
    nameEl.innerHTML = items.meat[i].name;
    const priceEl = document.createElement("div");
    priceEl.setAttribute("class", "price")
    priceEl.innerHTML = "RM: " + items.meat[i].price;
    const cartEl = document.createElement("div");
    cartEl.setAttribute("class", "cart");
    const addcartEl = document.createElement("button");
    addcartEl.setAttribute("id", items.meat[i].id);
    addcartEl.setAttribute("class", "add-cart");
    addcartEl.setAttribute("onclick", "saveCart(this.id)")
    addcartEl.innerHTML = "ADD TO CART"

    meatEl.appendChild(cardEl);
    cardEl.appendChild(pictureEl);
    cardEl.appendChild(nameEl);
    cardEl.appendChild(priceEl);
    cardEl.appendChild(cartEl);
    cartEl.appendChild(addcartEl);
    }
}

function generateSeafood() {

    console.log('displaying seafood');

    for (var i = 0; i < items.vegetables.length; i++) {

    const seafoodEl = document.getElementById("seafood");
    const cardEl = document.createElement("div");
    cardEl.setAttribute("class", "card");
    const pictureEl = document.createElement("img");
    pictureEl.setAttribute("class", "picture");
    pictureEl.setAttribute("src", items.seafood[i].img)
    const nameEl = document.createElement("div");
    nameEl.setAttribute("class", "name");
    nameEl.innerHTML = items.seafood[i].name;
    const priceEl = document.createElement("div");
    priceEl.setAttribute("class", "price")
    priceEl.innerHTML = "RM: " + items.seafood[i].price;
    const cartEl = document.createElement("div");
    cartEl.setAttribute("class", "cart");
    const addcartEl = document.createElement("button");
    addcartEl.setAttribute("id", items.seafood[i].id);
    addcartEl.setAttribute("class", "add-cart");
    addcartEl.setAttribute("onclick", "saveCart(this.id)")
    addcartEl.innerHTML = "ADD TO CART"

    seafoodEl.appendChild(cardEl);
    cardEl.appendChild(pictureEl);
    cardEl.appendChild(nameEl);
    cardEl.appendChild(priceEl);
    cardEl.appendChild(cartEl);
    cartEl.appendChild(addcartEl);
    }
}

function generateVegetables() {

    console.log('displaying vegetables');

    for (var i = 0; i < items.vegetables.length; i++) {

    const vegetablesEl = document.getElementById("vegetables");
    const cardEl = document.createElement("div");
    cardEl.setAttribute("class", "card");
    const pictureEl = document.createElement("img");
    pictureEl.setAttribute("class", "picture");
    pictureEl.setAttribute("src", items.vegetables[i].img)
    const nameEl = document.createElement("div");
    nameEl.setAttribute("class", "name");
    nameEl.innerHTML = items.vegetables[i].name;
    const priceEl = document.createElement("div");
    priceEl.setAttribute("class", "price")
    priceEl.innerHTML = "RM: " + items.vegetables[i].price;
    const cartEl = document.createElement("div");
    cartEl.setAttribute("class", "cart");
    const addcartEl = document.createElement("button");
    addcartEl.setAttribute("id", items.vegetables[i].id);
    addcartEl.setAttribute("class", "add-cart");
    addcartEl.setAttribute("onclick", "saveCart(this.id)")
    addcartEl.innerHTML = "ADD TO CART"

    vegetablesEl.appendChild(cardEl);
    cardEl.appendChild(pictureEl);
    cardEl.appendChild(nameEl);
    cardEl.appendChild(priceEl);
    cardEl.appendChild(cartEl);
    cartEl.appendChild(addcartEl);
    }
}

function generateFruits() {

    console.log('displaying fruits');

    for (var i = 0; i < items.fruits.length; i++) {

    const fruitsEl = document.getElementById("fruits");
    const cardEl = document.createElement("div");
    cardEl.setAttribute("class", "card");
    const pictureEl = document.createElement("img");
    pictureEl.setAttribute("class", "picture");
    pictureEl.setAttribute("src", items.fruits[i].img)
    const nameEl = document.createElement("div");
    nameEl.setAttribute("class", "name");
    nameEl.innerHTML = items.fruits[i].name;
    const priceEl = document.createElement("div");
    priceEl.setAttribute("class", "price")
    priceEl.innerHTML = "RM: " + items.fruits[i].price;
    const cartEl = document.createElement("div");
    cartEl.setAttribute("class", "cart");
    const addcartEl = document.createElement("button");
    addcartEl.setAttribute("id", items.fruits[i].id);
    addcartEl.setAttribute("class", "add-cart");
    addcartEl.setAttribute("onclick", "saveCart(this.id)")
    addcartEl.innerHTML = "ADD TO CART"

    fruitsEl.appendChild(cardEl);
    cardEl.appendChild(pictureEl);
    cardEl.appendChild(nameEl);
    cardEl.appendChild(priceEl);
    cardEl.appendChild(cartEl);
    cartEl.appendChild(addcartEl);
    }
}

function saveStorage() {
    localStorage.setItem("cart", JSON.stringify(cart))
}

function saveCart(item) {

    if (!cart) {
        cart = []
    }

    const meatArr = item - 100;
    const seafoodArr = item - 200;
    const vegetablesArr = item - 300;
    const fruitsArr = item - 400;

    if (item >= 100 && item <= 199) {
        alert("Item: " + items.meat[meatArr].name + " has been added to your cart")
        cart.push(items.meat[meatArr])
    } else if
    (item >= 200 && item <= 299) {
        alert("Item: " + items.seafood[seafoodArr].name + " has been added to your cart")
        cart.push(items.seafood[seafoodArr])
    } else if 
    (item >= 300 && item <= 399) {
        alert("Item: " + items.vegetables[vegetablesArr].name + " has been added to your cart")
        cart.push(items.vegetables[vegetablesArr])
    } else if 
    (item >= 400 && item <= 499) {
        alert("Item: " + items.fruits[fruitsArr].name + " has been added to your cart")
        cart.push(items.fruits[fruitsArr])
    }
    
    saveStorage();
    console.table(cart);
}

function loadCart() {
    
    console.log('displaying cart');

    const cartContainerEl = document.getElementById("cart-container");

    for (var i = 0; i < cart.length; i++ ) {

    const shoppingListEl = document.createElement("div");
    shoppingListEl.setAttribute("class", "shopping-cart-list");
    const miniPictureEl = document.createElement("img");
    miniPictureEl.setAttribute("class", "mini-picture");
    miniPictureEl.setAttribute("src", cart[i].img)

    const cartNameEl = document.createElement("div");
    cartNameEl.setAttribute("class", "cart-item-name");
    cartNameEl.innerHTML = cart[i].name;

    const cartPriceEl = document.createElement("div");
    cartPriceEl.setAttribute("class", "cart-item-price");
    cartPriceEl.innerHTML = "RM: " + cart[i].price;

    const removeCartEl = document.createElement("button");
    removeCartEl.setAttribute("class", "remove-from-cart");
    removeCartEl.setAttribute("id", i)
    removeCartEl.setAttribute("onclick", "removeCart(this.id)")
    removeCartEl.innerHTML = "remove"

    cartContainerEl.appendChild(shoppingListEl);
    shoppingListEl.appendChild(miniPictureEl);
    shoppingListEl.appendChild(cartNameEl);
    shoppingListEl.appendChild(cartPriceEl);
    shoppingListEl.appendChild(removeCartEl);
	
    }
}

function removeCart(index) {
    console.log("Item: " + cart[index].name + "and " + "index: " + index + " removed from Cart!")

    cart.splice(index, 1);

    saveStorage();
    location.reload();
}

generateMeat();
generateSeafood();
generateVegetables();
generateFruits();
loadCart();
