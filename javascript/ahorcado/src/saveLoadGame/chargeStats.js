import { fillPlayerMovie, fillRightLetters } from '../initialize/startGame';
import { counter } from '../gameEngine/counter';
import { loadButtons, loadHints, loadLetters, loadingLife } from './loadStats';


function getStatsPlayer() {
    console.log("hey");
    
    let stats = JSON.parse(localStorage.stats);
    movieToPlay = stats.peli;
    failedLetters = stats.letrasFalladas;
    initializeParams();
    fillPlayerMovie();
    fillRightLetters();
    counter();
    loadButtons(stats.letrasFalladas);
    loadingLife(stats.intentosRestantes);
    loadHints(stats.pistasConsumidas);
    loadLetters(stats.letrasAcertadas);
}

export { getStatsPlayer };