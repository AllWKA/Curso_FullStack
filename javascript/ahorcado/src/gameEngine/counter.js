function counter() {
    var counter = setInterval(() => {
        if (actualSecs == 59) {
            clearInterval(counter);
        }
        showCounter(actualSecs)
        actualSecs++;
    }, 1000);
}
function showCounter(actualSecs) {
    if (actualSecs != 59) {
        if (59 - actualSecs < 10) {
            document.getElementById("counter").innerHTML = "00:0" + (59 - actualSecs)
        } else {
            document.getElementById("counter").innerHTML = "00:" + (59 - actualSecs)
        }
    } else {
        document.getElementById("counter").innerHTML = "TIME OUT!!!!!";
    }
}

function failrests5secs(letter) {
    if (!rightLetters.includes(letter)) {
        actualSecs = actualSecs + 5;
    }
}


export { counter,failrests5secs };