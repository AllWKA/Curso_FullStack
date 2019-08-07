function restoreLife() {
    
    for (let i = 0; i < hearts.length; i++) {
        hearts[i].setAttribute('src', "./images/full-heart.png");
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

export {restoreLife, removeLife};