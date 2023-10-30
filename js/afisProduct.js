function myFunction(smallImg){
  var fullImg =document.getElementById("imageBox");
  fullImg.src=smallImg.src;
}

window.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  //Afisarea produsului selectat din Json
  fetch('/js/products.json')
    .then(response => response.json())
    .then(data => {
      const products = data.products;
      const clickedProduct = products.find(product => product.id === id);

      if (clickedProduct) {
        const productList = document.getElementById('product-list');
        const productElement = document.createElement('div');
        productElement.className = 'product';

        let carouselImages = '';
        if (Array.isArray(clickedProduct.images)) {
          carouselImages = clickedProduct.images.map(image => `
            <div>
                <img src="${image}" alt="404" onclick="myFunction(this)">
            </div>
          `).join('');
        }

        productElement.innerHTML = `
          <div class="product_show__img">
            <div class="product_show__img_focus">
                <img id="imageBox" src="${clickedProduct.img1}" alt="">
            </div>
            <div class="product_show__img_content">
                  <div>
                      <img src="${clickedProduct.img1}" alt="" onclick="myFunction(this)">
                  </div>
                  <div>
                      <img src="${clickedProduct.img2}" alt="" onclick="myFunction(this)">
                  </div>
                  <div>
                      <img src="${clickedProduct.img3}" alt="" onclick="myFunction(this)">
                  </div>
                  <div>
                      <img src="${clickedProduct.img4}" alt="" onclick="myFunction(this)">
                  </div>
              </div>
          </div>
          <div>
            <div class="product_show__info">
                <div class="product_show__name">
                    <h3>
                        ${clickedProduct.name}
                    </h3>
                </div>
                <div class="product_show__price">
                    <h3>
                        ${clickedProduct.price} $
                    </h3>
                </div>
            </div>
            <div class="product_show__add_to_cart">
                <a href="#" id="addToCartBtn">
                    <h4>
                        Add to Cart
                    </h4>
                </a>
            </div>
          </div>
        `;

        productList.appendChild(productElement);

        //Buton adaugare produs in cart si trimitere pe pagina cartului
        const addToCartBtn = document.getElementById('addToCartBtn');
        addToCartBtn.addEventListener('click', () => {
          addToCart(clickedProduct);
          window.location.href = 'cart.html'; 
        });
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

//Adaugarea produsului in cart si local storage
function addToCart(product) {
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  cartItems.push(product);
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}