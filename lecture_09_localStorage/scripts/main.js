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

localStorage.setItem('lang', 'ru-RU');
const userSelectedLang = localStorage.getItem('lang'); // 'ru-RU'
console.log('Selected lang is:', userSelectedLang)
localStorage.setItem('theme', 'light'); // запоминаем в ЛС тему, которую выбрал пользователь
console.log( localStorage.getItem('theme') ); // light
localStorage.removeItem('theme'); // удаляем из ЛС значение
console.log( localStorage.getItem('theme') ); // null - ЛС уже не содержит такой ключ

// // **Закрепим практикой**
// // 1. Положить в ЛС ключ `test` со значением `simlpeValue`.
// // 2. Извлечь из ЛС значение, соответствующее ключу `test`, и вывести его в консоль.
// // 3. Положить в ЛС ключ `myNumber`, со значением 10.
// // 4. Извлечь из ЛС значение, соответствующее ключу `myNumber`, и вывести в консоль результат его сложения с числом 15. Ожидаемый результат 25.
// // 5. Удалить из ЛС ключ `test`.
// // 6. Очистить ЛС.

// localStorage.setItem('test', 'simpleValue');   //положить

// const testValue = localStorage.getItem('test'); //извлечь
// console.log(testValue); 

// localStorage.setItem('myNumber', 10); //положить

// const myNumber = +localStorage.getItem('myNumber'); //извлечь
// console.log(Number(myNumber) + 15); 

// localStorage.removeItem('test'); //удалить

// localStorage.clear(); //очистить
const button = document.querySelector('#lightSwitcher');
const paragraph = document.querySelector('#lightParagraph');

button.onclick = function() {
  const currentState = localStorage.getItem('isLightOn');
  if (currentState) {
    let newState;
    if (currentState === 'light') {
      newState = 'dark';
      paragraph.textContent = 'Now light is off';
    }
    else {
      newState = 'light';
      paragraph.textContent = 'Now light is on';
    }
    localStorage.setItem('isLightOn', newState);
  }
  else {
    localStorage.setItem('isLightOn', 'dark');
  }
}


// 2. Реализовать запоминание времени первого посещения сайта, и вывод его в консоль. То есть, на событие загрузки документа (`window.onload`, или добавить обработчик события `DOMContentLoaded`) добавить обработчик, который:
//  - проверит наличие в localStorage ключа `firstEnter`.
//  - если его нет - запомнит в localStorage значение текущего времени (использовать конструкцию `let firstEnter = Date.now();`), с ключом `firstEnter`.
//  - если такой ключ есть - вывести его в консоль


window.onload = function() {
  let firstEnter = new Date().toLocaleString();
  if(localStorage.getItem('firstEnter')  != null) {
    console.log(localStorage.getItem('firstEnter'))
  } else {
    localStorage.setItem('firstEnter', firstEnter);
  }
}

// 3. Реализовать сохранение значения инпута в localStorage, а именно:
//  - средствами JS добавить в `div.mainContainer`, инпут.
//  - на инпут, на событие потери фокуса, добавить обработчик, который сохранит в localStorage значение инпута (использовать ключ inputValue)
//  - на событие загрузки документа, добавить обработчик, который проверит наличие в localStorage ключа inputValue. Если такой имеется - то его значение записать в инпут.




const input = document.querySelector('#simpleInput');
input.onblur = function() {
  
}
window.onload = function() {
  input.value = // something from LocalStoarge
}


window.onload = function() {
  // Создаем инпут и добавляем его в элемент с классом SimpleInput
  const container = document.querySelector('.SimpleInput');
  const input = document.createElement('input');
  container.appendChild(input);

  // Проверяем наличие сохраненного значения в localStorage
  const savedValue = localStorage.getItem('inputValue');
  if (savedValue !== null) {
      input.value = savedValue; // Если значение есть, устанавливаем его в инпут
  }

  // Добавляем обработчик на потерю фокуса для инпута
  input.onblur = function() {
      localStorage.setItem('inputValue', input.value); // Сохраняем значение инпута в localStorage
  };
};


/**
 * 1. найти выпадающее меню через querySelector
 * 2. На событие change этого селекта добавить обработчик, который будет
 * сохранять в ЛС значение этого селекта с ключом selectedLang
 * 3. На событие загрузки документа, добавить обработчик, который
 * извлечет из ЛС значение по ключу selectedLang, и если оно существует - то
 * установит это значение в селект
 */

window.onload = function() {
  // 1. Найти выпадающее меню через querySelector
  const selectElement = document.querySelector('languageSelect'); // Предполагаем, что есть только один select на странице

  // 2. На событие change этого селекта добавить обработчик
  selectElement.addEventListener('change', function() {
      // Сохраняем значение селекта в localStorage с ключом 'selectedLang'
      localStorage.setItem('simpleInput', selectElement.value);
  });

  // 3. На событие загрузки документа добавить обработчик
  const savedValue = localStorage.getItem('simpleInput');
  if (savedValue !== null) {
      // Если значение существует, устанавливаем его в селект
      selectElement.value = savedValue;
  }
};

const select = document.querySelector('#languageSelect');
select.onchange = function() {
  localStorage.setItem('selectedLang', select.value);
}
window.onload = function() {
  const stored = localStorage.getItem('selectedLang');
  if (stored) {
    select.value = stored;
  }
}
