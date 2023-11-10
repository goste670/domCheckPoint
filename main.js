let cart = [];
let total = 0;

function addItemToCart(itemId) {
    const itemName = document.querySelector(`.item:nth-child(${itemId}) p:nth-child(2)`).textContent;
    const itemImage = document.querySelector(`.item:nth-child(${itemId}) img`).src;

    const item = {
        id: itemId,
        name: itemName,
        price: itemId * 5,
        image: itemImage
    };

    cart.push(item);
    total += item.price;
    updateCartDisplay();
    updateCartCounter();
}

function updateCartCounter() {
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = cart.length;
}

function updateCartDisplay() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    total = 0;

    cart.forEach((item) => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = item.image;
        li.appendChild(img);

        const itemDetails = document.createElement("div");
        itemDetails.classList.add("item-details");

        const itemName = document.createElement("p");
        itemName.textContent = item.name;

        const itemPrice = document.createElement("p");
        itemPrice.textContent = `${item.price} DH`;

        itemDetails.appendChild(itemName);
        itemDetails.appendChild(itemPrice);
        li.appendChild(itemDetails);

        cartItems.appendChild(li);
        total += item.price;
    });

    const totalElement = document.querySelector(".total");
    totalElement.textContent = `Total : ${total} DH`;
}

function clearCart() {
    cart = [];
    updateCartDisplay();
    updateCartCounter();
}

function checkout() {
    if (cart.length > 0) {
        alert("Achat effectué ! Montant total : " + total + " DH");
        clearCart();
    } else {
        alert("Le panier est vide.");
    }
}

function toggleCart() {
    const cartContainer = document.getElementById("cart-container");
    cartContainer.classList.toggle("open");
}