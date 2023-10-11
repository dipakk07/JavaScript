// There are two ways to declare string 
// fisrt way 
const gameName ="pubg"
console.log(gameName)
console.log(gameName.length)
console.log(gameName.indexOf('b'))
console.log(gameName.charAt(3))
console.log("--------------------")
//Second way
const gameName2= new String('FreeFire')
console.log(gameName2)
console.log(gameName2.length)
console.log(gameName2.toUpperCase())
console.log(gameName2.toLowerCase())

let name = "sinuu"
let age=23
console.log(`my name is ${name} and my age is ${age} and i'm looking forward to vote in this election`)

// String to array convertion used split method 
console.log("----------------------")
let str1= new String('my-name-is-dipak')
console.log(str1)
console.log(str1.replace('-', '_'))
let arr1= str1.split('-')
console.log(arr1)

let str2= new String('   dipak   ')
console.log(str2)
console.log(str2.trim())
