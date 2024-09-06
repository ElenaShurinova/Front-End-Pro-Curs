const numbers = [1,2,3,5,9,7,11,13,9,17,18,9,101,191];

const strings = ['this', 'is', 'an', 'array', 'of', 'simple', 'strings'];

const products = [
  { name: 'Saw', price: 100 },
  { name: 'Hammer', price: 50 }
]

const arr = [1, 2, 3, 4, 5];
console.log( arr.includes(4) ); // true, потому что в массиве есть элемент 4
console.log( arr.includes(10) ); // false, потому что в массиве нет элемента 10

// Следует быть внимательным при работе с объектами. А именно:

const objects = [
  { name: 'Timon', color: 'Orange' },
  { name: 'Pumba', color: 'Brown' }
];

const timonObject = {
  name: 'Timon',
  color: 'Orange'
}

console.log( objects.includes(timonObject) ); // false! Подумайте, почему так.

const timonCopy = objects[0];
console.log( objects.includes(timonCopy) ); // true

const strings1 = ['let', 'var', 'const', 'for', 'while', 'null', 'for', 'undefined'];
console.log(strings.indexOf('const')); // 2 - потому что строка `const` находится на 2-й позиции в массиве strings
console.log(strings.indexOf('something')); // -1 - потому что такого элемента в массиве нет
console.log(strings.indexOf('for',4)); // 3, потому что первое вхождение строки 'for' - на третьей позиции

// 1. проверить, содержит ли массив строк строку 'array'.
console.log(strings.includes('array'));

console.log( numbers.lastIndexOf(9));

const numArr = [1, 2, 3, 4];
const stringsArr = ['this', 'is', 'a', 'string'];
console.log( numArr.join() ); // 1,2,3,4
console.log( numArr.join('-') ); // 1-2-3-4
console.log( stringsArr.join('.') ); // this.is.a.string

const arr1 = [1,2,3];
console.log( arr.reverse() ); // [3,2,1]

// 1. объединить массив строк в одно предложение. Результатом должна быть строка, разделенная пробелами.
const strings2 = ['this', 'is', 'an', 'array', 'of', 'simple', 'strings'];
console.log( strings2.join(' ') );
// 2. объединить наш массив чисел в одно большое число (т.е. без разделителей).
console.log( numbers.join('') );
// 3. вывести в консоль массив строк в обратном порядке.
console.log( strings.reverse() );

// 1. написать функцию-калькулятор. Она принимает 3 аругмента: два числа и название математической операци (`plus`, `minus`, `multiply`, `divide`). И должна вернуть, соответственно, сумму, разность, произведение или частное двух чисел.
function calculator(a, b, operator) {
 
    if (operator === 'plus') return a + b;
    if (operator === 'minus') return a - b;
    if (operator === 'multiply') return a * b;
    if (operator === 'divide') return a / b;
    return;
  }
  


console.log( calculator(2,3, 'plus') ); // 5, потому что 2 + 3 = 5
console.log( calculator(7,3, 'minus') ); // 4, потому что 7 - 3 = 4
console.log( calculator(5,4, 'multiply') ); // 20, потому что 5 * 4 = 20
console.log( calculator(12,3, 'divide') ); // 4, потому что 12 / 3 = 4

// function getArraySum(arr) {
//   let sum = 0; 
//   for (let i = 0; i < arr.length; i++) { 
//     sum += arr[i]; 
//   }
//   return sum; 
// }

// console.log(getArraySum([1, 2, 3, 4, 5])); 
// console.log(getArraySum([10, 20, 30])); 
// console.log(getArraySum([0, -1, 1])); 

// 3. Написать функцию `findEvens`, которая примет в аргументах массив, и вернет новый массив, состоящий из четных элементов исходного
// function findEvens(arr) {
//  const result = [];
//  for (let i = 0; i < arr.length; i++) { 
//   if (arr[i] % 2 == 0 );
//   result.push
  
//   return result; 
// }

// console.log(findEvens([1, 2, 3, 4, 5])); 

// 4. Написать функцию `findTotalLength`, которая примет в 
// аргументах массив строк, и вернет число, содержащее 
// суммарное количество символов этих строк (общую длину). 
// Задача решается разными способами!

function findTotalLength(arr){

}
// Написать функцию `hasBadWord`, она будет принимать массив 
// строк, который нужно проверить на наличие плохого слова, 
// и собственно плохое слово. Функция должна вернуть true, 
// если массив содержит это слово.

function hasBadWord(stringsArray, badWord) {
  return stringsArray.includes(badWord);
}
function dropLastElems(array, count) {
  array.splice( array.length - count, count);
}

