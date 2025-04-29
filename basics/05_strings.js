const name="Raj"
const repoCount=10

// console.log(name+repoCount+"Value"); //outdated syntax

console.log(`Hello my name is ${name} and my rep count is ${repoCount}`);//using backticks for string interpolation

const gameName= new String('Raka')
console.log(gameName[0]);
console.log(gameName.__proto__); //returns object
//you can get function rlated to object in the console
console.log((gameName.length));
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2))
console.log(gameName.indexOf("R"));

const gname=new String("Raj_Raka")
const newname= gname.substring(0,3)//doesnt accept negative value
//last value is not included in the range to print
console.log(newname);

const anotherString=gname.slice(-1,-2)//the slice function accepts negative range
console.log((anotherString));

const newStringOne="   rajk   "
console.log(newStringOne)
console.log(newStringOne.trim());


const url="https:/raj.com/raj%20kashyap"

console.log(url.replace("%20","-"));//replaces substrinf from the string
console.log(url.includes("raj"));//search substring in the string

 console.log(gname.split())
//  console.log(gname.split(" "))
 console.log(gname.split(""))

 console.log(gname.split("_"))