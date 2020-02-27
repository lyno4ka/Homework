/*Создайте базовый класс Figure, который будет хранить координаты (x, y) 
и цвет фигуры. На базе класса Figure создайте три класса – Line, Rect, 
Circle, каждый из которых создает соответствующую фигуру. Пример создания 
экземпляров каждого класса и параметры фигур:

var line = new Line(50, 250, 200, 200, 'red'); // x1, y1, x2, y2, color
var circle = new Circle(120, 120, 50, 'green'); // x, y, r, color
var rect = new Rect(260, 130, 60, 120, 'blue'); // x, y, w, h, color

Все три класса-наследника имеют метод draw для рисования фигуры с 
соответствующими параметрами (координаты, размеры, цвет).

Фигуры рисуются на Canvas. Для рисования на канвасе создайте еще 
один класс – Canvas, в котором инициализируется элемент <canvas> 
из DOM. Класс Canvas – final, он не наследуется. В этом классе есть 
метод add, который и отображает созданные вами фигуры на странице. 
Обратите внимание, добавлять фигуры на канвас можно как по отдельности, 
так и списком. Также у класса есть свойства width и height, которые 
можно передать при вызове конструктора и которые меняют размер элемента canvas 
в html. Если в конструктор не передать значения для ширины/высоты, то 
элементу canvas устанавливаются значения по умолчанию

var drawArea = new Canvas('canvasID');
drawArea.add(line);
drawArea.add(circle, rect);

<canvas id="canvasID"></canvas>

Творчество не ограничено. Базовые возможности вашей программы:*/

function Figure(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.draw = function(ctx) {
		ctx.beginPath();
	}
}

function Line(x1, y1, x2, y2, color) {
    Figure.call(this, null, null, color);
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
    this.draw = function(ctx) {
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = '2';
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.stroke();
    };
}

function Rect(x, y, w, h, color) {
    Figure.call(this, x, y, color);
    this.w = w;
    this.h = h;

    this.draw = function(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.w, this.h);
	}
    
}

function Circle(x, y, r, color) {
    Figure.call(this, x, y, color);
    this.r = r;

    this.draw = function(ctx) {
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = '2';
        ctx.arc(this.x, this.y, this.r, 0,2 * Math.PI);
        ctx.stroke();
	}
}

function Canvas(id, h, w) {
    let canvas = document.getElementById(id);
    let ctx = canvas.getContext('2d');
    canvas.height = h || 400;
	canvas.width = w || 650;
    

    this.add = function() {
        for (let i = 0; i < arguments.length; i++) {
                arguments[i].draw(ctx);
        }
    }
}

let line1 = new Line(50, 250, 200, 200, 'red'); // x1, y1, x2, y2, color
let line2 = new Line(50, 250, 200, 300, 'red'); // x1, y1, x2, y2, color
let line3 = new Line(200, 100, 200, 300, 'yellow'); // x1, y1, x2, y2, color
let line4 = new Line(130, 170, 200, 300, 'green'); // x1, y1, x2, y2, color
let line5 = new Line(50, 250, 200, 200, 'yellow'); // x1, y1, x2, y2, color
let circle = new Circle(120, 120, 50, 'green'); // x, y, r, color
let circle2 = new Circle(190, 50, 50, 'yellow'); // x, y, r, color
let rect = new Rect(260, 130, 60, 120, 'blue'); // x, y, w, h, color
let rect2 = new Rect(290, 100, 60, 120, 'pink'); // x, y, w, h, color

let drawArea = new Canvas('canvasID');
drawArea.add(circle, circle2, line1, line2, line3, line4, line5, rect, rect2);