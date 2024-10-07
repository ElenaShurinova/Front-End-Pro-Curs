function asyncFunction() {
  return setTimeout( () => {
    resolve('Hey there!');
  }, 1000);
}

// 1. Пишем первый промис. Он должен быть успешно завершен числом 345.
const promise1 = new Promise((resolve) => {
  resolve(345);
});

promise1.then((res) => {
  console.log(res); 
});
console.log( 'hello')


// 2. Пишем промис, который должен быть успешно завершен числом 106 через 2 секунды после запуска (т.е. надо завершить промис спустя 2 секунды).

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(106);
  }, 2000);
});

promise2.then( (res) => console.log(res) );

// 3. Пишем промис, который должен быть успешно завершен объектом со свойствами name = Vasya, age = 21, через 3 секунды после запуска

const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ name: "Vasya", age: 21 });
  }, 3000);
});

promise3.then( (res) => console.log(res) );

// **Закрепим практикой**
// 1. Написать промис, который будет завершен ошибкой. В тексте ошибки укажите "Insufficient privilegies".
// 2. Написать промис, которы будет завершен ошибкой с текстом "Something went wrong!" спустя 2 секунды после запуска. Обработчик результата должен вывести его в консоль.

const promise = new Promise( (resolve, reject) => {
  reject( new Error('Insufficient priviliges') );
})
.then( res => console.log(res) )
.catch( err => console.log(err) );



// **Закрепим комплексно практикой**
// 1. Напишем промис, который будет случайным образом завершаться успешно или неуспешно. В промисе, нужно взять случайное значение (используем `Math.random`). Если это значение больше либо равно 0.5 - завершаем промис успехом, текстом `Success`. Если меньше 0.5 - то завершаем ошибкой, с текстом `Error`.
// 2. Написать промис, который через 2 секунды будет успешно завершен текстом "Successfully finished!". Этот текст нужно вывести в консоль.
// 3. Теперь задача через 2 секунды завершить промис "неуспехом", с текстом "Something went wrong!", и вывести результат в консоль.

const randomPromise = new Promise((resolve, reject) => {
  const random = Math.random(); // Получаем случайное число от 0 до 1
  if (random >= 0.5) {
    resolve("Success"); // Если число больше или равно 0.5, промис завершается успешно
  } else {
    reject(new Error("Error")); // Если число меньше 0.5, промис завершается ошибкой
  }
});

randomPromise
  .then((result) => {
    console.log(result); // Выводим "Success" если промис завершился успешно
  })
  .catch((error) => {
    console.error(error.message); // Выводим "Error" если промис завершился ошибкой
  });


// //////////////////////////////////////////////////////////////////////////////////////////////////////////

  const successAfter = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Successfully finished!"); 
    }, 2000);
  })
  
  .then((result) => {
    console.log(result); 
  });

  // /////////////////////////////////////////////////////////////////////////////////////////////////

  const successAfter2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Something went wrong!")); // Завершаем промис с ошибкой через 2 секунды
    }, 2000);
  });
  
  successAfter2.catch((error) => {
    console.error(error.message); // Выводим "Something went wrong!" через 2 секунды
  });


  // 4. Обеспечить вывод в консоль текста "Will appear in all cases" после завершения/отвержения промиса (т.е. в любом случае).
// 5. В скрипте есть функция `asyncFunction`. Изначально задумывалось, что она вернет строку через одну секунду после вызова. Но что-то пошло не так.. Перепишите функцию, чтобы она возвращала значение через одну секунду после вызова, и чтобы этим результатом можно было бы воспользоваться. Задача к обсуждению.

const randomPromise1 = new Promise((resolve, reject) => {
  
})

  .finally(() => {
    console.log("Will appear in all cases");
  });

  // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function asyncFunction() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hey there");
      }, 1000);
    });
  }
  
  // Использование функции
  asyncFunction().then((result) => {
    console.log(result); // Выведет "This is the result" через одну секунду
  });