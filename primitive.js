/* 
Data types
Primitive data types
1. Number
2. String
3.Boolean
4. Undefined
5. null
7. Symbol

Non-primetive data types
6. Object
*/

let a = 'hello';
let b = a;
console.log(a, b);
a = 'gello';
console.log(a, b);

let x = { job: 'web developer' };
let y = x;
console.log(x, y);
x.job = 'front end developer';
console.log(x, y);
x = { name: 'mainul hasan' };
console.log(x, y);