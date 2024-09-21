// Здесь будем писать код

const numbers = [1,2,3,5,9,7,11,13,9,17,18,9,101,191];

const strings = ['this', 'is', 'an', 'array', 'of', 'simple', 'strings'];

const weapons = ['sword', 'axe', 'naginata', 'crossbow', 'spear', 'bow', 'hammer', 'dagger', 'yari', 'protazan'];

const archery = ['crossbow', 'bow'];
const melee = ['sword', 'axe', 'naginata', 'spear', 'hammer', 'dagger', 'yari', 'protazan'];

const dwarwes = [
  { name: 'Torin', age: 232 },
  { name: 'Dvalin', age: 301 },
  { name: 'Balin', age: 454 },
  { name: 'Filli', age: 198 },
  { name: 'Killi', age: 203 }
]

const bilbo = { name: 'Bilbo', age: 34 };

// 1. `document.getElementById(ELEM_ID)` - это метод поиска элемента по его идентификатору (по значению атрибута `id`). Принимает в аргументе идентификатор элемента, который мы хотим найти. Несколько важных моментов:

//  - он ищет по ВСЕМУ документу, и не может быть применен для поиска внутри конкретного DOM-узла;
//  - если в документе есть несколько элементов с одним и тем же идентификатором, то ~~это плохо спроектированная разметка~~ он вернет первый в документе элемент с таким идентификатором


const inputsBlock = document.getElementById('inputsBlock');
const inputsBlock2 = document.querySelector('#inputsBlock');
console.log(inputsBlock === inputsBlock2)
console.log(inputsBlock)

const inputsAll = inputsBlock.querySelectorAll('input');
console.log(inputsAll);

const buttonAll = inputsBlock.querySelectorAll('button');
console.log(buttonAll);

const class1 = inputsBlock.querySelector('.buttonContainer');
console.log(class1);

const parag = buttonContainer.querySelector('p')

const button2 = document.querySelectorALL('#inputsBlock > button')
console.log(button2);

// Находим кнопку по её идентификатору
const button = document.querySelector("#firstInnerButton");
    button.textContent = "Click me too!";


    // 2. Этой же кнопке, добавить внутренние отступы (padding) = 10px, цвет фона - синий, цвет текста - белый. Рамку убрать.
    const firstBrn = document.querySelector('#firstInnerButton');
firstBrn.textContent = 'Click me too!';
firstBrn.style.padding = '10px';
firstBrn.style.backgroundColor = 'blue';
firstBrn.style.color = 'white';
firstBrn.style.border = 'none';

// 3. Кнопке с id=firstOuterButton добавить класс `simpleButton`.
const button = document.querySelector("#FirstButton");
button.classList.add("SimpleButton");


// Находим все элементы input на странице
const inputs = document.querySelectorAll("input");

// Проходимся по всем элементам input и добавляем класс SimpleInput
inputs.forEach(input => {
    input.classList.add("simpleInput");
});

const newParagraph = document.createElement('p'); // создаем элемент. В аргументе передаем имя тега
newParagraph.textContent = 'Hello';

// - `append` - добавить элемент в конец элемента target. То есть, сделать добавляемый элемент последним потомком элемента target
// - `prepend` - сделать добавляемый элемент первым потомком элемента target
// - `before` - добавить элемент перед элементом target (сделать соседом сверху)
// - `after` - добавить элемент после элемента target (сделать соседом снизу)

const container = document.querySelector('.buttonContainer');
const newButton = document.createElement('button');
newButton.textContent = 'New button';
container.append(newButton);
const newParagraph = document.createElement('p');
newParagraph.textContent = 'Buttons block finished';
container.after(newParagraph);

// 1. Под div с классом inputsBlock, добавить заголовок h3 с текстом Hello World!

const inputsBlock3 = document.querySelector('#inputsBlock');


const newHeading = document.createElement('h3');

newHeading.textContent = 'HELLO WORLD';


inputsBlock.after(newHeading);

// 2. Перед кнопкой с id=secondInnerButton, добавить новую кнопку с текстом `New Button`

const btn = document.querySelector('#secondInnerButton');
const newBtn = document.createElement('button');
newBtn.textContent = 'New button';
btn.before(newBtn);

// 1. На событие клика по кнопке с id=secondInnerButton добавить обработчик, который будет выводить в консоль текст "Clicked on inner button".
const secondInnerButton = document.querySelector('#secondInnerButton');


secondInnerButton.addEventListener('click', () => {
    console.log('CLICKING ON INNER BUTTON');
});


// 2. На событие утери фокуса в инпуте с id=ageInput, добавить обработчик, который будет выводить в консоль то, что введено в этот инпут (свойство value)

const ageInput = document.querySelector('#ageInput');


ageInput.addEventListener('blur', () => {
    console.log(ageInput.value);
});

// Находим все инпуты в документе
const inputs5 = document.querySelectorAll('input');

// Добавляем обработчик события "change" для каждого инпута
inputs.forEach(input => {
    input.addEventListener('change', () => {
        console.log('changed');
    });
});

// Находим кнопку с ID "firstOuterButton"
const firstOuterButton = document.querySelector('#firstOuterButton');

// Добавляем обработчик события клика
firstOuterButton.addEventListener('click', () => {
    console.log('First outer btn clicked!');
});

// 2. Реализовать подсчет кликов по кнопке с id=firstOuterButton. Нужно чтобы при клике, в консоль выводилось бы количество кликов. Для этого, нам понадобится отдельная переменная-счетчик.

// Находим кнопку с ID "firstOuterButton"
const firstOuterButton2 = document.querySelector('#firstOuterButton');

// Переменная-счетчик
let clickCount = 0;

// Добавляем обработчик события клика
firstOuterButton.addEventListener('click', () => {
    clickCount++; // Увеличиваем счетчик
    console.log(`Количество кликов: ${clickCount}`); // Выводим в консоль
});

// 3. Добавить под эту кнопку параграф с текстом "Count: 0". При каждом клике на кнопку, менять текст этого параграфа на текст с актуальным количеством кликов.

// Находим кнопку с ID "firstOuterButton"
const firstOuterButton5 = document.querySelector('#firstOuterButton');

// Переменная-счетчик
let clickCount2 = 0;

// Создаем параграф и добавляем его под кнопку
const countParagraph = document.createElement('p');
countParagraph.textContent = 'Count: 0';
firstOuterButton.after('after', countParagraph);

// Добавляем обработчик события клика
firstOuterButton.addEventListener('click', () => {
  countParagraph.textContent = `Clicks ${++clicksCount}`;
});

// 4. Добавить на все кнопки документа обработчик события клика, 
// чтобы при клике выводилось в консоль сообщение 
// "Clicked on button with id=BUTTON_ID", 
// то есть чтобы выводился текст с идентификатором кнопки



// Функция обработчика клика
function clickHandler(event) {
  const targetId = event.target.id;
  console.log(`Clicked on button with id=${targetId}`);
}

// Находим все кнопки в документе
const buttons = document.querySelectorAll('button');

// Добавляем обработчик события клика для каждой кнопки
buttons.forEach(button => {
  button.addEventListener('click', clickHandler);
})

// 5. На событие утери фокуса в инпуте с id=firstnameInput, добавить обработчик. Он должен выводить в консоль слово `Empty!`, если в инпуте пустое значение.

// Находим инпут с ID "firstnameInput"
const firstnameInput = document.querySelector('#firstnameInput');

// Добавляем обработчик события "blur" (потеря фокуса)
firstnameInput.addEventListener('blur', () => {
    if (firstnameInput.value === '') {
        console.log('Empty!');
    }
});

// 6. На событие утери фокуса в инпуте с id=firstnameInput, добавить обработчик. Он должен посмотреть, есть ли в инпуте значение. Если нет - добавить этому инпуту класс `errorInput`. Если есть - убрать этот класс
// Находим инпут с ID "firstnameInput"
const firstnameInput5 = document.querySelector('#firstnameInput');

// Добавляем обработчик события "blur" (потеря фокуса)
firstnameInput.addEventListener('blur', () => {
    if (firstnameInput.value === '') {
        firstnameInput.classList.add('errorInput'); // Добавляем класс, если пусто
    } else {
        firstnameInput.classList.remove('errorInput'); // Убираем класс, если есть значение
    }
});

// 7. На событие клика по кнопке с id=firstOuterButton, добавить обработчик, который проверит, есть ли в инпутах firstnameInput, lastnameInput значения. Если хотя бы в одном значение пустое - выводить в консоль сообщение "Error".

// Находим кнопку с ID "firstOuterButton"
const firstOuterButton6 = document.querySelector('#firstOuterButton');

// Добавляем обработчик события клика
firstOuterButton.addEventListener('click', () => {
    // Находим инпуты
    const firstnameInput = document.querySelector('#firstnameInput');
    const lastnameInput = document.querySelector('#lastnameInput');

    // Проверяем значения
    if (firstnameInput.value === '' || lastnameInput.value === '') {
        console.log('Error'); // Выводим сообщение, если хотя бы одно значение пустое
    }
});





function handleInputEvent(event) {
  if (event.keyCode === 65) {
    event.preventDefault();
  }
}
const input = document.querySelector('#firstnameInput');
input.addEventListener('keydown', handleInputEvent);


/**
 * для инпута lastnameInput реализовать ограничение по длине - не больше 10 символов
 * то есть, если длина значения равна 10 символам, то новые символы НЕ добавляем, игнорируем событие keydown
 */

// Находим инпут с ID "lastnameInput"
const lastnameInput = document.querySelector('#lastnameInput');

// Добавляем обработчик события "keydown"
lastnameInput.addEventListener('keydown', (event) => {
    // Проверяем длину значения и код нажатой клавиши
    if (lastnameInput.value.length >= 10 && event.key !== 'Backspace') {
        event.preventDefault(); // Игнорируем событие, если длина уже 10 символов
    }
});