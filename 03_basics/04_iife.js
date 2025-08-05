// Immediately Invoked Function Expressions (IIFE)
//two reasons 
//1)To reduce polution by global scope
//2)Immediate execution

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

(function chai(){
    //named iife
    console.log(`DB CONNECTED`);
})();   //alway use semicolon

//here we use two () (); 1st for function definition and 2nd for function call

( (name) => {
    //unname iife
    console.log(`DB CONNECTED Two ${name}`);
} )("sanika")