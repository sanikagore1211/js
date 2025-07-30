const accountID = 144553
let accountEmail = "sanika@google.com"
var passsward = "12345"
accountCity = "warana"
let accountState;

// accountID = 2  // not allowed to change the value of constant

accountEmail = "abc@google.com"
passsward = "112233"
accountCity = "pune"

// console.log(accountID);  //instead of using separate console statement fo each variable, we just use console.table

/*
prefer not to use var
baause of issues in block scope and functional scope
*/

console.table([accountID, accountEmail, passsward, accountCity, accountState])