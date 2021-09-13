/* 
Triple equal:
value and data type check kore.

double equal: 
only check the value.
implicitly convert the value is number.

string-number convert number;
boolean true convert 1;
boolean false convert 0;

Use in case Primitive data; 
*/
/* 
implicit = nije nije convert kore.
*/


const first = 1;
const second = true;
if (first == second) {
    console.log('condition is true');
}
else {
    console.log('condition is false');
}


// more comparison 

const a = { name: 'ali' };
const b = { name: 'ali' };
if (a == b) {
    console.log('both are same');
}
else {
    console.log('they are not same');
}