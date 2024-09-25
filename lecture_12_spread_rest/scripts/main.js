const numbers = [1, 2, 3, 4];

const first = ['this', 'is', 'the', 'first', 'part'];
const second = ['and', 'this', 'is', 'the', 'second', 'one'];
const strings = ['another', 'array', 'of', 'simple', 'strings'];

const dvalin = {
  name: 'Dvalin',
  age: 232,
  weapon: 'axe'
}

const torin = {
  name: 'Torin',
  age: 201,
  weapons: ['sword', 'hammer', 'dagger'],
  armour: ['mitril armour', 'shield', 'helmet'],
  skills: {
    melee: 10,
    archery: 5,
    magic: 2
  }
}

const weapons = {
  melee: 'sword',
  archery: 'crossbow'
}

const armour = {
  helmet: 'steel helmet',
  shiled: 'oak shield',
  armour: 'mitril armour'
}

const products = [
  { name: 'Saw', price: 100, category: 'tools' },
  { name: 'Hammer', price: 50, category: 'tools', discount: true },
  { name: 'Ball', price: 20, category: 'sport' },
  { name: 'Shoes', price: 150, category: 'sport', discount: true },
  { name: 'Truck', price: 75, category: 'toys' },
  { name: 'Drill', price: 125, category: 'tools', discount: true },
  { name: 'JigSaw', price: 250, category: 'tools' },
]

// 1. Создать копию массива `numbers` с использованием спред-оператора
const numbersCopy = [...numbers];
console.log(numbersCopy);

// 2. Создать копию объекта `dvalin` с использованием спред-оператора


const dvalinCopy = { ...dvalin };
console.log(dvalin);

// 3. Создать массив `third`, который будет содержать элементы массивов `first`, `second`. Нужно развернуть их в один массив с использованием спред-оператора.


const third = [...first, ...second];
console.log(third);

// 4. Создать ГЛУБОКУЮ копию `complexDwarf`. То есть обеспечить, чтобы все вложенные не-примитивы также были скопированы с развертыванием.

const complexDwarf = {
...torin,
  weapons: [...torin.weapons],
  armour: [...torin.armour],
  skills: {...torin.skills}
}
console.log(complexDwarf);


// 1. Написать функцию `getTotalLength`, которая принимает произвольное количество строк, и возвращает их суммарную длину.

function getTotalLength(...strings) {
  return strings.reduce((totalLength, str) => totalLength + str.length, 0);
}

console.log(getTotalLength("hello", "world")); // 10
console.log(getTotalLength("a", "bb", "ccc")); // 6

// 2. Написать функцию `makeSentence`, которая принимает произвольное количество строк, и возвращает одну большую строку (предложение) из этих строк, разделенных пробелами.

function makeSentence(...strings) {
  return strings.join(' ');
}

console.log(makeSentence("hello", "world")); // "hello world"
console.log(makeSentence("This", "is", "a", "sentence.")); // "This is a sentence


// 3. Усложним - сделаем функцию `makeSentenceWithCase`, которая первым аргументом примет аргумент `upperCased` типа boolean, а затем - произвольное количество строк. Если `upperCased` === true, то вернуть предложение в верхнем регистре.

function makeSentenceWithCase(upperCased, ...strings) {
  const sentence = strings.join(' ');
  return upperCased ? sentence.toUpperCase() : sentence;
}

console.log(makeSentenceWithCase(true, "hello", "world")); // "HELLO WORLD"
console.log(makeSentenceWithCase(false, "This", "is", "a", "sentence.")); // "This is a sentence."

// 4. Написать функцию `getTotalPrice`, она будет принимать произвольное количество аргументов (объектов с данными товаров), и должна вернуть их суммарную стоимость.

function getTotalPrice(...products) {
  return products.reduce((total, product) => total + product.price, 0);
}

const product1 = { name: "Saw", price: 100 };
const product2 = { name: "Hammer", price: 50 };
console.log(getTotalPrice(product1, product2)); //150

// 1. У нас есть массив строк `strings`. Создать переменные `first`, `second`, и записать в них первый и второй элементы массива.
const [firstString, secondString] = strings;
console.log(firstString); 
console.log(secondString); 

// 2. Аналогичным образом, определить переменные `one`, `three`, и в них записать 1 и 3 элементы массива `strings` с использованием деструктуризации.

const [one, , three] = strings;
console.log(one); 
console.log(three);

// 3. Пишем функцию `getNthWord`, она принимает в аргументах строку, которая содержит слова, разделенные пробелами. Второй аргумент `n` - номер слова. Нужно вернуть `n`-е слово. Нумерация слов начинается с 1.

function getNthWord(sentence, n) {
  const wordsNum = sentence.split(' ');
  return wordsNum[n - 1];
}

console.log(getNthWord('Timon and Pumba', 2)); // "and"

