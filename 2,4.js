// Задание 1
let i = 0;
while (i < 2) {
    console.log("Привет");
    i ++;
}
// Заадание 2
let i = 0;
do {
   i++;
   console.log(i);
} while(i <= 5);
// Заадание 3
let i = 0;
while (i < 6) {
    i ++;
    console.log(i);
}
// Заадание 4
const obj = {
    "Коля" : '200',
    "Вася" : '300',
    "Петя" : '400'
}
for (let i in obj) {
    console.log(`${i} — ${obj[i]}`);
}
// Заадание 5
let n = 1000;
do {
    n / 2;
} while (n < 50);
// Заадание 6
let firstFridayNum = 7;

for (let day = firstFridayNum; day <= 31; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}
