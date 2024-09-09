// callback-функция (функция обратного вызова) - функция, переданная в другую функцию в качестве аргумента
const multNums1 = () => 2 * 3; // 6
const multNums2 = () => 2 * 4; // 8
const multNums3 = () => 2 * 5; // 10

const multNums = n => 2 * n;


// 1. Написать функцию, которая принимает массив с числами и возвращает новый массив с числами из исходного массива, умноженные на 2
// [1, 2, 3, 4] => [2, 4, 6, 8]

const changeNums = arr => {
    const newArr = [];

    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i] * 2)
    }

    return newArr
}

// 2. Написать функцию, которая принимает массив с числами и возвращает новый массив с числами из исходного массива, деленными на 2
// [1, 2, 3, 4] => [0.5, 1, 1.5, 2]

const changeNums2 = arr => {
    const newArr = [];

    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i] / 2)
    }

    return newArr
}

// 3. Написать функцию, которая принимает массив с числами и возвращает новый массив с числами из исходного массива, возведенными во вторую степень
// [1, 2, 3, 4] => [1, 4, 9, 16]

const changeNums3 = arr => {
    const newArr = [];

    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i] ** 2)
    }

    return newArr
}

// 4. Написать функцию, которая принимает массив с числами и инструкцию. И возвращает новый массив с числами из исходного массива, к которым применено действие из инструкции

const changeNums4 = (arr, instruction) => {
    const newArr = [];

    for(let i = 0; i < arr.length; i++){
        newArr.push(instruction(arr[i]))
    }

    return newArr
}

console.log(changeNums([1, 2, 3, 4], (a) => a * 2)); // [2, 4, 6, 8]
console.log(changeNums([1, 2, 3, 4], (el) => el / 2)); // [0.5, 1, 1.5, 2]
console.log(changeNums([1, 2, 3, 4], (el) => el ** 2)); // [1, 4, 9, 16]

const doubleArr = [1, 2, 3, 4].map((el) => el * 2); // [2, 4, 6, 8]

// функция высшего порядка (higher-order function) - функция, которая принимает другую функцию в качестве аргумента

// МЕТОДЫ МАССИВОВ

// push()
// pop()
// shift()
// unshift()
// slice()

// forEach(() => {})
// map(() => {})
// filter(() => {})
// find(() => {})

    // 1. Написать функцию, которая принимает массив с числами и возвращает новый массив с числами из исходного массива, умноженные на 2
    // [1, 2, 3, 4] => [2, 4, 6, 8]
    
    // const changeNums1 = arr => {
    //     const newArr = [];
    
    //     for(let i = 0; i < arr.length; i++){
    //         newArr.push(arr[i] * 2)
    //     }
    
    //     return newArr
    // }

// forEach(() => {}) - применяет переданную функцию один раз к каждому элементу массива. Ничего не возвращает (undefined)

// map(() => {}) - применяет переданную функцию один раз к каждому элементу массива. Возвращает новый массив

    // const changeNums1_forEach = arr => {
    //     const newArr = [];
    
    //     arr.forEach(el => newArr.push(el * 2))
    
    //     return newArr
    // }
    
    // const changeNums1_map = arr => arr.map(el => el * 2);

// ПРАКТИКА

// 1. Написать функцию, которая принимает массив и число и 
// возвращает массив с числами из исходного массива, 
// умноженными на значение второго аргумента. Решить 
// задачу двумя способами - через forEach() и map()

//  forEach
function arrayForEach(array, num) {
    const result = [];
    array.forEach(elem => {
        result.push(elem * num);
    });
    return result;
}

const num = [1, 2, 3, 4, 5];
const multipliedForEach = arrayForEach(num, 3);
console.log(multipliedForEach); // [3, 6, 9, 12, 15]


// map
const multNumbers2 = (arr, num) => arr.map(el => el * num);// иструкция что мы передаем

const showIndex = arr => arr.map((el, i) => `${el} (${i})`);

// console.log(showIndex([1, 2, 3, 4])); // ['1 (0)', '2 (1)', '3 (2)', '4 (3)']