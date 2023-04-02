// Hoisting of functions will be not covered here
// function printValue() {
//   console.log("I normal and old stylish functions");
// }

// // arrow functions
// const callMe = () => {
//   console.log("Hey i am very stylish and arrow functions");
// };

// function calculateTax(salary, corporateTax, freeLancing, businessTax) {
//   let totalSalary = 0;
//   console.log(salary, corporateTax, freeLancing, businessTax);
//   const corporateTaxValue = (salary * corporateTax) / 100;
//   const businessTaxValue = (freeLancing * businessTax) / 100;
//   const totalTax = businessTaxValue + corporateTaxValue;
//   totalSalary = salary + freeLancing - totalTax;
//   return totalSalary;
// }

// const salary = calculateTax(200000, 30, 490000, 20);
// console.log(salary);

let name = "Joe";
const university = "manchester";

function printInfo(info) {
  // variable shadowing
  var name = "Hey I am done!!!";
  console.log(name, info, university);
  // functional scope
}

printInfo("hey we are learning functions in deep dive");

// Global object means window
// all the const and let variable will be inside the script tag

{
  // block-level scope
}
for (let i = 0; i < 100; i++) {
  // block-level-scope
}

if (true) {
  // block-level-scope
}

// var is functional scopr variable
// let and const is block-scope variable

// defaul parameters
const defaulCheck = (message = "Hey User Welcome to our platform") => {
  console.log(message); // Hey User Welcome to our platform
};

defaulCheck();

const checkValidation = (check) => {
  if (check) {
    return true;
    // return;
    // you can return without value
  } else {
    return "Validation error";
  }
};

console.log(checkValidation(true)); //Validation error

const interViewQues = () => {
  console.log("hey");
};

console.log(interViewQues());

// always if you not pass anything return statement in the functions it will return the undefined
// if you return empty return type that will also return the  undefined
// do not add new line after return

// const jsReturn  = () => {
//     return
//     "vishal";
// }

const jsRetur = () => {
  return "hey" + 1234 + "1224" + "tiktikre";
};

// pass function as parameter

const addThreeNumber = (callbackfunc, a, b, c) => {
  return callbackfunc(a, b) + c;
};

const add = (a, b) => {
  return a + b;
};

let checkdata = addThreeNumber(add, 12, 34, 43);
console.log(checkdata);

const sum = add;
const data = sum(12, 34);
console.log(data);

// you can also return the function from the functions
// higher order functions => functions  which return functions is called hoc
const hoc = () => {
  return (a, b) => {
    return a * b;
  };
};

// anonymous function the function which have not name

const callhoc = hoc();
const mul = callhoc(45, 70);
console.log(mul);

// iife immediately invoked functions
(function callmeIme() {
  console.log(" i called while declaring");
})();

//  function statement or declaration  and expression

function decalragtion() {}

// function expression
const expression = () => {};
