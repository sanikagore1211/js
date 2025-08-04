let myDate = new Date()

console.log(typeof(myDate)) //object

console.log(myDate)     //2025-08-04T09:37:29.429Z
console.log(myDate.toString())  //Mon Aug 04 2025 09:41:30 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toISOString())   //2025-08-04T09:43:02.634Z
console.log(myDate.toJSON())    //2025-08-04T09:43:02.634Z
console.log(myDate.toLocaleString())    //8/4/2025, 9:43:02 AM


//userdefined date(months are strated from 0(ie. january) in js)

// let myCreatedDate = new Date(2025, 0, 23)   // Thu Jan 23 2025
// console.log(myCreatedDate.toDateString())
//let myCreatedDate = new Date(2025, 0, 23, 5, 3) // 1/23/2025, 5:03:00 AM
//let myCreatedDate = new Date("2025-01-14")  // 1/14/2025, 12:00:00 AM
let myCreatedDate = new Date("01-14-2025")  // 1/14/2025, 12:00:00 AM
//console.log(myCreatedDate.toLocaleString())  


let myTimeStamp = Date.now()

console.log(myTimeStamp)
console.log(myCreatedDate.getTime())    //we declare the date but to get actually time we use getTime()
console.log(Math.floor(Date.now() / 1000))  // to get time in seconds

let newDate = new Date()
console.log(newDate)    //it give date
console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getFullYear())
console.log(newDate.getMonth() + 1)

//to costomize localeString
// newDate.toLocaleString('default', {
//     weekday: "long",
// })