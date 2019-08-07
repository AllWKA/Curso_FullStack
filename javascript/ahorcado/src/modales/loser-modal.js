function loser() {
    document.getElementById("movieResult").innerHTML = "La Película era: "
    $(document).ready(function () {
        $("#modalLoser").modal('show');
        document.getElementById("movieResult").innerHTML += getMovieName(moviePosition);
    });
}
