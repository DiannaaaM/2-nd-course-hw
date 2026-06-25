document.querySelector('#game-2 .mini-games__card-button').onclick = function () {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    let sign = Math.floor(Math.random() * 4);
    let question = '';
    let answer = 0;

    if (sign === 0) {
        question = num1 + ' + ' + num2;
        answer = num1 + num2;
    }

    if (sign === 1) {
        let a = Math.floor(Math.random() * 10) + 1;
        let b = Math.floor(Math.random() * a) + 1;
        question = a + ' - ' + b;
        answer = a - b;
    }

    if (sign === 2) {
        question = num1 + ' * ' + num2;
        answer = num1 * num2;
    }

    if (sign === 3) {
        let b = Math.floor(Math.random() * 9) + 1;
        answer = Math.floor(Math.random() * 10) + 1;
        let a = answer * b;
        question = a + ' / ' + b;
    }

    let userAnswer = prompt(question);

    if (userAnswer == answer) {
        alert('Верный ответ!');
    } else {
        alert('Ошибка! Правильный ответ: ' + answer);
    }
};
