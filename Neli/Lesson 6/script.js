
// // найти элемент
// const usersContainer = document.querySelector('.users_container');

// // создать элемент
// const greeting = document.createElement('p');

// // добавить текст в элемент
// greeting.innerText = 'Hello, world!';

// // добавить один элемент внутрь другого
// usersContainer.append(greeting);

const usersContainer = document.querySelector('.users_container');


// создать элемент
// const greeting = document.createElement('p');

// добавить текст в элемент
// greeting.innerText = 'Hello, world!';

// добавить элементу класс
// greeting.classList.add('greeting');

// добавить один элемент внутрь другого
// usersContainer.append(greeting);
// 1. Создать div (userCard) с 3 параграфами (firstname, lastname, age)
// Наполнить 3 параграфа произвольным текстом
// Добавить 3 параграфа в созданный userCard
// Добавить созданный userCard в div.users_container

// 1. Создаем элемент div с классом 'userCard'
const userCard = document.createElement('div');
userCard.classList.add('userCard');

// 2. Создаем три параграфа и наполняем их текстом
const firstName = document.createElement('p');
firstName.innerText = 'First Name: John';

const lastName = document.createElement('p');
lastName.innerText = 'Last Name: Doe';

const age = document.createElement('p');
age.innerText = 'Age: 30';
phoneElem.innerText = 'Phone: +7 77 777 77 777'
userCard.classList.add('user_card');

// 3. Добавляем три параграфа в созданный userCard
userCard.append(firstName, lastName, age, phoneElem);


// 4. Добавляем созданный userCard в div с классом 'users_container'

usersContainer.append(userCard);

// Добавить класс cardElem
// Стилизовать через style.css cardElem (border, border-radius, padding, background-color, width)
