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

function restoreButtons() {
    var buttons = document.getElementById("buttons").childNodes;
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].nodeType != 3) {
            buttons[i].style.backgroundColor = '#CB8A7C';
            buttons[i].style.boxShadow = '0 6px #ab3c3c';
            buttons[i].style.color = "#fff"
        }
    }
}

export { restoreButtons };