// Retrieve cart items from localStorage
const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Get the cart items element
const cartItemsElement = document.getElementById('cart-items');

// Get the clear button element
const clearButton = document.getElementById('clear-button');

// Get the total price element
const totalPriceElement = document.getElementById('total-price');

// Get the checkout button element
const checkoutButton = document.getElementById('checkout-button');

//Calcularea pretului total
const calculateTotalPrice = () => {
  const totalPrice = cartItems.reduce((total, item) => {
    const itemPrice = item.price || 1; 
    const itemQuantity = item.quantity || 1;
    return total + (itemPrice * itemQuantity);
  }, 0);
  totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
};

//Eliminare produse din cos
const clearCart = () => {
  cartItems.length = 0;
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  cartItemsElement.innerHTML = '<p>Your cart is empty.</p>';
  calculateTotalPrice();
};

// Afisarea produselor daca sunt in cos
if (cartItems.length > 0) {
  cartItems.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.innerHTML = `
      <div class="shopping_cart__product">
        <div class="shopping_cart__product_image">
        <img src="${item.img1}" alt="404">
        </div>
        <div class="shopping_cart__product_description">
            <div>
                <h2>${item.name}</h2>
            </div>
            <div> 
                <p>${item.price} $</p>
            </div>
        </div>
        <div class="shopping_cart__product_cantity">
        <label for="quantity-${item.id}">Quantity:</label>
        <input type="number" id="quantity-${item.id}" value="${item.quantity}" min="1" max="10">
        </div>
    </div>
    <br>
    `;
    cartItemsElement.appendChild(itemElement);

    //Cantitatea produselor
    const quantityInput = document.getElementById(`quantity-${item.id}`);
    quantityInput.addEventListener('input', (event) => {
      const newQuantity = parseInt(event.target.value, 10);
      if (!isNaN(newQuantity)) {
        item.quantity = newQuantity;
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        calculateTotalPrice();
      }
    });
  });
} else {
  //Mesajul in caz de cosul este gol
  cartItemsElement.innerHTML = '<p>Your cart is empty.</p>';
}

//Sa fie standart 1 produs
const quantityInputs = document.querySelectorAll('[id^="quantity-"]');
quantityInputs.forEach(input => (input.value = 1));

//Butonul de eliminare produse
clearButton.addEventListener('click', clearCart);

//Spre pagina de achitare
checkoutButton.addEventListener('click', () => {
  window.location.href = 'payment.html';
});

calculateTotalPrice();