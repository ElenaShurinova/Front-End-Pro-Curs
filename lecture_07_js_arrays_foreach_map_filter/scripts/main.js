const numbers = [1,2,3,5,9,7,11,13,9,17,18,9,101,191];

const strings = ['this', 'is', 'an', 'array', 'of', 'simple', 'strings'];

const products = [
  { name: 'Saw', price: 100, category: 'tools' },
  { name: 'Hammer', price: 50, category: 'tools', discount: true },
  { name: 'Ball', price: 20, category: 'sport' },
  { name: 'Shoes', price: 150, category: 'sport', discount: true },
  { name: 'Truck', price: 75, category: 'toys' },
  { name: 'Drill', price: 125, category: 'tools', discount: true },
  { name: 'JigSaw', price: 250, category: 'tools' },
]

// const a = products.map(olena => { return olena.name})
// console.log(a)

// const arr = [
//   { name: 'Saw', price: 100 },
//   { name: 'Drill', price: 150 },
//   { name: 'Hammer', price: 20 }
// ];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// const res = [];
// function forEachLogic(arrayElement, elementIndex, array) {
//   res.push( {...arrayElement, name: arrayElement.name.toUpperCase()} )
// }
// arr.forEach( forEachLogic );
// console.log(arr)

// // 1. пройтись по массиву чисел, для каждого числа вывести, 
// // является ли оно четным



// numbers.forEach((number) => {
//     if (number % 2 === 0) {
//         console.log(`${number} is even`);
//     } else {
//         console.log(`${number} is odd`);
//     }
// });

// // 2. пройтись по массиву строк, для каждой строки, 
// // если она меньше 4 символов, выводить `short`, иначе - `long`



// strings.forEach((str) => {
//     if (str.length < 4) {
//         console.log(`"${str}" short`);
//     } else {
//         console.log(`"${str}" long`);
//     }
// });

// // 3. пройтись по массиву товаров, 
// // вывести в консоль названия всех товаров

// products.forEach((product) => {
//   console.log(product.name);
// });

// // 4. пройтись по массиву товаров, для каждого товара вывести 
// // в консоль сообщение вида "товар name, цена price, индекс - index", 
// // где name, price - соответствующие свойства объектов товаров, 
// // а index - индекс этого товара в массиве.

// products.forEach((elem, index) => {
//   console.log(`товар ${elem.name}, цена ${elem.price}, индекс - ${index}`);
// });

// // 1. из массива чисел, получить новый массив, 
// // который будет содержать квадраты чисел


// const result = numbers.map((elem) =>{


// return elem * elem
// })
// console.log(result); 

// // 2. из массива строк получить новый массив, который будет 
// // содержать массив ОБЪЕКТОВ, у которых будут свойства:
//     //  * value - сама строка
//     //  * size - если длина строки меньше 4 символов, то `short`, 
//     // иначе - `long

 
// const stringObjects = strings.map(elem => ({
//     value: elem,
//     size: str.length < 4 ? 'short' : 'long'
// }));
// console.log(stringObjects);

// const result1 = strings.map( (elem) => {
//   const callbackResult = {};
//   callbackResult.value = elem;
//   callbackResult.size = elem.length < 4 ? 'short' : 'long';
//   return callbackResult;
// });
// console.log(result1);

// // 3. из массива товаров получить массив имен товаров

// const res1 = products.map((elem) => {
// return elem.name;
// })
// console.log(res1);

// // 4. из массива товаров получить массив "уцененных" товаров. 
// // В новом массиве должны быть объекты товаров, 
// // у которых цена вдвое меньше, чем у исходных товаров.


// const res2 = products.map(elem => ({
//   name: elem.name,
//   category: elem.category,
//   discount: elem.discount,
//   price: elem.price / 2
// }));
// console.log(res2);

// function customMap(array, callback) {
//   // Создаем пустой массив для результата
//   const result = [];
//   // Проходим по каждому элементу исходного массива
//   for (let i = 0; i < array.length; i++) {
//       // Применяем callback функцию к каждому элементу и добавляем результат в новый массив
//       result.push(callback(array[i]));
//   }
//   // Возвращаем новый массив
//   return result;
// }

// // Пример использования customMap
// const res3 = customMap([1, 2, 3], el => el * 3);
// console.log(res3); // [3, 6, 9]



// // function customMap(array, callback) {
// //   const result = [];
// //   array.forEach( (element, idx) => {
// //     const newElement = callback( element, idx, array );
// //     result.push( newElement )
// //   });
// //   return result;
// // }

// // const result = customMap ( [1,2,3], (el) => el * 3); 

// // Дан массив чисел `numbers`. Вывести в консоль массив, 
// // состоящий только из нечетных элементов исходного массива.

// const newNumbers = numbers.filter((elem) => {
//   return elem % 2 !== 0;
// });
// console.log(newNumbers);


// // 2. Дан массив строк `strings`. Вывести в коносль новый массив, 
// // состоящий из строк, чья длина не больше 4 символов.



// const newElementStrings = strings.filter((elem) => {
// return elem.length <= 4;
// });
// console.log(newElementStrings); 


// // 2.1 Поиск товаров по категории. Дан массив товаров. Вывести в 
// // консоль массив из товаров, у которых категория - "tools".

// const tools = products.filter((elem) => {
//   return elem.category === 'tools'
// });
// console.log(tools);


// // 3. Поиск по диапазону цен. Написать функцию `filterByPrice`, 
// // которая примет массив товаров и два числа А, Б - диапазон цен. 
// // Функция должна вернть новый массив, который 
// // содержит те товары, чья цена лежит в диапазоне от А до Б.

// function filterByPrice(products, A, B) {
//   const result = [];
//   // for (let i = 0; i < products.length; i++) {
//   //     if (products[i].price >= A && products[i].price <= B) {
//   //         result.push(products[i]);
//   //     }
//   // }
//   // return result;

//   products.map(olena => {
//     if (olena.price >= A && olena.price <= B) {
//       result.push(olena);
//   }
//     return result
//   })
// }
// const filteredByPrice = filterByPrice(products, 100, 125)
// console.log(filterByPrice)

// 4. Поиск уцененных инструментов. Дан массив товаров. Вывести в консоль массив из товаров, 
// на которые есть скидка (т.е. присутствует флаг `discount`), и которые относятся к категории "tools".
function filterByPrice2(products) {
  const result = [];

products.map(elem => {
  if (elem.discount  && elem.category ==='tools') {
    result.push(elem);
}
console.log(result)
  return result
})
}

const b = filterByPrice2(products)
console.log(b);


// Реализовать свой filter.

// Иногда нам нужно найти не все элементы, которые удовлетворяют критерию отбора, 
// а найти самый первый в массиве элемент, который удовлетворяет условию фильтрации, 
// и проигнорировать остальные. В этом нам поможет метод `find`. Он также принимает 
// колбэк с условием отбора, и возвращает первый удовлетворяющий критерию отбора элемент массива. 
// При этом, дальше поиск не идет.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const filtered = arr.find( (elem) => {
//   return elem % 3 === 0;
// });
// console.log(filtered); // 3

//  В примере выше, мы ищем первый элемент, который кратен трем.


function customFilter(array, callback) {
  const result = [];

  array.forEach((elem, index) => {
      // Используем find для нахождения элементов, которые удовлетворяют условию
      if (callback(elem, index, array)) {
          result.push(elem);
      }
  });

  return result;
}

// Пример использования customFilter
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8];
const oddNumbersCustom = customFilter(numbers, elem => elem % 2 !== 0);
console.log(oddNumbersCustom); // [1, 3, 5, 7]