import { movieFoundInfo, rightLetters, playerMovie } from "../initialize/variables";
import { getMovieName, showPlayerMovie } from "../gameEngine/checkLetters";

function fillMovieData() {
    var listData = document.getElementById("movieData");
    listData.innerHTML = "";
    if (movieFoundInfo.Title != undefined) {
        listData.innerHTML += "<li>" + "Titulo: " + movieFoundInfo.Title + "</li>";
        listData.innerHTML += "<li>" + "Año: " + movieFoundInfo.Year + "</li>";
        listData.innerHTML += "<li>" + "Actores: " + movieFoundInfo.Actors + "</li>";
        listData.innerHTML += "<li>" + "Genero: " + movieFoundInfo.Genre + "</li>";
        listData.innerHTML += "<li>" + "Orígen: " + movieFoundInfo.Country + "</li>";
        listData.innerHTML += "<img src='" + movieFoundInfo.Poster + "'>";
    } else {
        listData.innerHTML += "Movie Not Found"
    }
}
function fillRightLetters() {
    for (let i = 0; i < getMovieName().length; i++) {
        if (getMovieName().charAt(i) != " ") {
            rightLetters += getMovieName().charAt(i).toLowerCase();
        }
    }

}
function fillPlayerMovie() {
    for (let i = 0; i < getMovieName().length; i++) {
        if (getMovieName().charAt(i) != " ") {
            playerMovie[i] = "_";
        } else {
            playerMovie[i] = " ";
        }
    }
    showPlayerMovie();
}

export { fillMovieData, fillPlayerMovie, fillRightLetters };