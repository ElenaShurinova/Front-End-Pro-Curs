// let a = 30;

// setTimeout(() => {
//     a = 10;
//     console.log(a); // 10
// }, 3000);


// const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res(a = 10)
//     }, 3000)
// })
// .then(() => console.log(a)); // 10

// console.log(a); // 30

// promise.then()

// Обработчики промиса:
    // .then() - успешный промис
    // .catch() - неуспешный промис
    // .finally() - любой промис




// FETCH запрос
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => renderUsers(json))
    // .catch(error => console.log(error))

const usersContainer = document.querySelector('.users_container');

const renderUsers = json => {
    json.forEach(({ name, username }) => {
        const cardElem = document.createElement('div');
        const nameElem = document.createElement('p');
        const usernameElem = document.createElement('p');

        nameElem.innerText = name;
        usernameElem.innerText = username;

        cardElem.append(nameElem, usernameElem);
        usersContainer.append(cardElem)
    })
}

// Для каждого объекта из полученного массива создать карточку (див) с двумя параграфами (name, username)