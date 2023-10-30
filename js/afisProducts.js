window.addEventListener('DOMContentLoaded', () => {
  const productList = document.getElementById('product-list');
  const filterSelect = document.getElementById('filter-select');
  const sortSelect = document.getElementById('sort-select');

  fetch('/js/products.json')
    .then(response => response.json())
    .then(data => {
      const products = data.products;

      //Functie pentru filtrare si sortare a produselor
      const renderProducts = (filterId = '', sortBy = '') => {
        productList.innerHTML = '';

        let filteredProducts = products.filter(product => {
          if (filterId && product.id !== filterId) {
            return false;
          }
          return true;
        });
        //Sortare Pret Asc/Desc, nume
        if (sortBy === 'price-asc') {
          filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-desc') {
          filteredProducts.sort((a, b) => b.price - a.price);
        } else if (sortBy === 'name-asc') {
          filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === 'name-desc') {
          filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
        }

        filteredProducts.forEach((product, index) => {
          const productElement = document.createElement('div');
          productElement.className = 'product';
          productElement.id = `product-${index}`;
          productElement.addEventListener('click', () => {

            //Afisare Produse din Json
            window.location.href = `produs.html?id=${product.id}`;
          });
          productElement.innerHTML = `
            <div class="catalog_product">
                <a href="produs.html?id=${product.id}">
                    <div>
                        <img src="${product.img1}" alt="404">
                    </div>
                    <div>
                        <h3>
                            ${product.name}
                        </h3>
                    </div>
                    <div>
                        <h4>
                            ${product.price} $
                        </h4>
                    </div>
                </a>
            </div>
          `;
          productList.appendChild(productElement);
        });
      };
      renderProducts();

      // Filtrare produse
      filterSelect.addEventListener('change', (event) => {
        const filterId = event.target.value;
        const sortBy = sortSelect.value;
        renderProducts(filterId, sortBy);
      });
  
      sortSelect.addEventListener('change', (event) => {
        const sortBy = event.target.value;
        const filterId = filterSelect.value;
        renderProducts(filterId, sortBy);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
