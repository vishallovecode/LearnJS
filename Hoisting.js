// what is temporal dead zone  => TDZ ?
// Is let and const are hoisted => yes than proof that =>

console.log("hey i am a =>", a); // undefined
console.log(call); // i am not invoking the functions
console.log("arrow with let", call2); // tdz
console.log("arrow functions sections", call1); // i am not invoking the functions
console.log("hey i am b =>", b); // tdz
console.log("hey i am c =>", c); // tdz

// declaring the variable
var a;
let b;
const c = 40;
function call() {
  var a = 40;
  console.log(a);
}

var call1 = () => {
  console.log("Hey I am arrow Functions");
};

let call2 = () => {
  console.log("Hey I am arrow with let variable Functions");
};

// console.log(a);
////

///
///
//
// console.log(a);
// const a = "Hey I am constant";
// console.log("Out of tdz", a);

// redeclared

var abc = 30;
var abc = 40;
// console.log(abc);

// let abc2 = 50;
// let abc2 = 50; Cannot redeclare block-scoped variable 'abc2'

// const abc3 = 40;
// const abc3 = 60; error => Cannot redeclare block-scoped variable 'abc3'

// Reaasign
// var abc4 = 40;
// abc4 = 50;
// console.log(abc4);

// let abc5 = 60;
// abc5 = 70;

// const abc7 = 80;
// // abc7 = 80; // TypeError: Assignment to constant variable.

// var container1;
// let container2;
// // const container ; //Error = > 'const' declarations must be initialized.

// // Var is functional scope and let and const is block-scoped

// var a = 30;

// function call() {
//   console.log(a); // undefined
//   var a = "happy face";
//   console.log(a); // happy faced
// }

// call();

// console.log(a); // 30
// declaration
console.log(checkKnowledge); // whole function
console.log(checkKnowledge()); // hey , undefined

function checkKnowledge() {
  console.log("Hey");
  //   return undefined  by deafult
}

console.log(check); // undefined
console.log(check()); // undefined it not a function
// expression
const check = function checkKnowledge() {
  console.log("Hey");
};

// syntax is diff
// both are alocated memroy diffrerentl at the compliation
// function declaration and statement are same but function expression is diff
