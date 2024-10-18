const asyncNumbers = [
  new Promise(resolve => resolve(5)),
  new Promise(resolve => resolve(3)),
  new Promise(resolve => resolve(7)),
  new Promise(resolve => resolve(4)),
  new Promise(resolve => resolve(8)),
];

// Для задачи 9
const workers = [
  { name: 'Petr', work: () => new Promise( resolve => setTimeout(() => resolve('Corpus'), 700)) },
  { name: 'Vasilij', work: () => new Promise( resolve => setTimeout(() => resolve('Doors'), 1500)) },
  { name: 'Sergey', work: () => new Promise( resolve => setTimeout(() => resolve('Engine'), 3000)) },
  { name: 'Ivan', work: () => new Promise( resolve => setTimeout(() => resolve('Wheels'), 1000)) },
];

// Для задачи 10
const badWorkers = [
  { name: 'Worker1',
    work: () => new Promise( (resolve, reject) => setTimeout(() => Math.random() < 0.5 ? resolve('Corpus') : reject('Fail'), 700))
  },
  { name: 'Worker2',
    work: () => new Promise( (resolve, reject) => setTimeout(() => Math.random() < 0.5 ? resolve('Doors') : reject('Fail'), 1000))
  },
  { name: 'Worker3',
    work: () => new Promise( (resolve, reject) => setTimeout(() => Math.random() < 0.5 ? resolve('Engine') : reject('Fail'), 3000))
  },
  { name: 'Worker4',
    work: () => new Promise( (resolve, reject) => setTimeout(() => Math.random() < 0.5 ? resolve('Wheels') : reject('Fail'), 2000))
  },
];


// 1. Пишем универсальную функцию отправки GET-запроса, которая будет запрашивать данные с указанного УРЛ, и возвращать JSON. Назовем ее `jsonRequest`. В аргументах она принимает URL, к которому надо обратиться. Она должна сделать запрос по этому адресу, затем преобразовать результат в JSON, и вернуть "готовый к употреблению" результат. Используем синтаксис async/await.

async function jsonRequest(url) {
  
    const response = await fetch(url); // Делаем запрос по URL
    const res = await response.json(); // Преобразуем ответ в JSON
    return res; // Возвращаем данные

}

// Пример использования функции
jsonRequest('https://dummyjson.com/products')
  .then(res => console.log(res)) // Если запрос успешный, выводим данные в консоль


  // }2. С помощью нашей функции, обратимся к адресу `https://dummyjson.com/products`, в ответе посчитать общую стоимость товаров в массиве `products`.


  
  async function getTotalCost(url) {
  
      const res = await jsonRequest(url); 
      const products = res.products; 
      const totalSum = products.reduce((sum, val) => sum + val.price, 0); 
      console.log('Общая стоимость товаров:', totalSum); 
  
  }

  

  getTotalCost('https://dummyjson.com/products');

  // 3. Дорабатываем нашу функцию `jsonRequest`. Теперь, если в функцию передан пустой url, то нужно генерировать свое исключение с текстом "Please, provide the URL!".


  async function jsonRequest(url) {
    if (!url) {
      throw new Error("Please, provide the URL!"); // Генерируем исключение, если URL пустой
    }
  
    try {
      const response = await fetch(url); // Делаем запрос по URL
      if (!response.ok) {
        throw new Error(`something went wrong: ${response.status}`); // Обработка ошибок
      }
      const data = await response.json(); // Преобразуем ответ в JSON
      return data; // Возвращаем данные
    } catch (error) {
      console.error('Ошибка при получении данных:', error); // Если ошибка, выводим её в консоль
      throw error; // Повторно выбрасываем ошибку для обработки в вызывающем коде
    }
  }
  
  // Функция для подсчета общей стоимости товаров
  async function getTotalCost(url) {
    try {
      const data = await jsonRequest(url); // Получаем данные с API
      const products = data.products; // Извлекаем массив products из данных
      const totalCost = products.reduce((sum, product) => sum + product.price, 0); // Считаем общую стоимость
      console.log('Общая стоимость товаров:', totalCost); // Выводим общую стоимость в консоль
    } catch (error) {
      console.error('Не удалось получить общую стоимость товаров:', error); // Если ошибка, выводим её в консоль
    }
  }
  
  // Пример использования функции
  getTotalCost('https://dummyjson.com/products');


  // 4. Напишем функцию проверки URL-адреса, `checkUrl`. Она будет принимать в аргументах адрес, и должна проверить, доступен ли он. То есть, обратиться к этому адресу, и если запрос успешный (статус от 200 до 299) - то вернуть true, иначе - false.



  // async function checkUrl(url) {
  //   if (!url) {
  //     throw new Error("Please, provide the URL!"); // Генерируем исключение, если URL пустой
  //   }
  
  //   try {
  //     const response = await fetch(url); // Делаем запрос по URL
  //     if (response.ok) {
  //       return true; // Если статус от 200 до 299, возвращаем true
  //     } else {
  //       return false; // В остальных случаях возвращаем false
  //     }
  //   } catch (error) {
  //     console.error('Ошибка при проверке URL:', error); // Если произошла ошибка, выводим её в консоль
  //     return false; // Если произошла ошибка, возвращаем false
  //   }
  // }
  
  // // Пример использования функции
  // checkUrl('https://dummyjson.com/products')
  //   .then(isAvailable => console.log(`URL доступен: ${isAvailable}`))
  //   .catch(error => console.error('Ошибка проверки URL:', error));


    // 8. У нас есть массив `asyncNumbers` - это массив, который содержит несколько промисов, которые будут зарезолвлены числами. Нужно посчитать сумму этих чисел.

    async function sumAsyncNumbers(asyncNumbers) {
      
        const numbers = await Promise.all(asyncNumbers); 
        const sum = numbers.reduce((acc, num) => acc + num, 0); 
        return sum; 

        
      
    }
  
    sumAsyncNumbers(asyncNumbers)


    // 9. У нас есть массив с рабочими предприятия, которые работают на конвейере и собирают машины. У каждого объекта с данными рабочего, есть функция `work` - рабочий выполняет свою часть работы. Эта функция возвращает промис, который будет зарезолвлен той деталью, которую делает этот рабочий. Нужно написать функцию `assembleCar`, которая будет принимать на вход массив рабочих. Она пройдется по массиву рабочих, запустит для каждого его функцию `work`, соберет результаты в массив, и вернет этот массив. В этой задаче, работу можно запускать параллельно.

    async function assembleCar(workers) {
      
        // Создаем массив промисов, запуская функцию work для каждого рабочего
        const workPromises = workers.map(worker => worker.work());
        
        // Ожидаем выполнения всех промисов и собираем результаты в массив
        const results = await Promise.all(workPromises);
        
        // Возвращаем массив деталей
        return results;
     
    }
   
    
    assembleCar(workers)
      

    // 10. Усложним задачу. Предположим, что наши работы могут выполняться последовательно - то есть, одна за другой.


    async function assembleCarLong(workers) {
      const results = [];
    
      for (let i = 0; i < workers.length; i++) {
        const res = await workers[i].work();
        console.log(workers[i].name, res)
        results.push(res);
      }
      return results;
    }
    
    assembleCarLong(workers).then(res => console.log(res))
    // 11. Открыли новый цех, и на него набрали рабочих меньшей квалификации - они иногда косячат. Нужно, чтобы конвейер продолжал работу, несмотря на их "косяки". То есть, нужно добавить обработку исключительных ситуаций - предусмотреть неуспешные завершения промисов.

    async function assembleCar(workers) {

      const results = [];
      for (let i = 0; i < workers.length; i++) {
        try {
          const result = await workers[i].work();
          results.push(result);
        }
        catch(err) {
          console.log(err);
        }
      }
      return results;
    }
  