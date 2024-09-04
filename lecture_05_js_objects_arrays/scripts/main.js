const numbers = [1,2,3,5,7,11,13,17];

// const strings = ['this', 'is', 'an', 'array', 'of', 'simple', 'strings'];

const products = [
  { name: 'Saw', price: 100 },
  { name: 'Hammer', price: 50 }
]

// const human = {
// name:'Vasy',
// lastname:'Ivanov',
// skills: {
//   programing:10,
//   comunication:10
// }

// }
// console.log(human.name)
// console.log(human.skills.programing)

const human = {
  name:'Elena',
  lastname:'Shurinova',

  fanColor:'black',
  fanNumber:10,
  
 
   
  }
  human.isSTudent = true;
  human.classes = ['frontEnd','java']
  human.address = {
    street:'street',
    city: 'city'

  }
   console.log(human)

   function createHumanInstance(firstName,lastName,birthDate){
    let inform = {
      FirstName: firstName,
      LastName: lastName,
      BigUint64ArrayirthDate: birthDate


    }
   return  inform;
  
   }
   console.log(createHumanInstance())

//    const human1 = {
//     name: 'Ivan',
//     lastname: 'Petrov',
//     dateOfBirth: '02.08.1968',
//     address: {
//       street: 'StreetName',
//       city: 'City'
//     }
//   }

//   const data = prompt ('введите имя свойства (Name, lastName,dateOfBirth):')

// console.log(human1[data])

const dwarf = {
  name: 'Torin',
  lastname: 'Oakshield'
};
function giveWeapon (WeaponName,weaponSkill){
  dwarf[WeaponName] = weaponSkill;
}
giveWeapon ('sword',10)
giveWeapon('axe',8)
console.log(dwarf);


const arr = ['Timon', 'Pumba', 'Simba'];

const array = ['HTML', 'CSS', 'JS'];
const array1 = [
{name: 'timon'},
{name:'pumba'}
];
console.log



//  Метод `push` - добавить элемент(ы) в конец массива ("запихать" элемент в массив). Возвращает новую длину массива. Принимает произвольное число аргументов, через запятую.

let arr1 = [1,2,3];
arr.push(4);
console.log(arr1); // [1,2,3,4]

arr.push(5,6,7);
console.log(arr1); // [1,2,3,4,5,6,7]

//  Метод `pop` - удалить последний элемент из массива. Возвращает удаленный элемент.
let arr2 = [1,2,3];
const last = arr.pop();
console.log(arr2); // [1,2]
console.log(last); // 3

//  Метод `unshift` - добавить элемент(ы) в начало массива. Возвращает новую длину массива. Принимает произвольное число аргументов, через запятую.

let arr3 = [1,2,3];
arr.unshift(4);
console.log(arr3); // [4,1,2,3]

arr.shift(5,6,7);
console.log(arr3); // [5,6,7,1,2,3,4]

// Метод `shift` - удалить первій элемент из массива. Возвращает удаленный элемент.

let arr4 = [1,2,3];
const first = arr.shift();
console.log(arr4); // [2,3]
console.log(last); // 1


// 1. добавить элемент в конец массива чисел (число 45);
// 2. добавить несколько элементов в конец массива чисел (числа 45, 68, 23);
// 3. добавить объект в конец массива объектов (создать новый объект товара, по образу существующих).
// 4. удалить последний элемент из массива чисел.
// 5. добавить элемент в начало массива чисел (число 9)
// 6. удалить первый элемент из массива чисел
// */
numbers.push(45);
numbers.push(45,68,23);
products.push( { name: 'Drill', price: 150 } );
numbers.pop();
numbers.unshift(9);
numbers.shift();

const strings = ['this','is','an','array','of','simple','string']

const arr5 = [1,2,3,4,5,6,7,8,9];
const newArr = arr5.slice(2)
console.log(newArr);

const nArr1 = numbers.slice(3,7);
console.log(nArr);

const nArr = strings.slice(4);














