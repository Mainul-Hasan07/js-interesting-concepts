/* 
Falsy:
false
0
empty stirng
undefined
null
NaN


------------------------

Truthy:
true
any number (positve or negative)
any string including single whiteSpace:' ','0','false'
[]
{}

anything is else that is not falsy will be truthy
*/
let x = {};
console.log(x);
if (x) {
    console.log('variable is truthy')
}
else {
    console.log('variable is falsy');
}
