let score="33"
console.log(typeof score);
console.log(typeof(score));

let valueInNumber=Number(score)
console.log(typeof valueInNumber);

let b="33lkj";
let c=Number(b);
console.log(c);

let d=null
let e=Number(d)
console.log(e);

let f=undefined;
let g=Number(f)
console.log(g);

let z=true
let y=Number(z)
console.log(y);

//"33"->33
// "33abc"->nan
//true -> 1

let isloggedIn=1
let u=Boolean(isloggedIn)
console.log(u)

// 1-> true 0 ->false

let i=""
let k="Raj";
let j=Boolean(i)
let p=Boolean(k);
console.log(j);
console.log(p);;

//""(empty string)->false
//"Raj"(quotes with value) -> true

let num=33
let stringnum=String(num)
console.log(stringnum);
console.log(typeof stringnum);
