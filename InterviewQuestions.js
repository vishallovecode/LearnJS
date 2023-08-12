// What is Hoisting?
// How JS code executed?
// What is execution context ?
// What is Scope?
// What is lexical scope ?
// What is diff b/w let var and const?
// What is function statement?
// what is function expression?
// what is IIF (immediately invoked function)
// Which value in js in not defined ?
// what is defined value and not defined value ?
// Diff b/w null and undefined
// What is tdz?

// does let and const are hoisted ?

// Mohd Javid => 1

// Js Engine creates a speacial environoment to handle all the js code like ,
// parshing , memory allocation , transformation and execution ,
// this environment is called the execution context

console.log(a); // undefined
var a = 20;

//TDZ

//  The area or block  from where a let and  const
// cannot be accesssible until the Js engine does not initilize or declare the varible

console.log(a1); // undefined
console.log(b1);
console.log(c1);

var a1 = 30;
let b1 = 40;
const c1 = 80;
let d1;
