const products = [
  { name: 'Saw', price: 100, category: 'tools' },
  { name: 'Hammer', price: 50, category: 'tools', discount: true },
  { name: 'Ball', price: 20, category: 'sport' },
  { name: 'Shoes', price: 150, category: 'sport', discount: true },
  { name: 'Truck', price: 75, category: 'toys' },
  { name: 'Drill', price: 125, category: 'tools', discount: true },
  { name: 'JigSaw', price: 250, category: 'tools' },
]

const cart = {
   products: [],
   count: 0,
   totalPrice: 0
}

const dwarf = {
  name: 'Torin',
  lastname: 'The Oakshield',
  age: 254,
  weapons: ['Sword', 'Axe'],
  armour: ['Helmet', 'Armour', 'Shield'],
  skills: {
    melee: 10,
    magic: 5
  },
}

const numbers = [76, 98, 104, 106, 345, 42];

const weirdArray = {
  2: 'Timon',
  length: 3,
  0: 'Saw',
  1: 'Hammer',
};

const veryWeirdArray = {
  0: 'Drill',
  1: 'Axe',
  2: 'Nails',
};


// ///////////////////////////////////////////////////////////////////

// const cart1 = {
//   products: [],
//   totalPrice: 0,
 
//   describe() {
//       console.log(`Now cart has ${this.products.length} items, total price is ${this.totalPrice}`);
//   }
// };

// // Пример использования
// cart.products.push('Milk');
// cart.totalPrice += 10;
// cart.describe(); // Вывод: Now cart has 1 items, total price is 10


const dwarf1 = {
  name: 'Torin',
  lastname: 'The Oakshield',
  age: 254,
  weapons: ['Sword', 'Axe'],
  armour: ['Helmet', 'Armour', 'Shield'],
  skills: {
    melee: 10,
    magic: 5
  },
  // метод для добавления оружия
  getWeapon(weaponName) {
    this.weapons.push(weaponName);
  },
  // метод для удаления оружия
  dropWeapon(weaponName) {
    this.weapons = this.weapons.filter(weapon => weapon !== weaponName);
  }
};



// Пример использования
// console.log(dwarf.weapons); // Вывод: ['Sword', 'Axe']
// dwarf.getWeapon('Hammer');
// console.log(dwarf.weapons); // Вывод: ['Sword', 'Axe', 'Hammer']
// dwarf.dropWeapon('Axe');
console.log(dwarf.weapons); // Вывод: ['Sword', 'Hammer']

/////////////////////////////////////////////////////////////
const dwarf3 = {
  name: 'Torin',
  lastname: 'The Oakshield',
  age: 254,
  weapons: ['Sword', 'Axe'],
  armour: ['Helmet', 'Armour', 'Shield'],
  skills: {
    melee: 10,
    magic: 5
  },
  // метод для добавления оружия
  getWeapon(weaponName) {
    this.weapons.push(weaponName);
  },
  // метод для удаления оружия
  dropWeapon(weaponName) {
    this.weapons = this.weapons.filter(weapon => weapon !== weaponName);
  },
  // метод для тренировки навыков
  trainMe(skillName, value) {
  
      this.skills[skillName] += value;
   
      console.log(`Skill ${skillName} does not exist.`);
    }
  };


// Пример использования
// console.log(dwarf.skills.melee); // Вывод: 10
// dwarf.trainMe('melee', 5);
console.log(dwarf.skills.melee); // Вывод: 15

console.log(dwarf.skills.magic); // Вывод: 5
// dwarf.trainMe('magic', 3);
console.log(dwarf.skills.magic); // Вывод: 8

// dwarf.trainMe('archery', 2); // Вывод: Skill archery does not exist.

//////////////////////////////////////////////////////////////////////////////


const cart2 = {
  products: [],
  totalPrice: 0,
  count: 0,
  describe() {
    console.log(`Now cart has ${this.count} items, total price is ${this.totalPrice}`);
  },
  addToCart(product) {
    this.products.push(product);
    this.count += 1;
    this.totalPrice += product.price;
  }
};

// Пример использования
const product1 = { name: 'Milk', price: 10 };
const product2 = { name: 'Bread', price: 5 };

// cart.addToCart(product1);
// cart.addToCart(product2);

console.log(cart.products);    // Вывод: [{ name: 'Milk', price: 10 }, { name: 'Bread', price: 5 }]
console.log(cart.count);       // Вывод: 2
console.log(cart.totalPrice);  // Вывод: 15

// cart.describe(); // Вывод: Now cart has 2 items, total price is 15


///////////////////////////////////////////////////////////////////////////////////

function showProductInfo() {
  console.log(`Товар ${this.name}, цена - ${this.price}`);
}


// Использование bind для привязки контекста и вызова функции
const boundShowProductInfo = showProductInfo.bind(products[0]);
boundShowProductInfo(); // Вывод: Товар Tool, цена - 100

// Использование call для немедленного вызова функции в контексте объекта
showProductInfo.call(products[0]); // Вывод: Товар Tool, цена - 100

// Использование apply для немедленного вызова функции в контексте объекта
showProductInfo.apply(products[0]); // Вывод: Товар Tool, цена - 100


////////////////////////////////////////////////////////////////////////

function customMap(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
}



function square(num) {
  return num * num;
}

const newNumbers = customMap.call(numbers, square);

console.log(newNumbers); // Вывод: [1, 4, 9, 16, 25]


function customMap(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
}


//////////////////////////////////////////////////////////////////////////////////////



const weirdArray1 = {
  2: 'Timon',
  length: 3,
  0: 'Saw',
  1: 'Hammer',
};


const veryWeirdArray1 = {
  0: 'Drill',
  1: 'Axe',
  2: 'Nails',
};

// Определяем длину объекта, как количество ключей с числовыми индексами
veryWeirdArray.length = Object.keys(veryWeirdArray).filter(key => !isNaN(key)).length;

Array.prototype.forEach.call(veryWeirdArray, function(value, index) {

    console.log(value); // Выводим значение свойства с числовым индексом
  
});

/////////////////////////////////////////////////////////////////////////////////

function validateInput(errorText) {
  // Проверяем наличие атрибута required
  if (this.hasAttribute('required')) {
    // Проверяем, что значение не пустое
    if (this.value.trim() === '') {
      // Если значение пустое, добавляем класс error и записываем сообщение об ошибке
      this.classList.add('error');
      this.value = errorText;
      return false;
    } else {
      // Если значение непустое, убираем класс error (если он есть)
      this.classList.remove('error');
      return true;
    }
  } else {
    // Если атрибут required отсутствует, возвращаем true
    return true;
  }
}

document.getElementById('validateButton').addEventListener('click', function() {
  const inputElement = document.getElementById('textInput');
  const errorMessage = "This field is required.";
  
  // Вызываем функцию validateInput в контексте inputElement
  const isValid = validateInput.call(inputElement, errorMessage);
  
  if (isValid) {
    console.log("Input is valid");
  } else {
    console.log("Input is invalid");
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////

function validateInput(errorText) {
  // Проверяем наличие атрибута required
  if (this.hasAttribute('required')) {
    // Проверяем, что значение не пустое
    if (this.value.trim() === '') {
      // Если значение пустое, добавляем класс error и записываем сообщение об ошибке
      this.classList.add('error');
      this.value = errorText;
      return false;
    } else {
      // Если значение непустое, убираем класс error (если он есть)
      this.classList.remove('error');
      return true;
    }
  } else {
    // Если атрибут required отсутствует, возвращаем true
    return true;
  }
}

document.getElementById('validateButton').addEventListener('click', function() {
  const inputs = document.querySelectorAll('input[type="text"]');
  const errorMessage = "Заполните это поле!";
  
  inputs.forEach(input => {
    validateInput.call(input, errorMessage);
  });
});


