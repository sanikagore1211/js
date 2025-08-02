//there are main two types in the data is categorised

// 1) Primitive Datatype ==> (String, Number, Boolean, null, undefined, Symbol, BigInt)

// 2) Reference or Non-Primitive Datatype ==> (Array, Objects, Functions)

// javascriptis dynamically typed language, because the variable types are determined at runtime.
// or you donot need to explicitly declare the type of a variable before using it.
// you can assign different types of values to a variable durig its lifetime. eg,

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotheId = Symbol('123')
console.log(id === anotheId)

const bigNumber = 34565248512564144n



// Returrn Type of Reference Type is "Object" only the return type of function is called as "object function"

const heros = ["shaktiman", "naagraj", "doga"];     //array

let myObj = {            //Object           
    name: "sanika",
    age: 22,
}    

const myFunction = function(){      // Function
    console.log("Hello World");
}

console.log(typeof heros);  //oject
console.log(typeof myObj);  //object
console.log(typeof myFunction); //function but also called as object function

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Memory types ==> 1) Stack(used in primitive type)  
//                  2) Heap(used in non-primitive type)

//1) Stack(used in primitive type)
let myName = "sanikagore"
let anotherName = myName
anotherName = "sanikavijaygore"
console.log(myName)
console.log(anotherName)


//2) Heap(used in non-primitive type)
let userOne = {
    email : "sanika@gmail.com",
    upi : "sanika@pbl",
}
 
let userTwo = userOne
userTwo.email = "sanikagore@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)
