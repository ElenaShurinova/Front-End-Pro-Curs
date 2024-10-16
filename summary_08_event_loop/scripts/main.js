const products = [
  { name: 'Saw', price: 100, category: 'tools' },
  { name: 'Hammer', price: 50, category: 'tools', discount: true },
  { name: 'Ball', price: 20, category: 'sport' },
  { name: 'Shoes', price: 150, category: 'sport', discount: true },
  { name: 'Truck', price: 75, category: 'toys' },
  { name: 'Drill', price: 125, category: 'tools', discount: true },
  { name: 'JigSaw', price: 250, category: 'tools' },
]

// 1. Пишем сетевой запрос. Наша задача - обратиться к "бэку" по адресу `https://dummyjson.com/products/categories` GET-запросом, и вывести в консоль результат в "удобоваримом" виде (результат нам возвращается в виде JSON). Этот запрос нам вернет массив с категориями товаров.

// fetch('https://dummyjson.com/products/categories')
//   .then(response => response.json())
//   .then(data => {
//     console.log('Categories:', data);
//   })
//   .catch(error => {
//     console.error('Error ', error);
//   });

  // 2. Оборачиваем этот запрос в функцию `getCategories`. То есть у нас будет АСИНХРОННАЯ функция, которая должна сделать запрос по адресу из п.1, дождаться результата, преобразовать результат в JSON, дождаться результата, и потом дать возможность вызывающему коду работать с этим результатом.
  function getProducts(categoryName) {
    return new Promise( (resolve, reject) => {
      fetch(`https://dummyjson.com/products/${ !categoryName ? '' : `category/${categoryName}`}`)
        .then( resp => resp.json() )
        .then( result => resolve(result) )
    });
  }
 
  function getProducts(categoryName) {
    return new Promise( (resolve, reject) => {
      fetch(`https://dummyjson.com/products/${ !categoryName ? '' : `category/${categoryName}`}`)
        .then( resp => resp.json() )
        .then( result => resolve(result) )
    });
  }
  
  function getCategories() {
    return new Promise( (resolve, reject) => {
      fetch('https://dummyjson.com/products/categories')
        .then( response => response.json() )
        .then( parsed => resolve(parsed) );
    });
  }
  const categoriesSelect = document.querySelector('#categoriesSelect');
  
  categoriesSelect.addEventListener('change', (event) => {
    getProducts(event.target.value)
      .then( res => console.log(res) );  
  });
  
  getCategories().then( result => {
    result.forEach(element => {
      const optionEl = document.createElement('option');
      optionEl.value = element.slug;
      optionEl.textContent = element.name;
      categoriesSelect.append(optionEl);
    });
  });
    // 3. Добавляем в разметку ПЕРЕД блоком `.productsContainer` компонент `select` (выпадающее меню). Нужно заполнить этот `select` опциями (`<option value='value'>option_text</option>`), которые нам пришли с "бэка" в предыдущей задаче. То есть, пройтись по массиву результатов, для каждого создать элемент `option`, и добавить его в наш `select`. В качестве `value` используем значение, в качестве `option_text` используем то же.
    
    // 4. Пишем функцию `getProducts`. В качестве аргумента, она принимает категорию товаров. Она должна сделать запрос по адресу `https://dummyjson.com/products/category/ИМЯ_КАТЕГОРИИ`. В ответ нам придет список товаров этой категории. Наша задача - отрендерить их в списке товаров (`div.productsContainer`).  ВАЖНО! Список товаров перед рендерингом надо очистить! Товары рендерим с помощью функции `renderProduct`, она умеет создавать DOM-элемент, но нужно его еще добавить в контейнер.

// 5. Дорабатываем функцию `getProducts`. Нужно добавить рассмотрение случая, когда у нас не задана категория (хотим запросить все товары). Нужно сделать так, чтобы, если в аргументе не передана категория, то запрос шел на адрес `https://dummyjson.com/products`

// 6. Добавляем обработчик события `change` на наш `select`. При событии, нам нужно вызывать функцию из п.12 с соответствующей категорией - т.е. мы рисуем список товаров выбранной категории

const newProduct = {
  name: 'New product',
  price: 100
}
fetch('https://dummyjson.com/products/add', {
  method: 'POST',
  
  body: JSON.stringify(newProduct) 
})
.then(response => (!response.ok) 
   
.then(data => {
  console.log('Success:', data); 
})

});

