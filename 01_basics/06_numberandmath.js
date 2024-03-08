const score = 400
// console.log(score);

const balance = new Number(100)

// console.log(balance.toFixed(1)); //after decimal places
// console.log(balance);

// console.log(balance.toString().length);


const otherNumber = 123.8966

console.log(otherNumber.toPrecision(6));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

//(Number.MAX_VALUE)                    //in source log chrome
//(Number.MIN_VALUE)
//(Number.MAX_SAFE_INTEGER )

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);           //object which have properties
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)