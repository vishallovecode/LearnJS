// // What is Hoisting? done
// // How JS code executed?
// // What is execution context ? done
// // What is Scope?
// // What is lexical scope ?
// // What is diff b/w let var and const? done
// // What is function statement?
// // what is function expression?
// // what is IIF (immediately invoked function)
// // Which value in js in not defined ? done
// // what is defined value and not defined value ? done
// // Diff b/w null and undefined
// // What is Hoisting? done
// // What is tdz? done

// // does let and const are hoisted ? done

// // Js Engine creates a speacial environoment to handle all the js code like ,
// // parshing , memory allocation , transformation and execution ,
// // this environment is called the execution context

// console.log(a); // undefined
// var a = 20;

// //TDZ

// //  The area or block  from where a let and  const
// // cannot be accesssible until the Js engine does not initilize or declare the varible

// console.log(a1); // undefined
// // console.log(b1);
// // console.log(c1);

// var a1 = 30;
// let b1 = 40;
// const c1 = 80;
// let d1;

// // var name1 = "Vishal";
// // {
// //   var name1 = "Sharma";
// //     let name1 = "Verma";
// //   console.log(name1); // verma
// //   // const name ="Sharma1"
// // }

// // console.log(name1);
// // Vishal , 'Sharma1, 'error'

// // var=> redeclared , re assign  ,
// // let => variable cann be re assig but cannot re-declared

// // let name2 = "Sharma";
// // // var name2= "Sharma"
// // name2 = "Raj";

// // console.log(name2);

// // var nam3 = "ss";

// // {
// //   nam3 = "zzz";
// //   var nam3 = "ZZZZ";
// //   let nam3 = "ccccc"
// // }

// //  var can be redeclared and reassign
// // let cannot be re declared any variable in same scope have declared with let  you cannot re-declared that with var and const
// // let variable can be re- assign
// // const variable cannot be re-assign and cannot be re-declared
// // const variable need to initilize at the time declaration

// // const cc; erro
// const cc = "Vishal";
// // cc="name" error

// const call1224 = (callback) => {
//   //     callback  = (a, b) => {
//   //   return a + b;
//   // };

//   return callback(1, 2); // 3
// };

// const sum = (a, b) => {
//   return a + b;
// };

// // call1224(sum(5, 6)); // call1224(11)

// const data = call1224(sum); // here i am passing function as a reference , i am not calling the function
// console.log(data);

// // IIF

// // The function invoked at the time of declaration

// (function IIF() {
//   console.log("Hey I am IIf");
// })();

// //console.log(IIF()); // this will throw error

// const callme123 = () => {
//   console.log("hey");
// };

// // (
// //     callme123
// // )() this is not iif becuuse here we are using callme123 which is already declared

// (() => {
//   console.log("Hey Arrow , iif");
// })();

// (function () {
//   console.log("Hey I am anonymousx");
// })();

// Function execution context

// var a = 30;
// let b = 60;
// const c = 80;

// function getId() {
//   console.log(a);
//   //   console.log(b);
//   //   console.log(c);
//   var a = 90;
//   let b = 900;
//   const c = 600;
//   return undefined;
// }

// const result = getId();

// console.log(result);

// console.log(a, b, c);

// function statment , declaration
//  function expression

// console.log(getName);
// getName();

// console.log(getName3);
// getName3();

// console.log(getName1);
// getName1();

// console.log(getName2);
// getName2();

// // FUNCTION DECLARATION
// function getName() {
//   console.log("Hey");
// }

// const getName1 = () => {
//   console.log("Hey, with const arrow function");
// };

// let getName2 = () => {
//   console.log("Hey, with let arrow function");
// };

// var getName3 = () => {
//   console.log("Hey, with var arrow function");
// };

// const getiDS = function () {
//   console.log("Hey");
// };
// 2X+3Y+Z =20; // EXPRESSION

// null undefined

//undefined means value which is not defined
// undefined is flasy value
//typeof undefined =>
// this value is assigned by the compiler at the time of memor allocation
console.log(typeof undefined); // undefined

var aaa; // undefined

// Null means falsy value
// it s assigned by developer
// its a one type of value
// typeof null
console.log(typeof null);

console.log("==", null == undefined);
console.log("==", true == "vishal");

console.log("===", null === undefined);
