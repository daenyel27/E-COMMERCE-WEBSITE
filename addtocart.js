const products = [
    { id: 0, image: "hp14.png", title: 'HP 14', price: 18495 },
    { id: 1, image: "hp15.png", title: 'HP 15', price: 23995 },
    { id: 2, image: "hp250.png", title: 'HP 250 G8', price: 24773 },
    { id: 3, image: "hpvictus.png", title: 'HP Victus 15', price: 44495 },
    { id: 4, image: "hpenvy.png", title: 'HP Envy x360', price: 48995 },
    { id: 5, image: "aspire3.png", title: 'ACER Aspire 3', price: 25649 },
    { id: 6, image: "aspirelite14.png", title: 'ACER Aspire Lite 14', price: 26599 },
    { id: 7, image: "acergo.png", title: 'ACER Aspire Go', price: 28499 },
    { id: 8, image: "aspirelite15.png", title: 'ACER Aspire Lite 15', price: 32299 },
    { id: 9, image: "aspire7.png", title: 'ACER Aspire 7', price: 45599 },
    { id: 10, image: "modern15.png", title: 'MSI MODERN 15', price: 34999 },
    { id: 11, image: "gf63.png", title: 'MSI GF63 Thin 15', price: 44999 },
    { id: 12, image: "prestige14.png", title: 'MSI PRESTIGE 14 AI Evo', price: 54999 },
    { id: 13, image: "cyborg15.png", title: 'MSI CYBORG 15', price: 72999 },
    { id: 14, image: "katanaa15.png", title: 'MSI KATANA A15', price: 74999 },
    { id: 15, image: "spark20.png", title: 'TECNO SPARK 20', price: 4499 },
    { id: 16, image: "spark20c.png", title: 'TECNO SPARK 20C', price: 6299 },
    { id: 17, image: "pova6pro.png", title: 'TECNO POVA 6 Pro', price: 11999 },
    { id: 18, image: "camon30.png", title: 'TECNO CAMON 30 Pro 5G', price: 19999 },
    { id: 19, image: "phantomx2.png", title: 'TECNO PHANTOM X2 Pro', price: 42999 },
    { id: 20, image: "c40.png", title: 'POCO C40', price: 5990 },
    { id: 21, image: "m3.png", title: 'POCO M3', price: 6990 },
    { id: 22, image: "m5.png", title: 'POCO M5', price: 9999 },
    { id: 23, image: "f2pro.png", title: 'POCO F2 Pro', price: 14999 },
    { id: 24, image: "f5pro.png", title: 'POCO F5 Pro', price: 20999 },
    { id: 25, image: "hot20s.png", title: 'INFINIX HOT 20s', price: 5499 },
    { id: 26, image: "hot30i.png", title: 'INFINIX HOT30i', price: 5599 },
    { id: 27, image: "note30.png", title: 'INFINIX NOTE 30', price: 7990 },
    { id: 28, image: "zeroultra.png", title: 'INFINIX ZERO ULTRA', price: 11199 },
    { id: 29, image: "gt20pro.png", title: 'INFINIX GT20 Pro', price: 15999 },
];

const rootElement = document.getElementById('root');
const cartItemElement = document.getElementById('cartItem');
const totalElement = document.getElementById('total');
const countElement = document.getElementById('count');
let cart = [];

// Function to format price
function formatPrice(price) {
    return price.toLocaleString();
}

// Function to display products
function displayProducts() {
    rootElement.innerHTML = products.map((product, index) => `
        <div class='box'>
            <div class='img-box'><img class='images' src=${product.image}></div>
            <div class='bottom'>
                <p>${product.title}</p>
                <h2>₱${formatPrice(product.price)}.00</h2>
                <button onclick='addToCart(${index})'>Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// Function to display cart
function displayCart() {
    countElement.innerText = cart.length;
    if (cart.length === 0) {
        cartItemElement.innerHTML = "Your cart is empty";
        totalElement.innerHTML = "₱0.00";
    } else {
        let total = 0;
        cartItemElement.innerHTML = cart.map((item, index) => {
            total += item.price;
            return `
                <div class='cart-item'>
                    <div class='row-img'><img class='rowimg' src=${item.image}></div>
                    <p>${item.title}</p>
                    <h2>₱${formatPrice(item.price)}.00</h2>
                    <i class='fa-solid fa-trash' onclick='deleteFromCart(${index})'></i>
                </div>
            `;
        }).join('');
        totalElement.innerHTML = `₱${formatPrice(total)}.00`;
    }
}

// Function to add to cart
function addToCart(index) {
    cart.push(products[index]);
    displayCart();
}

// Function to delete from cart
function deleteFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

// Function to handle checkout
function checkout() {
    const nameInput = document.getElementById('name').value.trim();
    const emailInput = document.getElementById('email').value.trim();
    const addressInput = document.getElementById('address').value.trim();
    if (cart.length === 0) {
        alert("Your cart is empty. Add items to the cart before checking out.");
    } else if (nameInput === '') {
        alert("Please enter your name before checking out.");
    } else if (emailInput === '') {
        alert("Please enter your email before checking out.");
    } else if (addressInput === '') {
        alert("Please enter your address before checking out.");
    } else {
        alert("Thank you for your purchase!");
        cart = [];
        displayCart();
    }
}

// Event listener for checkout button
document.querySelector('.checkout-btn').addEventListener('click', checkout);

// Initial display of products
displayProducts();