function renderProduct(product){
  const productCard = document.createElement('div');
  productCard.classList.add('productCard');

  productCard.addEventListener('click', (event) => {
      productCard.classList.toggle('productCardHighlighted');
  });

  const productTitle = document.createElement('h3');
  productTitle.textContent = product.name;
  productTitle.classList.add('productTitle');

  const productPrice = document.createElement('p');
  productPrice.textContent = product.price;
  productPrice.classList.add('productPrice');

  const productCategory = document.createElement('p');
  productCategory.textContent = product.category;
  productCategory.classList.add('productCategory');

  const productImg = document.createElement('img');
  productImg.src = !!product.img ? product.img : '';
  productImg.classList.add('productImg');

  const productDescription = document.createElement('p');
  productDescription.textContent = product.description;
  productDescription.classList.add('productDescription');

  productCard.append(productImg, productTitle, productPrice, productCategory, productDescription);

  return productCard;
}

// 1. Пишем первый сетевой запрос. Нужно обратиться к адресу `https://dummyjson.com/products/categories`. В ответ придет JSON с массивом категорий товаров. Нужно дождаться результата, преобразовать его в JS-объект, дождаться  результата преобразования, и вывести в консоль.



// 2. Добавьте на кнопку с текстом "Request products" обработчик события клика, который запустит запрос по адресу `https://dummyjson.com/products`. Этот запрос вернет JSON, который содержит объект с данными товаров. Преобразовать его в JS-объект, дождаться результата, и вывести результат в консоль

const newButton = document.getElementById('requestProductsBtn');
newButton.addEventListener(
  'click',
  () => {
    fetch('https://dummyjson.com/products')
      .then( function(response) {
        console.log('Got response', response)
        return response.json();
      })
      .then ( function(parsed) {
        console.log(parsed);
        return parsed.limit;
      });
  }
);

// Поработаем с результатами плотнее. Доработайте решение задачи 2, чтобы в консоль выводился не весь объект, а длина массива `products` (это свойство этого объекта).

  // Найти кнопку по ID
  const button = document.getElementById('request-products-btn');

  // Добавить обработчик события клика
  button.addEventListener('click', () => {
      // Выполнение сетевого запроса
      fetch('https://dummyjson.com/products')
          .then(response => {
              // Преобразование ответа в JSON
              return response.json();
          })
          .then(data => {
              // Вывод длины массива products в консоль
              console.log(data.products.length);
          })
        
  });

//   Как это используется? При обработке результатов запроса, если статус вне диапазона 200-299 (или `!response.ok`), мы можем, например, открыть модальное окно. Приличные сервисы обычно кроме нехорошего статуса могут вернуть и JSON с пояснением причины, так что это тоже может быть использовано для того чтобы полнее обрисовать пользователю картину.

//
fetch('https://BAD_URL_DO_NOT_COPY.com')
   .then(resp => {
      if (!resp.ok) {
         throw new Error('Something went wrong in the request!');
      }
      else return resp.json();
   })
   .then(result => console.log('Everything is OK!', result));


// 1. Написать блок кода, который будет обращаться к адресу `https://dummyjson.com/products`, и выведет в консоль НТТР-статус ответа.
// 2. Доработать нашу функцию из п.4 предыдущего блока практики - теперь она, в случае нехороших статусов, должна уведомлять вызывающий код о нештатной ситуации (пусть это будет ошибка с тестом "Wrong request, try again!"). Задача к обсуждению.

function makeJsonRequest( urlAddress) {
  return new Promise( (resolveFinal, rejectFinal) => {
    // execute async task
    fetch(urlAddress)
      .then( response => {
        if (!response.ok) {
          rejectFinal( new Error('Something went wrong') );
        } else {
          return response.json();
        }
      })
      .then( parsed => {
        resolveFinal(parsed);
      })
  } )
}

makeJsonRequest('https://dummyjson.com/http/404/Hello_Peter')
  .then( res => console.log(res))
  .catch( error => console.log('Wow', error));


  /// 'https://dummyjson.com/products/add'

const newProduct = {
  title: 'New Product', 
  price: 100500
}
fetch('https://dummyjson.com/products/add', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(newProduct)
  
  
  
})
.then(res => res.json())
.then(console.log);

// Отправить PUT-запрос на адрес 'https://dummyjson.com/products/add'. В теле запроса передать сериализованный объект newProduct


