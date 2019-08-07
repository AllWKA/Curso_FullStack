function saveStatsPlayer() {
    let playerStats = {
        peli: movieToPlay,
        pistasConsumidas: actualHintPosition,
        letrasFalladas: failedLetters,
        intentosRestantes: intentosRestantes,
        letrasAcertadas: playerMovie,
    }
    localStorage.setItem('stats', JSON.stringify(playerStats));
}
export { saveStatsPlayer };