window.onload = initialize

function initialize() {
    getList()
    document.getElementById("addTask").addEventListener("submit", postItem)
}