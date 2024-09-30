const users = [
    {
        id: 1,
        firstname: 'Anton',
        lastname: 'Ivanov',
        age: 20,
        online: true
    },
    {
        id: 2,
        firstname: 'Anna',
        lastname: 'Petrova',
        age: 22,
        online: true
    },
    {
        id: 3,
        firstname: 'Igor',
        lastname: 'Ushanov',
        age: 10,
        online: false
    },
    {
        id: 4,
        firstname: 'Vlad',
        lastname: 'Gribov',
        age: 67,
        online: true
    }
]
// 1. Для каждого пользователя из массива users создать карточку (div) c 2 параграфами (p) - полное имя и возраст.
// Добавить карточки пользователей в div.users_container

const usersContainer = document.querySelector('.users_container');



users.forEach(({ id, firstname, lastname, age, online }) => {
    const cardElem = document.createElement('div');
    const nameElem = document.createElement('p');
    const ageElem = document.createElement('p');
    const statusElem = document.createElement('p');

    nameElem.innerText = `Name: ${firstname} ${lastname}`;
    ageElem.innerText =`Age: ${age}`;

   
    statusElem.textContent = `${online ? 'online' : 'offline'}`;
    cardElem.style.backgroundColor = online ? 'lightgreen' : 'white';
    cardElem.style.fontWeight = online ? 'normal' : 'bold';
    cardElem.style.color = online ? 'black' : 'red';


    cardElem.append(nameElem, ageElem, statusElem);
    usersContainer.append(cardElem);



});

// Каждой карточке добавить парфграф со статусом - если пользователь в сети в парграфе должно быть 'Status: online', а если не в сети - 'Status: offline'
