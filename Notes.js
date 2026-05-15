"use strict";
// TypeScript have different types that need to be added to variables
let age = 19;
const username = "Ash-Greninja";
console.log(age);
console.log(username);
// there is no different between float and int
// it is all number
let num1 = 1;
let num2 = 2;
let num3 = 3;
// there is a "any" type, basicly we can do anything with it, but usually don't use it
let i = 1;
i = "s";
// functions
// this type of function have a return type
// the return type would be the type of the function
function sum(a, b) {
    return a + b;
}
// this one don't have any returns, so the type is void
function add(a, b) {
    console.log(a + b);
}
function pokemon(name, type1, type2) {
    console.log(`${name} is ${type1} type${type2 ? `, also ${type2} type` : ""}.`);
}
pokemon("greninja", "water", "dark");
pokemon("pikachu", "electric");
