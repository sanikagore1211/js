//objects using constructor(singleton)

//both are the ways to declare the object
//const tinderUser = Object()   // o/p==> {} (singleton object)
const tinderUser = {}   //o/p==> {}   (non-singleton object)

tinderUser.id = "123abc"
tinderUser.name = "sanika"
tinderUser.isLoggedin = false
//o/p ==> { id: '123abc', name: 'sanika', isLoggedin: false }
//console.log(tinderUser)

const regulaUser = {
    email: "sanika@gmail.com",
    fullName: {
        userFullName: {                 //object contains another object
            firstName: "sanika",
            lastName: "gore"
        }
    }
}
// console.log(regulaUser.fullName)    //{ userFullName: { firstName: 'sanika', lastName: 'gore' } }
// console.log(regulaUser.fullName.userFullName)     //{ firstName: 'sanika', lastName: 'gore' }
// console.log(regulaUser.firstName)   //undefined
// console.log(regulaUser.fullName.firstName)  ///undefined

//combine object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

//there are multiple way to combile the objects which are as follows

//const obj4 = {obj1, obj2, obj3}   //it gives same problem as array that is array contains another array
// o/p ==> { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

//const obj3 = Object.assign(obj1, obj2)
// o/p ==> { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
//console.log(obj3)
//it is works but when we have multiple objects then use {} as a target object in assign()

// const obj4 = Object.assign({}, obj1, obj2, obj3) // o/p ==> { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
// // {} act as a target object

const obj4 = {...obj1, ...obj2, ...obj3}    //spread operator
// o/p ==> { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
//console.log(obj4) 


//when data comes from database it is in the form of array of objects 
const user = [
    {
        id: 1,
        email: "sanika@gmail.com"
    },
    {
        id: 2,
        email: "sanika@gmail.com"
    },
     {
        id: 3,
        email: "sanika@gmail.com"
    }
]
//console.log(user[0])    // { id: 1, email: 'sanika@gmail.com' }


console.log(tinderUser)
console.log(Object.keys(tinderUser))    //[ 'id', 'name', 'isLoggedin' ]
console.log(Object.values(tinderUser))  //[ '123abc', 'sanika', false ]
console.log(Object.entries(tinderUser)) //[ [ 'id', '123abc' ], [ 'name', 'sanika' ], [ 'isLoggedin', false ] ]
console.log(tinderUser.hasOwnProperty('isLoggedin'))    //true (it checks that the object has this property or not)
console.log(tinderUser.hasOwnProperty('isLog')) //false


//destructuring of objects
const course = {
    courseName: "js",
    price: "999",
    courseInstructor: "sanika"
}

console.log(course.courseInstructor)    //o.p==>sanika    
// (this is correct but if i want to print multiple this saveral times then there is one syntax)

const {price} = course
console.log(price)  //999

//if the name is toolong long then we can also rename it
const {courseInstructor: instruct} = course
console.log(instruct)       //sanika

//JSON API
//it looks like object but only difference is:
//1)object has name but JSON has no name
//2)in JSON keys are also written as string 

{
    "name": "sanika",
    "age": 22,
    "email": "sanika@gmail.com"
}

//API can be in the form of array like

[
    {},
    {},
    {}
]