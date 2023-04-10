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

// constant in javascript

// If you want to declare any variable as constant there is keyword called const for declaring the varaible

const name1 = "Vishal";
name1 = "Vishal"; //  this will throw error because you cannot reaasign the const variable



// New Code




console.log("Hey will do later..."); 
console.log("Hey I am learning Js");
console.log("Requesting  evryone to code parallel")


 var abc = 'CHIM CHOM';
 var abc1 = 'Chim Chom2';

 console.log(abc);

 console.log(abc1);

 var mult1= 'maze me';


 var multi2 = "funny ha ";


 console.log(mult1 , multi2);


 // console  value and variable sath me  

 console.log("Hey your name is ::" ,  abc , "," , 'Hey updated name is::' , abc1);



 // typeof 

  console.log( "Data type of multi2 is::"  ,typeof multi2 , 'data type of multi1::' , typeof mult1) //  string





  var a = 20;
  var b= 30;

  console.log(40)
  console.log(a , b)

  console.log(typeof a , typeof b)

  console.log(typeof -1)

  var c = a+b;
console.log(typeof c)

console.log(1/0); // Infinity  => NaN isNaN();
console.log(typeof 1/0);  // => NAN

console.log(typeof Infinity , 'hey')    //number

// Primitive Datatype
//  string , number , boolean  , undefined  , null  ,  ,     =>>> Symbol ,BigInt ()

console.log(typeof Boolean); // Function
console.log(typeof Number); // // Function
console.log(typeof String); //// Function


var dataType =  typeof 'hello'; // string

console.log(typeof dataType)


console.log(typeof undefined) // undefined

console.log(typeof null) 

 var checked = true; // booolean

 console.log( typeof typeof checked)



 checked = "Hey I am converted"; // strinf

console.log('newtype' ,typeof checked)


checked = 1234;

console.log(typeof checked);

checked = ()=> {
    console.log("yeee");
}


console.log(typeof checked);



lastName = "Hello";
console.log(lastName)
 







// isNaN() => THIS FUNCTION 


var p = "1234"; // typeof p => string;

var pp = 'hey'
var t = Number('p');

var tt = Number(pp)
console.log(t ,'hey');
console.log(typeof NaN)
console.log(typeof tt);


console.log(typeof  +'12345') ; // shorthan way to convert number string to number


var isNumber = isNaN('123456'); // FALSE

var isNumber2 = isNaN('hello'); // TRUE


console.log(isNumber)
console.log(isNumber2)






