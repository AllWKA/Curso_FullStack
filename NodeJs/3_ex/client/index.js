window.onload = initialize

function initialize() {
    getList()
    document.getElementById("addTask").addEventListener("submit", postItem)
}
function getList() {
    document.getElementById("list").innerHTML = ""
    $(document).ready(function () {
        $.get("http://localhost:3000/list", res => {
            if (res) {
                for (var k in res) {
                    if (res[k].status) {
                        document.getElementById("list").innerHTML += "<div class='row'>" +
                            "<div class='col-sm-4'>" +
                            "<button id='" + k + "' onclick='done(this.id)'>o</button >" +
                            "</div><div class='col-sm-4'><p class='done'>" + res[k].name + "</p></div>" +
                            "<div class='col-sm-4'>" +
                            "<button id='" + k + "'  onclick='deleteItem(this.id)'>" +
                            "<i class='fas fa-times'></i ></button ></div ></div > "
                    } else {
                        document.getElementById("list").innerHTML += "<div class='row'>" +
                            "<div class='col-sm-4 '>" +
                            "<button id='" + k + "' onclick='done(this.id)'>o</button >" +
                            "</div><div class='col-sm-4'><p>" + res[k].name + "</p></div>" +
                            "<div class='col-sm-4'>" +
                            "<button id='" + k + "'  onclick='deleteItem(this.id)'>" +
                            "<i class='fas fa-times'></i ></button ></div ></div > "
                    }
                }
            }

        });

    });
}
function postItem(event) {
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/item",
        data: { name: "asd" },
        success: console.log("dddasd")
    });
    getList()
}
function deleteItem(id) {
    $(document).ready(function () {
        jQuery.ajax({
            url: 'http://localhost:3000/' + id,
            type: 'DELETE',
            success: function (data) {
                getList()
            }
        });

    })
}

function done(id) {
    event.preventDefault();
    $(document).ready(function () {
        $.post("http://localhost:3000/item", { name: "a" }, res => {
            console.log(res);
        });
    })
    getList()
}