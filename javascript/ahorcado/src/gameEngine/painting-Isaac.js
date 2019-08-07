let conteo = 1;

export function paintingIsaac() {
    
    let isaac = document.getElementById("isaac");
    let pathImageIsaac = '';
    
    
    if (conteo <= 5) {
        pathImageIsaac = 'images/isaac-' + conteo + '.png';
        isaac.setAttribute('src', pathImageIsaac);
        conteo++;
    }
}

export { paintingIsaac };