

function showHint() {

    if (actualHintPosition < 3) {
        var result = movieToPlay.hints[actualHintPosition];
        document.getElementById("hints").innerHTML += result + "<br>";
        actualHintPosition++;
    } else if (actualHintPosition == 3) {
        actualHintPosition++;
    }
}




export { showHint};