let randomNumber = Math.random() * 100;
do {
    let userAnswer = prompt("Я загадал число от 1 до 100, попробуй отгадать");
    if (userAnswer < randomNumber){
        console.log('Твое число меньше моего... Думай еще')
    } if (userAnswer > randomNumber){
        console.log('Твое число больше моего... Думай еще')
    }
} while(userAnswer = randomNumber)
