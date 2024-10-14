// to store data we use variables
// this done in key,value pair ( let key = value )
// variables sholud be declared using let(mutable), const(immutable), var(mutable)
// while declaring refrain from using keywords as variable name
// key = value (this is possible but not recommended )
// initially var had scope related issues to rectify that let is introduced
// now-a-days let & const. are commonly used 

const name = "ghani"
let age = 21
var city = "LA"
console.log(name,age,city)

age++
console.log(age)

city='NY'
console.log(city)

/*
name="sk a ghani"   // cant't should't try to change constant variables, throws a error
console.log(name) 
*/

let gender;  // ;(semi-colon) is not necessary

console.table([name,age,city,gender])

gender=`male`
console.log(gender);