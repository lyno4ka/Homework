// Task1 
// Напишите функцию setComment с параметрами: date, message, author. Дата и текст сообщения - 
// обязательные параметры, если какой-то из них или оба отсутствуют, то выполнение функции 
// должно обрываться, а пользователю выдаваться предупреждение (alert) о том, что данные 
// переданы некорректно. Параметр author - опциональный, но должна происходить проверка: если 
// параметр не передан, то вместо него подставляется значение ‘Anonymous’. Функция 
// распечатывает на странице текст в формате: 
// 				<имя_автора>, <дата>
// 				<текст_сообщения>

// function setComment (date, message, author) {
//     if (date === undefined || message === undefined) {
//         return alert('данные переданы некорректно');
//     }   

//     if (author === undefined) {
//         author = 'Anonymous';
//     }
//     console.log(author + ', ' + date + '\n' + message);
// }

// setComment('2016-11-02', 'Everything is ok', 'John');
// setComment('2016-11-02', 'You could do it better!');
// setComment('fdf');

// Task2
// Напишите функцию, которая возвращает куб переданного числа, аналог Math.pow(x, 3) – 
// a) используя цикл b) используя рекурсию:

//a)
// function cube(x) {
//     let result = 1;
//     for (let i = 0; i < 3; i++) {
//         result *= x;
//     }
//     return result;
// }
// console.log( cube(2) ); // 8

//b)
// function cube(x) {
//     let innerCube = (x, power) => power == 1 ? x : (x * innerCube(x, power - 1));
//     return innerCube(x, 3);
// }
// console.log( cube(2) ); // 8


// Task3
// Напишите функцию extraCube, которая принимает в качестве параметра или число, или массив 
// числовых значений и возвращает либо куб числа, либо массив кубов, в зависимости от типа 
// входящего параметра (typeof). Для расчета куба числа вместо встроенного метода Math.pow 
// используйте собственную функцию.

// function extraCube(param) { 
//     if (Array.isArray(param)) {
//         return param.map((arr) => {
//             return cube(arr);  //функция с Task2
//         })
//     }
//     return cube(param);
// }


// console.log( extraCube(2) ); // 8
// console.log( extraCube([0, 1, 2, 3])); // [0, 1, 8, 27]


// Task4
// Напишите функцию, которая вызывается и работает следующим образом:
// function multi (x) {
//     return (y) => {
//         return (z) => {
//             return x * y * z;
//         }
//     }
// }
// console.log( multi(2)(3)(4) ); // 24


// Task5 
// Создайте объект, описывающий html-разметку. Напишите функцию, которая добавляет разметку 
// в произвольный контейнер на странице.

// <section id="methods">
// 	<article>
// 		<h1>Array.prototype.every()</h1>
// 		<p>Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.</p>
// 	</article>
// 	<article>
// 		<h1>Array.prototype.some()</h1>
// 		<p>Метод some() проверяет, удовлетворяет ли хоть какой-нибудь элемент массива условию, заданному в передаваемой функции.</p>
// 	</article>
// 	<article>
// 		<h1>Array.prototype.reduce()</h1>
// 		<p>Метод reduce() применяет функцию к аккумулятору и каждому значению массива (слева-направо), сводя его к одному значению.</p>
// 	</article>
// 	<article>
// 		<h1>Array.prototype.reduceRight()</h1>
// 		<p>Метод reduceRight() применяет функцию к аккумулятору и каждому значению массива (справа-налево), сводя его к одному значению.</p>
// 	</article>
// </section>

let markup = [
    {
        tag: 'section',
        id: 'methods',
        children: [
            {
                tag: 'article',
                children: [
                    {
                        tag: 'h1',
                        content: 'Array.prototype.every()'
                    },
                    {
                        tag: 'p',
                        content: 'Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.'
                    }
                ]
            },
            {
                tag: 'article',
                children: [
                    {
                        tag: 'h1',
                        content: 'Array.prototype.some()'
                    },
                    {
                        tag: 'p',
                        content: 'Метод some() проверяет, удовлетворяет ли хоть какой-нибудь элемент массива условию, заданному в передаваемой функции.'
                    }
                ]
            },
            {
                tag: 'article',
                children: [
                    {
                        tag: 'h1',
                        content: 'Array.prototype.reduce()'
                    },
                    {
                        tag: 'p',
                        content: 'Метод reduce() применяет функцию к аккумулятору и каждому значению массива (слева-направо), сводя его к одному значению.'
                    }
                ]
            },
            {
                tag: 'article',
                children: [
                    {
                        tag: 'h1',
                        content: 'Array.prototype.reduceRight()'
                    },
                    {
                        tag: 'p',
                        content: 'Метод reduceRight() применяет функцию к аккумулятору и каждому значению массива (справа-налево), сводя его к одному значению.'
                    }
                ]
            }
        ]
    }
];

function buildMarkup (data, target = document.body) {
    data.forEach(item => {
      const node = document.createElement(item.tag);
      target.appendChild(node);

      if ('id' in item) {
          node.id = item.id;
      }
      
      if ('content' in item) {
        node.innerText = item.content;
      }
      
      if ('children' in item && item.children.length) {
        buildMarkup(item.children, node);
      }
    });
}
  
buildMarkup(markup);


// Task6
// Дан массив, элементами которого могут быть любые значения, включая другие массивы. Напишите 
// функцию flat, которая рекурсивно “разворачивает” переданный массив на глубину depth, 
// указанную в параметре функции. По умолчанию flat поднимает элементы на одну глубину (то 
// есть если depth не указан).

// function flat (arr, depth = '1') {
//     let newArr = arr;
// 		for(let i = depth; i > 0; i--){
// 			newArr = Array.prototype.concat.apply([], newArr);
// 		}
// 			return newArr;
// }

// var data1 = [1, 2, [3, 4, [5, 6]]];
// flat(data1); // [1, 2, 3, 4, [5, 6]]

// var data2 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// console.log( flat(data2, 1) ); // [1, 2, 3, 4, [5, 6, [7, 8, [9, 10]]]]
// console.log( flat(data2, 2) ); // [1, 2, 3, 4, 5, 6, [7, 8, [9, 10]]]
// console.log( flat(data2, 3) ); // [1, 2, 3, 4, 5, 6, 7, 8, [9, 10]]
// console.log( flat(data2, 4) ); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log( flat(data2, 0) ); // [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
// console.log( flat(data2, 5) ); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// Task7
// “История в картинках”. Создайте массив тематически связанных строковых картинок. 
// Перебирая массив в цикле с определенной задержкой (setTimeout) выводите на страницу 
// один из элементов массива (одну из картинок). Тема - свободная, ограничена только 
// набором доступных строковых картинок.

let emojiList = ['🤨', '😐', '🙄', '🤗', '🤭', '🤫', '😜', '🤪', '🥳', '😎'];

function getStory(data) {
    var div = document.createElement('div');
    div.style.width="200px";
    div.style.height="200px";
    div.style.fontSize="100px";
    div.style.margin="0 auto";
    document.body.appendChild(div);
    for (var i = 0; i < data.length; i++) {  
        (function (j) {
            setTimeout(function() {
            div.innerText = data[j];
            // console.log(j, data[j]);
            }, 1000 * j)
        })(i);
        // console.log(i);
    }
    //  console.log('i', i);
}
getStory(emojiList);


// Task8 
// Найдите и исправьте ошибки в коде:

// function foo() {
// 	function bar(a) {
// 		let b = 3;
// 		return b + a;
// 	}
	
// 	for (let i = 0; i < 10; i++) {
// 		console.log( bar(i * 2) );
// 	}
// }

// foo(); // 3 5 7 9 11 13 15 17 19 21


// Замыкания
// Task1
// Используя замыкание, напишите функцию createTimer, которая использует метод 
// performance.now() для получения текущей временной метки и служит для замера 
// времени выполнения другого кода:
// function createTimer() {
//     let time0 = performance.now();
//     return function () {
//         let time1 = performance.now(); 
//         return time1 - time0;
//     }
// }

// var timer = createTimer();
// alert('!');  // код, время выполнения которого нужно измерить
// alert( timer() ); // время в мкс от начала выполнения createTimer() до момента вызова timer()



// Task2
// Используя замыкания, создайте функцию createAdder(), которая принимает на вход любой 
// примитивный параметр и возвращает функцию, которая добавляет к первому параметру второй. 
// Функция работает по следующему принципу:

// function createAdder(param1) {
//     return function (param2) {
//         return param1 + param2;
//     };
// }

// var hello = createAdder('Hello, ');
// alert( hello('John') ); // Hello, John
// alert( hello('Harry') ); // Hello, Harry

// var plus = createAdder(5);
// alert( plus(1) ); // 6
// alert( plus(5) ); // 10
