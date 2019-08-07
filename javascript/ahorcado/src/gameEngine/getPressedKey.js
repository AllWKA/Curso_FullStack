import { searchLetter } from './checkLetters';

console.log("charge getPressedKey");
function getKeyPressed(event) {
    var x = event.which || event.keyCode;
    switch (x) {
        case 97:
            searchLetter("a")
            break;
        case 98:
            searchLetter("b")
            break;
        case 99:
            searchLetter("c")
            break;
        case 100:
            searchLetter("d")
            break;
        case 101:
            searchLetter("e")
            break;
        case 102:
            searchLetter("f")
            break;
        case 103:
            searchLetter("g")
            break;
        case 104:
            searchLetter("h")
            break;
        case 105:
            searchLetter("i")
            break;
        case 106:
            searchLetter("j")
            break;
        case 107:
            searchLetter("k")
            break;
        case 108:
            searchLetter("l")
            break;
        case 109:
            searchLetter("m")
            break;
        case 110:
            searchLetter("n")
            break;
        case 241:
            searchLetter("ñ")
            break;
        case 111:
            searchLetter("o")
            break;
        case 112:
            searchLetter("p")
            break;
        case 113:
            searchLetter("q")
            break;
        case 114:
            searchLetter("r")
            break;
        case 115:
            searchLetter("s")
            break;
        case 116:
            searchLetter("t")
            break;
        case 117:
            searchLetter("u")
            break;
        case 118:
            searchLetter("v")
            break;
        case 119:
            searchLetter("w")
            break;
        case 120:
            searchLetter("x")
            break;
        case 121:
            searchLetter("y")
            break;
        case 122:
            searchLetter("z")
            break;
        default:
            // alert("eso no es una letra mongolin")
            break;
    }

}