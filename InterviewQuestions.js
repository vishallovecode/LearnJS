// What is Hoisting? done
// How JS code executed?
// What is execution context ? done
// What is Scope?
// What is lexical scope ?
// What is diff b/w let var and const? done
// What is function statement?
// what is function expression?
// what is IIF (immediately invoked function)
// Which value in js in not defined ? done
// what is defined value and not defined value ? done
// Diff b/w null and undefined
// What is Hoisting? done
// What is tdz? done

// does let and const are hoisted ? done

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
// let cannot be re declared any variable in same scope have declared with let  you cannot re-declared that with var and const
// let variable can be re- assign
// const variable cannot be re-assign and cannot be re-declared
// const variable need to initilize at the time declaration

// const cc; erro
const cc = "Vishal";
// cc="name" error

const call1224 = (callback) => {
  //     callback  = (a, b) => {
  //   return a + b;
  // };

  return callback(1, 2); // 3
};

const sum = (a, b) => {
  return a + b;
};

// call1224(sum(5, 6)); // call1224(11)

const data = call1224(sum); // here i am passing function as a reference , i am not calling the function
console.log(data);

// IIF

// The function invoked at the time of declaration

(function IIF() {
  console.log("Hey I am IIf");
})();

//console.log(IIF()); // this will throw error

const callme123 = () => {
  console.log("hey");
};

// (
//     callme123
// )() this is not iif becuuse here we are using callme123 which is already declared

(() => {
  console.log("Hey Arrow , iif");
})();

(function () {
  console.log("Hey I am anonymousx");
})();
