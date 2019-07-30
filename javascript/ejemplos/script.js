
// var ean1 = {
//     valor: "8400000000001",
//     externo: false
// }
// var ean2 = {
//     valor: "8400000000002",
//     externo: false
// }
// var ean3 = {
//     valor: "8400000000003",
//     externo: false
// }
// var ean4 = {
//     valor: "2300000000001",
//     externo: true
// }

// var donut = {

//     nombre: "Donut",
//     precio: 2,
//     eanList: {
//         ean1: ean2
//     }

// }
// var cocacola = {

//     nombre: "CocaCola",
//     precio: 1,
//     eanList: {
//         ean1: ean1
//     }

// }
// var agua = {

//     nombre: "Agua",
//     precio: 0.75,
//     eanList: {
//         ean1: ean3,
//         ean2: ean4
//     }

// }
// var operacion1 = {
//     producto: cocacola,
//     cantidad: 1
// }
// var operacion2 = {
//     producto: donut,
//     cantidad: 3
// }
// var operacion3 = {
//     producto: agua,
//     cantidad: 4
// }

// var lote = {
//     operacion: {
//         operacion1: operacion1,
//         operacion2: operacion2,
//         operacion3: operacion3
//     }
// }

// var eanToFind = prompt("introduce un Ean");
// console.log(lote);
// console.log(lote.operacion);
// var operationToSee = lote.operacion

// for (var a in operationToSee) {
//     var productToSee = operationToSee[a].producto;
//     for (var eanKey in productToSee.eanList) {
//         var eanToSee = productToSee.eanList[eanKey].valor;
//         if (eanToFind == eanToSee) {
//             console.log("yupiiiiiiiii:" + JSON.stringify(operationToSee[a]));
//         }
//     }
// }
// var total = 0;
// for (var a in operationToSee) {
//     var productToSee = operationToSee[a].producto;
//     // for (var eanKey in productToSee.eanList) {

//     // }
//     total += operationToSee[a].cantidad;
//     console.log(productToSee.precio * operationToSee[a].cantidad);

// }
// console.log("total productos:" + total);



// var numbers = [];

// for (let i = 0; i < 9; i++) {
//     var a = Number.parseInt((Math.random() * 10));
//     if (!numbers.includes(a)) {
//         numbers[i] = a;
//     } else {
//         i--;
//     }
//     // numbers[i] = Number.parseInt((Math.random() * 10));
// }
// console.log(numbers);
// var aux = 0;
// for (let index = 0; index < numbers.length; index++) {
//     setTimeout(function () {
//         for (let j = 0; j < numbers.length - 1; j++) {
//             setTimeout(function () {
//                 if (numbers[j] > numbers[j + 1]) {
//                     aux = numbers[j];
//                     numbers[j] = numbers[j + 1];
//                     numbers[j + 1] = aux;
//                 }
//                 console.log(numbers);
//             }, j * 500);
//         }
//     }, index * 1000);
// }



// var func = function hola(multiplica) {
//     return multiplica * 2;
// }

// var array = [1, 2, 3, 4];

// function map(array, func) {
//     array.forEach(element => {
//         func(element);
//     });
// }


// map(array, func);
// var list = [];

// function createCounter() {
//     var count = 0;
//     return () => { return count++; }

// }



// var counter1 = createCounter()
// var counter2 = createCounter()

// console.log("counter1-->" + counter1());
// console.log("counter1-->" + counter1());
// console.log("*********COUNTER2-->" + counter2());
// console.log("counter1-->" + counter1());
// console.log("counter1-->" + counter1());
// console.log("*********COUNTER2-->" + counter2());
// console.log("*********COUNTER2-->" + counter2());
// console.log("counter1-->" + counter1());









