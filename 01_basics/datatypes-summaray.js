//primitive - call by value - copy is given and changes are made in copy
// 7 types : String, Number , Boolean, null, undefined, Symbol, BigInt

//kis tarah se data ko mem mein rakha jaata hain

//reference type - non primitive - reference is given
// arrays, objects, functions

// js is dynamically typed language

//  Primitive


const score = 100           //const score:number = 100 (in typescript)
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}
//function object
console.log(typeof anotherId); //typeof bigINt is undefined and of null is object

// https://262.ecma-international.org/5.1/#sec-11.4.3

//++++++++++++++++++++++++++++++++++++++++++++++++++
//automatic garbage collection 
// Stack(primitive) , Heap(non primitive)

let name = "gautam"
let anothername = name //copy (primitive) not given original value
console.log(name)
console.log(anothername)
anothername = "adhikari"
console.log(name) // value in name is not changed
console.log(anothername)


let userOne = {
    email: "user@google.com", 
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "gautam@google.com"  // reference hence changes for all the variables (heap ds)
console.log(userOne.email); 
console.log(userTwo.email);