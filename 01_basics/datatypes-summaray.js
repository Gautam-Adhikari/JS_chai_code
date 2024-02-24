//primitive - call by value - copy is given and changes are made in copy
// 7 types : String, Number , Boolean, null, undefined, Symbol, BigInt

//reference type - non primitive - reference is given
// arrays, objects, functions

// js is dynamically typed language

//  Primitive


const score = 100
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

console.log(typeof anotherId); //typeof bigINt is undefined and of null is object

// https://262.ecma-international.org/5.1/#sec-11.4.3