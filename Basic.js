// First Line Code
console.log("My Firs Code in Javascript");

// My First Variable (Container)

// there is only three keyword for declaring any variable
//  let var const

// Variable decalragtion using Var

var myName = "Vishal Sharma";

var myNumber = 9915378881;

var myTechStack = [
  "ReactJs",
  "JavaScript",
  "NextJs",
  "VueJs",
  "Angular",
  "NodeJs",
  "React Native",
];
var myDetails = {
  name: "Vishal",
  lastName: "Sharma",
};

console.log(myName, myNumber);
console.log(myTechStack);
console.log(myDetails);

// Variable declaration using let

let collegeName = "LPU";
let homeTown = "Zepto";
let pincode = 208002;

console.log("Here varibales with let:: ", collegeName, homeTown, pincode);

// dynamically  type conversion

var mobile = 9915378881;

// typeof will give you the type of variable

console.log("First:: ", typeof mobile);

mobile = "9915378881";

console.log("Second:: ", typeof mobile);

mobile = {
  phone: "9915378881",
};

console.log("Third:: ", typeof mobile);

// convert number into string
console.log("toString Method::: ==========");
var myPhone = 9915378881;
console.log(typeof myPhone);
myPhone = myPhone.toString();
console.log(typeof myPhone);

// convert string to number
console.log("parseInt Method::: ==========");
var pincode1 = "208002";
console.log(typeof pincode1);
pincode1 = parseInt(pincode1);
console.log(typeof pincode1);

// convert decimal into the integer or number
console.log(parseInt(1234.555));
