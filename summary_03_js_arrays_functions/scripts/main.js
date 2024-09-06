// Здесь будем писать код

const numbers = [1,2,3,5,9,7,11,13,9,17,18,9,101,191];

const strings = ['this', 'is', 'an', 'array', 'of', 'simple', 'strings'];

const products = [
  { name: 'Saw', price: 100, category: 'tools' },
  { name: 'Hammer', price: 50, category: 'tools' },
  { name: 'Ball', price: 20, category: 'sport' },
  { name: 'Shoes', price: 150, category: 'sport' },
  { name: 'Truck', price: 75, category: 'toys' }
]

// 1. Пристрелочная. Пишем функцию `getShortWords`, она принимает на вход массив 
// строк `strings` и максимальную длину `maxLength`. Нужно вернуть массив, который 
// содержит только те строки массива 
// `strings`, чья длина меньше либо равна `maxLength`.



// function getShortWords(strings, maxLength) {
//   const result =[]
//   for (let i = 0; i < strings.length; i++ ){
//     if (strings[i].length <= maxLength)
//       result.push (strings[i])
//   }
// return result
// }


// console.log(getShortWords(['this', 'is', 'an', 'array', 'of', 'strings'], 4));

// // 2. Теперь напишем функцию `filterByCategory`, она также примет 
// // массив товаров, и строку с именем категории товара. 
// // Нужно вернуть массив с товарами указанной категории

// function filterByCategory(productsArray, categoryName) {
//   const result = [];
//   for (let i = 0; i < productsArray.length; i++) {
//     if (productsArray[i].category === categoryName) {
//       result.push(productsArray[i])
//     }
//   }
// }
// console.log(filterByCategory(products, 'tools'));


// 3. Пишем функцию `filterProductsByPrice`. Она должна принять 
// в аргументах массив товаров (объекты, у которых есть свойства 
  // `name`, `price`, `category`), и два числа - "цена от" и "цена до".
  //  Функция должна вернуть массив товаров, 
// у которых цена попадает в указанный диапазон

// function filterProductsByPrice(producsArray, priceFrom, priceTo) {
//   let result = [];
//   for (let i = 0; i < producsArray.length; i++) {
//       if (producsArray[i].price >= priceFrom && producsArray[i].price <= priceTo) {
//           result.push(producsArray[i]);
//       }
//   }
//   return result;
// }

// console.log(filterProductsByPrice(products, 155, 160));


// 4. Усложним задачу. Напишем функцию `filterByProperty`. Она 
// должна принимать массив товаров, имя свойства по которому мы 
// будем искать, и значение свойства. 
// Нужно вернуть товары, которые удовлетворяют условию. Например:

// function filterByProperty(productsArrya, propName, propValue) {
//   let result = [];
//   for (let i = 0; i < productsArrya.length; i++) {
//       if (productsArrya[i][propName] === propValue) {
//           result.push(productsArrya[i]);
//       }
//   }
//   return result;
// }


// console.log(filterByProperty(products, 'name', 'Saw'));
// console.log(filterByProperty(products, 'category', 'tools'));

// 5. Напишем свою реализацию метода перебора массива. 
// Нужно написать функцию `customForEach`, которая будет принимать 
// в аругментах массив, и функцию-колбэк. Нужно пройти по массиву,
//  и вызвать функцию-колбэк для каждого элемента массива 
// (то есть, вызвать ее, и передать в аргументах элемент массива).

// function customForEach(array, callback) {
 
//   for (let i = 0; i < array.length; i++) {
//       callback(array[i], i, array);
//   }
// }

// customForEach(arr, function(element, index, array) {
//   console.log('ELEM', element, 'INDEX', index, 'MASIV', array);
// });

// 6. Усложним - напишем свою реализацию метода фильтрации массива. 
// Нужно написать функцию `customFilter`, которая будет принимать в 
// аругментах массив, и функцию-колбэк, и должна вернуть новый массив, 
// который содержит только те элементы, 
// для которых функция-колбэк возвращает `true`

function customFilter (array,filtrCondition){
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if(filtrCondition(array[i])){
      result.push (array[i]);
    }

  }
  return result; 
}
console.log(customFilter([1,2,3], function(elem){return elem % 2 === 0}));

// 7. Пишем функцию `dropLastElems`, она должна принять в аргументах 
// массив, и число N. 
// И она должна удалить из массива N элементов с конца.

function dropLastElems(array,count){

}


// 8. Пишем функцию `replaceWord`. Она примет на вход массив строк, 
// строку которую мы хотим заменить, и строку, на которую мы хотим 
// заменить. 
// И должна заменить в массиве все вхождения строки.


function replaceWord(array, oldWord, newWord) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === oldWord) {
      result.push(newWord);
    } else {
      result.push(array[i]);
    }
  }
  return result;
}
console.log(replaceWord(['this', 'is', 'an', 'array'], 'an', 'the'));

// 9. Написать функцию `getProductNamesObj`. Она примет массив товаров, 
// и должна вернуть ОБЪЕКТ, в котором ключами будут имена товаров, 
// а значениями - цены этих товаров.

function getProductNamesObj(products) {
  const obj = {};
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    obj[product.name] = product.price;
  }
  return obj;
}


console.log(getProductNamesObj(products));


// 10. Написать функцию `countProductsByCategory`. Она также принимает 
// на вход массив товаров (объектов со свойствами `name`, `category`). 
// И должна вернуть ОБЪЕКТ, в котором ключами будут уникальные имена 
// категорий, 
// а значениями - количество товаров этой категории.
function countProductsByCategory(products) {
  const categoryCount = {};
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const category = product.category;
    
    if (categoryCount[category] === undefined) {
      categoryCount[category] = 1;
    } else {
      categoryCount[category]++;
    }
  }
  return categoryCount;
}


console.log(countProductsByCategory(products));