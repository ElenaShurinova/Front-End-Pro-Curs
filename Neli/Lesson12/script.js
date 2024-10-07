fetch('https://jsonplaceholder.typicode.com/userrs')
.then(response => response.json())
.then(json => renderUsers(json))

const userContainer = document.querySelector('.users_container');

const renderUser = json => {
    json.forEach(elem => {
        
    })
}


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