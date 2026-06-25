// Задание 1
let ans = 'js';
console.log(ans.toUpperCase());
// Заадание 2
function filter(arr, string) {
    let result = [];
    for(let i = 0; i < arr.lengh; i++){
        if (arr[i].toLowerCase().startWith(str.toLowerCase())) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], '3'));
// Заадание 3
let num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));
// Заадание 4
console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

// Заадание 5
function randomNum () {
    return Math.random() * 10;
}
console.log(randomNum);
// Заадание 6
function getRumdomMass(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(Math.floor(Math.random() * num));
    }
    return arr;
}
console.log(getRumdomMass(20));

// Заадание 7
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max- min + 1)) + min;
}

console.log(getRandomInteger(20, 40));
// Заадание 8
let currentDate = new Date();
console.log(currentDate);
// Заадание 9
console.log(currentDate + 73);
// Заадание 10
function revertDate (date) {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const year = date.getFullYear();
    const day = date.getDate();
    const mounth = date.getMonth();
    const dayOfWeek = days[date.getDay()];
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return 'дата: ${data} ${months[month]} ${year} - это ${dayOfWeek}. Время: ${hours}:${minutes}:${seconds}';
}
console.log(revertDate(new Date()));