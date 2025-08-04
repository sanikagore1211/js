const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)     //problem is we got array contain another aray    
// console.log(marvel_heros)       //  [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]  
// console.log(marvel_heros[3][0]) //superman

// marvel_heros.concat(dc_heros)       
// console.log(marvel_heros)       //  [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] 


//NOTE ==> push works on original array but concat returns the new aray
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)   //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//another method is spread
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros)  //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("sanika"))    // false
console.log(Array.from("sanika"))   //[ 's', 'a', 'n', 'i', 'k', 'a' ]
console.log(Array.from({name: "sanika"}))   //[]

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)) //[ 100, 200, 300 ]