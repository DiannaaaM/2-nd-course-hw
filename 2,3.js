// Задание 1
let password = 'пароль';
let userAnswer = prompt("Введите пароль")
if (password == userAnswer) {
    console.log("Пароль введен верно")
} else {
    console.log("Пароль введен неправильно")
}
// Заадание 2
let c = 0;
if (0 < c & c < 10) {
    console.log("Верно");
} else {
    console.log("Неверно")
}
// Заадание 3
let d = 90;
let e = -90;
if (d > 100 || e > 100) {
    console.log("Верно");
} else {
    console.log("Неверно");
}
// Заадание 4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
switch (a) {
    case "1":
        let a = 1;
        break;
    case "2":
        let a = 2;
        break;
    case "3":
        let a = 3;
        break;
    case "4":
        let a = 4;
        break;
    case "5":
        let a = 5;
        break;
    case "6":
        let a = 6;
        break;
    case "7":
        let a = 7;
        break;
    case "8":
        let a = 8;
        break;
    case "9":
        let a = 9;
        break;
    case "10":
        let a = 10;
        break;
}
switch (b) {
    case "1":
        let b = 1;
        break;
    case "2":
        let b = 2;
        break;
    case "3":
        let b = 3;
        break;
    case "4":
        let b = 4;
        break;
    case "5":
        let b = 5;
        break;
    case "6":
        let b = 6;
        break;
    case "7":
        let b = 7;
        break;
    case "8":
        let b = 8;
        break;
    case "9":
        let b = 9;
        break;
    case "10":
        let b = 10;
        break;
}
alert(a + b);

// Заадание 5
let nomberOfMounth = 1;
switch (nomberOfMounth) {
    case 1:
        console.log("Зима");
        break;
    case 2:
        console.log("Зима");
        break;
    case 3:
        console.log("Весна");
        break;
    case 4:
        console.log("Весна");
        break;
    case 5:
        console.log("Весна");
        break;
    case 6:
        console.log("Лето");
        break;
    case 7:
        console.log("Лето");
        break;
    case 8:
        console.log("Лето");
        break;
    case 9:
        console.log("Осень");
        break;
    case 10:
        console.log("Осень");
        break;
    case 11:
        console.log("Осень");
        break;
    case 12:
        console.log("Зима");
        break;
    default:
        console.log("Нет такого месяца");
        break;
}