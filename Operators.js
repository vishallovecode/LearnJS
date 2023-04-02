// In Javascript all the operators behavious is same as the Java Operators

// Arithmetic Operators

// plus operator
const a = 20;
const b = 30;
const c = a + b;

// Minus Operator
// Multiplication Operator
// Divide operators
// % Operators
// Post Increment
// Pre Incerement Operators
// Ternary operators
//  Logical operators

// Assign Ment Operator
//  == and  ===

// if you want to compare the value then  ==  operator will give true output if value are same

var foo = "foo";
var number = 123;

if (foo == number) {
  console.log("The value are  equal");
} else {
  console.log("The value are  not equal");
}

var name2 = "vishal";
var name1 = "Vishal";
if (name2 == name1) {
  console.log("The value are  equal");
} else {
  console.log("The value are  not equal");
}

var name2 = "vishal";
var name1 = "vishal";
if (name2 == name1) {
  console.log("The value are  equal");
} else {
  console.log("The value are  not equal");
}

const number2 = 123;
const number1 = 123;
if (number2 == number1) {
  console.log("The value are  equal");
} else {
  console.log("The value are  not equal");
}

//  ===
// if the value and the datatype are same then the result of this will be true else false

const number4 = 123; // data type is number
const number3 = "123"; // datatype is string
if (number3 == number4) {
  console.log("The value are  equal ");
} else {
  console.log("The value are  not equal");
}

if (number3 === number4) {
  console.log("The value are  equal ");
} else {
  console.log("The value are  not equal");
}

// Logical Opertor

const data1 = "123";
const data2 = "1231";
const data3 = 1234;
const data4 = {};
const data5 = [];
const data6 = 0;
const data7 = "";
const data8 = true;

if (data1 && data2) {
  console.log("Hey i am true");
}
if (data1 && data7) {
  console.log("Hey i am true");
} else {
  console.log("Hey i am  not true");
}

if (data1 && data7) {
  console.log("Hey i am true");
} else {
  console.log("Hey i am  not true");
}

if (data1 && data6) {
  console.log("Hey i am true");
} else {
  console.log("Hey i am  not true");
}

if (data5) {
  console.log("I am true");
}

// control structure
// for loop

// for (let i = 0; i < 100; i++) {
//   console.log(i);
// }
// let k = 0;

// while (k < 100) {
//   console.log(k);
//   k++;
// }

// Basic Functions

// normal functions
function printValue() {
  console.log("I normal and old stylish functions");
}

// arrow functions
const callMe = () => {
  console.log("Hey i am very stylish and arrow functions");
};

function calculateTax(salary, corporateTax, freeLancing, businessTax) {
  let totalSalary = 0;
  console.log(salary, corporateTax, freeLancing, businessTax);
  const corporateTaxValue = (salary * corporateTax) / 100;
  const businessTaxValue = (freeLancing * businessTax) / 100;
  const totalTax = businessTaxValue + corporateTaxValue;
  totalSalary = salary + freeLancing - totalTax;
  return totalSalary;
}

const salary = calculateTax(200000, 30, 490000, 20);
console.log("My Salary is: ", salary);

// NAN  => Not A number if you will try to do arithmetic operations in another datatype except number  this eroor will come
// There one functions  to check whether given output is Nan or not  that functions is isNaN()

console.log(isNaN(123)); // false
console.log(isNaN(123 + undefined)); // false

// Type coersion
// explicitly , implicitly

//dynamically converting one type into another type is called the type coersion

// explicit  => type casting => it is done by the developer

// conversion  => to string , to boolean  and to Number

// to string

const data = String(123);

const datab = Boolean(123); // true
const datab1 = Boolean(0); // false
const datab3 = Number("123");

// !"vishal" => false
// "vishal" &&  "name" =>  boolean  => true

// parseInt
// parseFloat
//
