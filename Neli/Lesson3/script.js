// 1. Напишите функцию, которая принимает два числа и возвращает произведение этих чисел

const getMult = (num1, num2) => num1 * num2;
console.log(getMult(2,4));  //8
console.log(getMult(5, 10)); // 50

// 2. Напишите функцию showElements, которая принимает массив с числами в качестве аргумента и выводит каждый элемент массива в консоль отдельным логом

const showElements = array => {
    for(let i = 0; i < array.length; i++){
        console.log(array[i])
    }
}

showElements([3, 55, -1]); 
// 3 
// 55
// -1

// 2. Напишите функцию showElements, которая принимает массив с числами в качестве аргумента и выводит каждый элемент массива в консоль отдельным логом

const showElements1 = array => {
    for(let i = 0; i < array.length; i++){
        console.log(array[i])
    }
}

// showElements([3, 55, -1]); 
// showElements(['hello', 5, true]); 
// showElements('hello');

// 3. Напишите функцию showDoubledElements, которая принимает массив с числами в качестве аргумента и выводит каждый элемент массива в консоль отдельным логом умноженный на 2

const showDoubledElements = array => {
    for(let i = 0; i < array.length; i++){
        console.log(array[i] * 2)
    }
}

showDoubledElements([3, 55, -1]); 
// 6
// 110
// -2

// 4. Напишите функцию getPositiveNums,
//  которая принимает массив с числами в качестве 
// аргумента и возвращает массив только из положительных 
// чисел. 
// Вывести сформированный массив в консоль

const getPositiveNums = array => {
    const positiveNums = [];

    for(let i = 0; i < array.length; i++){
        if(array[i] > 0){
            positiveNums.push(array[i])
        }
    }

    return positiveNums
}

console.log(getPositiveNums([33, 1, -1, -100])); // [33, 1]
console.log(getPositiveNums([-9, -100, 1, 9, 43])); // [1, 9, 43]

// 5. Напишите функцию multNums,  которая принимает массив с числами в качестве аргумента и возвращает массив со всеми числами, умноженными на 3
const multNums = arr => {
    const newArr = [];

    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i] * 3)
    }

    return newArr;
}


console.log(multNums([1, 2, 3])); // [3, 6, 9]
console.log(multNums([4, 5, 6])); // [12, 15, 18]

// 6. Напишите функцию multNegativeNums,  которая принимает массив с числами в качестве аргумента и возвращает массив со всеми отрицательными числами, умноженными на 3

const multNegativeNums = arr => {
    const newArr = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0) {
            newArr.push(arr[i] * 3)
        }
    }

    return newArr;
}

console.log(multNegativeNums([3, -1, -4, 8])); // [-3, -12]

// 7. Напишите функцию changePositiveNums, которая принимает массив с числами в качестве аргумента и возвращает массив со всеми числами, но положительные числа умножены на 3

console.log(changePositiveNums([3, -1, -4, 8])); // [9, -1, -4, 24]

// 8. Напишите функцию getStrLength, которая принимает массив со строками и возвращает массив с длинами этих строк

const getStrLength = arr => {
    const newArr = [];

    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i].length)
    }

    return newArr
}

console.log(getStrLength(['hi', 'hello', 'k'])); // [2, 5, 1]