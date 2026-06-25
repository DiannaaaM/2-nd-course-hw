document.querySelector('#game-3 .mini-games__card-button').onclick = function () {
    let text = prompt('Введите текст');
    let arr = text.split('');
    arr.reverse();
    alert(arr.join(''));
};
