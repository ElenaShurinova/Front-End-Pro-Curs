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


// 1. Определить класс `Product`, который будет принимать название, цену и описание товара, и создавать объекты товаров.
// 2. Реализуйте логику в конструкторе: если не передана цена, то нужно ставить цену 100.

// class Product {
//   constructor(name, price, description) {
//     this.name = name;
//     this.price = price;
//     this.description = description;
//   }
// }

// // Создание объекта товара с указанной ценой
// const product1 = new Product('Laptop', 1500, 'High performance laptop');
// console.log(product1); // Product { name: 'Laptop', price: 1500, description: 'High performance laptop' }

// // Создание объекта товара без указанной цены
// const product2 = new Product('Mouse', undefined, 'Wireless mouse');
// console.log(product2); // Product { name: 'Mouse', price: 100, description: 'Wireless mouse' }

// // Создание объекта товара с пустым описанием
// const product3 = new Product('Keyboard');
// console.log(product3); // Product { name: 'Keyboard', price: 100, description: undefined }



class Product {
  constructor(name, price = 100, description) {
    this.name = name;
    
    this.price = ( price < 0) ? 1 : (price === undefined ? 100 : price);
    this.description = description;
  }
}


////////////////////////////////////////////////////////////////////////////////////////////////

class User {
  constructor(name, role, age) {
    this.name = name;
    this.role = role;
    this.age = age;
  }

  // Метод greet выводит информацию о пользователе в консоль
  greet() {
    console.log(`Hey, I am ${this.name}, I am ${this.age} y.o., and I have ${this.role} role`);
  }
   // Метод changeRole изменяет роль пользователя
   changeRole(newRole) {
    // Если новая роль пустая, устанавливаем роль по умолчанию 'default'
    if (!newRole) {
      this.role = 'default';
    } else {
      this.role = newRole;
    }
  }

   // Метод addAge добавляет возраст пользователю
   addAge(years) {
    const newAge = this.age + years;
    if (newAge < 0 || newAge > 100) {
      console.log("Impossible! At least for now");
      return;
    }
    this.age = newAge;
  }

  // Метод addAge с выбросом исключения в случае некорректного возраста
  addAgeWithException(years) {
    const newAge = this.age + years;
    if (newAge < 0 || newAge > 100) {
      throw new Error("Incorrect age!");
    }
    this.age = newAge;
  }


    // Метод hasDiscount возвращает true, если роль stuff или возраст делится на 5 без остатка
    hasDiscount() {
      return this.role === 'stuff' || this.age % 5 === 0;
    }

    
  }
  class Cart {

    constructor() {
      this.productsStorage = {};
      this.totalPrice = 0;
    }
  }




// Создание объекта пользователя
const user1 = new User('Alice', 'admin', 30);

// Вызов метода greet
user1.greet(); // Hey, I am Alice, I am 30 y.o., and I have admin role

// Изменение роли пользователя
user1.changeRole('editor');
user1.greet(); // Hey, I am Alice, I am 30 y.o., and I have editor role

// Изменение роли на пустую строку
user1.changeRole('');
user1.greet(); // Hey, I am Alice, I am 30 y.o., and I have default role



///////////////////////////////////////////////////////////////////////////////////////////////////

class Door {
  static count = 0; // статическое свойство для отслеживания количества дверей

  constructor(color, material) {
     this.color = color;
     this.material = material;
     Door.count++; // увеличиваем счетчик при создании новой двери
  }
}

// Примеры использования
const door1 = new Door('brown', 'wood');
console.log(Door.count); // 1

const door2 = new Door('black', 'metal');
console.log(Door.count); // 2

const door3 = new Door('white', 'plastic');
console.log(Door.count); // 3

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




class Product {
  constructor(name, price, description) {
    this.name = name;
    this.price = price <= 0 ? 1 : price;
    this.description = description;
  }
}

class Cart {
  constructor() {
    this.productsStorage = {};
    this.totalPrice = 0;
  }

  // Метод добавления товара в корзину
  addProduct(product) {
    if (this.productsStorage[product.name]) {
      this.productsStorage[product.name]++;
    } else {
      this.productsStorage[product.name] = 1;
    }
    this.totalPrice += product.price;
  }

  // Метод удаления товара из корзины
  dropProduct(product) {
    if (this.productsStorage[product.name]) {
      if (this.productsStorage[product.name] > 1) {
        this.productsStorage[product.name]--;
      } else {
        delete this.productsStorage[product.name];
      }
      this.totalPrice -= product.price;
    }
  }
}

// Пример использования
const cart1 = new Cart();

const product1 = new Product('Ball', 50, 'A round ball');
const product2 = new Product('Saw', 100, 'A sharp saw');

cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product2);

console.log(cart.productsStorage); // { Ball: 1, Saw: 2 }
console.log(cart.totalPrice); // 250

cart.dropProduct(product2);
console.log(cart.productsStorage); // { Ball: 1, Saw: 1 }
console.log(cart.totalPrice); // 150

cart.dropProduct(product2);
console.log(cart.productsStorage); // { Ball: 1 }
console.log(cart.totalPrice); // 50