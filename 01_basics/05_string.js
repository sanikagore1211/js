const name = "sanika"
const repoCount = 50

console.log(name + repoCount + " value")       //not comonly used today but use string interpolation

console.log(`my name is ${name} and my repo count is ${repoCount}`);    //use backtext(`) for string interpolation


const gameName = new String('squid-game-netflix')    //another name to declare the string

console.log(gameName[0]);
console.log(gameName.__proto__)   //it is another way to acces. it give only {} but in console it can give all the key value pair.
console.log(gameName.length)
console.log(gameName.toLocaleLowerCase())
console.log(gameName.toLocaleUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('q'))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-17,4)
console.log(anotherString)

console.log(gameName.split('-'))

const newStringOne = "     sanika     "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://sanika.com/sanika%12gore"
console.log(url.replace('%12', '-'))

console.log(url.includes('sanika'))
console.log(url.includes('vijay'))