// function makeGreetingText (userName = User,userAge = 18){
// let str;
// if (userAge >= 21) {
//     str = 'совершеннолетний'

// }

//     else {
//         str = 'несовершеннолетний'

//     }
//     return 'Привет ' + userName + 'ты ' + str + '.';
// }



// console.log( makeGreetingText('Vasy',18) );
// console.log( makeGreetingText('Pety',22) );

// function makeGreetingText (userName = 'User',userAge = 18){
// let str;
// if (userAge >= 21) {
//     str = 'совершеннолетний'

// }

//     else {
//         str = 'несовершеннолетний'

//     }
//     return 'Привет ' + userName + 'ты ' + str + '.';
// }


арппа
// console.log( makeGreetingText('Vasy',18) );

// function circumFerence (r) {
//     const pi = 3.14;
//     return pi * r * r; 
// }




let uter = 'Outer variable';

function test() {
  let innerVariable = 'Inner variable';
  console.log(innerVariable); // Inner variable
  console.log(outerVariable); // Outer variable
}

console.log(outerVariable); // Outer variable
console.log(innerVariable); // Error: innerVariable is not defined

function throwCoin(averse, reverse) {
    let result = Math.random();
    if (result < 0.5) averse();
    else reverse();
  }
  ```
  
  Это пример функции, имитирующей подбрасывание монетки. Если выпал "орел", то вызываем колбэк averse, иначе - вызываем колбэк reverse. То есть, мы просто указываем аргументы функции, и в нужный момент мы их можем вызвать - потому что предполагаем передавать в эти аргументы другие функции.
  
  Вот пример использования:
  ```
  function averseCallback() {
    console.log('Averse!');
  }
  
  function reverseCallback() {
    console.log('Reverse!');
  }
  
  throwCoin(averseCallback, reverseCallback); // **

//   Написать функцию `greetAdult`, которая примет возраст 
// пользователя, и два колбэка. Первый колбэк нужно будет 
// вызывать, если пользователь старше 21, 
// а второй - если младше.

// function accessGranted() {
//     console.log('Hello, welcome to our shop!');
//   }
//   function accessDenied() {
//     console.log('Sorry, try again later')
//   }
//   function greetAdult(userAge, adultCallback, minorCallback) {
//     if (userAge > 21) {
//       adultCallback();
//     }
//     else {
//       minorCallback();
//     }
//   }
//   greetAdult(25, accessGranted, accessDenied);

//   function сallForEach (array, callback){
//     for (let i = 0; i < array.length; i++){
//         callback(array[i])
//     }
//   }
//   const array =[1,2,3];
//   function simpleCallback(){
//     console.log('Something')
//   }





  сallForEach(simpleArrya, simpleCallback)

  const sum = (a,b) => a + b;
  function getSum(a,b) {
    return a + b;
  }
  const manyLinesFunc = (a,b) => {
    console.log('Hey there!');
    return a + b;
  }

  const multiply = (a, b) => a * b;
  console.log(multiply(3,4));

  const checkThird = (number) => number % 3 === 0;
console.log(checkThird(2));
console.log(checkThird(15));

const sumArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum;
}