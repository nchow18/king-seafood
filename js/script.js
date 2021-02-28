
const meat = JSON.parse(localStorage.getItem("meat")) ||  [
    {name:"Australian Beef Slice", category: "meat", price: 200, id: "100", img: "media/meat/Australian Beef Slice/1.jpg"},
    {name:"Breaded Chicken Chop", category: "meat", price: 200, id: "101", img: "media/meat/Breaded Chicken Chop/1.jpg"},
    {name:"Chicken Burger Patty", category: "meat", price: 200, id: "102", img: "media/meat/Chicken Burger Patty/1.jpg"},
    {name:"Chicken Nuggets Tempura", category: "meat", price: 200, id: "103", img: "media/meat/Chicken Nuggets Tempura/1.jpg"},
    {name:"Crispy Popcorn Chicken", category: "meat", price: 200, id: "104", img: "media/meat/Crispy Popcorn Chicken/1.jpg"},
    {name:"Meatballs", category: "meat", price: 200, id: "105", img: "media/meat/Meatballs/1.jpg"},
    {name:"Miami Butcher Chicken Ham (Sliced)", category: "meat", price: 200, id: "106", img: "media/meat/Miami Butcher Chicken Ham (Sliced)/1.jpg"},
    {name:"Miami Butcher Chicken Sausage Breakfast", category: "meat", price: 200, id: "107", img: "media/meat/Miami Butcher Chicken Sausage Breakfast/1.jpg"},
    {name:"Miami Butcher Chicken Sausage Jumbo", category: "meat", price: 200, id: "108", img: "media/meat/Miami Butcher Chicken Sausage Jumbo/1.jpg"},
    {name:"Miami Butcher Turkey Bacon (Sliced)", category: "meat", price: 200, id: "109", img: "media/meat/Miami Butcher Turkey Bacon (Sliced)/1.jpg"},
    {name:"Mince Meat 300g", category: "meat", price: 200, id: "110", img: "media/meat/Mince Meat 300g/1.jpg"},
    {name:"Mince Meat 600g", category: "meat", price: 200, id: "111", img: "media/meat/Mince Meat 600g/1.jpg"},
    {name:"Pork Stomach", category: "meat", price: 200, id: "112", img: "media/meat/Pork Stomach/1.jpg"},
    {name:"Pork Tendon", category: "meat", price: 200, id: "113", img: "media/meat/Pork Tendon/1.jpg"},
    {name:"Shabu Shabu Pork", category: "meat", price: 200, id: "114", img: "media/meat/Shabu Shabu Pork/1.jpg"},
    {name:"Shabu Shabu Pork Belly", category: "meat", price: 200, id: "115", img: "media/meat/Shabu Shabu Pork Belly/1.jpg"},
    {name:"Smoked Back Bacon", category: "meat", price: 200, id: "116", img: "media/meat/Smoked Back Bacon/1.jpg"},
    {name:"Smoked Duck", category: "meat", price: 200, id: "117", img: "media/meat/Smoked Duck/1.jpg"}
    ];

const seafood = JSON.parse(localStorage.getItem("seafood")) ||  [
    {name:"Abalone Can", category: "seafood", price: 200, id: "200", img: "media/seafood/Abalone Can/1.jpg"},
    {name:"Abalone Slice", category: "seafood", price: 200, id: "201", img: "media/seafood/Abalone Slice/1.jpg"},
    {name:"Alaskan King Crab", category: "seafood", price: 200, id: "202", img: "media/seafood/Alaskan King Crab/1.jpg"},
    {name:"Baby Octopus", category: "seafood", price: 200, id: "203", img: "media/seafood/Baby Octopus/1.jpg"},
    {name:"Breaded Cod Fish", category: "seafood", price: 200, id: "204", img: "media/seafood/Breaded Cod Fish/1.jpg"},
    {name:"Breaded Scallops", category: "seafood", price: 200, id: "205", img: "media/seafood/Breaded Scallops/1.jpg"},
    {name:"Canadian Scallops", category: "seafood", price: 200, id: "206", img: "media/seafood/Canadian Scallops/1.jpg"},
    {name:"Caviar", category: "seafood", price: 200, id: "207", img: "media/seafood/Caviar/1.jpg"},
    {name:"Chuka Hotate", category: "seafood", price: 200, id: "208", img: "media/seafood/Chuka Hotate/1.jpg"},
    {name:"Chuka Idako (Seasoned Baby Octopus) 2kg", category: "seafood", price: 200, id: "209", img: "media/seafood/Chuka Idako (Seasoned Baby Octopus) 2kg/1.jpg"},
    {name:"Chuka Idako (Seasoned Baby Octopus) 500g", category: "seafood", price: 200, id: "210", img: "media/seafood/Chuka Idako (Seasoned Baby Octopus) 500g/1.jpg"},
    {name:"Chuka Wakame", category: "seafood", price: 200, id: "211", img: "media/seafood/Chuka Wakame/1.jpg"},
    {name:"Clam (lala)", category: "seafood", price: 200, id: "212", img: "media/seafood/Clam (lala)/1.jpg"},
    {name:"Cod Fillet (Miso)", category: "seafood", price: 200, id: "213", img: "media/seafood/Cod Fillet (Miso)/1.jpg"},
    {name:"Cod Fish", category: "seafood", price: 200, id: "214", img: "media/seafood/Cod Fish/1.jpg"},
    {name:"Crab Meat (Mix)", category: "seafood", price: 200, id: "215", img: "media/seafood/Crab Meat (Mix)/1.jpg"},
    {name:"Crab meat (Red) 400g", category: "seafood", price: 200, id: "216", img: "media/seafood/Crab meat (Red) 400g/1.jpg"},
    {name:"Crab Meat (Red) 800g", category: "seafood", price: 200, id: "217", img: "media/seafood/Crab Meat (Red) 800g/1.jpg"},
    {name:"Crab Meat (White) 400g", category: "seafood", price: 200, id: "218", img: "media/seafood/Crab Meat (White) 400g/1.jpg"},
    {name:"Crab Meat (White) 800g", category: "seafood", price: 200, id: "219", img: "media/seafood/Crab Meat (White) 800g/1.jpg"},
    {name:"Ebi Tempura", category: "seafood", price: 200, id: "220", img: "media/seafood/Ebi Tempura/1.jpg"},
    {name:"Ebiko Orange", category: "seafood", price: 200, id: "221", img: "media/seafood/Ebiko Orange/1.jpg"},
    {name:"Fish Maw", category: "seafood", price: 200, id: "222", img: "media/seafood/Fish Maw/1.jpg"},
    {name:"Flower Squid", category: "seafood", price: 200, id: "223", img: "media/seafood/Flower Squid/1.jpg"},
    {name:"Fo Tiao Qiang", category: "seafood", price: 200, id: "224", img: "media/seafood/Fo Tiao Qiang/1.jpg"},
    {name:"Garlic Crayfish Whole 700g", category: "seafood", price: 200, id: "225", img: "media/seafood/Garlic Crayfish Whole 700g/1.jpg"},
    {name:"Half Shell Scallop", category: "seafood", price: 200, id: "226", img: "media/seafood/Half Shell Scallop/1.jpg"},
    {name:"Half Shell Scallop (Pink)", category: "seafood", price: 200, id: "227", img: "media/seafood/Half Shell Scallop (Pink)/1.jpg"},
    {name:"Halibut Fillet", category: "seafood", price: 200, id: "228", img: "media/seafood/Halibut Fillet/1.jpg"},
    {name:"Halibut Fillet (Miso)", category: "seafood", price: 200, id: "229", img: "media/seafood/Halibut Fillet (Miso)/1.jpg"},
    {name:"Halibut Steak", category: "seafood", price: 200, id: "230", img: "media/seafood/Halibut Steak/1.jpg"},
    {name:"Hokkaido Scallops (S)", category: "seafood", price: 200, id: "231", img: "media/seafood/Hokkaido Scallops (S)/1.jpg"},
    {name:"Half Shell Scallop (Pink)", category: "seafood", price: 200, id: "232", img: "media/seafood/Half Shell Scallop (Pink)/1.jpg"},
    {name:"Halibut Fillet", category: "seafood", price: 200, id: "233", img: "media/seafood/Halibut Fillet/1.jpg"},
    {name:"Halibut Fillet (Miso)", category: "seafood", price: 200, id: "234", img: "media/seafood/Halibut Fillet (Miso)/1.jpg"},
    {name:"Imitation Shark Fin", category: "seafood", price: 200, id: "232", img: "media/seafood/Imitation Shark Fin/1.jpg"},
    {name:"Japan King Crab Filament Stick", category: "seafood", price: 200, id: "233", img: "media/seafood/Japan King Crab Filament Stick/1.jpg"},
    {name:"Japan Tamagoyaki", category: "seafood", price: 200, id: "234", img: "media/seafood/Japan Tamagoyaki/1.jpg"},
    {name:"Japanese Hotate Scallop", category: "seafood", price: 200, id: "235", img: "media/seafood/Japanese Hotate Scallop/1.jpg"},
    {name:"Lobster", category: "seafood", price: 200, id: "236", img: "media/seafood/Lobster/1.jpg"},
    {name:"Mala Seafood", category: "seafood", price: 200, id: "237", img: "media/seafood/Mala Seafood/1.jpg"},
    {name:"Mantis Prawn Meat Fresh", category: "seafood", price: 200, id: "238", img: "media/seafood/Mantis Prawn Meat Fresh/1.jpg"},
    {name:"Nikudo Fish Paste", category: "seafood", price: 200, id: "239", img: "media/seafood/Nikudo Fish Paste/1.jpg"},
    {name:"Patin Slice", category: "seafood", price: 200, id: "240", img: "media/seafood/Patin Slice/1.jpg"},
    {name:"Prawn Meat (L)", category: "seafood", price: 200, id: "241", img: "media/seafood/Prawn Meat (L)/1.jpg"},
    {name:"Prawn Meat (M)", category: "seafood", price: 200, id: "242", img: "media/seafood/Prawn Meat (M)/1.jpg"},
    {name:"Prawn Meat (S)", category: "seafood", price: 200, id: "243", img: "media/seafood/Prawn Meat (S)/1.jpg"},
    {name:"Prawn Meat (XS)", category: "seafood", price: 200, id: "244", img: "media/seafood/Prawn Meat (XS)/1.jpg"},
    {name:"Premium Black Mussels", category: "seafood", price: 200, id: "245", img: "media/seafood/Premium Black Mussels/1.jpg"},
    {name:"Red Snapper Fillet (Miso)", category: "seafood", price: 200, id: "246", img: "media/seafood/Red Snapper Fillet (Miso)/1.jpg"},
    {name:"Saba Fillet", category: "seafood", price: 200, id: "247", img: "media/seafood/Saba Fillet/1.jpg"},
    {name:"Saba Fillet (Fried)", category: "seafood", price: 200, id: "248", img: "media/seafood/Saba Fillet (Fried)/1.jpg"},
    {name:"Saba Fillet (Miso)", category: "seafood", price: 200, id: "249", img: "media/seafood/Saba Fillet (Miso)/1.jpg"},
    {name:"Saba Fillet (Salt Baked)", category: "seafood", price: 200, id: "250", img: "media/seafood/Saba Fillet (Salt Baked)/1.jpg"},
    {name:"Salmon Fillet", category: "seafood", price: 200, id: "251", img: "media/seafood/Salmon Fillet/1.jpg"},
    {name:"Salmon Fillet (uncut)", category: "seafood", price: 200, id: "252", img: "media/seafood/Salmon Fillet (uncut)/1.jpg"},
    {name:"Salmon Head", category: "seafood", price: 200, id: "253", img: "media/seafood/Salmon Head/1.jpg"},
    {name:"Salmon Steak", category: "seafood", price: 200, id: "254", img: "media/seafood/Salmon Steak/1.jpg"},
    {name:"Scallop Sliders", category: "seafood", price: 200, id: "255", img: "media/seafood/Scallop Sliders/1.jpg"},
    {name:"Scampi U7", category: "seafood", price: 200, id: "256", img: "media/seafood/Scampi U7/1.jpg"},
    {name:"Sea Cucumber", category: "seafood", price: 200, id: "257", img: "media/seafood/Sea Cucumber/1.jpg"},
    {name:"Sea Urchin Platter (L)", category: "seafood", price: 200, id: "258", img: "media/seafood/Sea Urchin Platter (L)/1.jpg"},
    {name:"Seafood Tofu", category: "seafood", price: 200, id: "259", img: "media/seafood/Seafood Tofu/1.jpg"},
    {name:"Seasoned Octopus Salad (Mala)", category: "seafood", price: 200, id: "260", img: "media/seafood/Seasoned Octopus Salad (Mala)/1.jpg"},
    {name:"Seasoned Sea Snail Salad (Wasabi)", category: "seafood", price: 200, id: "261", img: "media/seafood/Seasoned Sea Snail Salad (Wasabi)/1.jpg"},
    {name:"Shark Fin (Real) 500g", category: "seafood", price: 200, id: "262", img: "media/seafood/Shark Fin (Real) 500g/1.jpg"},
    {name:"Shime Saba (Vinegered Mackerel)", category: "seafood", price: 200, id: "263", img: "media/seafood/Shime Saba (Vinegered Mackerel)/1.jpg"},
    {name:"Shishamo", category: "seafood", price: 200, id: "264", img: "media/seafood/Shishamo/1.jpg"},
    {name:"Shrimp Paste", category: "seafood", price: 200, id: "265", img: "media/seafood/Shrimp Paste/1.jpg"},
    {name:"Siakap Fillet", category: "seafood", price: 200, id: "266", img: "media/seafood/Siakap Fillet/1.jpg"},
    {name:"Smoked Salmon", category: "seafood", price: 200, id: "267", img: "media/seafood/Smoked Salmon/1.jpg"},
    {name:"Soft Shell Crab", category: "seafood", price: 200, id: "268", img: "media/seafood/Soft Shell Crab/1.jpg"},
    {name:"Sotong (Cleaned) 2kg", category: "seafood", price: 200, id: "269", img: "media/seafood/Sotong (Cleaned) 2kg/1.jpg"},
    {name:"Spicy Clam with Shell", category: "seafood", price: 200, id: "270", img: "media/seafood/Spicy Clam with Shell/1.jpg"},
    {name:"Spicy Crayfish Whole 700g", category: "seafood", price: 200, id: "271", img: "media/seafood/Spicy Crayfish Whole 700g/1.jpg"},
    {name:"Tilapia (Premium Quality)", category: "seafood", price: 200, id: "272", img: "media/seafood/Tilapia (Premium Quality)/1.jpg"},
    {name:"Tobiko Orange (50g)", category: "seafood", price: 200, id: "273", img: "media/seafood/Tobiko Orange (50g)/1.jpg"},
    {name:"Tobiko Orange (500g)", category: "seafood", price: 200, id: "274", img: "media/seafood/Tobiko Orange (500g)/1.jpg"},
    {name:"Tobiko Shrimp Paste", category: "seafood", price: 200, id: "274", img: "media/seafood/Tobiko Shrimp Paste/1.jpg"},
    {name:"Tuna Fillet", category: "seafood", price: 200, id: "275", img: "media/seafood/Tuna Fillet/1.jpg"},
    {name:"Tuna Kelp Roll", category: "seafood", price: 200, id: "276", img: "media/seafood/Tuna Kelp Roll/1.jpg"},
    {name:"Unagi 200g", category: "seafood", price: 200, id: "277", img: "media/seafood/Unagi 200g/1.jpg"},
    {name:"Unagi 310g", category: "seafood", price: 200, id: "278", img: "media/seafood/Unagi 310g/1.jpg"},
    {name:"White Prawn (L)", category: "seafood", price: 200, id: "279", img: "media/seafood/White Prawn (L)/1.jpg"},
    {name:"White Prawn (M)", category: "seafood", price: 200, id: "280", img: "media/seafood/White Prawn (M)/1.jpg"}
    ];

const vegetables = JSON.parse(localStorage.getItem("vegetables")) ||  [
    {name:"Cheese Tofu", category: "vegetables", price: 200, id: "300", img: "media/vegetables/Cheese Tofu/1.jpg"},
    {name:"Edamame", category: "vegetables", price: 200, id: "301", img: "media/vegetables/Edamame/1.jpg"},
    {name:"Edamame (peeled)", category: "vegetables", price: 200, id: "302", img: "media/vegetables/Edamame (peeled)/1.jpg"},
    {name:"French Fries (Crinkle Cut)", category: "vegetables", price: 200, id: "303", img: "media/vegetables/French Fries (Crinkle Cut)/1.jpg"},
    {name:"French Fries (Shoestring)", category: "vegetables", price: 200, id: "304", img: "media/vegetables/French Fries (Shoestring)/1.jpg"}
    ];

const fruits = JSON.parse(localStorage.getItem("fruits")) ||  [
    {name:"Frozen Blueberries", category: "fruits", price: 200, id: "400", img: "media/fruits/Frozen Blueberries/1.jpg"},
    {name:"Frozen Mixed Berries", category: "fruits", price: 200, id: "401", img: "media/fruits/Frozen Mixed Berries/1.jpg"},
    {name:"Frozen Mixed Fruits", category: "fruits", price: 200, id: "402", img: "media/fruits/Frozen Mixed Fruits/1.jpg"},
    {name:"Frozen Rasberries", category: "fruits", price: 200, id: "403", img: "media/fruits/Frozen Rasberries/1.jpg"},
    {name:"Frozen Strawberries", category: "fruits", price: 200, id: "404", img: "media/fruits/Frozen Strawberries/1.jpg"}
    ];

const foodArr = [
    "meat", "seafood", "vegetables", "fruits"
    ];

var totalPrice = 0;

console.log(totalPrice);

function displayLoop() {

    if (meat) { generateFoodList(meat); }
    if (seafood) { generateFoodList(seafood); }
    if (vegetables) { generateFoodList(vegetables); }
    if (fruits) { generateFoodList(fruits); }  
}

const cart = JSON.parse(localStorage.getItem("cart")) || [];

function generateFoodList(typeArr) {

        for (var i = 0; i < typeArr.length; i++) {

        const foodEl = document.getElementById("" + typeArr[i].category + "");
        const cardEl = document.createElement("div");
        cardEl.setAttribute("class", "card");
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
        modalCloseEl.setAttribute("id", typeArr[i].id);
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

function closeModal(id) {

    const close = document.getElementById(id);
    const modalEl = document.getElementById("myModal-"+id);

    close.onclick = function() {
        modalEl.style.display = "none";
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
    updateCart(item);
    console.table(cart);
}

function updateCart(item) {

    const i = cart.length - 1;

    const cartContainerEl = document.getElementById("cart-container");

    const shoppingListEl = document.createElement("div");
    shoppingListEl.setAttribute("class", "shopping-cart-list");
    shoppingListEl.setAttribute("id", "item-"+item);
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
    removeCartEl.setAttribute("id", cart[i].id)
    removeCartEl.setAttribute("onclick", "removeCart(this.id)")
    removeCartEl.innerHTML = "remove"

    cartContainerEl.appendChild(shoppingListEl);
    shoppingListEl.appendChild(miniPictureEl);
    shoppingListEl.appendChild(cartNameEl);
    shoppingListEl.appendChild(cartPriceEl);
    shoppingListEl.appendChild(removeCartEl);

    totalPrice += cart[i].price;

    const price = document.getElementById("total-price")
    price.innerHTML = "Total: RM " + totalPrice;
}

function loadCart() {
    
    console.log('displaying cart');
    console.table(cart);

    const cartContainerEl = document.getElementById("cart-container");

    for (var i = 0; i < cart.length; i++ ) {

    const shoppingListEl = document.createElement("div");
    shoppingListEl.setAttribute("class", "shopping-cart-list");
    shoppingListEl.setAttribute("id", "item-"+cart[i].id);
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
    removeCartEl.setAttribute("id", cart[i].id)
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
    addPriceEl.setAttribute("id", "total-price");
    addPriceEl.innerHTML = "Total: RM " + totalPrice;

    const addButtonEl = document.createElement("button");
    addButtonEl.setAttribute("class", "send-order")
    addButtonEl.setAttribute("onclick", "messageCart()")
    addButtonEl.innerHTML = "SEND ORDER NOW"

    totalPriceEl.appendChild(addPriceEl);
    totalPriceEl.appendChild(addButtonEl);
}

function removeCart(id) {

    console.log('Cart ID: '+ id + ' removed!');

    index = cart.findIndex(x => x.id === id)

    console.log(index);

    const cartItem = document.getElementById("item-"+cart[index].id);
    cartItem.remove();

   totalPrice -= cart[index].price;

    const price = document.getElementById("total-price");
    price.innerHTML = "Total: RM "+totalPrice;

    cart.splice(index, 1);

    saveStorage();
}

function messageCart() {

    var totalPrice = 0;

    const firstName = window.prompt('Enter your FIRST name');

    if (!firstName) {
        return false
    }

    const lastName = window.prompt('Enter your LAST name');

    if (!lastName) {
        return false
    } 

    var message = "";

    for (var i = 0; i < cart.length; i++) {
        totalPrice += cart[i].price;
        message += "\n %0a ===== Item:"+[i+1]+"====="+"\n %0a *Item:* "+cart[i].name+", *Price:* "+cart[i].price+" ";
    }

    const displayMessage = "*First Name:* "+firstName+", *Last Name:* "+lastName+message + "\n %0a ===" + " *Total Price:* " + totalPrice;

    console.log(displayMessage);

    const send = displayMessage;

    window.location.href = 'https://wa.me/60164223018?text='+send;
}

displayLoop();
loadCart();

