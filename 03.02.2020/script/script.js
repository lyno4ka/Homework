// Task1 
//Нарисуйте блок-схему, иллюстрирующую алгоритм приготовления чашечки чая.

// Task2
// Напишите цикл с шагом 1, в теле которого распечатываются квадраты каждого 
// четного значения счетчика.
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         let result = i * i;
//         console.log(result);
//     }
// }


// Task3
// Сформируйте строку вида ".#.#.#.#.#." чередованием символов . и # в каждой 
// итерации с помощью цикла for. После выхода из цикла распечатайте полученную строку.
// let str = '';

// for (let i = 1; i <= 11; i++) {
//     if (i % 2 === 0) {
//         str += '#';
//     } else {
//         str += '.';
//     }
// }
// alert(str);


// Task4
// Напишите цикл с confirm, который продолжается при нажатии на Отмена и прерывается 
// при нажатии на Ok.

// let result;
// while (!result) {
//     result = confirm('Прервать цикл?');
//     continue;
//     if (result === null) {
//         break;
//     }
// }


// Task5
// Напишите бесконечный цикл, который прерывается при помощи команды break, когда 
// Math.random() > 0.99. Выведите в окно alert случайное число, прервавшее цикл, 
// и количество итераций цикла.
// for (let i = 1;; i++) {
//     let number = Math.random();
//     if (number > 0.99) { 
//         alert(`${number}, ${i}`);
//         break;
//     }
// }


// Task6
// Используя вложенные циклы, сформируйте строку чередованием символов . и # таким 
// образом, чтобы получилась шахматный узор. Для перевода строки используйте символ 
// \n. Код должен поддерживать легкое изменение размеров доски.
// .#.#.#.#.#.#
// #.#.#.#.#.#.
// .#.#.#.#.#.#
// #.#.#.#.#.#.
// .#.#.#.#.#.#

// let str = '';
// for (let i = 0; i < 3; i++) {
//     str += '.#.#.#.#.#.# \n';
//     if (i === 2) break;
    
//     for (let j = 0; j < 1; j++) {
//     str += '#.#.#.#.#.#. \n';
//     } 
// }

// alert(str);


// Task7  
// С помощью цикла for с пустым телом сформируйте строку, представляющую из себя 
// ряд Фибоначчи: 0 1 1 2 3 5 8 13... 

// for (let i = 0, k = 1, j = 1; i < 50; j = i + k, i = k, k = j) {
//     console.log(i);
//   }


// Task8
// Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, 
// до тех пор, пока не будет нажата Отмена. После выхода из цикла распечатайте 
// количество введенных чисел, их общую сумму и среднее арифметическое.
// let sum = 0;
// let i = 0;

// while (true) {
//     let number = +prompt('Enter number', '1');
//     if (!number) break;
//     sum += number;
//     i++;
// }
// let average = sum / i;

// alert(`количество введенных чисел: ${i}, их общая сумма: ${sum}, 
// их среднее арифметическое: ${average}`);


// Task9
// Найдите и исправьте ошибки в коде:

// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         console.log(`${i} + ${j} = ${i+j}`);
//     }
// }


// Task10  !!!!!!!!

// Поиск элементов DOM (объектной структуры документа) с использованием нативных 
// методов JS

// Используя поиск по селекторам из раздела “Селекторы” справочника и 
// jQuery-функцию css, задайте стили элементам таблицы в блоке #content. 
// Редактировать HTML нельзя, CSS не нужен. Последовательность команд:


// Таблица расположена посредине страницы, расстояния между ее ячейками нет
// Все ячейки имеют ширину-высоту 10px, цвет фона #eee, границу 1px solid #000
// Фон в ячейках первых шести строк –#106B63
// Фон в ячейках строк 7-9 –#E7C610
// Фон в ячейках строк 10-12 – #C64A08
// Фон в ячейках строк 13-15 –#B43100
// Фон в ячейках всех оставшихся строк –#102173
// У некоторых ячеек есть класс none, задайте на jQuery стиль для этого класса: фона нет, границы нет

$('#content table').css("margin", "0 auto");
$('#content table tr td').css({"width": "10px", "height": "10px", "background-color": "#eee", "border": "1px solid #000"});
$('#content tr:nth-child(-n+6) td').css("background-color", "#106B63");
$('tr:nth-child(n7):nth-child(-n+9) td').css("background-color", "#E7C610");
$('tr:nth-child(n10):nth-child(-n+12) td').css("background-color", "#C64A08");
$('tr:nth-child(n13):nth-child(-n+15) td').css("background-color", "#B43100");
$('tr:nth-child(n16):nth-child(-n+19) td').css("background-color", "#102173");
$('.none').css({"background": "transparent", "border": "none"});


// Level Up 
// Сформируйте строку в виде треугольника-елочки:

// .....#.....
// ....###....
// ...#####...
// ..#######..
// .#########.
// ###########


//Variant1
// for (let i = 0; i < 6; i++) {
//     let str = '';
//     switch (i) {
//         case 0: str = '.....#.....'; break;
//         case 1: str = '....###....'; break;
//         case 2: str = '...#####...'; break;
//         case 3: str = '..#######..'; break;
//         case 4: str = '.#########.'; break;
//         case 5: str = '###########'; 
//     }
//     console.log(str);
// }

//Variant2
// let i = 0; 
// let max = 6;

// while (i < max) {
//     let point = '';
//     let lattice = '';
//     for (let j = 1; j < max - i; j++) point += ".";
//     for (let j = 0; j < 2 * i + 1; j++) lattice += "#";
//     console.log(point + lattice + point);
//       i++;
// }