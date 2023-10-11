let MyName= "Dipak123"
console.log(typeof(MyName))
console.log("1 \t"+ MyName)

let booleanDipak = Boolean(MyName)  // String to boolean conversion
console.log(typeof(booleanDipak))
console.log("2 \t"+ booleanDipak)

let NumberDipak= Number(MyName)    // String To Number Conversion
console.log(typeof(NumberDipak))
console.log("3 \t"+ NumberDipak )


let AnyNumber= 99
console.log("4 \t"+ AnyNumber)
console.log(typeof(99))

let StringAnyNumebr = String(AnyNumber) // Number to String Conversion
console.log(typeof(StringAnyNumebr))
console.log("5\t" + StringAnyNumebr)

let BooleanAnyNumber= Boolean(AnyNumber) // Number to Boolean Conversion
console.log(typeof(BooleanAnyNumber))
console.log("6\t"+ BooleanAnyNumber)

let LoggedIn = true
console.log(typeof(LoggedIn))
console.log("7\t"+LoggedIn)


let NumberLoggedIn = Number(LoggedIn) // Boolean to Number Conversion
console.log(typeof(NumberLoggedIn))
console.log("8\t"+NumberLoggedIn)

let StringLoggedIn = String(LoggedIn)  // Boolean to String Conversion
console.log(typeof(StringLoggedIn))
console.log("9\t"+ StringLoggedIn)

console.log(2**3) //it will print 2 to the power 3 => 8

console.log("1" + 2 + 2)    // => 122
console.log(1 + 2 +"2")     // => 32
console.log("1"+ 2+ "3")    // => 123
console.log(1+ "2"+ 3 )    //  => 123

let num1 = 23
let num2 = 34
let num3 = num1 + num2 
console.log(num3)

let num4 =num5=num6= 2+2 // => value of num4,num5, and num6 will be 4 (but it is bad habbit (masssy code))
console.log(num4)
console.log(num5)
console.log(num6)

let GameCounter= 100
console.log(GameCounter)  // =>100
GameCounter++
console.log(GameCounter)  // => 101
++GameCounter
console.log(GameCounter)  // => 102
GameCounter--
console.log(GameCounter) // => 101
--GameCounter
console.log(GameCounter)  // => 100
