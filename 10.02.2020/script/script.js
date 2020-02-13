// Task1
// Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’]. 
// Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.
let arr = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'];
let sum = 0;

let number = 0;
for (let key of arr) {
    if (typeof key === 'number' || typeof key === 'string') {
        number = Number(key);
        if (isFinite(number)) {
            sum += number;
        }
    }   
}


// Task2
// Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
// Добавьте в начало массива значение ‘Backbone.js’
// Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
// Добавьте в массив значение ‘CommonJS’ вторым элементом
// Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со \
// словами “Это здесь лишнее”
// let array = ['AngularJS', 'jQuery'];
// array.unshift('Backbone.js');
// array.push('ReactJS', 'Vue.js');
// array.splice(1, 0, 'CommonJS');
// alert(`Это здесь лишнее: ${array.splice(array.indexOf('jQuery'), 1)}`);
// console.log(array);


// Task3
// Создайте массив из минимум 100 случайных целых чисел. Переберите массив и 
// сгенерируйте на его основе новый, который содержит только уникальные 
// (неповторяющиеся) значения исходного массива. Решите, используя только 
// цикл for.
// let arr = [];

// for (let i = 0; i < 100; i++) {
//     arr[i] = Math.ceil((Math.random() * 50));
// }
// console.log(arr);

// let newArr = [];
// for (let j = 0; j < arr.length; j++) {

//     if (arr.indexOf(arr[j]) === arr.lastIndexOf(arr[j])) {
//         newArr.push(arr[j]);
//     }    
// }
// console.log(newArr);


// Task4 
// Создайте строку с текстом ‘Как однажды Жак звонарь сломал городской  фонарь’. 
// Разбейте ее на массив слов, и переставьте слова в правильном порядке с 
// помощью любых методов массива (indexOf, splice ...). Затем объедините 
// элементы массива в строку и выведите в alert исходный и итоговый варианты.
// let str = 'Как однажды Жак звонарь сломал городской фонарь';
// let array = str.split(' ');
// array[5] = array.splice(4, 1, array[5]).join();
// let newStr = array.join(' ');

// alert(`Исходный: "${str}", итоговый вариант: "${newStr}"`);


// Task5 
// Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt 
// для ввода любых символов, полученное значение добавляйте в конец созданного 
// массива. После выхода из цикла посчитайте сумму всех чисел массива и выведите 
// в alert полученный результат.
// let n = +prompt('Enter quantity');
// let arr = [];
// let sum = 0;

// for (let i = 0; i < n; i++) {
//     arr.push(prompt('Enter value', '1'));
//     console.log(arr);

//     let numberValue = parseInt(arr[i]);

//     if (isNaN(numberValue)) {
//         continue;
//     }
//     sum += numberValue;
// }

// alert(`Sum = ${sum}`);


// Task6
// Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу 
// умножения:
// var table = [];

// for (var  i = 1; i <= 10; i++) {
//     var result = [];
    
//     for (var  j = 1; j <= 10; j++) {
//         result.push(`${i}x${j}=${i*j}`);
//     }
//     table.push(result); 
// }
// console.log(table);


// Level Up
// Создайте структуру(ы) для хранения данных, из которых можно составить таблицу 
// соответствия значениям переменной (value) в логическом контексте (истина, ложь). 
// Изобразите на странице.
// let array = [true, false, 1, 0, "", "1", "0", null, undefined, {}, [], NaN];
