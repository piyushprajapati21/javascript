"use strict" ; // treat all JS code as newer version

//alert('hello - JS'); // alert not working on Node JS
console.log(3+3);

let name = 'Piyush'
let age = '35';
let isLogin = true

// Premitive - 7 type
//string, number, boolean, null, undefined, symbo, bigint,

// Reference (Non-Premitive)
// Object, Array, Functions

// number = 2 to power 53
// bigint = 
// boolean = true or false
// null = standalone value
// undefined = value is not assigned
// string = string value
// symbol = for unique

//object 

console.log(typeof "122")
console.log(typeof 122)

// symbol
let id = Symbol('12345');
let id2 = Symbol('12345');

console.log(id)
console.log(id2)

//Non premitive -array , object and functions
const heros = ['1','2','3'];
console.log(heros);

let myObj = {
    'name':'piyush',
    'age':35
}
console.log(myObj);

const myFunc = function() {
    return ('Hello Word');
}
console.log(myFunc);