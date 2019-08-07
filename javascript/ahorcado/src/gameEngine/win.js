
import {winner} from '../modales/winner-modal';

function checkWin() {
    var count = 0;
    for (let i = 0; i < playerMovie.length; i++) {
        if (playerMovie[i] != "_" && playerMovie[i] != " ") {
            count++
        }
    }
    if (count == rightLetters.length) {
        winner();
    }
}

export { checkWin };