import { getStatsPlayer } from "../saveLoadGame/chargeStats";
import { showHint } from "../gameEngine/hints";
import { searchLetter } from "../gameEngine/checkLetters";
import { openFormModal } from '../modales/openModal';



function addListeners() {
    window.addEventListener('beforeunload', function (e) { saveStatsPlayer(); });
    document.getElementById("movieForm").addEventListener("submit", getMovieFromApi);
    document.getElementById("continue").addEventListener("click", startChallenge);
    document.getElementById("randomMovie").addEventListener("click", randomMovieMode);
    document.getElementById("load").addEventListener("click", getStatsPlayer);
    document.getElementById("pistas").addEventListener("click", showHint);
    document.getElementById("retry").addEventListener("click", openFormModal);
    document.getElementById("replay").addEventListener("click", openFormModal);
    addListenerButtons();
}

function addListenerButtons() {
    for (let i = 0; i < document.getElementById("buttons").childNodes.length; i++) {
        var button = document.getElementById("buttons").childNodes[i];
        //TODO: hay que testear esto lokko
        button.addEventListener("click", searchLetter(button.id));
    }
}

export { addListeners };