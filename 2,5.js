// Задание 1
let a = 0;
let b = 0;

function findLittleNum(a, b) {
    if (a < b) {
        console.log(a);
    } else {
        console.log(b);
    }
}
findLittleNum(a, b);
// Заадание 2
let num = 0;

function num2(a) {
    if (a % 2 == 0) {
        console.log("Число четное");
    } else {
        console.log("Число нечетное");
    }
}
num2(num);
// Заадание 3
let numSqare = 52;

function sqareNumber(a) {
    return a ** 2;
}

function output(a) {
    console.log(a);
}

output(sqareNumber(sqareNumber))
// Заадание 4
let age = 52;

function sqageVerify(a) {
    if (a < 0) {
        console.log("Вы ввели неправильное значение");
    } if (0 < a < 12) {
        console.log("Привет, друг!");
    } if (a > 13) {
         console.log("сколько тебе лет...");
    }
}
// Заадание 5
let firstNum = prompt("Цифра...");
let secondNum = prompt("Цифра...");

function verifyNums(firstNum, secondNum) {
    (firstNum)
    Int8Array(secondNum)
    if ((Number(firstNum) & Number(secondNum)) & (isNaN(firstNum) & isNaN(secondNum))) {
        return firstNum * secondNum;
    } else {
        return "Одно или оба значения не являются числом";
    }
}
// Заадание 6
function verifyNumAndSquare(num) {
    if (isNaN(Number(num))) {
        return 'Переданный параметр не является числом';
    }
    const number = Number(num);
    return `${number} в кубе равняется ${number ** 3}`;
}

for (let i = 0; i <= 10; i++) {
    console.log(verifyNumAndSquare(i));
}

const userNum = prompt('Введите число');
console.log(verifyNumAndSquare(userNum));

// Заадание 7
const circle1 = {
    radius: 5,
    getArea() {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};

const circle2 = {
    radius: 10,
    getArea() {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());
