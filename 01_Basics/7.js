const score =  400
console.log(score)
const balance = new Number(100)
console.log(balance); // [Number: 100]
console.log(balance.toFixed(2));//100.00
const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));
const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));


//=========================================================


console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(Math.random(1,2,3,4,5,6,7,8,9,10)*10) + 1);