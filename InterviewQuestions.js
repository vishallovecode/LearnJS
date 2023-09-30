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
// // getAll();

// // const getEmployeeDetail = () => {
// //   console.log("this is the employee details....");
// // };

// // console.log(typeof getEmployeeDetail); // function

// // var getEmployeeDetails2 = () => {
// //   console.log("this is the employee details1....");
// // };

// // let getEmployeDetails3 = function () {
// //   console.log("hey normal function");
// // };

// // // function declaration
// // // the function name variable is taken whole  the value as initial value
// // function getAll() {
// //   console.log("hey function statement");
// // }

// // getEmployeeDetail();
// // getAll();
// // getEmployeeDetails2();
// // getEmployeDetails3();

// function callMe() {
//   console.log(arguments); //
// }

// // in the case of arrow you cannot access the arguments inside the function
// // it will say arguments is not defined
// const callMe1 = () => {
//   //   console.log("arguments", arguments); // error
// };

// // In javascript you can pass any arguments does matter how many parameter function accepting

// // callMe(1234, 3456, 789); // / arguments.length  =>3
// // callMe(); // arguments.length  =>0
// // callMe1("vishal", "sharma", 888888);

// // // how to know the function name  ??

// // function Myname(param1, param2, param3) {
// //   console.log(Myname.arguments); //
// //   console.log(arguments);
// //   // function
// // }

// // console.log(Myname.name);
// // console.log(Myname.length); // functionName.length will give the count of parameter that particular function is accepting

// // console.log(Myname.arguments); //

// // Myname(); // local
// // //
// // Myname(1);
// // Myname(1, 2);
// // Myname(1, 2, 4);

// //
// // october  a,b
// // november  a,b
// // decemeber a,b

// // Type Conversion=> Either js engine or developer convert one type into another type

// // explicit type conversion(type casting) => developer

// // implicit type conversion (type coersion)=> js

// // if any arithmetic operator is happening in that case js implicityl convert things in number  value
// // but in +  operator if applied between string  and  number this  will consider number as string value

// var tt = +("20" + "30" + "40") + +"120" + "230"; // 203160230

// console.log("ans2", tt);

// var tts = -("20" + "30" + "50") - ("30" - "30" + 60);

// console.log("ans1", tts);

// // operand1 + operand1 => if any of the operand are strign than js convert another operand in string
// // 20 +'30' =>  2030

// //  +operand => here plus operator will try to convert given operand in number

// console.log(+"vishal"); // NaN

// //
// console.log(+true); //

// console.log(+false); // 0

// console.log(typeof +"a" === typeof "vishal"); // false
// // typeof NaN  ===  string
// //  number  === string

// console.log(typeof +"1" === typeof +"vishal"); // false

// // typeof +"1" =  number

// // typeof +"vishal" => typeof NaN =>number

// console.log("A" < "B"); //  true
// console.log("a" < "A"); // ASCII CODE OF 'a' IS GREATER THAN ASCII CODE OF A

// console.log('"2" < 3', "2" < 3);

// // "2" < 3 => 2<3 // true

// // what does isNaN function does and what is the return type of that?

// console.log(isNaN(NaN)); //
// // it will check whether given arguments is NaN or not after applying arithmetic operator on that Argument
// // if given parameter gives NaN while converting it into number that case isNaN gives you true value

// console.log(isNaN(true)); //  false
// console.log(isNaN(false)); // false

// console.log(isNaN([])); // false , +[]=>0
// console.log(isNaN({})); // true  , +{}=>NaN

// console.log(isNaN("      ")); // false
// console.log(isNaN([true, true, false, 1, 2, 3])); //  true

// console.log(isNaN([9]));
// console.log(isNaN(["vishal"]));

// // function MyisNaN(param1) {
// //   const s = +param1;
// //   if (s.toString() === "NaN") {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // }

// console.log(NaN === NaN); // false
// console.log(NaN == NaN); // false

// // Developer  => I want to some support so that i should able to convert one type to another type

// const name1 = "Vishal";

// // const resultName = +"Vishal"; // => NaN

// // const result = new Number(name1); //   NaN

// // const a = new Number(8);
// // // new String()
// // // new Boolean();

// // const number = 12345;
// // // using toString method
// // console.log(typeof number.toString());

// // console.log(new String(number) + "Vishal");
// // console.log();
// // console.log(typeof new String(number)); // object

// // console.log(new String(number)); //  String {'12345'}
// // function Employee() {
// //   return 123;
// // }

// // const employee = new Employee();

// // console.log(employee);

// // callback vs higher order function

// // const callback = () => {
// //   console.log("hey  ");
// // };

// // // Generally callback  function pass as a reference

// // setTimeout(callback, 1000); // we passed name callback arrow function
// // setTimeout(() => {
// //   console.log("hey3");
// // }, 2000); // we passed  anonymous callback arrow function

// // callback function  can be arrow function normal function anonymous function , named function

// const array = [1, 2, 3, 4, 5]; // =>  [{1:1} , {2:2} , {3:3} , {4:4}, {5:5}]

// //
// // const maped = array.map((value, index, array) => {
// //   return {
// //     [value]: value,
// //   };
// // });

// function mapCallback(value, index, array) {
//   return {
//     [value]: value,
//   };
// }
// // map can return  anything
// const maped = array.map(mapCallback);
// console.log("mapped", maped);

// // function map(callback) {
// //   // array
// //   for (let i = 0; i < array.length; i++) {
// //     callback(array[i], i, array);
// //   }
// // }

// // the function which takes the function as a argument or return function is called higher order function
// // the function which is pass as a argument into hof is called callback function

// // throttle
// // debounce
// // shallow copy vs deep copy
// // JSON.stringify()
// // JSON.parse()

// // reduce ka polyfill
// // slice vs splice
// // shallow copy vs deep copy

// // event delegation => done
// // map filter and reduce ka polyfill => done
// // slice vs splice

// // What is event bubbling= > done
// // non-primitive data type pass by reference vs pass by value
// // Array find method

// // map for array => done

// // Imperative statement(You have power to modify the things stop the program to run in cerntain condiotion)

// // I have divided one week in three parts according to the topic
// // first part covered mostl debouncing throttling at evening 6-8
// // second part covered mostl array method at evening 3-7
// // third part i covered rest of the topic

// // declarative statement (result orieneted) you dont have power to modify things b/w until whole code execute
// // Yes sir i have completed all the questions within 2 days

// //Print all the array element
// const array12 = new Array(12).fill(3); // [3,3,3,3,3,3,3,3,3,3,3,3]
// // imperative
// // for (let i = 0; i < array12.length - 5; i = i * 2) {
// //   console.log(array12[i]);
// // }

// //

// // method call
// // this => array12
// // here forEach is higher order function of array
// // it takes onf function as a argument
// // the function which took by the forEach is called callback function

// // that callback functions takes three parameter

// function printData(currentValue, currentIndex, originalArray) {
//   console.log(currentValue, currentIndex, originalArray);
// }

// // here callback is passed as a reference in forEach higher order functions
// // forEach traverse thorugh all the element if array and invoked callback function to the everu element
// // array12.forEach(callback);

// Array.prototype.myForEach = function (callback) {
//   // ?? how array i will get
//   // this => value of this will be the array which is accessing this method
//   // const array  = this;
//   if (typeof callback == "function" && typeof Array.isArray(this)) {
//     for (let i = 0; i < this.length; i++) {
//       callback(this[i], i, this);
//     }
//   }
// };

// // in method invocation  t
// array12.myForEach(printData);

// console.log(array12, "1234");

// // I want to create my own forach  ???

// [5, 6].myForEach((value, index, array) => {
//   console.log(value * 100);
// });

// // Map  ??

// // map => ladki

// // ladka

// // const ar = [100, 50, 80, 40];
// // // newarr = > [yes , no, yes , no ]
// // function callback(value, index, originalArray) {
// //   if (value > 70) {
// //     return "yes";
// //   } else {
// //     return "no";
// //   }
// // }
// // const result = ar.map(callback);
// // console.log("result", result); // ['yes', 'no' , 'yes' ,'no']

// // Array.prototype.mymap = function (callback) {
// //   // ?? how array i will get
// //   // this => value of this will be the array which is accessing this method
// //   // const array  = this;
// //   const result = [];
// //   if (typeof callback == "function" && typeof Array.isArray(this)) {
// //     for (let i = 0; i < this.length; i++) {
// //       result.push(callback(this[i], i, this));
// //     }
// //   }
// //   return result;
// // };

// // const resultmymap = ar.mymap(callback);

// // // Events

// // const button = document.getElementById("button");

// // const callme1 = () => {
// //   console.log("hey");
// // };

// // button.addEventListener("click", () => {
// //   console.log("hey");
// // });
// // button.addEventListener("click", () => {
// //   console.log("hey");
// // });
// // button.addEventListener("click", () => {
// //   console.log("hey");
// // });
// // button.addEventListener("click", () => {
// //   console.log("hey");
// // });
// // button.addEventListener("click", () => {
// //   console.log("hey");
// // });
// // button.addEventListener("click", () => {
// //   console.log("hey");
// // });
// // button.addEventListener("click", () => {
// //   console.log("hey");
// // });

// // button.addEventListener("click", function getName() {
// //   console.log("name");
// // });
// // button.addEventListener("click", function getName() {
// //   console.log("name");
// // });
// // button.addEventListener("click", function getName() {
// //   console.log("name");
// // });
// // button.addEventListener("click", function getName() {
// //   console.log("name");
// // });
// // button.addEventListener("click", function getName() {
// //   console.log("name");
// // });
// // button.addEventListener("click", function getName() {
// //   console.log("name");
// // });
// // button.addEventListener("click", function getName() {
// //   console.log("name");
// // });

// // function callme() {
// //   console.log("Callme");
// // }

// // button.addEventListener("click", callme);
// // button.addEventListener("click", callme);
// // button.addEventListener("click", callme);
// // button.addEventListener("click", callme);
// // button.addEventListener("click", callme);
// // button.addEventListener("click", callme);
// // button.addEventListener("click", callme);

// // Event bubbling
// // event is bubble from to parent top level parent of html dom is documnet

// function callGrandChild(e) {
//   console.log(" callGrandChild e.target", e.target);
//   console.log(" callGrandChild e.currentTarget", e.currentTarget);
//   console.log(
//     "e.target.parentElement",
//     e.target.parentElement?.parentElement?.parentElement?.parentElement
//       ?.parentElement?.parentElement
//   );
// }

// // const callChild = (e) => {};
// // document.getElementById("child").addEventListener("click", callChild);

// // document.getElementById("grandparent").addEventListener("click", function(e) {
// //   console.log(e);
// //   console.log(" grandparent e.target", e.target);
// //   console.log(" grandparent e.currentTarget", e.currentTarget);
// //   alert("Grand Parent");
// // });

// // document.getElementById("grandparent").addEventListener("click", (e) => {
// //   console.log(e);
// //   console.log(" grandparent e.target", e.target);
// //   console.log(" grandparent e.currentTarget", e.currentTarget);
// //   alert("Grand Parent");
// // });

// // function addEventListener(callback) {
// //   // callback(event)
// // }

// // // event.target vs event.current target

// // function handleCard() {
// //   window.location =
// //     "https://www.zeptonow.com/pn/amul-malai-paneer-fresh/spid/7a496806-ae83-499f-be30-111a416c9a0d?sid=21d42ce9-9a73-428f-89ef-75323784c3b8&pvid=54099eb2-2d08-4013-a822-a3eebc72f19f";
// // }

// // function addButton(e) {
// //   e.stopPropagation();
// //   if (document.getElementById("buttonadd")?.textContent === "Add") {
// //     e.target.innerHTML = `<div  id ='decrement' onclick = ${decrement(
// //       event
// //     )}> - </div> <div id = 'productcount'>${1}</div> <div  id = 'increment' > + </div>`;
// //     document.getElementById("increment").addEventListener("click", increment);
// //     document.getElementById("decrement").addEventListener("click", decrement);
// //   } else {
// //     return 0;
// //   }
// //   return;
// // }

// // function increment(e) {
// //   if (
// //     document.getElementById("increment") &&
// //     document.getElementById("increment")?.textContent
// //   ) {
// //     console.log(e.target.textContent);
// //     const count =
// //       parseInt(document.getElementById("productcount").textContent) + 1;
// //     document.getElementById("productcount").textContent = count;
// //   }
// // }

// // function decrement(e) {
// //   if (parseInt(document.getElementById("productcount")?.textContent) > 1) {
// //     e.stopPropagation();
// //     if (
// //       document.getElementById("increment") &&
// //       document.getElementById("increment")?.textContent
// //     ) {
// //       console.log(e.target.textContent);
// //       const count =
// //         parseInt(document.getElementById("productcount").textContent) - 1;
// //       document.getElementById("productcount").textContent = count;
// //     }
// //   } else {
// //     document.getElementById("buttonadd").textContent = "Add";
// //   }
// // }

// // function checkBoxHandler(e) {
// //   e.stopPropagation();
// //   e.preventDefault();
// // }

// // // event delegation

// // // Array find method  ??

// // const array1 = [4, 5, 6, 7, 8, 9, 10];
// // // Find is a higher order function

// // const result = array1.find((currentElement, index) => {
// //   return currentElement % 2 == 0;
// // });

// // console.log(result, "result");

// // const employee = [
// //   {
// //     name: "Vishal",
// //     id: 1234,
// //   },
// //   {
// //     name: "Visha1111l",
// //     id: 1235,
// //   },
// //   {
// //     name: "Vi111111shal",
// //     id: 12344,
// //   },
// //   {
// //     name: "Vis1111hal",
// //     id: 123333,
// //   },
// //   {
// //     name: "Vi111shal",
// //     id: 121113,
// //   },
// // ];

// // const callback = (employeeObj, index) => {
// //   return employeeObj.id === 121113;
// // };
// // const result1 = employee.find(callback);
// // console.log(result1);

// // // Ways to defined object In JS

// // // Object Literal
// // const obj1 = {
// //   a: 2,
// // };

// // // Object constructor

// // const obj12 = new Object(null);

// // // Constructor Function
// // function Employee(name) {
// //   this.name = name;
// // }

// // const emp = new Employee("Vishal");

// // // Object.create()

// // const obj11 = Object.create(obj12);
// // // obj11 = {};
// // // obj11.name ="Vishal"

// // // class

// // class Person {
// //   constructor(name) {
// //     this.name = name;
// //   }
// // }

// // const per = new Person("Vishal");

// // Promises

// // one technique to handle async programming in javascript

// // async  => now and later(i will get the result of this at last)
// // sync => now and now

// // event loop => microtask  , macro task  ,  stack , event loop

// // var a = 20;
// // console.log(a); // 20

// // const callback2 = (callback3, call4) => {
// //   setTimeout(() => callback3(call4));
// // };

// // const callback3 = (call4) => {
// //   setTimeout(call4);
// // };
// // const callback = (callback2, callback3, call4) => {
// //   setTimeout(() => callback2(callback3, call4));
// // };

// // setTimeout(callback, 1000); // asynchrnous

// // earlier before promises we need to handle asyn programming in js using callback
// // callback hell
// // ten thousand of synchrnous javascript code
// // first all synchrnouw code of js will execute once the stack is empty than only   async code will run

// // Promise => pending , rejected , fulffillled

// // how to defined the promises in js

// // immediate resolved promise
// const myPromise = new Promise((fulffillled, rejected) => {
//   // fullfilled and rejected are the functions
//   fulffillled("I am punit");
//   rejected("Hey I am rejected"); // this code will not run
// });

// console.log(myPromise, "myPromise");

// // function fetch () {
// // // firts xmlhhtprequest
// // // server response
// // // server response code
// // // serverResponseData
// // return new Promise((resolved , rejected)=>{
// // if(serverResponseData.success) {
// //   resolved(serverResponseData)
// // } else {
// //   rejected(serverResponseData)
// // }
// // })

// // }

// const mp1 = new Promise((resolved, rejected) => {
//   setTimeout(() => {
//     console.log("Hey");
//     rejected("After 2 seconds rejected");
//     resolved("After 2 seconds resolved");
//   }, 2000);
// });

// console.log("mp1", mp1); //

// // setTimeout(() => {
// //   console.log("after 3 seconds mp1", mp1); //
// // }, 3000);

// // promise chaining then and catch
// // then is higher order function which takes two parameter first parameter is function which will be executed if
// // promise is resolved
// // Second parameter is also function which will execute if promise is rejected
// // catch will take one parameter which is function which will be executed if the promise is rejected

// const success = (res) => {
//   console.log("then catching", res);
// };

// const error = (error) => {
//   console.log("error", error);
// };
// // mp1.then(success,error);// this approac recommended

// mp1
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log("error::", error);
//   });
// // mp1.then(success).catch(error);

// // async and await which is also use for getting result from the promises
// // if you want to use await that should be inside the async function

// async function getPromise() {
//   try {
//     const data = await mp1;
//     console.log("data", data);
//   } catch (error) {
//     console.log("error123", error);
//   }
// }

// console.log("async function", getPromise());

// //

// // Calling get api  fetch and resolving promise using promise chaining
// const getUser = async () => {
//   // https://dummyjson.com/users
//   // fetch is method provided by the browser
//   // than how can i access the browser api
//   // you can access that using window.fetch()  or fetch () because window is middleware b/w browser and the javascript
//   // window attached all the wbe api in it object
//   // the kye attached with window can be acces directly without using window
//   // by default method of fetch is GET
//   // 404 NOT FOUND MEANS ADDRESS NOT FOUND  OR    METHOD IS INVALID OR URL IS INVALID OR THAT URL DOES NOT EXISTS
//   // fetch("https://dummyjson.com/users?limit=101", {
//   //   method: "GET",
//   //   headers: { projectId: "VISHAKL" },
//   // }).then((res) => {
//   //   res.json().then((result) => {
//   //     console.log(result);
//   //   });
//   // });
//   try {
//     const res = await fetch("https://dummyjson.com/users");
//     const result = await res.json();
//     console.log(result);
//   } catch (error) {}
// };

// // Add => Post
// // Updated => PUT
// // GET => GET
// // DELETE => DELETE

// const getSingleUser = () => {
//   fetch("https://dummyjson.com/users/101").then((res) => {
//     res.json().then((result) => {
//       console.log(result);
//     });
//   });
// };

// const addNewUsers = () => {
//   const body = {
//     firstName: "Vishal",
//     lastName: "Sharma",
//     age: 26,
//   };
//   fetch("https://dummyjson.com/users/add", {
//     method: "POST",
//     body: JSON.stringify(body),
//   }).then((res) => {
//     res.json().then((result) => {
//       console.log(result);
//       getUser();
//       getSingleUser();
//     });
//   });
// };
// addNewUsers();

// async functions

// async normal

// async function Async() {
//   // return "I am cool";
//   return new Promise((resolved) => {
//     resolved("Hey");
//   });
// }

// console.log(Async());

// Async().then((res) => {
//   console.log("HEY I AM VALUE::=>", res);
// });

// const myPromise = new Promise((resolved, rejected) => {
//   resolved("Hey i am resolved naa...");
// });

// Polyfill for Promise.all()

const allp = new Promise((resolved, rejected) => {
  setTimeout(() => {
    resolved("Promis1");
  });
});
const allp1 = new Promise((resolved, rejected) => {
  setTimeout(() => {
    resolved("Promise2");
  });
});
const allp2 = new Promise((resolved, rejected) => {
  setTimeout(() => {
    resolved("Promise3");
  });
});
//It takes the array of promises and if all the promises are fullfilled it returns the promise  with the result array of result corresponding to the that promise (fullfilled)

var allResult = Promise.all([allp, allp1, allp2]);

// allResult.then((res) => {
//   console.log(res, "Promise all result");
// });

// If any of the promises passed in the array are rejected than promisea.all will immediately reject the promise and return the promise with the value corressponding to the that promise
// It will not run to next promise

const pr = new Promise((resolved, rejected) => {
  setTimeout(() => {
    rejected("Rejected Promis1");
  });
});
const pres0 = new Promise((resolved, rejected) => {
  setTimeout(() => {
    resolved("Promise2");
  });
});
const pres1 = new Promise((resolved, rejected) => {
  setTimeout(() => {
    resolved("Promise3");
  });
});

allResult = Promise.all([pr, pres0, pres1]);

console.log("rejected case 1::", allResult);

allResult = Promise.all([pres0, pres1, pr]);

console.log("rejected case 2::", allResult);

allResult
  .then(() => {})
  .catch((error) => {
    console.log("error::", error);
  });

// Promise.myall([]);

Promise.myall = function (promises) {
  //[1,2,3,4,5]
  // then function can be only applicable for the promise prototype
  const result = [];
  return new Promise((resolved, rejected) => {
    promises.forEach((promise, index) => {
      if (promise && typeof promise.then === "function") {
        promise
          .then((res) => {
            result[index] = res;
            if (index === promises.length - 1) {
              resolved(result);
            }
            // we want to resolved this promise if all the promise are resolved
          })
          .catch((error) => {
            result[index] = res;
          });
      } else {
        result[index] = promise;
        if (index === promises.length - 1) {
          resolved(result);
        }
      }
    });
  });
};
allResult = Promise.myall([pr, pres0, pres1]);
console.log("rejected myall case 1::", allResult);
allResult = Promise.all([pres0, pres1, pr]);
console.log("rejected my all case 2::", allResult);

const data = Promise.myall([1, 2, 3, 4]);
const dataall = Promise.all([1, 2, 3, 4]);

console.log("dataall", dataall);
console.log("data", data);

//list  => and your requirement is that if all api is success than i will do something

// Promise.allSettled();

// go through all the promise it does not care about the reject and resolved it will always return the promise with fullfilled state
allResult = Promise.allSettled([pr, pres0, pres1]);
console.log("allsettled", allResult);

// ignore need to fixed this
Promise.myallSettled = function (promises) {
  //[1,2,3,4,5]
  // then function can be only applicable for the promise prototype
  const result = [];
  return new Promise((resolved, rejected) => {
    promises.forEach((promise, index) => {
      if (promise && typeof promise.then === "function") {
        promise
          .then((res) => {
            result[index] = res;
            if (index === promises.length - 1) {
              resolved(result);
            }
            // we want to resolved this promise if all the promise are resolved
          })
          .catch((error) => {
            result[index] = res;
          });
      } else {
        result[index] = promise;
        if (index === promises.length - 1) {
          resolved(result);
        }
      }
    });
  });
};
