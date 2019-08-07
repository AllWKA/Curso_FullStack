import { movies } from './movies';

// bryan
import { fillPlayerMovie, fillRightLetters } from './fillVariables';

// thais
import { restoreLife } from '../gameEngine/life';
import { restoreButtons } from '../gameEngine/buttons';
import { counter } from '../gameEngine/counter';
import {
    movieToPlay, actualHintPosition, playerMovie,
    failedLetters, actualSecs, rightLetters, hearts, intentosRestantes
} from "../initialize/variables";

console.log("charge startGame");

function randomMovieMode() {
    movieToPlay = movies[pickingMovie(movies)];
}

function startGame() {
    initializeParams()
    restoreButtons();
    restoreLife();
    fillPlayerMovie();
    fillRightLetters();
    counter();
}

function initializeParams() {
    actualHintPosition = 0;
    lettersDone = [];
    playerMovie = [];
    failedLetters = [];
    actualSecs = 0;
    rightLetters = "";
    hearts = document.getElementsByClassName('heart');
    intentosRestantes = hearts.length;
    document.getElementById("hints").innerHTML = "";
    document.getElementById("isaac").setAttribute('src', 'images/pixil-frame-0 (6).png');
}

export { newGame, startMenu, startGame, initializeParams, randomMovieMode };
