// what is temporal dead zone  => TDZ ?
// Is let and const are hoisted => yes than proof that =>

// ===> Temporal Dead Zone is the period of time during which the let and const declarations cannot be accessed
// var is not in TDZ becouse its scope is global and during compiler time compiler alocated memory before exution inside the global object   and whenever let and const are not initilize compiler add let and const inside script scope  thats why whenever we try to accses let and var before initilization code give a error ==> "variable not initilize "<==  its clear that ==> let and const are hoisted <== becouse its alocated memory in colpilation time thats why its given  this type of error "ReferenceError: Cannot access 'a' before initialization"   rather tan " ReferenceError: a is not defined"



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


// _______ 
// < lets understand Diffrence between let var and cont>
//  -------
//         \   ^__^
//          \  (oo)\_______
//             (__)\       )\/\
//                 ||----w |
//                 ||     ||


// Diffrence between let var and cont
// TDZ ==> temporal dead zone
//
//              Var                          |                         let                  |             const
//                                           |                                              |
//  Redeclaration of the var is Allow        |  Redeclaration of the let is Not Allow       |  Redeclaration of the const is Not Allow
//                                           |                                              |
//  Reaasign of the var is Allow             |  Reaasign of the let is Allow                |  Reaasign of the let is not Allow 
//                                           |                                              |
//  Not in TDS(temporal dead zone)           |  inside the TDS before initilization         |  inside the TDS before initilization 
//                                           |                                              |
//  Var is functional scope                  | let is block-scope                           |  cont is block-scoped
//
//                                                                                         
// =================================> var let and const all are hosted <========================================








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





// Function Declaration:

// A Function Declaration( or a Function Statement) defines a function with the specified parameters without requiring a variable assignment. They exist on their own, i.e, they are standalone constructs and cannot be nested within a non-function block. A function is declared using the function keyword.
//  ==> Syntax:
// function fun(a, b) {
//   //A set of statements
//   }






// Function Expression:

// A Function Expression works just like a function declaration or a function statement, the only difference is that a function name is NOT started in a function expression, that is, anonymous functions are created in function expressions. The function expressions run as soon as they are defined.

//==> syntax

// var fun = function(a, b) {
//   A set of statements
//  }
