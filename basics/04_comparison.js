// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

console.log("2">1); //datatype should be same to be compared
console.log("02">1);//it gives true result as it converts to number to be compared

console.log(null>0);//null is converted to zero before comparison and then compared
console.log(null==0);//but for equality it is not converted into number zero thats why false
console.log(null>=0);

//an equality check == and comparisons > < >= <= works differently
//comparisons converts null to a number, treating it as 0


console.log(undefined==0); // it is not converted to any number in any comparison and gives false in evry case
console.log(undefined>0);
console.log(undefined<0);


//=== (strictly check) no comparison

console.log("2"===2);

