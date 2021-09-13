/* 
Hoisting = when declare a variable with var ,then it's work local area.
kono block variable k declare na korle seta global variable hoi ,jake Global licking bole.

let, const = block variable.
*/

const favNum = 27; //Global variable


function add(first, second) {
    const result = first + second; //local variable.
    // console.log(mood); //hoisting
    // console.log(result);
    if (result > 9) {
        // const mood = 'Happy';
        // var mood = 'Happy';
        mood = 'Happy';
        mood = 'Cranky';
        // console.log(mood);
    }
    // console.log(mood);
    return result;
}
const sum = add(11, 35);
// console.log(favNum);
console.log(mood);