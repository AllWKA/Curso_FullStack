import {failrests5secs} from './counter';
import {removeLife} from './life';
import {paintingIsaac} from './painting-Isaac';
import {acert, failed } from './gameEngine/buttons';
import { lettersDone, rightLetters } from '../initialize/variables';
import { checkWin } from './win';


function searchLetter(letter) {
    if (!lettersDone.includes(letter)) {
        checkLetter(letter)
        lettersDone.push(letter);
    }
}
//check if letter selected is in movie name
function checkLetter(letter) {
    if (rightLetters.includes(letter)) {
        findCoincidences(letter);
        acert(letter);
    } else if (letter != null) {
        addFailedLetter(letter);
        failed(letter);
        failrests5secs(letter);
    }
}

function addFailedLetter(letter) {
    failedLetters.push(letter);
    removeLife();
    paintingIsaac();
}

function findCoincidences(letter) {
    var movieName = getMovieName().toLowerCase();
    for (let i = 0; i < movieName.length; i++) {
        if (letter.toLowerCase() == movieName.charAt(i)) {
            playerMovie[i] = movieName.charAt(i);
        }
    }
    checkWin();
    showPlayerMovie();
}


function showPlayerMovie() {
    document.getElementById("playerMovie").innerHTML = "";
    for (let i = 0; i < playerMovie.length; i++) {
        document.getElementById("playerMovie").innerHTML += playerMovie[i];
    }
}


function getMovieName() {
    return movieToPlay.title;
}

export { showPlayerMovie, getMovieName, searchLetter, checkLetter, addFailedLetter, findCoincidences }