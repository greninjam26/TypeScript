// TypeScript have different types that need to be added to variables
// **********************************************
// when the type os obvious, let typescript infer the types
// no need to define the type for every little thing
// **********************************************
let age: number = 19;
const username: string = "Ash-Greninja";
console.log(age);
console.log(username);

// there is no different between float and int
// it is all number
let num1: number = 1;
let num2: number = 2;
let num3: number = 3;

// there is a "any" type, basicly we can do anything with it, but usually don't use it
// any is not a type
// IT TURN TS OFF
let i: any = 1;
i = "s";
// if we don't know the type of the variable
// then we can use this
// "unknown" allows a variable to change types
let ii: unknown = 1;
console.log(ii);
ii = "s";
console.log(ii);

// we can check the type of a variable with "typeof"
console.log(typeof num1);
console.log(typeof ii);

// functions
// this type of function have a return type
// the return type would be the type of the function
function sum(a: number, b: number): number {
	return a + b;
}
// this one don't have any returns, so the type is void
function add(a: number, b: number): void {
	console.log(a + b);
}

// ?: mark the parameter for the function to be optional
function pokemon(name: string, type1: string, type2?: string): void {
	console.log(`${name} is ${type1} type${type2 ? `, also ${type2} type` : ""}.`);
}

pokemon("greninja", "water", "dark");
pokemon("pikachu", "electric");

// we can set default parameters
function time(month: string, day: number, year: number = 2026): void {
	console.log(`Today is ${month} ${day}, ${year}`);
}
time("March", 6);

// objects also need to declare types for each of the element
const course: { name: string; grade: number } = { name: "english", grade: 80 };

// if we need to declare the type for each object everytime we use it, it is going to take too long
// so we can define a object as a type and reuse
// There are 2 ways to do this
//////////////////////////////
// Interface
//////////////////////////////
// interface is used for objects that might need to be extended or implemented by a class
// we can stack interface to add more attributes
interface User {
	name: string;
	age: number;
}
// we can also extends one interface to make a new interface
interface Admin extends User {
	permissions: string[];
}
// with extends if User change Admin will change with it
interface User {
	time: number;
}
let Al: Admin = { name: "Al", age: 50, permissions: ["nothing"], time: 10 };
console.log(Al);
//////////////////////////////
// Type
//////////////////////////////
// unlike interface, we can add more attributes after creation
type Uuser = { name: string; age: number };
// but we can do things that is similar to extands
type Aadim = Uuser & { permission: string[] };
// This is more flexiable than interface
// we can do things like these
// this allows us to define types that can have multiple premitive types
type ID = string | number;
let id: ID = 1243;
console.log(id);
id = "sdfefwe";
console.log(id);
// we can also create types that limit the possible value of the variable
type Status = "loading" | "success" | "error";
let s: Status = "loading";
console.log(s);
s = "error";
console.log(s);
// we can also limit the number of elements in an array
type Point = [number, number];
let point: Point = [10, 20];
console.log(point);
