function promiseFactory (isSuccess, timeout, promiseResult) {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
         isSuccess ? resolve(promiseResult) : reject(promiseResult);
       }, timeout * 1000);
     })
  }
  
  promiseFactory(false, 3, 'Something went wrong');

// 1. Написать функцию getUser, которая принимает число (айди пользователя) и отправляет fetch-запрос по ссылке https://jsonplaceholder.typicode.com/users/ID и выводит полученные данные в консоль
// 2. Вызвать getUser с 3




const getUser = user_id => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`)
        .then(res => res.json())
        .then(json => console.log(json))
}

getUser(7);

// 3. Из полученных данных в div.user создать р и а (почта)


// 4. При клике на > увеличивать num на 1 и вызывать getUser с обновленным num
// 5. При клике на < уменьшать num на 1 и вызывать getUser с обновленным num  


leftBtnElem.addEventListener('click', () => {
    num--;
    getUser(num)
});

rightBtnElem.addEventListener('click', () => {
    num++;
    getUser(num)
});

