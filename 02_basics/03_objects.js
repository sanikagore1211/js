//singleton
// Object.create


// object literal

const mySym = Symbol("key1")
const JsUser = {
    name: "sanika",
    age: 22,
    //mySym: "myKey1",
    [mySym]: "myKey1",
    "full name": "sanika gore",      //to access this we can not use dot, only through ["full name"]
    location: "kolhapur",
    email: "sanika@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//Access elements of object by 
console.log(JsUser.email)
console.log(JsUser["email"])      //better than dot(.)
console.log(JsUser["full name"])    // we cant access this by dot(.)

// console.log(JsUser.mySym)       //myKey1
console.log(typeof JsUser.mySym)    //String not symbol
console.log(JsUser[mySym]) 

//to change the value we can just use '=' to overide
JsUser.email = "sanika@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "sanika@microsoft.com"
console.log(JsUser)
// {
//   name: 'sanika',
//   age: 22,
//   'full name': 'sanika gore',
//   location: 'kolhapur',
//   email: 'sanika@chatgpt.com',
//   isLoggedIn: false,
//   lastLoginDays: [ 'Monday', 'Saturday' ],
//   [Symbol(key1)]: 'myKey1'
// }

//when i want to add function then
JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting)    //function not execute only reference comes
console.log(JsUser.greeting())  //Hello JS User
console.log(JsUser.greetingTwo())