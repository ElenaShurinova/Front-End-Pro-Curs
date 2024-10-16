// 1. Отправить get-запрос по ссылке https://dummyjson.com/products и вывести массив с продуктами в консоль

// Функция для выполнения GET-запроса и получения продуктов
fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(json => renderProducts(json.products))

    const productsContainer = document.querySelector('.products_container');

const renderProducts = arr => {
    arr.forEach(({ title, price }) => {
        const cardElem = document.createElement('div');
        const titleElem = document.createElement('p');
        const priceElem = document.createElement('p');

        titleElem.innerText = `Title: ${title}`;
        priceElem.innerText = `Price: ${price}$`;

        cardElem.append(titleElem, priceElem);
        productsContainer.append(cardElem);
    })
}

