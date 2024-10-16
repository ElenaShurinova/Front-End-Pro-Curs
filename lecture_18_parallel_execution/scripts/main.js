function randomPromiseCreator() {
  return new Promise( (resolve, reject) => {
    const rand = Math.random();
    if (rand < 0.5) resolve('Success!');
    else reject(new Error('Just an error'));
  });
}

const makeRacer = (racer, car) => {
  return new Promise( resolve => {
    const raceTime = Math.random * 1000;
    setTimeout(resolve, raceTime, `Racer ${racer} on car ${car} finished! Time: ${raceTime}`)
  });
}

// 1. Создать 2 промиса. Первый должен быть зарезолвлен через 1 секунду числом 10, второй - через 2 секунды, числом 15. Дождаться выполнения обоих промисов, и вывести в консоль слово `fulfilled`.

const promise1 = new Promise(resolve => setTimeout(resolve, 1000, 10));
const promise2 = new Promise(resolve => setTimeout(resolve, 2000, 15));

Promise.all([promise1, promise2])
    .then(() => console.log('fulfilled'));

    // 2. Дорабатываем задачу из п.1. Теперь надо вывести в консоль сумму результатов промисов.

    
Promise.all([promise1, promise2])
.then(results => {
    const sum = results.reduce((acc, value) => acc + value, 0);
    console.log(sum);
});

// 3. В скрипте есть функция `randomPromiseCreator`. С ее помощью, создать 3 промиса, дождаться выполнения их всех. В случае успеха - вывести в консоль результаты промисов. В случае неуспеха - вывести причину ошибки.

function randomPromiseCreator() {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    if (rand < 0.5) resolve('Success!');
    else reject(new Error('Just an error'));
  });
}

// Создаем три промиса
const promiseA = randomPromiseCreator();
const promiseB = randomPromiseCreator();
const promiseC = randomPromiseCreator();

// Используем Promise.all для ожидания выполнения всех трех промисов
Promise.all([promiseA, promiseB, promiseC])
  .then(results => {
    // В случае успеха выводим результаты всех промисов
    console.log('Results:', results);
  })
  .catch(error => {
    // В случае неуспеха выводим причину ошибки
    console.log('Error:', error);
  });

  // 4. Функция requestProductsAndCategories для выполнения двух GET-запросов.

async function requestProductsAndCategories() {
    const productsUrl = 'https://dummyjson.com/products';
    const categoriesUrl = 'https://dummyjson.com/products/categories';

    try {
        const [products, categories] = await Promise.all([
            fetch(productsUrl).then(response => response.json()),
            fetch(categoriesUrl).then(response => response.json())
        ]);
        return [products, categories];
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Пример вызова функции
requestProductsAndCategories().then(results => console.log(results));



function requestProductsAndCategories() {
  const promise1 = fetch(`https://dummyjson.com/products`);
  const promise2 = fetch(`https://dummyjson.com/products/categories`);

  Promise.all( [ promise1, promise2 ] )
    .then( res => {
      const parsedArray = res.map( elem => elem.json() );
      return Promise.all( parsedArray );
    })
    .then( parsedResponses => console.log(parsedResponses) )
    .catch( err => console.log(err));
}

requestProductsAndCategories();



///////////////////////////////////////////////////////////////

async function requestProductsAndCategories() {
  try {
    const promise1 = fetch(`https://dummyjson.com/products`);
    const promise2 = fetch(`https://dummyjson.com/products/categories`);

    const responses = await Promise.all( [ promise1, promise2 ] );
    const parsedArray = responses.map( elem => elem.json() );
    const results = await Promise.all( parsedArray);
    console.log(results);
  }
  catch(err) {
    console.log(err)
  }
}


// 5. Пишем функцию `sendMultipleRequests`. Эта функция должна принять произвольное количество аргументов - строк с адресами, к которым мы хотим обратиться (методом GET). И нужно дождаться ответа по всем адресам, преобразовать все результаты в json, и вернуть массив с результатами запросов.



// 1. Создать 2 промиса, первый должен быть успешно завершен числом 76 спустя 1.5 секунды, а второй - числом 106, спустя 2 секунды. С помощью `Promise.race` дождаться того, кто завершится первым, и вывести результат в консоль.

const promise11 = new Promise(resolve => setTimeout(resolve, 1500, 76));
const promise22 = new Promise(resolve => setTimeout(resolve, 2000, 106));

Promise.race([promise11, promise22])
  .then(result => console.log('finish:', result))
  // .catch(error => console.error('Error:', error));


  // 2. У нас есть функция `makeRacer`, она создает гонщика для заезда. Нужно создать нескольких гонщиков, и с помощью `Promise.race` имитировать заезд.

  function makeRacer(name, time) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(name);
      }, time);
    });
  }
  
  // Создаем гонщиков
  const racer1 = makeRacer('Racer 1', 1000);
  const racer2 = makeRacer('Racer 2', 1500);
  const racer3 = makeRacer('Racer 3', 1200);
  
  // Используем Promise.race для имитации заезда
  Promise.race([racer1, racer2, racer3])
    .then(winner => console.log('The winner is:', winner))
    .catch(error => console.error('Error:', error));


    //////////////////////////////////////////////////////////

    function makeRacer(name, time) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(name);
        }, time);
      });
    }
    
    async function race() {
      // Создаем гонщиков
      const racer1 = makeRacer('Racer 1', 1000);
      const racer2 = makeRacer('Racer 2', 1500);
      const racer3 = makeRacer('Racer 3', 1200);
    
      try {
        // Используем Promise.race для имитации заезда
        const winner = await Promise.race([racer1, racer2, racer3]);
        console.log('The winner is:', winner);
      } catch (error) {
        console.error('Error:', error);
      }
    }
    
    // Запускаем функцию race
    race();