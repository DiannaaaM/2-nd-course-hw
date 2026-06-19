let correctAnswers = 0;

const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

function startQuiz() {
    correctAnswers = 0;

    for (let i = 0; i < quiz.length; i++) {
        let questionText = quiz[i].question + '\n' + quiz[i].options.join('\n');
        let userAnswer = prompt(questionText);

        if (Number(userAnswer) === quiz[i].correctAnswer) {
            correctAnswers += 1;
            alert('Верно! +1 балл в карму');
        } else {
            alert('Не мудри, верный ответ был - ' + quiz[i].correctAnswer);
        }
    }

    alert('Всего у тебя получилось ' + correctAnswers + ' баллов:)');
}

const quizButton = document.querySelector('#game-5 .mini-games__card-button');
quizButton.addEventListener('click', startQuiz);
