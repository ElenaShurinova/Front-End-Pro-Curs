const products = [
  { name: 'Saw', price: 100, category: 'tools' },
  { name: 'Hammer', price: 50, category: 'tools', discount: true },
  { name: 'Ball', price: 20, category: 'sport' },
  { name: 'Shoes', price: 150, category: 'sport', discount: true },
  { name: 'Truck', price: 75, category: 'toys' },
  { name: 'Drill', price: 125, category: 'tools', discount: true },
  { name: 'JigSaw', price: 250, category: 'tools' },
]


// 1. Напишите функцию `toCamelCase`. Она принимает произвольное число аргументов (строк), и должа вернуть слово в "верблюжьем регистре".

// ```
// toCamelCase('timon', 'and', 'pumba'); // timonAndPumba
// ```

// function toCamelCase(...args) {
//   let result = '';

//   for (let i = 0; i < args.length; i++) {
//       let word = args[i];
//       if (i === 0) {
//           result += word.toLowerCase();
//       } else {
//           result += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//       }
//   }

//   return result;
// }

function toCamelCase(...args) {
  let result = '';

  args.forEach((word, index) => {
      if (index === 0) {
          result += word.toLowerCase();
      } else {
          result += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
  });

  return result;
}

// Пример использования:
console.log(toCamelCase('timon', 'and', 'pumba')); // timonAndPumba

// 2. Напишите функцию `hasBadWord`. Она примет 2 аргумента, строку в которой мы будем искать плохое слово, и собственно плохое слово. Нужно, чтобы функция проверяла наличие в строке плохого слова (желательно - без учета регистра).

function hasBadWord(text, badWord) {
  // Приводим обе строки к нижнему регистру для сравнения без учета регистра
  const lowerText = text.toLowerCase();
  const lowerBadWord = badWord.toLowerCase();

  // Используем метод includes для проверки наличия "плохого" слова в строке
  return lowerText.includes(lowerBadWord);
}

// Пример использования:
console.log(hasBadWord('This is a bad example', 'bad')); // true
console.log(hasBadWord('This is a good example', 'bad')); // false
console.log(hasBadWord('Плохое слово здесь', 'плохое')); // true
console.log(hasBadWord('Все хорошо', 'плохое')); // false

// 3. Теперь сделаем функцию `hasBadWords`, она будет принимать произвольное число аргументов. Первый - строка в которой ищем плохие слова, а второй и последующие - собственно, плохие слова. Если строка содержит хотя бы одно плохое слово - функция должна вернуть `true`.

function hasBadWords(str, ...badWords) {
  // Приводим строку text к нижнему регистру для сравнения без учета регистра
  const text = str.toLowerCase();

  // Используем метод some() для проверки наличия хотя бы одного плохого слова
  return badWords.some(badWord => text.includes(badWord.toLowerCase()));
}

// Пример использования:
console.log(hasBadWords('This is a bad example', 'bad', 'awful')); // true
console.log(hasBadWords('This is a good example', 'bad', 'awful')); // false
console.log(hasBadWords('Плохое слово здесь', 'плохое', 'ужасное')); // true
console.log(hasBadWords('Все хорошо', 'плохое', 'ужасное')); // false

function hasBadWords(text, ...badWords) {
  // Приводим строку text к нижнему регистру для сравнения без учета регистра
  const text = text.toLowerCase();

  // Проходим по всем плохим словам и проверяем, есть ли хотя бы одно в строке
  for (const badWord of badWords) {
      const lowerBadWord = badWord.toLowerCase();
      if (text.includes(lowerBadWord)) {
          return true; 
      }
  }

  return false; 
}

// Пример использования:
console.log(hasBadWords('This is a bad example', 'bad', 'awful')); // true
console.log(hasBadWords('This is a good example', 'bad', 'awful')); // false
console.log(hasBadWords('Плохое слово здесь', 'плохое', 'ужасное')); // true
console.log(hasBadWords('Все хорошо', 'плохое', 'ужасное')); // false



// 6. Теперь попрактикуем работу с объектами. Напишите функцию `mergeObjects`. Она будет принимать 2 аргумента - объекты для слияния. Задача - создать новый объект, который будет содержать все те свойства, котоыре содержат исходные объекты (то есть функция как бы объединит объекты).

function mergeObjects(obj1, obj2) {
 
  const mergedObject = { ...obj1, ...obj2 };
  return mergedObject;
}
// Пример использования:
const object1 = { a: 1, b: 2 };

// 8. Поработаем с инпутами на странице. Напишите функцию `saveInputsData`, которая будет собирать значения инпутов и селектов на странице в объект, где ключами будут ID инпутов/селектов, а значениями - их значения. Этот объект нужно сохранять в `localStorage`, с ключом `formData`. Постарайтесь сделать функцию универсальной - чтобы она могла работать и с теми инпутами/селектами, которые появятся в разметке позже или из JS.



function saveInputsData() {
  // Создаем объект для хранения значений
  const formData = {};

  // Получаем все инпуты и селекты на странице
  const inputs = document.querySelectorAll('input, select');

  // Перебираем все найденные элементы
  inputs.forEach(input => {
      // Сохраняем значение в объект formData, используя ID элемента в качестве ключа
      if (input.id) {
          formData[input.id] = input.value;
      }
  });

  // Сохраняем объект в localStorage
  localStorage.setItem('formData', JSON.stringify(formData));
}

// Пример использования
document.addEventListener('DOMContentLoaded', () => {
  // Добавим обработчик события для кнопки сохранения
  const saveButton = document.getElementById('saveButton');
  if (saveButton) {
      saveButton.addEventListener('click', saveInputsData);
  }
});

// 9. Добавьте обработчики на события `blur` у инпутов, и `change` у селектов, чтобы сохранять их значения.

function saveInputsData() {
  // Создаем объект для хранения значений
  const formData = {};

  // Получаем все инпуты и селекты на странице
  const inputs = document.querySelectorAll('input, select');

  // Перебираем все найденные элементы
  inputs.forEach(input => {
      // Сохраняем значение в объект formData, используя ID элемента в качестве ключа
      if (input.id) {
          formData[input.id] = input.value;
      }
  });

  // Сохраняем объект в localStorage
  localStorage.setItem('formData', JSON.stringify(formData));
}

function setInputHandlers() {
  // Получаем все инпуты и селекты на странице
  const inputs = document.querySelectorAll('input, select');

  // Устанавливаем обработчик события blur для инпутов и change для селектов
  inputs.forEach(input => {
      if (input.nodeName.toLowerCase() === 'input') {
          input.addEventListener('blur', saveInputsData);
      } else if (input.nodeName.toLowerCase() === 'select') {
          input.addEventListener('change', saveInputsData);
      }
  });
}

// Пример использования
document.addEventListener('DOMContentLoaded', () => {
  // Устанавливаем обработчики событий
  setInputHandlers();

  // Если нужно сохранить данные по кнопке
  const saveButton = document.getElementById('saveButton');
  if (saveButton) {
      saveButton.addEventListener('click', saveInputsData);
  }
});

// 11. Напишите функцию `getUniqueCategories`, которая будет принимать произвольное количество аргументов - объектов с данными товаров, и должна вернуть массив, который содержит уникальные категории товаров.

function getUniqueCategories(...products) {
  // Используем reduce для создания массива уникальных категорий
  const categories = products.reduce((newCategories, product) => {
      if (product.category && !newCategories.includes(product.category)) {
        newCategories.push(product.category);
      }
      return uniqueCategories;
  }, []);

  return categories;
}


const uniqueCategories = getUniqueCategories(product1, product2, product3, product4);
console.log(uniqueCategories); 


// 12. Напишите функцию `getNamesPrices`, она примет произвольное количество аргументов объектов товаров, и должна вернуть объект, у которго ключами будут названия товаров, а значениями - цены товаров

function getNamesPrices(...products) {
 
  return products.reduce((result, product) => {
      if (product.name && product.price !== undefined) {
          result[product.name] = product.price;
      }
      return result;
  }, {});
}

const namesPrices = getNamesPrices(...product);
console.log(namesPrices); 


// 13. Напишите функцию `getPricesByCategory`, она так же будет принимать произвольное количество аргументов - объектов с данными товарво, и должна вернуть объект, свойствами которого будут категории этих товаров, а значениями - суммарные стоимости товаров.



function getPricesByCategory(...products) {
  return products.reduce((result, product) => {
      // Проверяем наличие свойства category и price у объекта
      if (product.category && product.price !== undefined) {
          // Если категория уже есть в объекте result, добавляем к текущему значению
          if (result[product.category]) {
              result[product.category] += product.price;
          } else {
              // Иначе создаем новое свойство для категории и присваиваем цену
              result[product.category] = product.price;
          }
      }
      return result;
  }, {});
}


const pricesByCategory = getPricesByCategory(product1, product2, product3, product4);
console.log(pricesByCategory); 

function getPricesByCategory( ...args ) {

  return args.reduce( (acc, val) => {
    acc[val.category] = acc[val.category] ? acc[val.category] + val.price : val.price;
    return acc;
  }, {});
}