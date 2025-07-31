"use strict";   //treat all js as newer version

//alert(3 + 3)   //we are using node.js not browser

console.log(3 
    + 
    3)  //code readability should be high

console.log("sanika")

let name = "sanika"     //teated as string
let age = 23        //treated as nummber
let isLoggedIn = false     //treated as boolean

// <----- primitive datatypes ----->
// 1)number ==> 2 to power 53 (range)
// 2)bigint (mostly not use, when our number is too big then used)
// 3)string ==> " "
// 4)boolean ==> true / false
// 5)null ==> standalone value
// 6)undefined ==> 
// 7)symbol ==> used to fine uniqueness


//to fine the type of variable we use typeof() function
console.log(typeof("sanika"))   // output==> string
console.log(typeof(age))        // output==> number
console.log(typeof(null))       // output==> object
console.log(typeof(undefined))  // output==> undefined