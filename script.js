// ==================== HERO IMAGE SLIDER ====================

const sliderOne = document.querySelector(".slider-one");
const sliderTwo = document.querySelector(".slider-two");

const restaurantImages = [
    "images/restaurant.jpg",
    "images/restaurant2.jpg",
    "images/restaurant3.jpg",
    "images/restaurant4.jpg"
];

let currentImage = 0;
let showingFirst = true;

function changeRestaurantImage() {

    currentImage++;

    if (currentImage >= restaurantImages.length) {
        currentImage = 0;
    }

    if (showingFirst) {

        sliderTwo.style.backgroundImage =
            `url("${restaurantImages[currentImage]}")`;

        sliderTwo.style.opacity = "1";
        sliderOne.style.opacity = "0";

    } else {

        sliderOne.style.backgroundImage =
            `url("${restaurantImages[currentImage]}")`;

        sliderOne.style.opacity = "1";
        sliderTwo.style.opacity = "0";
    }

    showingFirst = !showingFirst;
}

setInterval(changeRestaurantImage, 5000);

// ==================== MOBILE NAVIGATION ====================

// ==================== MOBILE NAVIGATION ====================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


// Open / close menu
menuToggle.addEventListener("click", (event) => {

    event.stopPropagation();

    navLinks.classList.toggle("active");

});


// Close menu when a navigation link is clicked
navLinks.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// Close menu when clicking outside
document.addEventListener("click", (event) => {

    if (
        navLinks.classList.contains("active") &&
        !navLinks.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {

        navLinks.classList.remove("active");

    }

});

// ==================== SHOPPING CART ====================

const addButtons = document.querySelectorAll(".add-btn");
const cartItemsContainer = document.querySelector("#cart-items");
const cartCount = document.querySelector("#cart-count");
const cartTotal = document.querySelector("#cart-total");
const clearCartButton = document.querySelector("#clear-cart");
const orderCartButton = document.querySelector("#order-cart");

let cart = [];


// Add item to cart
addButtons.forEach(button => {

    button.addEventListener("click", () => {

        const name = button.dataset.name;
        const price = Number(button.dataset.price);

        const existingItem = cart.find(item => item.name === name);

        if (existingItem) {

            existingItem.quantity++;

        } else {

            cart.push({
                name: name,
                price: price,
                quantity: 1
            });

        }

        updateCart();

    });

});


// Update cart
function updateCart() {

    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {

        cartItemsContainer.innerHTML =
            '<p class="empty-cart">Your cart is empty.</p>';

        cartCount.textContent = "0";
        cartTotal.textContent = "₹0";

        return;
    }


    let total = 0;
    let totalItems = 0;


    cart.forEach((item, index) => {

        total += item.price * item.quantity;
        totalItems += item.quantity;


        const cartItem = document.createElement("div");

        cartItem.className = "cart-item";

        cartItem.innerHTML = `
            <div>
                <h3>${item.name}</h3>
                <p>₹${item.price} × ${item.quantity}</p>
            </div>

            <div class="cart-controls">

                <button class="quantity-btn" onclick="decreaseQuantity(${index})">
                    −
                </button>

                <span>${item.quantity}</span>

                <button class="quantity-btn" onclick="increaseQuantity(${index})">
                    +
                </button>

                <button class="remove-btn" onclick="removeItem(${index})">
                    Remove
                </button>

            </div>
        `;

        cartItemsContainer.appendChild(cartItem);

    });


    cartCount.textContent = totalItems;
    cartTotal.textContent = `₹${total}`;
}


// Increase quantity
function increaseQuantity(index) {

    cart[index].quantity++;

    updateCart();
}


// Decrease quantity
function decreaseQuantity(index) {

    cart[index].quantity--;

    if (cart[index].quantity <= 0) {

        cart.splice(index, 1);

    }

    updateCart();
}


// Remove item
function removeItem(index) {

    cart.splice(index, 1);

    updateCart();
}


// Clear cart
clearCartButton.addEventListener("click", () => {

    cart = [];

    updateCart();

});

// ==================== WHATSAPP ORDER ====================

orderCartButton.addEventListener("click", () => {

    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    let message = "Hello Spice Garden, I would like to order:%0A%0A";

    let total = 0;

    cart.forEach((item, index) => {

        const itemTotal = item.price * item.quantity;

        total += itemTotal;

        message += `${index + 1}. ${item.name} × ${item.quantity} = ₹${itemTotal}%0A`;

    });

    message += `%0ATotal: ₹${total}%0A%0AThank you.`;

    const phoneNumber = "916300530178";

    const whatsappURL =
        `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappURL, "_blank");

});