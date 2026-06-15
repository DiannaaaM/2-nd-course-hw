let correctAnswers = 0;

// Массив вопросов и правильных ответов
const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2 // номер правильного ответа
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

for (answer in quiz) {
    alert(answer[question])
    let userAnswer = prompt("Кажется что...");
    if (userAnswer == answer[correctAnswer]) {
        correctAnswers += 1;
        alert("Верно! +1 балл в карму");
    } else {
        alert('Не мудри, верный ответ был - ' +  answer[correctAnswer]);
    }
}

alert('Всего у тебя получилось ' + correctAnswers + ' баллов:)')