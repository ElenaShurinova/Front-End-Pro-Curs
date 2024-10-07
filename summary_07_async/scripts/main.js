const products = [
  { name: 'Saw', price: 100, category: 'tools' },
  { name: 'Hammer', price: 50, category: 'tools', discount: true },
  { name: 'Ball', price: 20, category: 'sport' },
  { name: 'Shoes', price: 150, category: 'sport', discount: true },
  { name: 'Truck', price: 75, category: 'toys' },
  { name: 'Drill', price: 125, category: 'tools', discount: true },
  { name: 'JigSaw', price: 250, category: 'tools' },
]

// Функция принимает два аргумента: колбэк и время задержки в секундах. Мы будем использовать setTimeout для реализации задержки.

function delayedCallback(callback, delayInSeconds) {
  setTimeout(callback, delayInSeconds * 1000);
}


// 2. Пишем функцию `renderProductCard`. Она будет принимать в аргументах объект с данными товара (название, цена, категория), и должна рисовать карточку товара. Карточка - это div, которому нужно добавить класс `productCard`. В нем нужно разместить заголовок h3 с названием товара, параграф с категорией, и параграф с ценой. Также нужно добавить две кнопки: "В корзину", и "Убрать" - то есть добавление в корзину, и удаление из корзины. Функция должна возвращать созданный div (т.е. НЕ встраивать его в DOM).

function renderProductCard(product) {
  // Создаем основной div
  const card = document.createElement('div');
  card.className = 'productCard';

  // Создаем заголовок h3 с названием товара
  const title = document.createElement('h3');
  title.textContent = product.name;
  card.append(title);

  // Создаем параграф с категорией
  const category = document.createElement('p');
  category.textContent = `product.category`;
  card.append(category);

  // Создаем параграф с ценой
  const price = document.createElement('p');
  price.textContent = `product.price`;
  card.append(price);


  const addButton = document.createElement('button');
  addButton.textContent = 'В корзину';
  addButton.onclick = () => addToCart(product.name);
  card.appendChild(addButton);


  const removeButton = document.createElement('button');
  removeButton.textContent = 'Убрать';
  removeButton.onclick = () => removeFromCart(product.name);
  card.appendChild(removeButton);

  return card;
}

// 3. Пишем функцию `renderProducts`. Эта функция примет массив товаров. Ее задача - пройтись по массиву, для каждого элемента вывать функцию отрисовки товара, и добавить карточку товара в div c классом `productsContainer`.
const container = document.querySelector('.productsContainer');
function renderProducts(products) {
 
  products.forEach(product => {
    const card = renderProductCard(product);
    container.append(card);
  });
}

renderProducts (products);

// 4. Реализуем логику корзины. Нам нужно добавить возможность добавления товаров в корзину, и удаления их из нее. Корзиной будет служить объект (создадим его в глобальной области видимости). У этого объекта, ключами будут служить имена товаров, а значениями - количество этих товаров, добавленных в корзину. По умолчанию, корзина пуста. Напишем функции `addtoCart`, `removeFromCart` - они будут принимать в аргументах название товара, который мы хотим добавить. И их задача - соответственно, добавить/убрать единицу этого товара в/из корзины. Функция `removeFromCart` в идеале должна удалять свойства из объекта (к обсуждению).
// const cart = {};

// function addToCart(productName) {
  // Если в корзине (cart) еще нет свойства с ключом равным productName,
  // то добавляем это свойство, а значение ему ставим 1
  // Если уже есть это свойство - то его значение увеличиваем на 1
// }

const cart = {};

// Функция для добавления товара в корзину
function addToCart(productName) {
  if (cart[productName]) {
    cart[productName]++;
  } else {
    cart[productName] = 1;
  }
  console.log(`Товар ${productName} добавлен в корзину. Количество: ${cart[productName]}`);
}

function removeFromCart(productName) {
  if (cart[productName]) {
    if (cart[productName] === 1) {
      delete cart[productName];
    }
    else {
      cart[productName] -= 1;
    }
  }
}

// Пример использования
addToCart('Товар 1');
addToCart('Товар 1');
addToCart('Товар 2');
removeFromCart('Товар 1');
removeFromCart('Товар 2');
removeFromCart('Товар 2');  // Попытка удалить товар, которого нет в корзине

// 5. Добавляем обработчики на кнопки "В корзину", "Убрать". Для этого, нам понадобится изменить функцию `renderProductCard`.

const addButton = document.createElement('button');
addButton.textContent = 'В корзину';
addButton.onclick = () => {
  addToCart(product.name);
  document.querySelector('.orderContainer').classList.remove('hidden'); // Показываем блок отправки заказа
};


// 6. Пришла пора отправлять заказ. В разметке, есть блок отправки заказа (div.orderContainer). Нужно доработать функции `addToCart`. Чтобы при нажатии на `addToCart`, мы бы показывали блок отправки заказа (убирали бы у него класс `hidden`).


// 7. Теперь имитируем отправку заказа. Добавим обработчик на кнопку отправки заказа. Нужно спустя 3 секунды после нажатия на кнопку, скрыть блок отправки заказа, и вывести в консоль сообщение "Order had been sent!".
document.querySelector('.orderContainer .sendOrder').addEventListener('click', () => {
  setTimeout(() => {
    document.querySelector('.orderContainer').classList.add('hidden');
    console.log("Order had been sent!");
  }, 3000);
});


// 8. Задача "со звездочкой". Нужно каждые 2 секунды подсвечивать какую-то карточку товара. Для "подсветки" применяем класс `highlighted`. Карточку определяем случайным образом. Задача к обсуждению.

let higlightedCard = null;

function higlightCard() {
  if (higlightedCard !== null) {
    const cardEl = productsContainer.querySelector(`div:nth-child(${higlightedCard})`);
    cardEl.classList.remove('highlighted');
  }
  const cardNum = Math.round(Math.random() * 10) + 1;
  const cardEl = productsContainer.querySelector(`div:nth-child(${cardNum})`);
  cardEl.classList.add('highlighted');
  higlightedCard = cardNum;
}

setInterval( higlightCard, 2000);
























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































