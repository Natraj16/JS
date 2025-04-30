//array

 const myArr=[0,1,2,3,4,5]

// console.log(myArr[0]);

// const myHeroes =["iron man","spiderman"]

// const arr=new Array(1,2,3,4,5);
// console.log(arr[1]);

//Array methods

// arr.push(25)//add value
// arr.push(28)
// arr.pop()//remove the last element

// // arr.unshift(5)//add to first index 
// arr.shift()//removes the first index element


// console.log(myArr.includes(9));//checks whether element is there and returns true and false
// console.log(myArr.indexOf(9));//gives index of the passed element

// const newArr= myArr.join()//convert the array as string
// console.log(myArr);
// console.log(newArr);

// console.log(arr);
//slice splie



const myn1= myArr.slice(1,3)//return slice of the array by not 
// deleting the element, also the last range is excluded
console.log("A ", myArr);

console.log(myn1);
console.log("B ", myArr);

const myn2=myArr.splice(1,3)//it takes the full range and take the element from the array permantaly specified in the range and store in the diff array
console.log("C ", myArr);
console.log(myn2);
