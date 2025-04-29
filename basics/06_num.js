//***************num******************** */
// const score= 400//one way of defining number


// const balance= new Number(100)//another way of initializing number(Number)
// console.log(balance);
// console.log(score);


// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); //to fixed is used to implement in ecommerce website to have precision value
// console.log(balance.toFixed(1));

// const otherNum=23.8966;
// console.log(otherNum.toPrecision(4));//round off property as studied in maths

// const hundreds =1000000;
// console.log(hundreds.toLocaleString())//to have commas in values
// // by default american std
// //for indian add en-IN as argument
// console.log(hundreds.toLocaleString("en-In"))

//****************maths********************
// const hundreds =1000000;
// console.log(Math);

// console.log(Math.abs(-4));//absolute value of a number
// console.log(Math.round(4.3))//Round off the value
// console.log(Math.ceil(4.2));
// //even a little larger than 4 it will choose the larger abs value than 4
// console.log(Math.floor(4.512));
// //it will choose abs lower or the same number befote the decimal point

// console.log(Math.sqrt(9));

// console.log(Math.min(4,9,7,8,6));
// console.log(Math.max(4,9,7,8,6));

console.log(Math.random());//gives random value b/w 0 to 1
console.log(Math.random()*10+1);//gives random value without 0 and less than 1

console.log((Math.random()*10)+1);//gives random value b/w 0 to 1
console.log((Math.floor((Math.random()*10))+1))
const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)
//