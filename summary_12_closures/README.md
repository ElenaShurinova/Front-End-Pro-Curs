 # README

## Итоговое занятие №12

### Тема:

Репозитарий содержит материалы по итоговому занятию №12, посвященному работе с замыканиями в JavaScript.

### Задачи занятия
1. Создайте функцию, которая будет имитировать работу лотереи. Внутри функции, нужно объявить массив с числами (5 чисел). Эта функция должна возвращать другую функцию, которая при обращении к ней будет выдавать последний элемент из массива, и удалять этот элемент из массива. Если массив пустой - ничего не возвращаем.
2. Усложним - сделаем так, чтобы функция принимала в аргументах N - количество вариантов (лотерейных шаров). Заполнить массив длиной N случайными значениями от 1 до 100.
3. Реализуем вычисление арифметической прогрессии с помощью замыканий. Пишем функцию `simpleProgression`, она принимает на вход один аргумент - т.н. "разность" прогрессии. Задача функции - вернуть другую функцию, которую мы будем вызывать для получения следующего числа прогрессии. Подсказка: в замыкании имеет смысл хранить текущее число последовательности.

Арифметическая прогрессия - это последовательность чисел, каждое последующее число в которой получается прибавлением "разности прогрессии" к предыдущему числу последовательности. Первое число последовательности - 0. Далее - прибавляем к нулю "разность прогрессии", и получаем второе число последовательности. И так далее.
```
function simpleProgression(base) {
  // Add some code here please
}

const generator = simpleProgression(2);
generator(); // 2
generator(); // 4
generator(); // 6
// ...
```
4. Реализуем "генератор" чисел Фибоначчи с помощью замыканий. Числа Фибоначчи - это последовательность чисел, где следующее число равно сумме двух предыдущих. Пример - 1,1,2,3,5,8,13,21,34,55,89,... Нам нужно с помощью замыканий реализовать генератор. То есть, пишем функцию `fibonacciGenerator`, которая вернет нам другую функцию, результатом вызова которой будет следующее число Фибоначчи. Подсказка: в замыкании `fibonacciGenerator` имеет смысл хранить 2 предыдущих числа Фибоначчи, и в самом начале это должны быть 1 (то есть первые два числа Фибоначчи - это единицы).
```
function fibonacciGenerator() {
  // Add code here please
}

let generator = fibonacciGenerator();
generator(); // 2
generator(); // 3
generator(); // 5
generator(); // 8
...
```