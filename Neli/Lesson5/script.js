// 1. Написать функцию getPositiveNums, которая принимает массив с числами и возвращает массив только с положительными числами из входящего массива

// const getPositiveNums = arr => arr.filter(el => el > 0);

// console.log(getPositiveNums([1, 2, -3, -4, 5])); // [1, 2, 5]



// // 2. Написать функцию getLongStrings, которая принимает массив со строками и возвращает новый массив со строками длинее 10 символов (>10)

// const getLongStrings = arr => arr.filter(el => el.length > 10);

// console.log(getLongStrings(['hi', 'hello', 'good morning!', 'good night!'])); // ['good morning!', 'good night!']

// // 3. Написать функцию doublePosNums, которая принимает массив с числами и возвращает новый массив, в котором остались только положительные числа умноженые на 2

// const doublePositivNums = (arr) => arr.map(num => num > 0 ? num * 2 : num);

// console.log(doublePositivNums([1,2,-3,-4,5])); 


// const doublePosNums = (arr) => arr.filter(num => num > 0). map(num => num * 2 );

// console.log(doublePosNums([1,2,-3,-4,5])); 

// // 4. Написать функцию changeNums, принимающую массив с числами и вовзвращающую новый массив, в котором отрицательные числа заменены на 10, а положительные на 45

// const changeNums = arr => arr.map(el => el > 0 ? 45 : 10);

// console.log(changeNums([1, 2, -3, -4, 5])); // [45, 45, 10, 10, 45]


// // 5. Написать функцию getDoubledNums, принимающую массив с числами и вовзвращающую новый массив c положительными числами, умноженными на 10 и при этом превыщающие 100

// const getDoubledNums = arr => arr.filter(el => el > 0).map(el => el * 10).filter(el => el > 100);

// console.log(getDoubledNums([3, 40, 55, -10, 2])); // [400, 550]
// [3, 40, 55, 2]
// [30, 400, 550, 20]
// [400, 550]

// .find() - возвращает первый элемент, подощедший по переданному условию


// const filtered = arr.find((elem) =>{
//     return elem > 0;
  
  
//   } ) 
//   console.log(filtered);

  // 6. Написать функцию getGreaterNums, которая принимает 
//   массив чисел и число и вовзаращет новый массив с числами 
//   из входящего массива, которые больше или равны переданному
//   второму аргументу


const getGreaterNums = (arr, num) => arr.filter(el => el >= num);

console.log(getGreaterNums([33, 1, 21, 2, 67, 4], 10)); 

const user = {
    id: 1,
    firstname: 'Anton',
    lastname: 'Ivanov',
    age: 27,
    languages: ['English', 'Russian'],
    address: {
        city: 'Berlin',
        country: 'Germany'
    }
   
}

console.log(user.address.city)


// 3. Написать функцию getAdults, которая принимает массив с пользователями и возвращает новый массив с совершеннолетними пользователями

const users = [
    {
        id: 1,
        firstname: 'Anton',
        age: 30,
        online: true
    },
    {
        id: 2,
        firstname: 'Olga',
        age: 24,
        online: true
    },
    {
        id: 3,
        firstname: 'Ivan',
        age: 12,
        online: false
    },
    {
        id: 4,
        firstname: 'Anna',
        age: 25,
        online: false
    }
]

const getAdults = users => users.filter(user => user.age >= 18);

console.log(getAdults(users)); 

// 4. Написать функцию getNames, которая принимает массив с пользователями и возвращает новый массив с именами пользователей

 // ['Anton', 'Olga', 'Ivan', 'Anna']

const getNames = users => users.map(user => user.firstname);

console.log(getNames(users)); 

// 5. Написать функцию getAdultsNames, которая принимает массив с пользователями и возвращает новый массив с именами совершеннолетних пользователей

const getAdultsNames = users => 
    users
      .filter(user => user.age >= 18) // Отфильтровываем совершеннолетних пользователей
      .map(user => user.firstname);    // Извлекаем их имена
   
  console.log(getAdultsNames(users));

  // 6. Написать функцию getUserInfo, которая принимает массив с пользователями и возвращает новый массив с информацией о пользователях в формате: ИМЯ (ВОЗРАСТ)


const getUserInfo = users => 
    users.map(user => `${user.firstname} (${user.age})`);
  
  console.log(getUserInfo(users)); 