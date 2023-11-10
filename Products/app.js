const url = "https://course-api.com/javascript-store-products";
const productsDOM = document.querySelector(".products-center");

// Fetch data

const fetchProducts = async () => {
  productsDOM.innerHTML = `<div class="loading"></div>`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    displayProducts(data);
  } catch (error) {
    productsDOM.innerHTML = `<div class="error">There was an error</div>`;
  }
};

fetchProducts();

// Display data

const displayProducts = (list) => {
  const productList = list
    .map((product) => {
      const { id } = product;
      const { name: title, price } = product.fields;
      const { url: img } = product.fields.image[0];
      const formatPrice = price / 100;
      return `<a href="product.html?id=${id}" class="single-product">
     <img src="${img}" alt="${title}" class="single-product-img img" />
      <footer>
        <h5 class="name">${title}</h5>
        <span class="price">$${formatPrice}</span>
      </footer>
</a>`;
    })
    .join(" ");
  productsDOM.innerHTML = `<div class="products-container"> ${productList}</div>`;
};
