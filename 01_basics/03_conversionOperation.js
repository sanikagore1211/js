
let score = "33"      //it give value as 33 after conversion 
let score1 = "33abc"   //after converting this type of string it gives value as 'NaN' that is not a number 
let score2 = null
let score3 = undefined
let score4 = true
let score5 = "sanika"

console.log(typeof score);
console.log(typeof(score1));

console.log(typeof(score2));
console.log(typeof(score3));
console.log(typeof(score4));
console.log(typeof(score5));

let valueInNumber = Number(score)
let valueInNumber1 = Number(score1)
let valueInNumber2 = Number(score2)
let valueInNumber3 = Number(score3)
let valueInNumber4 = Number(score4)
let valueInNumber5 = Number(score5)

console.log(typeof valueInNumber);
console.log(typeof valueInNumber1);
console.log(typeof valueInNumber2);
console.log(typeof valueInNumber3);
console.log(typeof valueInNumber4);
console.log(typeof valueInNumber5);

console.log(valueInNumber)
console.log(valueInNumber1)
console.log(valueInNumber2)
console.log(valueInNumber3)
console.log(valueInNumber4)
console.log(valueInNumber5)


// "33" ==> 33
// "33abc" ==> NaN
// true ==> 1      false ==> 0


let isLoggedIn = 1
let isLoggedIn1 = 0
let isLoggedIn2 = ""
let isLoggedIn3 = "sanika"

let booleanIsLoggedIn = Boolean(isLoggedIn)
let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
let booleanIsLoggedIn3 = Boolean(isLoggedIn3)

console.log(booleanIsLoggedIn)
console.log(booleanIsLoggedIn1)
console.log(booleanIsLoggedIn2)
console.log(booleanIsLoggedIn3)

// 0 ==> false   1 ==> true
// "" ==> false
// "sanika" ==> true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof(stringNumber));

//********************** Operations ********************** 

let value = 3
let negValue = -value
console.log(negValue)   // output ==> -3

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3)   //2 to the power 3
console.log(2/2)
console.log(2%2)


str1 = "hello"
str2 = " sanika"
str3 = str1 + str2
console.log(str3)

console.log("1" + 2)    // o/p ==> 12
console.log(1 + "2")    // o/p ==> 12
console.log("1" + 2 + 2)    // o/p ==> 122
console.log(1 + 2 + "2")    // o/p ==> 32

console.log((2 + 3) * 5 % 2)

console.log(true)   // output ==> true
console.log(+true)  // output ==> 1 (tricky conversion but not a good practice)
console.log(+false)  // output ==> 0 (tricky conversion but not a good practice)
console.log(+"")    // output ==> 0

let gameCounter = 100
++gameCounter;
console.log(gameCounter);