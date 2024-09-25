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

const testObject = {
  name:'Vasilij',
  lastname: 'Ivanov',
  age: 25,
  address: {
    street: 'Street',
    city: 'City',
    house: 9
  }
}

const textArea = document.querySelector('#area');
console.log(textArea.id);
textArea.oninput = function() {
  localStorage.setItem('textArea', textArea.value);
}
window.onload = function() {
  const storedValue = localStorage.getItem('textArea');
  textArea.value = storedValue;
}

const obj = {
  name: 'Timon',
  type: 'Suricate'
}

// localStorage.setItem('timon', obj);

// console.log(localStorage.getItem('timon'));


// const array = ["Timon", "Pumba", "Simba"];
// const stringifiedArray = JSON.stringify(array);
// console.log('Stringified', stringifiedArray)
const stringifiedObject = JSON.stringify(obj);
console.log('Stringified obj', stringifiedObject)
const parsedObj = JSON.parse(stringifiedObject);
console.log('Parsed', parsedObj)
// const parsedArray = JSON.parse(stringifiedArray);
// console.log(parsedArray);
// console.log(array === parsedArray); // false


/**
 * 1. преобраховать объект testObject в JSON
 * 2. сделать обратное преобразование (то есть создать переменную parsed и в нее записать результат обратного преобразлвания - из строки в объет)
 * 3. Преобразовать массив products в JSON
 * 4. сделать обратное преобразование
 */


const jsonString = JSON.stringify(testObject);
console.log( jsonString);

const parsed = JSON.parse(jsonString);
console.log( parsed);

const productsJsonString = JSON.stringify(products);
console.log(productsJsonString);

const parsedProducts = JSON.parse(productsJsonString);
console.log(parsedProducts);

// 2. В разметке есть кнопка `saveTestBtn`, у нее есть ID. Добавляем обработчик события на эту кнопку. При клике нужно:
//  - достать из `localStorage` значение по ключу `testObject`.
//  - десериализовать его
//  - вывести результат десериализации в консоль
//  - вывести в консоль значение свойства `name` десериализованного объекта


localStorage.setItem( 'testObject', JSON.stringify(testObject));

const jsonString1 = JSON.stringify(testObject);
localStorage.setItem('testObject', jsonString);

// Находим кнопку по ID
const saveTestBtn = document.getElementById('saveTestBtn');

// Добавляем обработчик события на кнопку
saveTestBtn.addEventListener('click', function() {
    // Достаем строку JSON из localStorage
    const storedObjectString = localStorage.getItem('testObject');
    
    // Преобразуем строку JSON обратно в объект
    const deserializedObject = JSON.parse(storedObjectString);
    
    // Выводим результат десериализации в консоль
    console.log(deserializedObject);
    
    // Выводим значение свойства name в консоль
    console.log(deserializedObject.name);
});

// 3. Обеспечить сохранение данных всех инпутов в блоке "Блок для второй задачи". У блока есть ID: `inputsBlock`. В блоке есть несколько инпутов. У каждого инпута есть свой ID.
//  - Написать функцию `saveInputsData`, которая будет запоминать все значения инпутов в `localStorage`. Функция должна создать объект, в который запишет значения всех инпутов в блоке, при этом в качестве ключей используем идентификаторы (ID). И этот объект записать в `localStorage`. Эта функция должна вызываться при клике на кнопку "Save Inputs".
//   - Далее написать функцию `restoreInputsData` - она должна восстановить значения в инпутах из `localStorage`. Эта функция должна вызываться при клике на кнопку "Restore Inputs".
//   - написать функцию `clearInputsData` - очистка объекта с данными инпутов в `localStorage`. Вызывается при клике на кнопку "Clear Inputs".

const firstnameInput = document.querySelector('#firstnameInput');
const lastnameInput = document.querySelector('#lastnameInput');
const ageInput = document.querySelector('#ageInput');

  // ...
  const inputsData = {
    firstnameInput: firstnameInput.value,
    lastnameInput: lastnameInput.value,
    ageInput: ageInput.value
  };

localStorage.setItem('inputsData', inputsData);


  function restoreInputsData() {
    const inputsData = JSON.parse(localStorage.getItem('inputsData'));
    // достать из ЛС значение по ключу inputsData
    // выполнить преобразование обратно в объект
    // поставить инпутам соответствующие значения.
    const parsedObj = JSON.parse(stored); 
    firstnameInput.value = parsedObj.firstnameInput;
    lastnameInput.value = parsedObj.lastnameInput;
    ageInput.value = parsedObj.ageInput;

  }

  const saveBtn = document.querySelector('#saveInputsBtn');
const restoreBtn = document.querySelector('#restoreInputsBtn');
saveBtn.onclick = () => {
  saveInputsData();
}
restoreBtn.onclick = () => {
  restoreInputsData();
}

function clearInputsData() {
  localStorage.removeItem('inputsData');
  // удалить из ЛС значение по ключу inputsData
  // очистить все наши инпуты
  firstnameInput.value = '';
  lastnameInput.value = '';
  ageInput.value = '';

}