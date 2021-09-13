function welcomeMessage(name,greetHandler) {
    console.log(greetHandler);
    greetHandler(name);
}
// const names = ['Tom Hanks', 'Tom Bardy','Tom Cruis'];
// const myObj = { name: 'Tom Cruis', age: 32 };
// welcomeMessage(myObj);

function greetMorning(name) {
    console.log('Good Morning', name);
}
function greetEvening(name) {
    console.log('Good Evening', name);
}
function greetAfternoon(name) {
    console.log('Good Afternoon', name);
}
welcomeMessage('Tom Hanks',greetMorning);
welcomeMessage('Sakib Hanks',greetAfternoon);
welcomeMessage('Bappa Hanks',greetEvening);