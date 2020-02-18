// Task1
// Создайте функцию p и a, которые будут служить короткими именами для prompt и alert соответственно, 
// то есть запрашивать окно с полем ввода и выводить любое пользовательское сообщение в стандартном 
// модальном окне. Напишите функцию d, которая будет служить коротким именем для debugger, то есть 
// запускать процесс отладки. Используя эти псевдонимы получите значение из prompt и отобразите в alert. 
// А процесс работы скрипта проконтролируйте с помощью функции, которая служит для дебага.
// function d () {
//     debugger;
// }

// function a (value) {
//     alert(value);
// }

// function p (message, value) {
//     if (message === undefined) {
//         message =  'Enter something';
//     }

//     if (value === undefined) {
//         value = 'something';
//     }
//     return prompt(message, value);
// }

// d();
// let name = p( 'Enter your name', '');
// a(name);

// a( 'Hello World' );


// Task2
// Используя стрелочный синтаксис ES6, напишите функцию max (аналог Math.max), которая сравнивает 
// два числа и возвращает большее:

//variant1
// let max = (a,b) => {
//     if (a > b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// console.log( max(0, -1) );

//variant2
// let max = (a,b) => (a > b) ? a : b;
// console.log( max(0, -1) );


// Task3
// Используя синтаксис ES5, напишите функцию-аналог Math.min(). Функция принимает любое количество 
// чисел и возвращает меньшее из них:

// function min (number) {

//     let minNumber = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] < arguments[0]) {
//             minNumber = arguments[i];
//         }
        
//     }
//     return minNumber;
// }

// console.log( min(0, -1, 100, 500, 100500) );


// Task4 
// Изучите перебирающие методы массивов: forEach, filter, map. Создайте массив объектов users 
// (~10 объектов), каждый объект имеет поля firstname, lastname, age с разными значениями, у 
// некоторых есть поле middlename. Используя встроенные функции массивов:	
// 1) Отфильтруйте пользователей младше 18 лет
// 2) Добавьте каждому объекту поле fullName, которое является конкатенацией firstname, middlename 
// и lastname, если есть все три, и только firstname и lastname, если middlename нет
// 3) Сформируйте новый массив, который содержит только полное имя пользователей
// let users = [
//     {firstname: 'Sabrina', lastname: 'Spellman', age: 16},
//     {firstname: 'Tom', lastname: 'Sawyer', age: 12},
//     {firstname: 'Angelina', lastname: 'Jolie', age: 44},
//     {firstname: 'Александр', middlename: 'Сергеевич', lastname: 'Пушкин', age: 37},
//     {firstname: 'Peter', lastname: 'Pan', age: 15},
//     {firstname: 'Johnny', lastname: 'Depp', age: 56},
//     {firstname: 'Владимир', middlename: 'Владимирович', lastname: 'Путин', age: 68},
//     {firstname: 'Мери', lastname: 'Кровавая', age: 27},
//     {firstname: 'Иван', middlename: 'Иванович', lastname: 'Иванов', age: 32},
//     {firstname: 'Владимир', middlename: 'Владимирович', lastname: 'Набоков', age: 78}
// ];

// let someUsers = users.filter(user => user.age < 18);
// console.log('пользователи младше 18 лет', someUsers);

// let addFullName = users.forEach(function(user, index, users) {
//     if (user.firstname && user.middlename && user.lastname) {
//         return user.fullName = user.firstname + " " + user.middlename + " " + user.lastname;
//     } else {
//         return user.fullName = user.firstname + " "  + user.lastname;
//     }
//   });
// console.log(users);


// let  usersFullName = users.map(user => {
//     return user.fullName;
//   });
//   console.log(usersFullName);


// Task5 
// Не используя методы массива, напишите функцию аналог метода shift. Функция удаляет из переданного 
// в параметре массива первый элемент и возвращает новый массив.

// function shift (arr) {
//     if (arr.length > 0) {
//         for (let i = 1; i < arr.length; i++) {
//             arr[i - 1] = arr[i];
//         }
//         arr.length = arr.length - 1;
//     }
//     return arr;
// }

// let checkArr = [1, '2', 3, 'banana', 0];
// let result = shift(checkArr);
// console.log(result);


// Task6
// Не используя методы массива, напишите функцию аналог метода массива push. Функция добавляет в конец 
// переданного в параметре массив произвольное количество элементов.

// let push = (arr, ...items) => {
//     items.forEach(item => arr[arr.length] = item);
//     return arr;
// };

// let arr = [1, '2', 3, 'banana', 0];
// let result = push(arr, 10, '12', 'apple');
// console.log(result);


// Task7
// Напишите функцию аналог метода ES6 Object.assign(). Первый параметр функции - целевой объект, поля 
// которого будут изменены или расширены. Остальные параметры - объекты-источники, полями которых 
// будет расширяться целевой объект.

// function extend (obj, ...parameters) {

//     for (let key in parameters) {
//         let newObj = parameters[key];

//         parameters.forEach(parameter => {
//         for (let key in parameter) {
//             obj[key] = parameter[key];
//         }
//         });
//     }
//     return obj;
// }

// let source = {firstname: 'Tom', age: 10};
// let s = extend(source, {firstname: 'John'}, {lastname: 'Doe'});
// console.log(source);
// console.log(s);

// Task8 
// Напишите функцию ask с тремя параметрами: question, defaultValue, callback. Функция ask запрашивает 
// с помощью prompt вопрос question, ответ по умолчанию - defaultValue. Что делать с полученным 
// значением - определяет callback
// function ask (question, defaultValue, callback) {
//     let quest = prompt(question, defaultValue);
// 	   callback(quest);
// }

// ask('How old are you?', '10', function(response) {
// 	console.log(response);
// });

// Task9
// Напишите функцию, которая в строке, состоящей из чисел, разделенных пробелом, находит максимальное 
// и минимальное и возвращает их 

// function highAndLow(str) {
//     let arr = str.split(' ');
//     let max = +arr[0];
//     let min = +arr[0];
    
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = +arr[i];
//         } else if (arr[i] > max) {
//             max = +arr[i];
//         }
//     }

//     return `${max} и ${min}`;
// }

// let result = highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6');
// console.log( result );


// Task10
// Напишите функцию checkNumber, которая получает на вход как параметр массив любых значений и возвращает 
// true, если все элементы - числа, и false - если в массиве хотя бы  одно не число. Для проверки массива 
// используйте метод every или some

// function checkNumber (arr) {
//     return arr.every( (key) => isFinite(key));
// }

// console.log( checkNumber([1, 2, '3', 'a']) ); // false
// console.log( checkNumber([1, 2, '3', '4']) ); // true