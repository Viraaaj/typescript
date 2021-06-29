//Primitives: numbers, strings, booleans: when declared this should be all in lowecases
//comples types: arrays, objects
// function types, parameters

console.log(
  "---------------------------Primitives in TS------------------------------"
);
// let age:number = 12;
let age: number;
age = 12;
// age = "12" //error

let username: string;
username = "John";

let isSuperuser: boolean;
isSuperuser = true;

console.log(
  "---------------------------Complex types in TS------------------------------"
);

console.log("--------Arrays-------");
//At the time of assigning array we need to write type and then []
let stringsArray: string[];
stringsArray = ["a", "b"];
// stringsArray = ["a", "b", 12] //error

let numbersArray: number[];
numbersArray = [1, 2];

let booleansArray: boolean[];
booleansArray = [true, false];

console.log("--------Objects-------");
let anyType: any; //This any will tell ts that you dont want to specify any type you can store anything in that variable

let objectType: {
  name: string;
  age: number;
}; //setting object type

objectType = {
  name: "john",
  age: 10,
};

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
let unionType:
  | string
  | number
  | boolean
  | string[]
  | { name: string; age: number };
unionType = "Can use string";
unionType = 10;
unionType = true;
unionType = ["a", "b"];
unionType = { name: "John", age: 10 };

console.log("--------Type aliases-------");
//We can store any type in a variable and reuse that type when declaring same type again and again
type People = {
  name: string;
  age: number;
};

let object: People;
object = {
  name: "John",
  age: 10,
};

let objectArray: People[];

console.log(
  "---------------------------Functions and types------------------------------"
);
function addFunction(a: number, b: number) {
  return a + b;
}
console.log("addition before:", addFunction(2, 3));

//Also here ts will inference the type of function as number cause we are taking both values as number (hover to see)
// can be also used like:
function otherMethod(a: number, b: number): number | string {
  return a + b;
}
console.log("Other method:", otherMethod(2, 3));
//here function can return any type as number or string as we declared above

function print(value: any) {
  console.log(
    "print is build in function and hence will give an error:",
    value
  );
}

function printValue(value: any) {
  console.log("Value is:", value);
}
//Type of this function is void as it is not returning anything

console.log(
  "---------------------------Generics------------------------------"
);
function insertAtBeginning(array: any[], value: any) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3, 4, "a", "b", "c", "d"];
const functionOutput = insertAtBeginning(demoArray, "a");
console.log("functionOutput", functionOutput);

//Here though we are passing only numbers ts will not detect the type of functionOutput as in insertAtBeginning we are passing values as any
//so if we do this:
functionOutput[0].split(""); //TS will not detect the error but we will face runtime error as first value is number and cannot be split

// To avoid this we use generics:
function insertAtBeginningGenerics<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
} //T is any type | we can use any letter rather than T

const demoArrayGenerics = [1, 2, 3, 4, "a", "b", "c", "d"];
const functionOutputGenerics = insertAtBeginningGenerics(
  demoArrayGenerics,
  "a"
); //Type is string | number

const stringTypeGenerics = insertAtBeginningGenerics(["a", "b", "c", "d"], "y"); //Type is string

// functionOutputGenerics[0].split(""); //TS will detect the error as we are using generics
