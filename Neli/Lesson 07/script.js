// 1. В div.products_container добавить карточку продукта (div) c 3 параграфами (title, description, price)

const product = {
    id: 1,
    title: 'Apple',
    price: 500,
    description: 'A very tasty apple',
    in_stock: true
}

const productsContainer = document.querySelector('.products_container');

const cardElem = document.createElement('div');
const titleElem = document.createElement('p');
const priceElem = document.createElement('p');
const descriptionElem = document.createElement('p');
const instockElem = document.createElement('p');
const addressElem = document.createElement('p');

titleElem.innerText = `Title: ${product.title}`;
descriptionElem.innerText = `Description: ${product.description}`;
priceElem.innerText = `Price: ${product.price}$`;
instockElem.innerText = `In stock: ${product.in_stock ? 'YES' : 'NO'}`;
addressElem.innerText = `Address: ${product.address.city} (${product.address.country})`;

cardElem.classList.add('product_card');

cardElem.append(titleElem, descriptionElem, priceElem, instockElem, addressElem);
productsContainer.append(cardElem);

// Добавить карточке парграф: 'Customers: Anna, Ivan, Anton' (join)