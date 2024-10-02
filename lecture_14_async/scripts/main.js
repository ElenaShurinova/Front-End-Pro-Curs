// 1. Написать блок кода, который выведет в консоль фразу "5 seconds passed" спустя 5 секунд после загрузки скрипта.

// setTimeout(function() {
//   console.log("5 seconds passed");
// }, 5000);

// // 2. Написать блок кода, который запросит у пользователя время задержки в СЕКУНДАХ (через `prompt`). Нужно спустя это количество секунд, вывести в консоль сообщение "Hey there!".

// // Запрашиваем у пользователя время задержки в секундах
// const seconds = prompt("Введите время задержки в секундах:");

// // Преобразуем введенное значение в миллисекунды
// const milliseconds = seconds * 1000;

// // Устанавливаем таймер для вывода сообщения через указанное время
// setTimeout(function() {
//     console.log("Hey there!");
// }, milliseconds);

// const seconds1 = +prompt('Enter timeout in seconds');

// setTimeout( () => {
//   console.log('Hey there!');
// }, seconds * 1000);

// 1. Написать блок кода, который будет планировать вывод в консоль текста "Delayed message" через 5 секунд после запуска скрипта. Запросить у пользователя ввод слова (через prompt). Если пользователь ввел `cancel` - отменить вывод в консоль.


// Устанавливаем таймер для вывода сообщения через 5 секунд
// const timeoutId = setTimeout(function() {
//   console.log("Delayed message");
// }, 5000);

// // Запрашиваем у пользователя ввод слова
// const word = prompt("Введите слово:");

// // Если пользователь ввел "cancel", отменяем таймер
// if (word === "cancel") {
//   clearTimeout(timeoutId);
//   console.log("Вывод сообщения отменен.");
// }

// 2. Делаем блок на странице, который будет запускать отложенное выполнение, и заодно вспоминаем работу с DOM. Нужно написать функцию `renderDelayedBlock`. Она должна будет сделать инпут, в который будем вводить задержку в секундах, и кнопку "Запуск". При нажатии на кнопку "Запуск", нужно через N секунд вывести сообщение "Delayed message". N - это кол-во секунд, введенное в инпуте.

// Функция для создания блока с инпутом и кнопкой
function renderDelayedBlock() {
  // Находим контейнер для нашего блока
  const app = document.getElementById('app');

  // Создаем элементы инпута и кнопки
  const input = document.createElement('input');
  input.type = 'number';
  input.placeholder = 'Введите задержку в секундах';

  const button = document.createElement('button');
  button.textContent = 'Запуск';

  // Добавляем инпут и кнопку в контейнер
  app.appendChild(input);
  app.appendChild(button);

  // Добавляем обработчик события на кнопку
  button.addEventListener('click', () => {
      const delaySeconds = parseInt(input.value, 10);

      // Проверка корректности ввода
      if (isNaN(delaySeconds) || delaySeconds < 0) {
          alert('Пожалуйста, введите корректное количество секунд.');
          return;
      }

      // Устанавливаем таймер для вывода сообщения через N секунд
      setTimeout(() => {
          console.log('Delayed message');
      }, delaySeconds * 1000);
  });
}

// Вызов функции для отображения блока на странице
renderDelayedBlock();

// 3. Дорабатываем наш блок. Добавляем кнопку "Отмена". Изначально она должна быть скрыта (рекомендуется воспользоваться CSS).
//  - когда мы нажимаем на кнопку "Запуск", мы показываем кнопку "Отмена".
//  - при нажатии на кнопку "Отмена", нам нужно отменить запланированное в `setTimeout` выполнение.
//  - если выполнение все же произошло (т.е. функциональность внутри `setTimeout` выполнилась), то кнопку "Отмена" скрываем.

     // Функция для создания блока с инпутом и кнопками
     function renderDelayedBlock() {
      // Находим контейнер для нашего блока
      const app = document.getElementById('app');

      // Создаем элементы инпута и кнопок
      const input = document.createElement('input');
      input.type = 'number';
      input.placeholder = 'Введите задержку в секундах';

      const startButton = document.createElement('button');
      startButton.textContent = 'Запуск';

      const cancelButton = document.createElement('button');
      cancelButton.textContent = 'Отмена';
      cancelButton.id = 'cancelButton';

      // Добавляем инпут и кнопки в контейнер
      app.appendChild(input);
      app.appendChild(startButton);
      app.appendChild(cancelButton);

      let timeoutId;

      // Обработчик для кнопки "Запуск"
      startButton.addEventListener('click', () => {
          const delayInSeconds = parseInt(input.value, 10);

          // Проверка корректности ввода
          if (isNaN(delayInSeconds) || delayInSeconds < 0) {
              alert('Пожалуйста, введите корректное количество секунд.');
              return;
          }

          // Устанавливаем таймер для вывода сообщения через N секунд
          timeoutId = setTimeout(() => {
              console.log('Delayed message');
              cancelButton.style.display = 'none'; // Скрываем кнопку "Отмена" после выполнения
          }, delayInSeconds * 1000);

          cancelButton.style.display = 'inline'; // Показываем кнопку "Отмена"
      });

      // Обработчик для кнопки "Отмена"
      cancelButton.addEventListener('click', () => {
          clearTimeout(timeoutId); // Отменяем таймер
          console.log('Запланированное выполнение отменено.');
          cancelButton.style.display = 'none'; // Скрываем кнопку "Отмена"
      });
  }

  // Вызов функции для отображения блока на странице
  renderDelayedBlock();

//   3. Дорабатываем наш блок. Добавляем кнопку "Отмена". Изначально она должна быть скрыта (рекомендуется воспользоваться CSS).
//  - когда мы нажимаем на кнопку "Запуск", мы показываем кнопку "Отмена".
//  - при нажатии на кнопку "Отмена", нам нужно отменить запланированное в `setTimeout` выполнение.
//  - если выполнение все же произошло (т.е. функциональность внутри `setTimeout` выполнилась), то кнопку "Отмена" скрываем.

// function renderDelayedBlock() {
//   const main = document.querySelector('main');

//   const input = document.createElement('input');
//   const btn = document.createElement('button');
//   const btnCancel = document.createElement('button');
//   input.placeholder = 'delay time';
//   btn.textContent = 'Start';
//   btnCancel.textContent = 'Cancel';
//   btnCancel.classList.add('hidden');

//   main.append(input, btn, btnCancel);

//   let timeoutId;

//   btn.addEventListener('click', () => {
//       // показать кнопку btnCancel
//       btnCancel.classList.remove('hidden');

//       timeoutId = setTimeout(() => {
//           console.log('Delayed message!');
//           // скрыть кнопку btnCancel
//           btnCancel.classList.add('hidden');
//       }, +input.value * 1000);
//   });

//   btnCancel.addEventListener('click', () => {
//       // очистить таймер 
//       clearTimeout(timeoutId);
//       console.log('Запланированное выполнение отменено.');
//       // скрыть кнопку btnCancel
//       btnCancel.classList.add('hidden');
//   });
// }

// // Вызов функции для отображения блока на странице
// renderDelayedBlock();

// // 1. Написать блок кода, который каждые 2 секунды будет выводить в консоль текст "2 seconds passed!".
// // 2. Доработать блок кода из первой задачи - после пятого сообщения прекратить выполнение этого блока.

// let count = 0;
// const intervalId = setInterval(() => {
//   console.log('2 seconds passed!');
//   count++;
//  if (count >=5) {
//   clearInterval(intervalId);
//  }
// },2000);

// 3. Добавляем на страницу текущие дату и время. Нужно добавить в разметку блок, в котором должны отображаться текущие дата и время, вида `01.01.2000 11:23:55`. И нужно сделать так, чтобы дата и время отображались актуальные (т.е. обновлять текст ежесекундно).

const paragraph = document.querySelector('.currentTime');

const intervalId1 = setInterval( () => {
  paragraph.textContent = new Date().toLocaleTimeString();
}, 1000);





