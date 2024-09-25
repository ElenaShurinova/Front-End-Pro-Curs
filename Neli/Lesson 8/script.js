
// const button = document.querySelector('.greeting_msg_btn');
// const paragraph = document.querySelector('.greeting_msg');


// button.addEventListener('click', () => {
    
//     paragraph.style.color = 'red';
// });

// 2. Создать красный квадрат (div.square) c размерами 300х300 px. При клике на button.square_btn перекрашивать квадрат в зеленый


// const square = document.querySelector('.square');
// const button = document.querySelector('.square_btn');


// button.addEventListener('click', () => {
    
//     square.style.backgroundColor = 'green';
// });

// Получаем элементы квадрата и кнопки
const square1 = document.querySelector('.square1');
const button = document.querySelector('.square1_btn');

// Добавляем обработчик события click на кнопку
button.addEventListener('click', () => {
    // Меняем цвет квадрата на синий и размеры на 100x100 px
    square1.style.backgroundColor = 'blue';
    square1.style.width = '100px';
    square1.style.height = '100px';
});

// Получаем элементы квадрата и кнопки
const square2 = document.querySelector('.square2');
const button1 = document.querySelector('.square2_btn');

// Добавляем обработчик события click на кнопку
button.addEventListener('click', () => {
    // Переключаем класс square2_change у квадрата
    square2.classList.toggle('square2_change');
});