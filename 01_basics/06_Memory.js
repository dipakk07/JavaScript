// Stack(primitive) and Heap(non-primitive)

// stack memory (call by value )
let MYName = "dipak"

let YourName= MYName
YourName="DipakChoudhary"
console.log(MYName) // value will not changed
console.log(YourName)// value of Yourname 
console.log("-----------------------")

// Heap memory (call by refference)

let UserOne = {
    email:"Dipak@gmail.com", age: 22
}
console.log(UserOne.age)
console.log(UserOne.email)

let UserTwo= UserOne
UserTwo.age=24;
UserTwo.email="Yuvan@gmail.com"
console.log(UserOne.age)
console.log(UserOne.email)
console.log("------------------------")
console.log(UserTwo.age)
console.log(UserTwo.email)