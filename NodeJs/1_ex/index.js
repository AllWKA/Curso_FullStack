// var string = process.argv[2];
// var character = process.argv[3];
// var count = 0;
// if (character.length > 1) {
//     if (string.includes(character)) {
//         var aux = ""
//         for (let i = 0; i < string.length; i++) {
//             aux += string.charAt(i);
//             if (aux.length == character.length) {
//                 if (aux == character) {
//                     count++;
//                 }
//                 aux = "";
//                 i -= character.length - 1;
//             }

//         }
//     } else {
//         count -= 1;
//     }
// } else {
//     for (let i = 0; i < string.length; i++) {
//         if (string.charAt(i) == character) {
//             count++
//         }
//     }
// }
// console.log(count);

// function countLetters(string) {
//     var letters = "";
//     var count = [];
//     var string = string.toLowerCase();

//     for (let i = 0; i < string.length; i++) {
//         if (!letters.includes(string.charAt(i))) {
//             letters += string.charAt(i);
//             count[letters.indexOf(string.charAt(i))] = 1;
//         } else {
//             count[letters.indexOf(string.charAt(i))]++;
//         }
//     }
//     var result = ""

//     for (let j = 0; j < letters.length; j++) {
//         result += letters.charAt(j) + ":" + count[j] + "____";
//     }
//     console.log(result);
// }

// var standard_input = process.stdin;
// standard_input.setEncoding('utf-8');
// console.log("Please input text in command line.");
// standard_input.on('data', function (data) {
//     if (data === 'exit\n') {
//         console.log("User input complete, program exit.");
//         process.exit();
//     } else {
//         var formatedStr = data.substr(0, data.indexOf("\r"));
//         countLetters(formatedStr)
//         console.log("******otra******");

//     }
// });


// var axios = require('axios');
// var cheerio = require('cheerio');
// var urlWeb = 'https://www.mediamarkt.es/es/category/_todos-los-port%C3%A1tiles-701420.html';

// axios.get(urlWeb).then(response => {
//     const $ = cheerio.load(response.data);
//     console.log(Number.parseInt($("hgroup em").text().substring(1, $("hgroup em").text().length - 1)));
// })