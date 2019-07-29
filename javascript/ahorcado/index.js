var movies = [
    {
        name: "El padrino",
        hints: ["Crimen", "Años 40", "Mafia"]
    },
    {
        name: "Pulp Fiction",
        hints: ["Drogas", "[Ezequiel 25:17]", "Tarantino"]
    },
    {
        name: "Star Wars",
        hints: ["Espacio", "Laser", "Estrella de la muerte"]
    },
    {
        name: "El Señor de los Anillos",
        hints: ["Enanos, elfos y orcos", "Mio solo mio...", "Hobbits"]
    },
    {
        name: "Matrix",
        hints: ["Simulación", "Pastilla roja o azúl", "Esquivar balas"]
    },
    {
        name: "Regreso al Futuro",
        hints: ["Viajes en el tiempo", "Condensador de fluzo", "'¡Nadie me llama gallina!'"]
    },
    {
        name: "Jurassic Park",
        hints: ["Naturaleza", "Parque de atracciones", "Dinosaurios"]
    },
    {
        name: "Alien",
        hints: ["Espacio", "Nave Espacial", "Extraterrestre"]
    },
    {
        name: "Toy Story",
        hints: ["Amigos", "Serpiente en bota", "Juguetes"]
    },
    {
        name: "Caza Fantasmas",
        hints: ["A domicilio", "Paranormal", "Cazadores"]
    }
];

//pedir pista
var actualHintPosition = 0;
//introducir letra y comparar
var lettersDone = [];
var rightLetters = "";
var moviePosition = pickingMovie(movies);
var playerMovie = [];
var failedLetters = [];

let hearts = document.getElementsByClassName('heart');
let intentosRestantes = hearts.length;

initialize()

function initialize() {
    pickingMovie(movies);
    fillPlayerMovie();
    fillRightLetters();
    counter();
}

function counter() {
    var secs = 59;
    var actualSecs = 0;
    var counter = setInterval(() => {
        if (actualSecs == secs) {
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

// Eleccion Aleatoria de Peli
function pickingMovie(movies) {
    let chosen = Math.floor(Math.random() * 10);

    for (movie in movies) {
        if (movie == chosen) {
            return movie;
        }
    }
}

function removeLife() {
    let pathEmptyHeart = 'images/empty-heart.png';

    if (intentosRestantes == 0) {
        loser();
    } else {
        --intentosRestantes;
        hearts[intentosRestantes].setAttribute('src', pathEmptyHeart);
    }
}

function showHint() {
    if (actualHintPosition < 3) {
        var result = movies[moviePosition].hints[actualHintPosition];
        document.getElementById("hints").innerHTML += result + "<br>";
        actualHintPosition++;
    } else if (actualHintPosition == 3) {
        console.log(actualHintPosition);
        document.getElementById("hints").innerHTML += "All Hints Shown"
        actualHintPosition++;
    }
}

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
        //NO SE USA AHORA MISMO
        // showFailedLetters();
        failed(letter);
    }
}

function addFailedLetter(letter) {
    failedLetters.push(letter);
    removeLife();
    paintingIsaac();
}

function findCoincidences(letter) {
    var movieName = getMovieName(0).toLowerCase();
    for (let i = 0; i < movieName.length; i++) {
        if (letter.toLowerCase() == movieName.charAt(i)) {
            playerMovie[i] = movieName.charAt(i);
        }
    }
}

function fillRightLetters() {
    for (let i = 0; i < getMovieName(moviePosition).length; i++) {
        if (getMovieName(moviePosition).charAt(i) != " ") {
            rightLetters += getMovieName(moviePosition).charAt(i).toLowerCase();
        }
    }
}

async function checkWin() {
    var count = 0;
    for (let i = 0; i < playerMovie.length; i++) {
        if (playerMovie[i] != "-" && playerMovie[i] != "/") {
            count++
        }
    }
    if (count == rightLetters.length) {
        winner();
    }
}

async function fillPlayerMovie() {
    for (let i = 0; i < getMovieName(moviePosition).length; i++) {
        if (getMovieName(moviePosition).charAt(i) != " ") {
            playerMovie[i] = "/";
        } else {
            playerMovie[i] = "-"
        }
    }
    showPlayerMovie();
}

function showPlayerMovie() {
    var result = "";
    for (let i = 0; i < playerMovie.length; i++) {
        if (playerMovie[i] == "/") {
            result += "-"
        } else {
            result += " "
        }
    }
    document.getElementById("playerMovie").innerHTML = result;
}

function getMovieName(position) {
    return movies[position].name;
}
// NO SE USA AHORA MISMO!!!
// function showFailedLetters() {
//     document.getElementById("letrasfallidas").innerHTML = "";
//     for (let i = 0; i < failedLetters.length; i++) {
//         if (i == failedLetters.length - 1) {
//             document.getElementById("letrasfallidas").innerHTML += failedLetters[i]
//         } else {
//             document.getElementById("letrasfallidas").innerHTML += failedLetters[i] + "-"
//         }
//     }
// }

function acert(id) {
    var button = document.getElementById(id);
    button.style.backgroundColor = "#a1dd70";
    button.style.boxShadow = '0 6px #a1dd70';
    button.style.color = "white";
}

function failed(id) {
    var button = document.getElementById(id)
    button.style.backgroundColor = '#cb4e4e';
    button.style.boxShadow = '0 6px #cb4e4e';
    button.style.color = "white"
}


// var actualHintPosition = 0;
// //introducir letra y comparar
// var lettersDone = [];
// var rightLetters = "";
// var moviePosition = pickingMovie(movies);
// var playerMovie = [];
// var failedLetters = [];

function winner() {
    $(document).ready(function () {
        $("#modalWinner").modal('show');
    });
}


function loser() {
    $(document).ready(function () {
        $("#modalLoser").modal('show');
    });
}

let conteo = 1;

function paintingIsaac() {
    
    let isaac = document.getElementById("isaac");
    let pathImageIsaac = '';

    
    if (conteo <= 5) {
        pathImageIsaac = 'images/isaac-'+conteo+'.png';
        isaac.setAttribute('src',pathImageIsaac);
        conteo++;
    }
}


// Guardado el estado de la partida

let playerStats = {

    pistasConsumidas : actualHintPosition,
    peli : moviePosition

}

localStorage.setItem('stats',JSON.stringify(playerStats));

/* Print the letter of the button the player pressed on the screen*/
function reply_click(clicked_id) {
    checkLetter(clicked_id);
}
