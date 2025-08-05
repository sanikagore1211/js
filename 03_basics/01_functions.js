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