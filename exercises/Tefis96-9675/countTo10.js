//Hacer una función que imprima los números del 1 al 10, un número cada segundo.
const oneSeg = 1000;

function numberCount(number) {
    for (let i = 1; i <= number; i++) {
        setTimeout(() => {
            console.log(i);
        }, ( i+1) * oneSeg);
    }
}

numberCount(10);