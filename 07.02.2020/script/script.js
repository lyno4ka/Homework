// Task1
// Создайте объект person, описывающий персону, с произвольным количеством 
// произвольных полей. С помощью оператора in или typeof проверьте наличие 
// в объекте свойства, прочитанного из prompt, и выведите его на экран. 
// Если свойства нет, то добавляйте его в объект со значением, которое 
// также запрашивается из prompt.                             
let person = {
    name: 'Sabrina',
    surname: 'Spellman',
    age: '16',
    pet: 'Salem',
    job: 'witch',
};

let property = prompt('Enter property', ''); 

if (property in person) {
        alert(person[property])
    } else {
        person[property] = prompt('Enter value of property', '');   
    }
console.log(person);

// // Task2
// // Сгенерируйте объект, описывающий модель телефона, заполнив все свойства 
// // значениями, прочитанными из prompt (например: brand, model, resolution, 
// // color...), не используя вспомогательные переменные. Добавьте этот 
// // гаджет персоне, созданной ранее.
let modelTelephone = {};

modelTelephone.brand = prompt('Enter brand', 'iPhone'); 
modelTelephone.model = prompt('Enter model', '11 Pro'); 
modelTelephone.resolution = prompt('Enter resolution', '2436 x 1125'); 
modelTelephone.color = prompt('Enter color', 'gold'); 

person.modelTelephone = modelTelephone;
console.log(person);


// Task3
// Запустите бесконечный цикл. В цикле вызывайте prompt, в котором пишется 
// либо delete, либо update. В зависимости от указанного действия, удаляйте 
// или добавляйте (редактируйте) свойство в объекте персоны (которая уже 
// имеет телефон). Какое именно свойство удалять или добавлять - также 
// читается из prompt. Какое значение будет у добавленного свойства - 
// тоже берется из prompt. При нажатии на Отмена при появлении prompt 
// редактирование person заканчивается. И обновленные данные распечатываются 
// в консоли.

while (true) {
    let nameAct = prompt('Enter "delete" or "update"', 'delete');
    
    if (nameAct === null) {
        break;
    }

    if (nameAct === 'delete') {
        let property  = prompt('Enter property', 'age');
        if (property in person) {
            delete  person[property];
        } else {
            console.log(person); break;
        }
     }  else if (nameAct === 'update') {
            property = prompt('Enter property', '');
            if (property !== null) {
            person[property] = prompt('Enter value of property', '');
            } else {
                console.log(person); break;
            }
     }
}
console.log(person);


// Task4 
// Динамически (скриптом) создайте HTML элемент <dl>. Переберите в цикле 
// (for..in) сгенерированный ранее объект person, добавляя dt - для имени 
// свойства и dd - для значения свойства (работа с DOM - с использованием 
// методов Native JS).
// let container = document.querySelector('.container');
// let dl = document.createElement('dl');
// container.appendChild(dl);

for (let key in person) {

    if (typeof person[key] !== 'string') {
		person[key] = 'Описание телефона';
	}

    let dt = document.createElement('dt');
    dt.innerText = key;

    let dd = document.createElement('dd');
    dd.innerText = person[key];

    dl.appendChild(dt);
    dl.appendChild(dd);
}


// Task5 
// Создайте объект dates для хранения дат. Первая дата – позавчера. Вторая 
// дата – текущая дата (new Date) минус 365 дней. Из prompt читается дата в 
// формате yyyy-MM-dd. Проверьте, попадает ли введенная дата в диапазон дат 
// объекта dates.
// let date1 = new Date();
// let date2 = new Date();

// let dates = {
//     'first date':  date1.toDateString(date1.setDate(date1.getDate() - 2)),
//     'second date': date2.toDateString(date2.setDate(date2.getDate() - 365)),
// };
// console.log(dates);

// let someDate = prompt('Enter date in format yyyy-MM-dd', '2019-02-13');
// if (new Date(someDate) >= Date.parse(dates['second date']) && new Date(someDate) <= Date.parse(dates['first date'])) {
//     alert('Дата попадает в диапазон');
//   } else {
//     alert('Дата не попадает в диапазон')
//   }


// Task6
// Создайте структуру данных, полностью описывающую html-разметку картинки. 
// С помощью методов браузера добавьте ее на страницу со всеми атрибутами, 
// читая значения свойств из созданного объекта.
{/* <img src="https://www.google.com.ua/logos/doodles/2017/bella-akhmadulinas-80th-birthday-5134676388741120.3-law.gif" 
alt="" style="border: 1px solid #ccc" width="200"> */}

let image = {
    src: 'https://www.google.com.ua/logos/doodles/2017/bella-akhmadulinas-80th-birthday-5134676388741120.3-law.gif',
    alt: '',
    style: 'border: 1px solid #ccc',
    width: '200',
};

let img = document.createElement('img');
document.body.appendChild(img);

for (let key in image) {
    img.setAttribute(key, image[key]);
}

