 # README

## Итоговое занятие №7

### Тема:

Репозитарий содержит материалы по итоговому занятию №7, посвященному работе с объектами, и асинхронным операциям в JS.

### Разогрев
1. Что выведет код (и в какой последовательности):
```
console.log('First');
setTimeout( () => {
  console.log('Second');
}, 100);
console.log('Third');
```

2. Что выведет код (и в какой последовательности):
```
console.log('First');
setTimeout( () => {
  console.log('Second');
}, 0);
console.log('Third');
```

3. Что выведет код (и в какой последовательности)? Будьте внимательны, задача с подвохом.
```
function simpleFunc() {
  console.log('Hey!');
}
console.log('First');
setTimeout( simpleFunc(), 100);
console.log('Third');
```

4. Что выведет код (и в какой последовательности):
```
console.log('First');
setTimeout( () => {
  console.log('Second');
  setTimeout( () => {
    console.log('Third');
  }, 100);
  console.log('Fourth');
}, 100);
console.log('Fifth');
```

### Задачи занятия
1. Пристрелочная. Написать функцию `delayedCallback`. Она примет первым аргументом функцию-колбэк, а вторым - время задержки в секундах, и должна вызвать колбэк спустя это время задержки.
2. Пишем функцию `renderProductCard`. Она будет принимать в аргументах объект с данными товара (название, цена, категория), и должна рисовать карточку товара. Карточка - это div, которому нужно добавить класс `productCard`. В нем нужно разместить заголовок h3 с названием товара, параграф с категорией, и параграф с ценой. Также нужно добавить две кнопки: "В корзину", и "Убрать" - то есть добавление в корзину, и удаление из корзины. Функция должна возвращать созданный div (т.е. НЕ встраивать его в DOM).
3. Пишем функцию `renderProducts`. Эта функция примет массив товаров. Ее задача - пройтись по массиву, для каждого элемента вывать функцию отрисовки товара, и добавить карточку товара в div c классом `productsContainer`.
4. Реализуем логику корзины. Нам нужно добавить возможность добавления товаров в корзину, и удаления их из нее. Корзиной будет служить объект (создадим его в глобальной области видимости). У этого объекта, ключами будут служить имена товаров, а значениями - количество этих товаров, добавленных в корзину. По умолчанию, корзина пуста. Напишем функции `addtoCart`, `removeFromCart` - они будут принимать в аргументах название товара, который мы хотим добавить. И их задача - соответственно, добавить/убрать единицу этого товара в/из корзины. Функция `removeFromCart` в идеале должна удалять свойства из объекта (к обсуждению).
5. Добавляем обработчики на кнопки "В корзину", "Убрать". Для этого, нам понадобится изменить функцию `renderProductCard`.














































































































































































































































































































































































































































































































7. Теперь имитируем отправку заказа. Добавим обработчик на кнопку отправки заказа. Нужно спустя 3 секунды после нажатия на кнопку, скрыть блок отправки заказа, и вывести в консоль сообщение "Order had been sent!".
8. Задача "со звездочкой". Нужно каждые 2 секунды подсвечивать какую-то карточку товара. Для "подсветки" применяем класс `highlighted`. Карточку определяем случайным образом. Задача к обсуждению.