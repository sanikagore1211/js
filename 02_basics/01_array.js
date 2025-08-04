// Array
// Array in js is resizable

const myArr = [0, 1, 2, 3, 4];
const myHeros = ["shaktiman", "naagraj"];
const myArr2 = new Array(1, 2, 3, 4, 5);

console.log(myArr[1]);

//Aray methods
myArr.push(6)
myArr.push(7)
myArr.pop()
myArr.unshift(10)   // used to insert at start
myArr.shift()   // used to remove the 1st element from array

console.log(myArr)

console.log(myArr.includes(9))
console.log(myArr.indexOf(9))
console.log(myArr.indexOf(3))

const newArr = myArr.join()
console.log(myArr)      //[ 0, 1, 2, 3, 4, 6 ]
console.log(newArr)     // give o/p in string that is, 0,1,2,3,4,6



//slice / splice

console.log("A: ", myArr)

const myn1 = myArr.slice(1, 3)
console.log(myn1)
console.log("B: ", myArr)
// A:  [ 0, 1, 2, 3, 4, 6 ]
// [ 1, 2 ]

const myn2 = myArr.splice(1, 3)
console.log(myn2)
// B:  [ 0, 1, 2, 3, 4, 6 ]
// [ 1, 2, 3 ]

console.log("B: ", myArr)
// B:  [ 0, 4, 6 ]

// NOTE: 1) when we use slice it does not inlcude the range but the splice includes
// 2) when we use the slice it does not make any changes in the original array 
// 3) but when we use splice it removes those spliced portion from the original aray