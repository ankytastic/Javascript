//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3 // no concept of float in javascript, every number is a number

const isLoggedIn = false // boolean
const outsideTemp = null // it is not 0,it is just null, typeof function gives it as "Object"
let userEmail;  // undefined

const id = Symbol('123') // type "Symbol"
const anotherId = Symbol('123') // type "Symbol"

// console.log(id === anotherId);  // even when two symbols are passed with same values then also the two returned values will not be equal

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; //type  object
let myObj = {       // type object
    name: "hitesh",
    age: 22,
}

const myFunction = function(){   //type function
    // console.log("Hello world");
}

console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3