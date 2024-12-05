// javascript has 8 types data

// string
// numbers
// bigint
// boolean
// undefined
// null
// symbol

// Object
 /* The object data type can contain both built-in objects, and user defined objects
Built-in object types can be >>
objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more. */

// string
let textOne = "Hello World";
console.log(textOne);
console.log(`Type Of TextOne:`, typeof(textOne));

//number;
let numberOne = 123;
let numberTwo = 55.22;
console.log(`Number One: `,  numberOne, `Number Two: `, numberTwo);
console.log(`Type Of Number One: `, typeof(numberOne), `Type of Number Two: `, typeof(numberTwo));

// boolean
let taskOne = true;
console.log(`Task One Is: `, taskOne);
console.log(`Type of Task One: `, typeof(taskOne));

// object
const person = {firstName:"Doe", lastName:"jhone"}
console.log(person);
console.log(`Person First Name: `,person.firstName);
console.log(`Person Last Name: `, person.lastName);
console.log(`Type of Person`, typeof(person));

// Array Object
const cars = ["Volvo", "Toyota", "Honda", "BMW"];
console.log(cars);
console.log(cars[1]);
console.log(`Type of Cars: `, typeof(cars));

// date Object
const date = new Date("2024-12-04");
console.log(date.toLocaleDateString());
console.log(`Type of Date: `, typeof(date));


