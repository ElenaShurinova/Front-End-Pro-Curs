const numbers = [1,2,3,5,9,7,11,13,9,17,18,9,101,191];

const strings = ['this', 'is', 'an', 'array', 'of', 'simple', 'strings', 'Timon', 'Simba', 'Pumba', 'bravo', 'StarTrack'];

const products = [
  { name: 'Saw', price: 100, category: 'tools' },
  { name: 'Hammer', price: 50, category: 'tools', discount: true },
  { name: 'Ball', price: 20, category: 'sport' },
  { name: 'Shoes', price: 150, category: 'sport', discount: true },
  { name: 'Truck', price: 75, category: 'toys' },
  { name: 'Drill', price: 125, category: 'tools', discount: true },
  { name: 'JigSaw', price: 250, category: 'tools' },
]

// const numbers1 = [1, 9, 10, 5, 3, 7, 2, 73];
// console.log(numbers.sort()); // [1, 10, 2, 3, 5, 7, 73, 9]
// const strings1 = ['zulu', 'alfa', 'omega', 'bravo'];
// console.log(strings.sort()); // ['alfa', 'bravo', 'omega', 'zulu'];

// const users = [
//   { name: 'Ivan', login: 'vanya' },
//   { name: 'Anton', login: 'toha' },
//   { name: 'Dmitry', login: 'dimon' }
// ];

// users.sort( (a, b) => {
//   return a.name < b.name ? -1 : 1;
// });

// 1. Отсортировать массив строк `strings` по возрастанию.
const result = strings
result.sort((a, b) => {
  return a < b ? -1 : 1;
});
console.log(result);

// 2. Отсортировать массив чисел `numbers` по возрастанию.

const res = numbers.sort((a, b) => a - b);

console.log(numbers);

// 3. Отсортировать массив строк `strings` по убыванию без учета регистра.

const result1 = strings.sort((a, b) => {
  return b.toLowerCase() < a.toLowerCase() ? -1 : 1;
})
console.log(strings);

// 4. Отсортировать массив чисел `numbers` по убыванию.
const res2 = numbers.sort((a, b) => b - a);

console.log(numbers);

// 5. Отсортировать массив объектов `products` по возрастанию цены.

products.sort((a, b) => a.price - b.price);
console.log(products);

// 6. Отсортировать массив строк по убыванию кол-ва символов в строке;

strings.sort((a, b) => b.length - a.length);
console.log(strings);


// 7. Отсортировать массив объектов `products` по категории (в 
  // алфавитном порядке), и по возрастанию цены. Т.е упорядочить 
  // по категориям, и в разрезе категорий - по возрастанию цены.

  products.sort((a, b) => {
    if (a.category === b.category) {

        return (a.price - b.price) 
    }
    else {
      return a.category < b.category ? -1 : 1;
    }
      
   
});

console.log(products);

// const array = [1,2,3,4,5];
// let sum = 0;
// array.forEach( el => sum += el );

// 1. Получить сумму элементов массива `numbers`

let sum1 = numbers.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum1);

// 2. Получить среднее арифметическое массива `numbers`.
const arifmetic = numbers.reduce((accumulator, current, index, array) => {
  accumulator += current;
  if (index === array.length - 1) {
    return accumulator / array.length;
  }
  return accumulator;
}, 0);

console.log(arifmetic); // 3

// 3. Получить общую длину всех строк массива `strings` 
// с использованием метода `reduce`

const newLength = strings.reduce((accumulator, value) => accumulator + value.length,0);

console.log(newLength)

// 4. Получить из массива `strings` количество строк, в которых
//  есть буква `T` с использованием метода `reduce`.

const T = strings.reduce((accumulator, strings) => {
  if (strings.includes('T')) {
    return accumulator + 1;
  }
  return accumulator;
}, 0);

console.log(T);

// 5. Получить суммарную стоимость всех товаров массива `products

const newPrice = products.reduce((accumulator, products) => accumulator + products.price, 0);

console.log(newPrice);

// Из масива товаров  получить масив имен товаров с помощью reduce

const rest = products.reduce((accumulator, value) => {
  accumulator.push(value.name);
  return accumulator;
}, []);

console.log(rest); 

// 7. Получить массив категорий товаров (т.е. нужно пройтись по 
  // массиву товаров методом reduce, и добавлять в "аккумулятор" 
  // свойство category рассматриваемого товара)

  const category = products.reduce((accumulator, value) => {
    if (!accumulator.includes(value.category)) {
      accumulator.push(value.category);
    }
    return accumulator;
  }, []);
  
  console.log(category);