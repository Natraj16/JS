//Dates

let myDate= new Date() //an instance of Date object is created
console.log(myDate);//printing my date

console.log(myDate.toString());//converting date in string to get detail of the exact timeline
console.log(myDate.toDateString());
//returns only date of the whole date time 
console.log(myDate.toISOString());

console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString())
//print date and time with / like 04/29/2025
console.log(myDate.toLocaleString());
//same as before just with time
console.log(myDate.toTimeString());
//returns time as string

console.log(typeof myDate);

let myCreatedDate= new Date("02-16-2023");
//we can initialise the date inside the parenthesis as 23,00, 16
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now()
//returns time from jan1970 to till now in milliseconds
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime())
//generally the time comparison is difficult but with this we'll get time of just now then the comparison is bit easier
console.log(Math.floor(Date.now()/1000))

let newDate= new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getTime());
console.log(newDate.getDate());
console.log(newDate.getFullYear());

// console.log(newDate.toLocaleString('default',{
//     weekday:"long";

// });
