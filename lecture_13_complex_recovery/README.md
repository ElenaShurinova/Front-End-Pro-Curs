 # README

## Лекционное занятие №13

### Тема:

Репозитарий содержит материалы по лекционному занятию №13, посвященному комплексному повторению ранее пройденного.

Сегодняшнее занятие посвящено комплексному повторению работы с объектами, строками, массивами и функциями.

1. Напишите функцию `toCamelCase`. Она принимает произвольное число аргументов (строк), и должа вернуть слово в "верблюжьем регистре".

```
toCamelCase('timon', 'and', 'pumba'); // timonAndPumba
```

2. Напишите функцию `hasBadWord`. Она примет 2 аргумента, строку в которой мы будем искать плохое слово, и собственно плохое слово. Нужно, чтобы функция проверяла наличие в строке плохого слова (желательно - без учета регистра).
3. Теперь сделаем функцию `hasBadWords`, она будет принимать произвольное число аргументов. Первый - строка в которой ищем плохие слова, а второй и последующие - собственно, плохие слова. Если строка содержит хотя бы одно плохое слово - функция должна вернуть `true`.
4. Теперь сделаем `censoreBadWords`, она примет первым аргументом строку где будем осуществлять поиск, вторым аргументом - замену (то есть, на что мы будем менять плохие слова), а третьим и последующими аргументами - плохие слова. Задача функции - заменить в строке плохие слова на замену.

```
censoreBadWords('hey there foo people bar what baz a great day!', '...', 'foo', 'bar', 'baz'); // hey there ... people ... what ... a great day!
```

5. Задача "со звездочкой". Написать функцию, которая считает количество гласных в строке. В идеале - без учета регистра. Гласные - a, o, e, i, u, y.
6. Теперь попрактикуем работу с объектами. Напишите функцию `mergeObjects`. Она будет принимать 2 аргумента - объекты для слияния. Задача - создать новый объект, который будет содержать все те свойства, котоыре содержат исходные объекты (то есть функция как бы объединит объекты).
7. Усложним - сделаем так, чтобы функция могла принимать произвольное количество объектов.
8. Поработаем с инпутами на странице. Напишите функцию `saveInputsData`, которая будет собирать значения инпутов и селектов на странице в объект, где ключами будут ID инпутов/селектов, а значениями - их значения. Этот объект нужно сохранять в `localStorage`, с ключом `formData`. Постарайтесь сделать функцию универсальной - чтобы она могла работать и с теми инпутами/селектами, которые появятся в разметке позже или из JS.
9. Добавьте обработчики на события `blur` у инпутов, и `change` у селектов, чтобы сохранять их значения.
10. Напишите функцию `restoreInputsData`, которая достанет из ЛС объект с данными инпутов/селектов, пройдется по свойствам объекта, и заполнит соответствующие инпуты/селекты. Для перебора, используйте конструкцию `for prop in obj`
11. Напишите функцию `getUniqueCategories`, которая будет принимать произвольное количество аргументов - объектов с данными товаров, и должна вернуть массив, который содержит уникальные категории товаров.
12. Напишите функцию `getNamesPrices`, она примет произвольное количество аргументов объектов товаров, и должна вернуть объект, у которго ключами будут названия товаров, а значениями - цены товаров.
13. Напишите функцию `getPricesByCategory`, она так же будет принимать произвольное количество аргументов - объектов с данными товарво, и должна вернуть объект, свойствами которого будут категории этих товаров, а значениями - суммарные стоимости товаров.
14. Программируем "робота". У нас есть робот, который понимает такие команды:
 - D - шаг вперед
 - B - сделать шаг назад

Робот принимает строку, которая состоит из последовательности команд. Наша задача - определить, на сколько шагов вперед или назад сместится наш робот относительно начальной точки.

```
move('DDDBBDD'); // 3 - потому что по итогу робот сместился на 5 шагов вперед, и на 2 назад
move('DDBBDDBBB'); // -1 - по итогу робот сместился на 4 ашаг вперед и на 5 назад
```

15. Задача "со звездочкой". Теперь программируем робота, который может поворачиваться на 90 градусов вправо и влево (команды R, L). Определить, на какое количество градусов относительно своего начального положения повернулся робот. Градусы идут от 0 до 360 по часовой стрелке.
```
turnRobot('RR'); // на 180 градусов
turnRobot('RRL'); // на 90 градусов
turnRobot('RRRR'); // на 0 градусов (совершил полный оборот)
```

16. Задача "с двумя звездочками". Есть робот, который стоит в декартовой системе координат, в точке (0;0), и смотрит "вверх" (в направлении оси Игрек). Программируется такими командами:
 - D - один шаг вперед
 - B - один шаг назад
 - L - поворот на 90 градусов влево
 - R - поворот на 90 градусов вправо

Определить координаты робота после выполнения строки команд.
```
move('DDDRD'); // координаты (1;3). Потому что робот сделал 3 шага вперед (оказался в точке (0;3) ), повернулся вправо, и сделал еще шаг вперед (оказался в точке (1;3) ).
```