function loadLetters(letters) {

    let playerMovie = document.getElementById('playerMovie');

    letters = letters.join();
    letters = letters.replace(/\W/g, '');
    console.log(letters);

    playerMovie.innerHTML = letters;
    removeModal();
}
function loadButtons(btnfailed) {
    let btn = document.querySelectorAll('button');
    for (let i = 0; i < btn.length; i++) {
        btnfailed.forEach(letter => {
            if (btn[i].id === letter) {
                btn[i].style.backgroundColor = '#cb4e4e';
                btn[i].style.boxShadow = '0 6px #cb4e4e';
                btn[i].style.color = "#fff"
            }
        });
    }
}
function loadHints(pistasConsumidas) {
    for (let i = 0; i < pistasConsumidas; i++) {
        showHint();
    }
}
function loadingLife(attempts) {
    for (let i = 0; i < 5 - attempts; i++) {
        removeLife();
    }
}

export { loadButtons, loadHints, loadLetters, loadingLife };