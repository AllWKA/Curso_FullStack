var axios = require('axios');
var cheerio = require('cheerio');

var baseURL = "https://www.mediamarkt.es/es/category/_todos-los-port%C3%A1tiles-701420.html?searchParams=&sort=&view=&page=";

var laptops = {};

function getPage(url) {
    return axios.get(url)
        .then(response => {
            const $ = cheerio.load(response.data);
            console.log("Tengo la página\n***");
            return $;
        })
        .catch(err => console.log("Error:" + err));

}

function getPagesNumber(url) {
    // console.log("Number of pages:" + $(".pagination li:nth-child(5)").text().trim());
    return axios.get(url)
        .then(response => {
            const $ = cheerio.load(response.data);
            var numPages = $(".pagination li:nth-child(5) a").text().trim()
            numPages = numPages.substring(0, numPages.length / 2);
            console.log(numPages);
            return numPages;
        })
        .catch(err => console.log("Error:" + err));

}

function getLaptopsNames($) {
    var laptopsNames = $("h2 a").toString().split('">');

    console.log("-->" + $(".product-wrapper .content a").text().replace(" ", ""));

}


getPage(baseURL + "1").then($ => {
    getLaptopsNames($)
});
// getPagesNumber(baseURL + "1");
