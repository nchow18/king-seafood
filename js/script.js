
const meat = JSON.parse(localStorage.getItem("meat")) ||  [
        {name:"meat", price: 200, id: "100", img: "./media/meat/1.jpg"}	
    ]
const seafood = JSON.parse(localStorage.getItem("seafood")) ||  [
        {
            name: "seafood",
            price: 200,
            id: "200",
            img: "./media/seafood/1.jpg"
        }
    ]
const vegetables = JSON.parse(localStorage.getItem("vegetables")) ||  [
        {
            name: "vegetables",
            price: 200,
            id: "300",
            img: "./media/vegetables/1.jpg"
        }
    ]
const fruits = JSON.parse(localStorage.getItem("fruits")) ||  [
        {
            name: "fruits",
            price: 200,
            id: "400",
            img: "./media/fruits/1.jpg"
        }
    ]

const foodArr = [
    "meat", "seafood", "vegetables", "fruits"
    ];

function displayLoop() {

    if (meat) { generateFoodList(meat); }
    if (seafood) { generateFoodList(seafood); }
    if (vegetables) { generateFoodList(vegetables); }
    if (fruits) { generateFoodList(fruits); }  
}

const cart = JSON.parse(localStorage.getItem("cart")) || [];

function generateFoodList(typeArr) {

        for (var i = 0; i < typeArr.length; i++) {

        const foodEl = document.getElementById("" + typeArr[i].name + "");
        const cardEl = document.createElement("div");
        cardEl.setAttribute("class", "card");
        cardEl.setAttribute("id", typeArr + "-" + typeArr[i].id)
        const pictureEl = document.createElement("img");
        pictureEl.setAttribute("class", "picture");
        pictureEl.setAttribute("src", typeArr[i].img)
        pictureEl.setAttribute("id", "myImg");
        pictureEl.setAttribute("alt", typeArr[i].name);
        pictureEl.setAttribute("style", "width:100%; max-width:300px");

        //create picture MODAL
        const modalEl = document.createElement("div");
        modalEl.setAttribute("id", "myModal-"+typeArr[i].id);
        modalEl.setAttribute("class", "modal");
        const modalCloseEl = document.createElement("span");
        modalCloseEl.setAttribute("class", "close");
        modalCloseEl.setAttribute("id", "closeModal");
        modalCloseEl.setAttribute("onclick", "closeModal(this.id)")
        modalCloseEl.innerHTML = "&times;";
        const modalImageEl = document.createElement("img");
        modalImageEl.setAttribute("class", "modal-content");
        modalImageEl.setAttribute("id", "img01");
        const modalCaptionEl = document.createElement("div");
        modalCaptionEl.setAttribute("id", "caption");

        const nameEl = document.createElement("div");
        nameEl.setAttribute("class", "name");
        nameEl.innerHTML = typeArr[i].name;
        const priceEl = document.createElement("div");
        priceEl.setAttribute("class", "price")
        priceEl.innerHTML = "RM: " + typeArr[i].price;
        const cartEl = document.createElement("div");
        cartEl.setAttribute("class", "cart");
        const addcartEl = document.createElement("button");
        addcartEl.setAttribute("id", typeArr[i].id);
        addcartEl.setAttribute("class", "add-cart");
        addcartEl.setAttribute("onclick", "saveCart(this.id)")
        addcartEl.innerHTML = "ADD TO CART"

        foodEl.appendChild(cardEl);
        cardEl.appendChild(pictureEl);
        cardEl.appendChild(modalEl);
        modalEl.appendChild(modalCloseEl);
        modalEl.appendChild(modalImageEl);
        modalEl.appendChild(modalCaptionEl);
        cardEl.appendChild(nameEl);
        cardEl.appendChild(priceEl);
        cardEl.appendChild(cartEl);
        cartEl.appendChild(addcartEl);

        pictureEl.onclick = function(){
            modalEl.style.display = "block";
            modalImageEl.src = this.src;
            modalCaptionEl.innerHTML = this.alt;
        }
    }
}

function closeModal() {
    location.reload();
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
        alert("Item: " + meat[meatArr].name + " has been added to your cart")
        cart.push(meat[meatArr])
    } else if
    (item >= 200 && item <= 299) {
        alert("Item: " + seafood[seafoodArr].name + " has been added to your cart")
        cart.push(seafood[seafoodArr])
    } else if 
    (item >= 300 && item <= 399) {
        alert("Item: " + vegetables[vegetablesArr].name + " has been added to your cart")
        cart.push(vegetables[vegetablesArr])
    } else if 
    (item >= 400 && item <= 499) {
        alert("Item: " + fruits[fruitsArr].name + " has been added to your cart")
        cart.push(fruits[fruitsArr])
    }
    
    saveStorage();
    location.reload();
    console.table(cart);
}

function loadCart() {
    
    console.log('displaying cart');
    console.table(cart);

    var totalPrice = 0;

    const cartContainerEl = document.getElementById("cart-container");

    for (var i = 0; i < cart.length; i++ ) {

    const shoppingListEl = document.createElement("div");
    shoppingListEl.setAttribute("class", "shopping-cart-list");
    const miniPictureEl = document.createElement("img");
    miniPictureEl.setAttribute("class", "mini-picture");
    miniPictureEl.setAttribute("src", cart[i].img)

    const cartNameEl = document.createElement("div");
    cartNameEl.setAttribute("class", "cart-item-name");
    cartNameEl.setAttribute("onclick", "location.href='#"+cart[i].id+"';");
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

    totalPrice += cart[i].price;
    }
    console.log(totalPrice);

    const totalPriceEl = document.getElementById("price-container");

    const addPriceEl = document.createElement("h1");
    addPriceEl.innerHTML = "Total: RM " + totalPrice;

    totalPriceEl.appendChild(addPriceEl);

}

function removeCart(index) {
    console.log("Item: " + cart[index].name + "and " + "index: " + index + " removed from Cart!")

    cart.splice(index, 1);

    saveStorage();
    location.reload();
}

displayLoop();
loadCart();
