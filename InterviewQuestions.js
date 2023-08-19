// // // What is Hoisting? done
// // // How JS code executed? // done
// // // What is execution context ? done
// // // What is Scope? // done
// // // What is lexical scope ? // done
// // // What is diff b/w let var and const? done
// // // What is function statement? // done
// // // what is function expression?// done
// // // what is IIF (immediately invoked function)
// // // Which value in js in not defined ? done
// // // what is defined value and not defined value ? done
// // // Diff b/w null and undefined
// // // What is Hoisting? done
// // // What is tdz? done

// // // does let and const are hoisted ? done

// // // Js Engine creates a speacial environoment to handle all the js code like ,
// // // parshing , memory allocation , transformation and execution ,
// // // this environment is called the execution context

// // console.log(a); // undefined
// // var a = 20;

// // //TDZ

// // //  The area or block  from where a let and  const
// // // cannot be accesssible until the Js engine does not initilize or declare the varible

// // console.log(a1); // undefined
// // // console.log(b1);
// // // console.log(c1);

// // var a1 = 30;
// // let b1 = 40;
// // const c1 = 80;
// // let d1;

// // // var name1 = "Vishal";
// // // {
// // //   var name1 = "Sharma";
// // //     let name1 = "Verma";
// // //   console.log(name1); // verma
// // //   // const name ="Sharma1"
// // // }

// // // console.log(name1);
// // // Vishal , 'Sharma1, 'error'

// // // var=> redeclared , re assign  ,
// // // let => variable cann be re assig but cannot re-declared

// // // let name2 = "Sharma";
// // // // var name2= "Sharma"
// // // name2 = "Raj";

// // // console.log(name2);

// // // var nam3 = "ss";

// // // {
// // //   nam3 = "zzz";
// // //   var nam3 = "ZZZZ";
// // //   let nam3 = "ccccc"
// // // }

// // //  var can be redeclared and reassign
// // // let cannot be re declared any variable in same scope have declared with let  you cannot re-declared that with var and const
// // // let variable can be re- assign
// // // const variable cannot be re-assign and cannot be re-declared
// // // const variable need to initilize at the time declaration

// // // const cc; erro
// // const cc = "Vishal";
// // // cc="name" error

// // const call1224 = (callback) => {
// //   //     callback  = (a, b) => {
// //   //   return a + b;
// //   // };

// //   return callback(1, 2); // 3
// // };

// // const sum = (a, b) => {
// //   return a + b;
// // };

// // // call1224(sum(5, 6)); // call1224(11)

// // const data = call1224(sum); // here i am passing function as a reference , i am not calling the function
// // console.log(data);

// // // IIF

// // // The function invoked at the time of declaration

// // (function IIF() {
// //   console.log("Hey I am IIf");
// // })();

// // //console.log(IIF()); // this will throw error

// // const callme123 = () => {
// //   console.log("hey");
// // };

// // // (
// // //     callme123
// // // )() this is not iif becuuse here we are using callme123 which is already declared

// // (() => {
// //   console.log("Hey Arrow , iif");
// // })();

// // (function () {
// //   console.log("Hey I am anonymousx");
// // })();

// // Function execution context

// // var a = 30;
// // let b = 60;
// // const c = 80;

// // function getId() {
// //   console.log(a);
// //   //   console.log(b);
// //   //   console.log(c);
// //   var a = 90;
// //   let b = 900;
// //   const c = 600;
// //   return undefined;
// // }

// // const result = getId();

// // console.log(result);

// // console.log(a, b, c);

// // function statment , declaration
// //  function expression

// // console.log(getName);
// // getName();

// // console.log(getName3);
// // getName3();

// // console.log(getName1);
// // getName1();

// // console.log(getName2);
// // getName2();

// // // FUNCTION DECLARATION
// // function getName() {
// //   console.log("Hey");
// // }

// // const getName1 = () => {
// //   console.log("Hey, with const arrow function");
// // };

// // let getName2 = () => {
// //   console.log("Hey, with let arrow function");
// // };

// // var getName3 = () => {
// //   console.log("Hey, with var arrow function");
// // };

// // const getiDS = function () {
// //   console.log("Hey");
// // };
// // 2X+3Y+Z =20; // EXPRESSION

// // null undefined

// //undefined means value which is not defined
// // undefined is flasy value
// //typeof undefined =>
// // this value is assigned by the compiler at the time of memor allocation
// console.log(typeof undefined); // undefined

// var aaa; // undefined

// // Null means falsy value
// // it s assigned by developer
// // its a one type of value
// // typeof null
// console.log(typeof null);

// console.log("==", null == undefined);
// console.log("==", true == "vishal");

// console.log("===", null === undefined);

// // function statement/declration and function expression ??

// // expression
// // 2x+2y+z=40;

// // If you are assigning the any function that can be arrow function and normal functions
// // that is called function expression where where variable which is taking the value of whole function is hoisted like another normal value

// // here getEmployeeDetail is the variable type const

// // getEmployeeDetail(); // reference error
// // here  getEmployeeDetails2 is var varibale and value of that in this cases will be undefined and
// // if you try to call undefined as  functio  this will throw the error undefined is not a function
// // getEmployeeDetails2(); // undefined
// // getEmployeDetails3(); // reference error
// // all above method  are function expression

// // getAll is function statement  or declaration
// console.log(getAll, "getall");
// getAll();

// const getEmployeeDetail = () => {
//   console.log("this is the employee details....");
// };

// console.log(typeof getEmployeeDetail); // function

// var getEmployeeDetails2 = () => {
//   console.log("this is the employee details1....");
// };

// let getEmployeDetails3 = function () {
//   console.log("hey normal function");
// };

// // function declaration
// // the function name variable is taken whole  the value as initial value
// function getAll() {
//   console.log("hey function statement");
// }

// getEmployeeDetail();
// getAll();
// getEmployeeDetails2();
// getEmployeDetails3();

function callMe() {
  console.log(arguments); //
}

// in the case of arrow you cannot access the arguments inside the function
// it will say arguments is not defined
const callMe1 = () => {
  //   console.log("arguments", arguments); // error
};

// In javascript you can pass any arguments does matter how many parameter function accepting

callMe(1234, 3456, 789); // / arguments.length  =>3
callMe(); // arguments.length  =>0
callMe1("vishal", "sharma", 888888);

// how to know the function name  ??

function Myname(param1, param2, param3) {
  console.log("My name  I am cool");
}

console.log(Myname.name);
console.log(Myname.length); // functionName.length will give the count of parameter that particular function is accepting

console.log(Myname.arguments);
