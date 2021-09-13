function stopWatch() {
    let counter = 'mainul';
    return function () {
        counter = counter +' '+ counter;
        return counter;
    }
}
let clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());