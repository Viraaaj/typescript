//Primitives: numbers, strings, booleans: when declared this should be all in lowecases
//comples types: arrays, objects
// function types, parameters

console.log("---------------------------Primitives in TS------------------------------");
 
// let age:number = 12;
let age: number;
age = 12;
// age = "12" //error

let username:string
username = "John";

let isSuperuser: boolean;
isSuperuser = true;

console.log("---------------------------Complex types in TS------------------------------");

console.log("--------Arrays-------");
//At the time of assigning array we need to write type and then []
let stringsArray: string[];
stringsArray = ["a", "b"]
// stringsArray = ["a", "b", 12] //error

let numbersArray: number[];
numbersArray = [1,2]

let booleansArray: boolean[];
booleansArray = [true, false]

console.log("--------Objects-------");
let anyType: any; //This any will tell ts that you dont want to specify any type you can store anything in that variable

let objectType: {
    name: string;
    age: number;
}; //setting object type

objectType = {
    name: "john",
    age: 10
}

// objectType = {
//     isOld: true
// } //Will give error because we havent specified boolean in objectType

//Storing array of objects having having same elements
let allData: {
    name: string;
    age: number;
}[];

console.log("--------Type inference-------");
let string = "This is string";
// string = 12; //Will give error because ts will specify the type if we havent declared and if we try to store value of different type it will give an error
//Because of type inference featue we dont need to decide type at the type of declaration

console.log("--------Union type-------");
//We can set different types to variable
let unionType: string | number | boolean | string[] | { name: string, age: number};
unionType = "Can use string";
unionType = 10;
unionType = true;
unionType = ["a", "b"];
unionType = { name: "John", age:10 };