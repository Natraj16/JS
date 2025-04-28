const score=100;
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null

let n;

const id=Symbol("123")
const anotherId=Symbol("123")

console.log(id===anotherId);

const bigNum=515464344354354354354n

const heroes=["shaktiman","natraj","doga"]

let myObj={
    name:"raj",
    roll:"117"
}

const myFunc=function(){
    console.log("hello world");
    
}

console.log(typeof(bigNum));
console.log(typeof(myFunc));
console.log(typeof(heroes))
console.log(typeof myObj)


//********************************* */
// stack(primitive)  heap (non primitive)

let myName="Raj"

let name=myName
name="Natraj" 
console.log(name);//it changes to natraj as the name got copy of myName

console.log(myName);// it doesnt changes as the the copy value will not affect it 


let user={
    name:"Raj",
    emailId:"natrajkashyap.axl"
}

let userTwo=user
userTwo.emailId="natraj.axl"

console.log(userTwo);
console.log(user);
