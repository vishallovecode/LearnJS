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
// console.log(b1);
// console.log(c1);

var a1 = 30;
let b1 = 40;
const c1 = 80;
let d1;

// var name1 = "Vishal";
// {
//   var name1 = "Sharma";
//     let name1 = "Verma";
//   console.log(name1); // verma
//   // const name ="Sharma1"
// }

// console.log(name1);
// Vishal , 'Sharma1, 'error'

// var=> redeclared , re assign  ,
// let => variable cann be re assig but cannot re-declared

// let name2 = "Sharma";
// // var name2= "Sharma"
// name2 = "Raj";

// console.log(name2);

// var nam3 = "ss";

// {
//   nam3 = "zzz";
//   var nam3 = "ZZZZ";
//   let nam3 = "ccccc"
// }

//  var can be redeclared and reassign
// let cannot be re declared any variable in same scope have declared with let you cannot re-declared that with var and const
// let variable can be re- assign
// const variable cannot be re-assign and cannot be re-declared
// const variable need to initilize at the time declaration

// const cc; erro
const cc = "Vishal";
// cc="name" error
