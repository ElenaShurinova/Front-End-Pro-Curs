function lottery() {
  let numbers = [1, 2, 3, 4, 5];

  return function() {
      if (numbers.length === 0) {
          return;
      }
      return numbers.pop();// ( для себя * (pop)  1. Удаляет последний элемент массива.
                                                //2. Возвращает удаленный элемент.)
  };
}



const lot = lottery();

console.log(lot()); 
console.log(lot()); 
console.log(lot()); 
console.log(lot()); 
console.log(lot()); 
console.log(lot()); 

/////////////////////////////////////////////////////////////

function lottery(max) {
  let numbers = [];
  for (let i = 0; i < max; i++) {
      numbers.push(Math.floor(Math.random() * 100) + 1);
  }
  //(для себя* random = возвращет случайное число, floor = округляет вниз до целого)

  return function() {
      if (numbers.length === 0) {
          return;
      }
      return numbers.pop();
  };
}

const lot1 = lottery(5);

console.log(lot1()); 
console.log(lot1()); 
console.log(lot1()); 
console.log(lot1()); 
console.log(lot1()); 
console.log(lot1()); 

/////////////////////////////////////////////////////////////////


function progress(base) {
  let current = 0; // хранит текущее значение прогресии

  return function() {
      current += base; 
      return current;
  };
}

const generator = progress(2); // и каждый раз мы увеличиваем current на 2

console.log(generator()); 
console.log(generator()); 
console.log(generator()); 
console.log(generator()); 
console.log(generator()); 

////////////////////////////////////////////////////////////////

function fibonacciGenerator() {////для себя :  Числа Фибоначчи — это последовательность чисел, в которой каждое последующее число равно сумме двух предыдущих
  let num1 = 1, num2 = 1;

  return function() {
      let next = num1 + num2;  // вычисляем следующее число Фибоначчи
      num1 = num2;  //обновляем значения: num1 становится num2
      num2 = next; //num2 становится next (следующим числом Фибоначчи)
      return next;
  };
}

const generator1 = fibonacciGenerator();

console.log(generator1()); 
console.log(generator1()); 
console.log(generator1()); 
console.log(generator1()); 
console.log(generator1()); 
console.log(generator1()); 