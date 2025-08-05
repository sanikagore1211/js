function sayMyName(){
    console.log("s")
    console.log("a")
    console.log("n")
    console.log("i")
    console.log("k")
    console.log("a")
}

//sayMyName  //==> this is only reference
sayMyName() //==> this is execution



// function addTwoNumbers(num1, num2){     //parameters
//     console.log(num1 + num2)
// }

function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
    //after return statement whatever we can write this is unreachable
}

// addTwoNumbers() //o/p==>NaN (because we do not pass any argument)
// addTwoNumbers(3, 4)  //arguments   o/p ==> 7
// addTwoNumbers(3, "4")   // o/p ==> 34
// addTwoNumbers(3, "a")   // o/p ==> 3a
// addTwoNumbers(3, null)  // o/p ==> 3

const result = addTwoNumbers(3, 5)
console.log("result: ", result)     //result:  8
// o/p ==> result:  undefined (when we not write return and follows the 1st function)


// function loginUserMessage(userName){
//     return `${userName} just logged in`
// }

function loginUserMessage(userName){    //function loginUserMessage(userName = "sam")
    //to avoid use of if{} we just pass the default value to the function
    // so when we not pass the argument then it will take the default value
    if(!userName){
        console.log("please enter username")
        return
    }
    return `${userName} just logged in`
}

console.log(loginUserMessage("sanika")) // o/p ==> sanika just logged in
console.log(loginUserMessage(""))       // o/p ==>  just logged in
console.log(loginUserMessage())         // o/p ==> undefined just logged in


//when we dont know about how many parameters user will pass

// function calculateCartPrice(num1){
//     return num1
// }

function calculateCartPrice(...num1){   //rest operator (...)
    return num1
}
// ... is also known as rest operator and spread operator depending on use case 

// console.log(calculateCartPrice(100))    // o/p ==> 100
// console.log(calculateCartPrice(500, 250, 100))  // o/p ==> 500 

//when we define function with 1 parameter and pass more than 1 arguments then it will take only 1 argument
console.log(calculateCartPrice(500, 250, 100))  // o/p ==> [ 500, 250, 100 ]

function calculateCartPrice2(val1, val2, ...num1){   //rest operator (...)
    return num1
}

console.log(calculateCartPrice2(500, 250, 100, 2000))   // o/p ==> [ 100, 2000 ]

//when i want to pass object to the function 

const user = {
    name: "sanika",
     age: 22
}

function handleObject(anyobject){
    console.log(`user name is ${anyobject.name} and age is ${anyobject.age}`)
}
// o/p ==> user name is sanika and age is 22
// handleObject(user)

//we can also pass object directly not need to define separtly

handleObject({
    name: "sam",
     age: 66
})
// o/p ==> user name is sam and age is 66

//we can also pass the array

const myNewArray = [1, 2, 3, 4]
function returnSecondValue(getArray){
    return getArray[0]
}

// console.log(returnSecondValue(myNewArray))   // o/p ==> 1
console.log(returnSecondValue([200, 300, 500])) // o/p ==> 200