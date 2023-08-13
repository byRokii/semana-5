// * Ejercicio 2

// * Hacer una función que imprima los números del 1 al 10, un número cada segundo.

const ONE_SEC_IN_MS = 1000;

function countTo(...num) {
    for (const nums of num) {
        setTimeout(() => {
            console.log(nums);
        }, ONE_SEC_IN_MS * nums);
    }
}

countTo(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

async function countTo2(...num) {
    for (const nums of num) {
        await new Promise((resolve, reject) => {
            setTimeout(resolve, ONE_SEC_IN_MS);
        });
        console.log(nums);
    }
}

countTo2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// * Callback

// const ONE_SEC_IN_S = 1000;

// function cook(ingredient, Callback, time) {
//     setTimeout(function () {
//         Callback(`El ${ingredient} esta hecho`);
//     }, time * ONE_SEC_IN_S);
// }

// cook("arroz", console.log, 10);
// cook("huevo", console.log, 2);
// cook("mesa", console.log, 1);

// * Promises

// function slowSquare(number) {
//     return new Promise(function (resolve) {
//         const result = number ** 2;
//         setTimeout(function () {
//             resolve(result);
//         }, 2000);
//     });
// }

// function calculated(result) {
//     return slowSquare(result, console.log);
// }

// slowSquare(2).then(calculated).then(console.log);

// * Async/await

// async function main() {
//     console.log("2. Estamos calculando cosas");
//     const result = await slowSquare(2);
//     console.log("Primer resultado");
//     const result2 = await slowSquare(result);
//     console.log("Segundo resultado");
//     const result3 = await slowSquare(result2);
//     console.log(result3);
// }
// console.log("1. Vamos a calcular cosas");
// main();
// console.log(
//     "3. Mientras calcula cosas, seguimos haciendo otras cosas, no nos bloqueamos"
// );
