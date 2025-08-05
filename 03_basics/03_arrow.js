const user = {
    username: "sanika",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);  //this refers to the current context
        console.log(this);

    }
    
}

// user.welcomeMessage()       //sanika, welcome to the website
// user.username = "sam"
// user.welcomeMessage()       //sam, welcome to the website
  
// console.log(this);      //{}
//in browser th global object is "window object"
//but here there is empty object


// function chai(){
//     let username = "sanika"
//     console.log(this.username);//undefined  (note: we cant use this in function only in objects)
// }
// chai()


// const chai = function(){
//     let username = "sanika"
//     console.log(this.username);//undefined  (note: we cant use this in function only in objects)
// }


const chai = () =>{
    let username = "sanika"
    console.log(this.username);//undefined  (note: we cant use this in function only in objects)
}
// chai()


//arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//another method is implicit return 
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
//when we use {} then return is must but when we use () return is not used
const addTwo = (num1, num2) => ({username: "sanika"})     // o/p ==> { username: 'sanika' }


console.log(addTwo(3, 5));
