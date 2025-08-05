// {} ==> nothing but scope
//global scope(through out progam)

// var c = 300
let a =500

if(true){
    //block scope(inside block only)
    let a = 10
    const b = 20 
    console.log("INNER: ", a)   // INNER:  10
}

console.log(a)  //500
// console.log(b)
// console.log(c)

function one(){
    const userName = "sanika"

    function two(){
        const website = "youtube"
        console.log(userName);
    }

    // console.log(website);

    two()
}
one()

if(true){
    const userName = "sanika"
    if(userName == "sanika"){
        const website = " youtube"
        console.log(userName + website)
    }
    // console.log(website)
}
// console.log(userName)

//+++++++++++++++++++++++++ INSTERESTING ++++++++++++++++++++++++++++

console.log(addOne(5))

function addOne(num){
    return num + 1
}

// addTwo(5)            //ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){       //also known as expression
    return num + 2
}
console.log(addTwo(5))