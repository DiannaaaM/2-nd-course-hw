// Задание 1
const mass = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < mass.length; i++) {
    if (i < 10) {
        console.log(i);
    } else {
        break;
    }
}
// Задание 2
const mass = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < mass.length; i++) {
    if (i == 4) {
        console.log(i);
    } else {
        break;
    }
}
// Задание 3
const nums = [1, 3, 5, 10, 20];
console.log(nums.join(' '))
// Задание 4
const matrix = [];
for (let i = 0; i < 3; i++) {
    matrix[i] = [];
    for (let j = 0; j < 3; j++) {
        matrix[i][j] = 1;
    }
}
console.log(matrix);
// Задание 5

// Задание 6
// Задание 7

// Задание 8
let str = 'abcdef';
let arr8 = str.split('');
arr8.reverse();
console.log(arr8.join(''));

// Задание 9
let arr9 = [[1, 2, 3], [4, 5, 6]];
let result9 = arr9[0].concat(arr9[1]);
console.log(result9);

// Задание 10
let arr10 = [];
for (let i = 0; i < 5; i++) {
    arr10.push(Math.floor(Math.random() * 10) + 1);
}
for (let i = 0; i < arr10.length - 1; i++) {
    console.log(arr10[i] + arr10[i + 1]);
}

// Задание 11
function getSquares(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * arr[i]);
    }
    return result;
}
console.log(getSquares([1, 2, 3, 4]));

// Задание 12
function getWordLengths(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i].length);
    }
    return result;
}
console.log(getWordLengths(['Привет', 'Мир']));

// Задание 13
function getNegative(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(getNegative([1, -2, 3, -4, 5]));

// Задание 14
let arr14 = [];
for (let i = 0; i < 10; i++) {
    arr14.push(Math.floor(Math.random() * 11));
}
let evenArr = [];
for (let i = 0; i < arr14.length; i++) {
    if (arr14[i] % 2 === 0) {
        evenArr.push(arr14[i]);
    }
}
console.log(arr14);
console.log(evenArr);

// Задание 15
let arr15 = [];
for (let i = 0; i < 6; i++) {
    arr15.push(Math.floor(Math.random() * 10) + 1);
}
let sum = 0;
for (let i = 0; i < arr15.length; i++) {
    sum = sum + arr15[i];
}
console.log(sum / arr15.length);
