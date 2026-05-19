{
	// TypeScript
	// TypeScript have different types that need to be added to variables
	// **********************************************
	// when the type os obvious, let typescript infer the types
	// no need to define the type for every little thing
    /**** */
    // if we set a variable with a type, but we assign a await to the variable
    // the TS will NOT catch the error if the data returned does not match the type
    // SO when fetching from the API, if we assigned a type to that variable it is like a promise to TS that the values returned from the API will be that type
    // REASON: There is no way for TS to known the type of the data that comes from the API later
    /**** */
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
	// this works for objects too, we can have optional key for objects
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

	// Generics let function use many different types for both input and output
	// THIS is similar to "any" but the code will not crush, it will only show up as errors
	//////
	// this is useful when we need to process the the input, but the input can be many different types
	//////
	// T is just a placeholder for a type, so T can only represent one type at once
	// if we need placeholder for different types, we need other names
	// SO "T" is just a name we can call it many different things
	function first<T>(items: T[]): T {
		return items[0];
	}
	const n = first([1, 2, 3]); // number
	const ss = first(["a", "b"]); // string
	const sss = first(["a", "b"]); // string
	console.log(n, ss);

	// we can also set restriction on on the T(placeholder)
	// like T have to have a length with a number value
	function printLength<T extends { length: number }>(value: T): void {
		console.log(value.length);
	}
	printLength("hello"); // okay, string has length
	printLength([1, 2, 3]); // okay, array has length
	printLength({ length: 10 }); // okay
	// printLength(123); // error, number does not have length

	// we can also use it when creating types
	type Box<T> = {
		value: T;
	};
	const numberBox: Box<number> = {
		value: 123,
	};
	// this type of thing can be really helpful with api responses
	const userBox: Box<User> = {
		value: { name: "Jordan", age: 29, time: 10 },
	};
	console.log(numberBox);
	console.log(userBox);

	//****************************************//
	// "any" VS "unknown" VS generic
	//****************************************//
	// "any": TS trust the programmer, whenever happens is none of TS's bussiness
	// "unknown": the programmer don't know the type. TS should becareful and check the types and report errors. Programmer also need to check the type before using the variable
	// genertic: we also don't know the type, but we need a placeholder to represent all the possible locations the type is needed. In other words, we need to remember the type.
}

{
	// TS + React
	// how do we define the type for the props?
    // we need to create a type that contain all the types for the props
	type UserCardProps = {
		name: string;
		age: number;
		isAdmin?: boolean;
	};
    // then use it {name, age, isAdmin=false}: UserCardProps
    //////////
    // Child Props
    //////////
    // the basic type is React.ReactNode
    // this types can represent most things React can render, so most component fit this type
    // we could also use JSX.Element
    // but this only works with JSX, but React.ReactNode can have other data type, like string and number

    // for states, TS can often infer it
    // even if it can, we still should state the type to make the intent of the variable clear
    // if we want to we can set the type like this
    // this makes the type of user start as null, then change to User
        // const [user, setUser] = useState<User | null>(null);
    // for arrays it can start as [] then have values
        // const [users, setUsers] = useState<User[]>([]);
    // so unlike delaring type for variables, we need to add the type for the state after useState with <>
    //////
    // with the type that limite the possible variable values, we can use TS to make limit the options and elimimate possible error
    //////

    /***********/
    // React events have their own special types
    /***********/
    // React.ChangeEvent<HTMLInputElement>
    // React.FormEvent<HTMLFormElement>
    // React.MouseEvent<HTMLButtonElement>
    /***********/
    // If you hover over event in your editor, TypeScript will show its type.
    /***********/
}
