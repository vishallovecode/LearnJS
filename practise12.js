// Array.prototype.myReduce = function (callbackFunction, initial) {
//   this.forEach((elem) => {
//     initial =
//       typeof initial !== "undefined" ? callbackFunction(initial, elem) : elem;
//   });
//   return initial;
// };

// Array.prototype.myReduce = function (cb, initialValue) {
//   // Complete the implementation of myReduce
//   let ans = initialValue || (this[0] ? this[0] : undefined);
//   if (ans !== undefined) {
//     for (let i = initialValue ? 0 : 1; i < this.length; i++) {
//       ans = cb(ans, this[i], i, this);
//     }
//   }
//   return ans;
// };
// const data = [1].myReduce((acc, value) => {
//   return acc + value;
// }, 0);

// const data22 = [1].reduce((acc, value) => {
//   return acc + value;
// }, 0);

// console.log(data, "hey");
// console.log(data22);

// const employee = [1, 2, 3, 4, 5, 6];

// const shubhamServant = (value) => {
//   return value * 2;
// };

// const updatedEmployee = employee.map(shubhamServant);

// console.log(updatedEmployee); // [2,4,6,8,10,12]

// // delclarative approach and imperative approach

// // anywhere you will go through

// // imperative approach
// for (let i = 5; i < employee; i = i + 2) {}

// // declarative approach
// // map, reduce , for..of , for...in , forEach , filter

// employee.forEach((value) => {
//   console.log(value);
// });

// // array find ??

// // const updatedemployeeData = [
// //   { name: "Chim chom", salary: 400000, isManager: false, isLead: true },
// //   { name: "him hom", salary: 480000, isManager: false, isLead: true },
// //   { name: "tir tor", salary: 460000, isManager: false, isLead: true },
// //   { name: "tir tor", salary: 560000, isManager: true, isLead: false },
// //   { name: "tir tor", salary: 660000, isManager: true, isLead: false },
// // ];
// //lead
// //manager

// // filter out the employee whose salary is greater than  or equal to 400000
// // and if salary is greater than 500000 and one key on object which will be isManager and add true
// // isLead
// const getEmployee = (value) => {
//   return value.salary === 400000;
// };

// // const targetObject = employeeData.find(getEmployee);

// // console.log(targetObject); // { name: "Chim chom", salary: 400000 }

// // chaining on array hoc

// // i  do not need the data whose salary is less than 4 lakh
// const employeeData = [
//   { name: "Chim chom", salary: 400000 }, // => 0
//   { name: "rim rom", salary: 320000 }, // => 1
//   { name: "him hom", salary: 480000 }, // 2
//   { name: "tir tor2", salary: 460000 }, // 3
//   { name: "tir tor1", salary: 560000 }, //4
//   { name: "tir tor3", salary: 660000 }, //5
// ];

// const filteredData = employeeData
//   .filter((v) => {
//     return v.salary >= 400000;
//   })
//   .map((value) => {
//     if (value.salary > 500000) {
//       return {
//         ...value,
//         isManager: true,
//         isLead: false,
//       };
//     } else {
//       return {
//         ...value,
//         isManager: false,
//         isLead: true,
//       };
//     }
//   });

// //  const minimizedData = filteredData.map((value) => {
// // if (value.salary > 500000) {
// //   return {
// //     ...value,
// //     isManager: true,
// //     isLead: false,
// //   };
// // } else {
// //   return {
// //     ...value,
// //     isManager: false,
// //     isLead: true,
// //   };
// // }
// // });
// console.log("filteredData", filteredData); //
// // console.log("minimizedData", minimizedData); //

// // filter ??

// // bind ??
// // function securityProvider(...name) {
// //   console.log(this); // context
// //   console.log(name); //
// // }

// // const security1 = securityProvider.bind(
// //   { grandFather: "Rim Rom" },
// //   "Ram",
// //   "tikor"
// // );

// // const security2 = securityProvider.bind({ pet: "peti reti" }, "Tek", "pikor");

// // security1("XYZ", 123, 456); //  []
// // security2("ABC");

// // //  my bind

// // Function.prototype.mybind = function (obj, ...args) {
// //   // this that will be the function which is using mybind or function before dot
// //   const copyObject = { ...obj }; // deep copy
// //   copyObject.func = this;
// //   return (...arg2) => {
// //     const arg = [...args, ...arg2];
// //     return copyObject.func(arg);
// //   };
// // };

// // var security222 = securityProvider.mybind({ pet: "peti reti" }, "Tek", "pikor");

// // // security1("XYZ", 123, 456); //  []

// // security222("security222", "ABC");

// // what is the diffrenece b/w forEach and map ??
// var b = 50;

// function callMeRelax() {
//   const a = (b = c = d = e = f = 50);
//   tit = "name";
//   console.log(a, b, c, d, e, f); // 50 ,50 ,50 ,50,50,50
// }
// callMeRelax();
// console.log(tit);
// console.log(b, c, d, e, f);

// console.log(a, b, c, d, e, f); // ??

// // tit ='Tname';
// var tit = "Tname";

// // what is type coersion ??
// // what is type casting
// // what is function expression and function statement in term hositing?
// // what is scope  and scope chainign ??
// // what is lexical environment?

// // what is memoization and write the function for memoizing value ?
// const data1213 = `{} , {} , {} , {}`;
// const array12e = data1213.split();

function callMe(params, params2) {
  console.log("hery");
}

//this  => corresponding to ther ece
// global
//  local
// console.log(callMe);

// window = null;
// this = window;
// console.log(window === this);

Function.prototype.mycall = function (obj, ...args) {
  // this will be the type of function
  //  obj  = {
  //   name: "Visha;",
  // getName: function() {
  //   console.log(this); //=> object
  // }
  // };

  console.log(args); // [12, 13, 14]
  obj.func = this;
  obj.func(...args);
};

Function.prototype.myapply = function (obj, args) {
  // this will be the type of function
  //  obj  = {
  //   name: "Visha;",
  // getName: function() {
  //   console.log(this); //=> object
  // }
  // };

  console.log(args); // [12, 13, 14]
  obj.func = this;
  obj.func(...args);
};

// console.log(callMe.mycall());

const object = {
  name: "Visha;",
};

function getName() {
  console.log(this); //=> window
}

getName.mycall(object, [12, 13, 14]);
