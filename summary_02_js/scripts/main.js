// Здесь будем писать код

//let myString = 'Hello!'; // объявляем переменную myString, инициализируем значением `Hello!`
// ... Other code...
// myString = 'World!'; // теперь в переменную myString записано значение World!

// let first = 1;
// const PI = 3.14;
// console.log (first);
// console.log (PI);

// let myNum = 21;
// let myString = `You are adult if you are older 
// than ${myNum}`;
// ```
// Здесь мы говорим "возьми все, что внутри конструкции 
// ${}, и вычисли это, как отдельное выражение. 
// Результат преобразуй в строку, и приклей к нашей строке".

// let my_date = 23;
// console.log(`my birthday is ${my_date} marz`)

// let my_month = 'marz';
// console.log(`my birthday is ${my_month} month`)

// const ADULT = 21; // возраст совершеннолетия
// const myAge = 18; // кого мы обманываем...
// // проверяем, является ли мой возраст больше либо равен возрасту совершеннолетия
// if (myAge >= ADULT) {
//   // сюда мы попадем только если myAge больше либо равен 21. Спойлер: не попадем.
//   console.log('Access allowed!');
// }

//  if + else - иногда нам мало рассмотреть только условие, надо рассмотреть еще и случай, когда условие не выполняется. Тут нам поможет `else`.

// const ADULT = 21;
// const myAge = 18;
// if (myAge >= ADULT) {
//   // сюда мы попадем только если myAge больше либо равен 21.
//   console.log('Access allowed!');
// }
// else {
//   // сюда попадем если myAge меньше 21, то есть условие в if не выполняется.
//   console.log('Access denied!');
// }


// const number = +prompt('Enter your age!');
// // const message = myAge > 21 ? 'Hello!'

// if (number %2 === 0 ) {
    
//       console.log('Четное')
// }
// else {
//     console.log("Нечетное")
// }

// const num = +prompt('Enter your age!');
// const message = num %2 === 0  ? 'Четное' : 'Нечетное';
// console.log(message)

// const num = +prompt('Enter a number');
// console.log( num % 2 === 0 ? 'Even' : 'Odd' );

// const number = +prompt('Enter a number');
// if (number %2 === 0 && number %3 === 0) {
    
//       console.log('Кратно 2 и 3')
// }
// else if (number %3 === 0){
//     console.log("Кратно трем")
// }
// else if (number %2 === 0)  {
//     console.log("Кратно 2 ")

// }
// else {
//     console.log("Не кратно 2 и 3")
// }

// Вот пример цикла с предусловием. Он выполнится 2 раза.

// let counter = 0;
// while (counter < 2) {
//   console.log('я ничего два раза не повторяю!');
//   counter += 1;
// }


// А вот пример с постусловием. Тоже выполнится 2 раза.

// let counter = 0;
// do {
//   console.log('я ничего два раза не повторяю!');
//   counter += 1;
// } while (counter < 2);

// И вот пример цикла с параметром

// for (let counter = 0; counter < 2; counter++) {
//   console.log('я ничего два раза не повторяю!');
// }

// for (let i = 0; i < 10; i++) {
//     console.log(`Iteration ${i}`);
//     if (i === 5) break;
//   }
// debugger
//   for (let i = 0; i < 10; i++) {
//     if (i % 2 !== 0) continue;
//     console.log(`Iteration ${i}`);
//   }

// let counter = 0;
// while (counter < 10) {
//   console.log('Простая интеграция');
//   counter += 1;
// }




// let counter1 = 0;
// do {
//   console.log('Простая интеграция');
//   counter += 1;
// } while (counter1 < 10);



// for (let counter = 0; counter < 2; counter++) {
//   console.log('Простая интеграция');
// }

const num = +prompt('Enter a number');
let sum = 0
for(i = 1; i <= num; i++) {
    
    sum = sum + i;
  }

  console.log(sum);