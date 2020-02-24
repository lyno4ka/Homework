// Task1 
/* Создайте объект calculator с методами:
read() запрашивает prompt для двух значений и сохраняет их как свойства объекта x, y
sum() возвращает сумму этих двух значений
multi() возвращает произведение этих двух значений
diff() возвращает разницу
div() возвращает частное

calculator.read();
alert( calculator.sum() );
alert( calculator.multi() );
*/

let calculator = {
    read() {
        this.x = +prompt('Enter x:', );
        this.y = +prompt('Enter y:', );
    },
    sum() {
        return this.x + this.y;
    },
    multi() {
        return this.x * this.y;
    },
    diff() {
        return this.x - this.y;
    },
    div() {
        return this.x / this.y;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.multi() );

// Task5 
/* Создайте объект с данными: x, y и методами: getSum, getDiff, getMulti, getDiv. 
Методы объекта ничего не реализуют, а только выводят в alert сообщения вида ‘1 + 1 = 2’ 
или ‘1 / 0 = Infinity’. Для расчетов все методы используют функционал ранее созданного калькулятора.

alert(me.getSum());
alert(me.getDiv());
*/

let me = {
    x: calculator.x,
    y: calculator.y,
    getSum() {
        return this.x + ' + ' + this.y + ' = ' + calculator.sum.call(this);
    }, 
    getDiff() {
        return this.x + ' - ' + this.y + ' = ' + calculator.diff.call(this);
        }, 
    getMulti() {
        return this.x + ' * ' + this.y + ' = ' + calculator.multi.call(this);
    }, 
    getDiv() {
        return this.x + ' / ' + this.y + ' = ' + calculator.div.call(this);
    }
};

alert(me.getSum());
alert(me.getDiv());

// Task2
/* Создайте объект coffeeMachine со свойством message: ‘Your coffee is ready!’ и методом 
start(), при вызове которого – coffeeMachine.start() – через 3 секунды появляется окно 
с сообщением, записанным в свойстве объекта message.
*/
// let coffeeMachine  = {
//     message: 'Your coffee is ready!',
//     start() {
//         setTimeout(() => alert(this.message), 3000);
//     }
// };

// coffeeMachine.start();


// Task3
/* Создайте объект array с методом инициализации начального значения массива, c методами 
добавления, удаления последнего элемента массива и методом возврата текущего состояния 
массива. Используйте концепцию chaining для создания цепочки вызовов.
array
.setValue([1])
.push(2)
.push(3)
.push(3)
.pop();

var currentValue = array.getValue();
console.log(currentValue); // [1, 2, 3]
*/

// let array = {
//     value: [],
//     setValue(arr) {
//         this.value = arr;
//         return this;
//     },
//     push(arg) {
//        this.value.push(arg);
//         return this;
//     },
//     pop() {
//         this.value.pop();
//         return this;
//     },
//     getValue() {
//         return this.value;
//     }
// };

// array
// .setValue([1])
// .push(2)
// .push(3)
// .push(3)
// .pop();

// var currentValue = array.getValue();
// console.log(currentValue); // [1, 2, 3]

// Task4
/* Создайте функцию hello(), которая выводит приветствие пользователю. Создайте два 
объекта, содержащие поля firstname, lastname. Используя метод call и функцию hello() 
приветствуйте каждого из пользователей персонально.
*/

// function hello() {
//     alert(`Hello, ${this.firstname} ${this.lastname}!`);
// }

// let person1 = {
//     firstname: 'John', 
//     lastname: 'Doe'
// };

// let person2 = {
//     firstname: 'Sabrina', 
//     lastname: 'Spellman'
// };

// hello.call(person1);
// hello.call(person2);


// Task6
/* “Пишущая машинка”. Создайте объект со свойством delay и методами appendTo и appendText. 
Метод appendTo с помощью jQuery добавляет абзац в контейнер, переданный в параметре метода. 
Метод appendText может дописывать текст в добавленный элемент. Создайте массив строк и запустите 
цикл по этому массиву. С периодичностью, определенной в свойстве delay, в текст добавленного 
html-элемента добавляется соответствующий по порядку элемент массива. Учтите, что для доступа 
к вашему элементу не должен производиться поиск по DOM-дереву.
*/

let $p = '';
let typewriter = {
    delay: 300,
    appendTo(target) {
        $p = $('<p>')
         .appendTo(target)
         .css({
            border: '1px solid #e8f00e', 
            fontSize: '25px',
			fontWeight: 'bold',  
            display: 'inline-block',
            background: '#f0f571'
         });
    }, 
    appendText(text) {
        text = text.split('');
        for (let i = 0; i < text.length; i++) {
            let letter = text[i];
            setTimeout (function() {
                $('<span>').text(letter).appendTo($p);
            }, this.delay * i);
           
        }
    }
};

typewriter.appendTo('.container');
typewriter.appendText('Послушай, остановись, пока не поздно. Я падаю вниз за тобой...');


// Task7 
// Есть следующий код:
// var country = {
//     name: 'Ukraine',
//     language: 'ukrainian',
//     capital: {
//         name: 'Kyiv',
//         population: 2907817,
//         area: 847.66
//     }
// };

// function format(start, end) {
//     console.log(start + this.name + end);
// }


// Допишите код, чтобы в консоли браузера появились строки, которые написаны в комментариях:

// format.call(/* Ваш код */); // Ukraine
// format.apply(/* Ваш код */); // [Ukraine]
// format.call(/* Ваш код */); // Kyiv
// format.apply(/* Ваш код */); // Kyiv
// format.apply(/* Ваш код */); // undefined


// var country = {
//     name: 'Ukraine',
//     language: 'ukrainian',
//     capital: {
//         name: 'Kyiv',
//         population: 2907817,
//         area: 847.66
//     }
// };

// function format(start, end) {
//     console.log(start + this.name + end);
// }

// format.call(country, '', ''); // Ukraine
// format.apply(country, ['[', ']']); // [Ukraine]
// format.call(country.capital, '', ''); // Kyiv
// format.apply(country.capital, ['', '']); // Kyiv
// format.apply(country.name, ['', '']); // undefined


// Task8  
/* Создайте объект user с полем name. Создайте функцию format с параметрами start и end:


function format(start, end) {
    console.log(start + this.name + end);
}

Привяжите функцию format() к объекту user таким образом, чтобы ее вызов возвращал 
отформатированное имя пользователя

userFormat('<<<', '>>>'); // <<<John>>>

Реализуйте 2 версии текущего задания, используя:
1. Анонимную функцию;
2. Метод bind().
*/

// 1
// let user = {
//     name: 'John'
// };


// function format(start, end) {
//     console.log(start + this.name + end);
// }

// function userFormat(start, end) {
//     format.apply(user, [start, end]);
// }
// userFormat('<<<', '>>>');

//2
// let user = {
//     name: 'John'
// };


// function format(start, end) {
//     console.log(start + this.name + end);
// }

// let userFormat = format.bind(user);
// userFormat('<<<', '>>>');

// Task9 
/* Напишите функцию concat, которая соединяет две строки, разделенные каким-то символом: 
разделитель и строки передаются в параметрах функции. Используя карринг, создайте новую 
функцию hello, которая которая выводит приветствие тому, кто передан в ее параметре:

hello('World'); // Hello World
hello('John'); // Hello John
*/

// function concat (str1, symb, str2) {
//     let str = str1 + symb + str2;
//     return str;
// }

// function hello(str) {
// 	let func = concat.bind(null, 'Hello', ' ', str);
// 	return func(); 
// }

// console.log(hello('World')); 
// console.log(hello('John'));


// Level Up 
/*
Используя дескрипторы свойств создайте объект для описания местности со свойствами 
latitude, longitude и title. Свойства latitude и longitude могут содержать только цифры, 
все, что будет попадать в эти поля, становится числом. Если при преобразовании к числу 
получается NaN, то в качестве значения записывается null. То же для поля title, только 
все данные будут преобразовываться к строке.
*/
// 1variant
// let descriptionOfTheArea = {};

// Object.defineProperty(descriptionOfTheArea, 'latitude', {
//     get() {
//         return this._latitude;
//       },
//     set(value) {
//         this._latitude = Number(value) || null;
//       }
// });

// Object.defineProperty(descriptionOfTheArea, 'longitude', {
//     get() {
//         return this._longitude;
//       },
//     set(value) {
//         this._longitude = Number(value) || null;
//       }
// });

// Object.defineProperty(descriptionOfTheArea, 'title', {
//     get() {
//         return this._title;
//       },
//     set(value) {
//         this._title = '' + value;
//       }
// });
    
// descriptionOfTheArea.latitude = '50';
// descriptionOfTheArea.longitude = '30';
// descriptionOfTheArea.title = NaN;
// console.log(descriptionOfTheArea);


// 2variant
// let descriptionOfTheArea = {};

// Object.defineProperties(descriptionOfTheArea, {
//     latitude: {
//         get() {
//             return this._latitude;
//         },
//         set(value) {
//             this._latitude = Number(value) || null;
//         }
//     }, 
//     longitude: {
//         get() {
//             return this._longitude;
//           },
//         set(value) {
//             this._longitude = Number(value) || null;
//           }
//     },
//     title: {
//         get() {
//             return this._title;
//           },
//         set(value) {
//             this._title = '' + value;
//           }
//     }
// });
    
// descriptionOfTheArea.latitude = '50';
// descriptionOfTheArea.longitude = '30';
// descriptionOfTheArea.title = NaN;
// console.log(descriptionOfTheArea);