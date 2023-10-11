console.log(2==3) // false
console.log(2!=3) // True
console.log(2>=3) // false
console.log(2<=3) // True

console.log("---------")

console.log("2" > 1)  //Unpredictable (true)
console.log("02" > 1)  // Unpredictable (true)
console.log("---------")

// note : Always Compare same DAta type otherwise YOU will Get Unpredictable result

console.log(null>0)  // false
console.log(null<0)  // false
console.log(null==0) // false
console.log(null>=0) // True comparison opeartor used means it will convert null to number and treated as 0 I.e 0=0 (true)
console.log(null<=0) // True
console.log("---------")

console.log(undefined==0) // false
console.log(undefined!=0) // True
console.log(undefined>=0) // FAlse
console.log(undefined<=0) // false
console.log(undefined>0)  // False
console.log(undefined<0)  // false
console.log("---------")

// === comparison operator ( it will compare value and the datatype of value both)

console.log("2"===2) // => THrows an Eroor because data type is not same (String and Number )