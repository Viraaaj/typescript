console.log("----------------------This is TypeScript-----------------------");

const addTypescriptTS = function(a: number, b: number){
    return a+b
}
console.log("Addition with 2 and 3 numbers:", addTypescriptTS(2, 3));
// console.log("Addition with 2 and 3 strings:", addTypescriptTS("2", "3"));

type People1 = {
    name: string;
    age: number;
}

let object2: People1;
object2 = {
    name: "John",
    age: 10
}
console.log("object2", object2);


let object3: People1;
object3 = {
    name: "John2",
    age: 10
}
console.log("object3", object3);

let object4: {
    name: string;
    age: number;
    isUser: boolean;
};
object4 = {
    name: "John2",
    age: 10,
    isUser: true
}
console.log("object4", object4);


let objectArray2: People1[];
objectArray2 = [object2, object3, object4]
console.log("objectArray2:",objectArray2);

let array: string[] = ["a", "b", "c", "d", "e", "f", "g", "h"]
console.log("array destructuring:", ...array);
