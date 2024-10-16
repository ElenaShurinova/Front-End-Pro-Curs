function encryptData(data) {
  return new Promise( (resolve) => {
    resolve(btoa(data));
  })
}

function decryptData(encrypted) {
  return new Promise( (resolve) => {
    resolve(atob(encrypted));
  })
}

function makeRequest(requestBody) {
  return new Promise( resolve => {
    console.log('Sending protected', requestBody)
    setTimeout( resolve, 1500, {status: 200, ok: true} );
  });
}

// 1. Пристрелочная задача. Написать асинхронную функцию, которая будет обращаться за списком товаров по адресу `https://dummyjson.com/products`, и выводит результат консоль. Использовать синтаксис async/await.

function getProducts() {
  fetch('https://dummyjson.com/products')
      .then(resp => resp.json())
      .then(parsed => {
          console.log(parsed);
      });
}

getProducts();



function getProducts() {
  fetch('https://dummyjson.com/products')
      .then(resp => resp.json())
      .then(parsed => {
          console.log(parsed);
      });
}

// 2. Написать функцию `simplePromise`. Она должна создавать промис, который будет зарезолвлен через 3 секунды словом 'Success'.

// function simplePromise() {
//   return new Promise((resolve) => {
//       setTimeout(() => {
//           resolve('Success');
//       }, 3000);
//   });
// }


// 3. Написать функцию `useSimplePromise`, она должна быть асинхронной. Нужно внутри этой функции вызвать функцию `simplePromise`, дождаться результата, и вывести результат в консоль.
function simplePromise() {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve('Success');
      }, 3000);
  });
}

async function useSimplePromise() {
  
      const result = await simplePromise();
      console.log(result);  
  } 

useSimplePromise();


// 4. Написать функцию `promiseFactory`, которая будет создавать промисы. В аргументах она принимает `isSuccess`, `timeout`, `promiseResult`. Функция должна создать промис. Если `isSuccess = true`, то через `timeout` секунд промис должен быть зарезолвлен аргументом `promiseResult`. А если `isSuccess = false`, то через `timeout` секунд нужно вызвать `reject` с `promiseResult`.

function promiseFactory(isSuccess, timeout, promiseResult) {
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      if (isSuccess) resolve(promiseResult);
      else reject(promiseResult);
    }, timeout * 1000 );
  });
}


// 5. Написать функцию `sendProtectedData`. Она примет в аргументе строку. Нужно "зашифровать" эту строку вызовом функции `encryptData`, дождаться результата, и отправить результат вызовом функции `makeRequest`. Дождаться результата, и вернуть его из этой функции.

async function sendProtectedData(string) {
   {
      const encryptedData = await encryptData(string); 
      const result = await makeRequest(encryptedData);  
      return result;  
  } 
}

sendProtectedData().then(result => {
  console.log(result); 
});


// 1. Есть блок опасного кода, который вызывает несуществующую функцию.
// ```
// console.log('Calling undefined function');
// const result = nonDefinedFunction();
// console.log('Final');

// Оберните его в `try-catch`, и в случае возникновения нештатной ситуации, выводите в консоль текст `Something went wrong!`.

console.log('Calling undefined function');

try {
    const res = nonDefinedFunction(); 
} catch (error) {
    console.log('Something went wrong!'); 
}

console.log('Final');

// 2. Есть фрагмент опасного кода. Оберните в `try-catch` только то, что считаете нужным. И в случае нештатных ситуаций, выводите в консоль сообщение `Whoops!`.
// ```
// const rand = Math.random();
// const res = rand < 0.5 ? function() { console.log('Hehehe'); } : null;
// res();
// console.log('And thats all, folks!');

const rand = Math.random();
const res = rand < 0.5 ? function() { console.log('Hehehe'); } : null;

try {
    res(); 
} catch (err) {
    console.log('Whoops!'); 
}

console.log('And thats all, folks!');

// 1. Пристрелочная. Написать функцию `smartSqrt` - она принимает на вход аргумент. Если аргумент больше либо равен 0 - то возвращает его квадратный корень. Иначе - нужно сгенерировать свое исключение с текстом "Не удалось извлечь квадратный корень!".

function smartSqrt(num) {
  if (num >= 0) {
      return Math.sqrt(num); // Возвращаем квадратный корень, если число неотрицательное
  } else {
      throw new Error("Не удалось извлечь квадратный корень!"); // Генерируем исключение для отрицательного числа
  }
}

  console.log(smartSqrt(9));   // Вывод: 3
  console.log(smartSqrt(-4));  // Генерирует исключение


  // 2. Вызвать написанную функцию для аргумента -9. Перехватить ошибку, и вывести в консоль сообщение ошибки.

  function smartSqrt(num) {
    if (num >= 0) {
        return Math.sqrt(num); // Возвращаем квадратный корень, если число неотрицательное
    } else {
        throw new Error("failed to get sqrt!"); // Генерируем исключение для отрицательного числа
    }
}


try {
    console.log(smartSqrt(-16)); 
} catch (err) {
    console.log(err.message);   
}




function promiseFactory (isSuccess, timeout, promiseResult) {
  return new Promise((resolve, reject) => {
     setTimeout(() => {
       isSuccess ? resolve(promiseResult) : reject(promiseResult);
     }, timeout * 1000);
   })
}

promiseFactory(false, 3, 'Something went wrong');



async function factoryPromise() {
  try {
      const result = await promiseFactory(false, 3, 'Something went wrong');
      console.log( result);
  } catch (error) {
      console.log('Error', error);
  }
}
factoryPromise();



// 2. Пишем универсальную функцию отправки GET-запроса, которая будет возвращать JSON. Назовем ее jsonRequest. В аргументах она принимает URL, к которому надо обратиться. Она должна сделать запрос по этому адресу, затем преобразовать результат в JSON, и вернуть "готовый к употреблению" результат. Используем синтаксис async/await.


async function jsonRequest(url) {
  try {
      const response = await fetch(url); // Выполняем GET-запрос по указанному URL
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`); // Проверяем статус ответа
      }
      const data = await response.json(); // Преобразуем ответ в JSON
      return data; // Возвращаем готовые к употреблению данные
  } catch (error) {
      console.error('Error during fetch:', error.message); // Обрабатываем и выводим ошибку
      throw error; // Пробрасываем ошибку дальше
  }
}

