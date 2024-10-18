
// 1. Написать функцию getUsers, который принимает число (номер страницы) в качестве аргумента и отправляет fetch-запрос по ссылке https://reqres.in/api/users?page=NUMBER и выводит в консоль полученные данные

// getUsers(2)

const usersContainer = document.querySelector('.user_container'); 
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');


  const getUsers = pageNum => {
    fetch(`https://reqres.in/api/users?page=${pageNum}`)
        .then(res => res.json())
        .then(json => renderUsers(json.data))
}

const renderUsers = arr => {
    usersContainer.innerText = '';
    arr.forEach(({first_name, last_name, avatar,email}) => {
        const cardElem = document.createElement('div');
        const nameElem = document.createElement('p');
        const avatarElem = document.createElement('img');
        const emailElem = document.createElement('a');

        nameElem.innerText = `${first_name} ${last_name}`;
        emailElem.innerText = email;

        avatarElem.setAttribute('src', avatar);
        avatarElem.setAttribute('alt', `${first_name} ${last_name}`);
        emailElem.setAttribute('href',`mailto:${email}`);

        cardElem.append(avatarElem, nameElem,emailElem);
        usersContainer.append(cardElem);
    })
}



getUsers(1)

btn1.addEventListener('click', () => getUsers(1));
btn2.addEventListener('click', () => getUsers(2));


// 2. Написать функцию renderUsers, которая будет принимать массив с пользователями и для каждого пользователя отрисовывает в div.users_container карточку (div) c картинкой и 1 параграфом (полное имя)

