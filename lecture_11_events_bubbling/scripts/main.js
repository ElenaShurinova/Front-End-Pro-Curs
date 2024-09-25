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

const bubblingBlock = document.querySelector('#bubblingBlock');
bubblingBlock.addEventListener('click', (event) => {
  if (event.target.nodeName === 'BUTTON' || event.target.nodeName === 'P') {
    console.log('Clickd inside block!')
  }
});

const bubblingBlock1 = document.querySelector('#bubblingBlock');

// Добавляем обработчик события click на bubblingBlock
bubblingBlock.addEventListener('click', (event) => {
  // Проверяем, является ли целевой элемент кнопкой
  if (event.target.nodeName === 'BUTTON') {
    // Получаем текстовое содержимое кнопки
    const buttonText = event.target.textContent;
    // Выводим сообщение в консоль
    console.log(`Кликнута кнопка ${buttonText}`);
  }
});

// Используем querySelector для поиска элемента с id bubblingBlock
const bubblingBlock2 = document.querySelector('#bubblingBlock');

// Добавляем обработчик события click на bubblingBlock
bubblingBlock.addEventListener('click', (event) => {
  // Проверяем, является ли целевой элемент кнопкой
  if (event.target.nodeName === 'BUTTON') {
    // Получаем текстовое содержимое кнопки
    const buttonText = event.target.textContent;
    // Выводим сообщение в консоль
    console.log(`Кликнута кнопка ${buttonText}`);
  }
  // Проверяем, является ли целевой элемент параграфом
  else if (event.target.nodeName === 'P') {
    // Выводим сообщение в консоль
    console.log('Clicked on paragraph!');
  }
});

// Используем querySelector для поиска элемента с id bubblingBlock
const bubblingBlock3 = document.querySelector('#bubblingBlock');

// Добавляем обработчик события click на bubblingBlock
bubblingBlock.addEventListener('click', (event) => {
  // Проверяем, является ли целевой элемент кнопкой
  if (event.target.nodeName === 'BUTTON') {
    // Получаем текстовое содержимое кнопки
    const buttonText = event.target.textContent;
    // Выводим сообщение в консоль
    console.log(`Кликнута кнопка ${buttonText}`);
  }
  // Проверяем, является ли целевой элемент параграфом с классом simpleParagraph
  else if (event.target.nodeName === 'P' && event.target.classList.contains('simpleParagraph')) {
    // Выводим сообщение в консоль
    console.log('Clicked on paragraph!');
  }
});


// document.addEventListener('click', (event) => {
//  console.log('Clicked on ${event.target.nodeName}`);
// });


const testInput1 = document.querySelector('#testInput');
testInput.addEventListener('keydown', (event) => {
  console.log(`Clicked on ${event.keyCode}`);
});







const testInput = document.querySelector('#testInput');

 function validateInput (event){
  if ([37, 39, 8].includes(event.keyCode)) return;

  if(event.keyCode < 48 || event.keyCode > 57){
    event.preventDefault()
  }
}
testInput.addEventListener('keydown', validateInput)


// Объект для хранения количества кликов
const analytics = {
  BUTTON: 0,
  P: 0,
  DIV: 0,
  INPUT: 0
};

// Функция для обработки кликов
function handleClick(event) {
  const nodeName = event.target.nodeName;

  // Увеличиваем счетчик в зависимости от типа узла
  if (nodeName === 'BUTTON') {
    analytics.BUTTON++;
  } else if (nodeName === 'P') {
    analytics.P++;
  } else if (nodeName === 'DIV') {
    analytics.DIV++;
  } else if (nodeName === 'INPUT') {
    analytics.INPUT++;
  }

  // Выводим текущее состояние счетчиков в консоль
  console.log(analytics);
}

// Добавляем обработчик события click на документ
document.addEventListener('click', handleClick);