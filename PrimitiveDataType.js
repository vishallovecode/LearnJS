// All primitive data types

// null
// undefined
// number
// string
// boolean
// bigint
// Symbol => this is newly added features some browser may does support this

var data = null;
var data1; // undefined
var data3 = undefined;

console.log(typeof data); //  object // this is called pitfalls and big error in JS
console.log(typeof data1); //  undefined
console.log(typeof data3); //  undefined

// String Data Type
// anything b/w the single quoted and double quoted is string in js

var example1 = "";
console.log(typeof example1); // string
example1 = "";
console.log(typeof example1); // string
example1 = "1234";
console.log(typeof example1); // string
example1 = (1234).toString();
console.log(typeof example1); // string
example1 = "ghey" + example1;
console.log(example1); // ghey1234

// includes method in String

var example2 = "Vishal Sharma";
var isValueExist = example2.includes("Sharma"); // Here first argument is searchString and second argument is from where you wanto start second argument is not necessary
console.log(isValueExist);

// Trim  => remove extraa space from both side

var exampl3 = " Vishal Sharma  ";
console.log("hello2" + exampl3 + "Hello"); // hello2 Vishal Sharma  Hello
console.log("hello2" + exampl3.trim() + "Hello"); // hello2Vishal SharmaHello

// trimEnd => it will remove extraa space from the end
// trimStart => it will remove extraa space from the start

// charAt => it give you the specific  string for specific index indexing will start with zero

var exampl4 = "hello";
console.log(exampl4.charAt(0));

// length will give you the length of string

// replace

var exampl5 = "Engineering";
console.log(exampl5.replace("e", "a")); //Enginaering

console.log(exampl5.replaceAll("e", "a")); // Enginaaring

// split

var splitExample = "Hello";
let array = splitExample.split("");
console.log(array); // (5) ['H', 'e', 'l', 'l', 'o']

// slice and splice they are really important  => Array

// =================>    NUMBER <======================

var numberExample = 1234;
var n1 = 1234.5;
var n2 = 12345.11111;

console.log(typeof numberExample, typeof n1, typeof n2); // number number number

// Bigint

var bigExample = 1n;
console.log(typeof bigExample);

// =================>    Boolean   <======================

var booleanExample = true;

console.log(typeof booleanExample);

booleanExample = "true";

console.log(typeof booleanExample);

// nullish operator

// In javascript 0 is consider as false all another number value is consider as true
// In Javascript empty string is consider as false all others value consider as true

if (1) {
  console.log("I am true"); // code will come here
}

if (0) {
  console.log("I am false"); // code will not come here
}

if ("") {
  console.log("I am false string"); // code will come here
}

if (" ") {
  console.log("I am true string"); // code will not come here
}

// ! =>this will do the opposite of the value
console.log(!true); // false
console.log(!0); // true
console.log(!1); // true // same thing for ths string

1 ? console.log("Hey111") : console.log("Hey111"); // ternary operator
