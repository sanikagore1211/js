// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 <= 1)
// console.log(2 == 1)
// console.log(2 != 1)

console.log("2" > 1)
console.log("02" > 1)


//can cause the confusion
console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)
console.log(undefined < 0)
console.log(undefined == 0)
console.log(undefined > 0)

//strict check(===) checks datatype also
console.log("2" == 2)   //true
console.log("2" === 2)  //false