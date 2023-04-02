// JSON Parse , Json Stringify 
const data = {
    name: "Tim Tom",
    lastName : "chin Chon"
}
// Object is JSON  // temporarily 
// Json Stringify 
const dataString =  JSON.stringify(data);
// console.log("data Type is: => " , typeof dataString) ;
const stringToJson =  JSON.parse(dataString)
// console.log(dataString.name);
// console.log(stringToJson.name);
// INSIDE THE PARSE METHOD  ARGUMENTS SHOULD BE JSON FORMAT BUT TYPE SHOULD BE STRING 
//
// HANDLING THE ERROR 
 try {
    const data1 = "hello";
    // console.log("Line no :35" ,JSON.parse(dataString));
 } 
 catch(ERROR) {
    console.log("Hey I am handling the error here this part is used for handling error occurred in try block ")
 }
//  console.log(data1)
//  console.log(JSON.parse("hELLO"));
// JS DOES NOT THROW THE ERROR IN COMPILATION TIME OR MEMRORY ALLOCATION TIME BEACAUSE JAVASCRIPT IS JIT (just in compiler type)
// Json stringify 

// const data1234 =  '{"name": "VISHAL"}';
// console.log(JSON.parse(data1234))

// local storage  this is not the javascript storage this is the storage related the browser 
// if we want to store some data in browser than we should go with  browser storage api 
// browser storage api are  local Storage  , session Storage ,cookies 
// 
// userDetails 
const user = {
    name: "TIM TOM" ,
    lastName: "chin chon"
}

const userString = JSON.stringify (user);
localStorage.setItem("userDetails" , userString);
// getting access of local storage  (getItem(key))
const userDetails123 = localStorage.getItem('userDetails'); // string
const louser = JSON.parse( userDetails123)
console.log(userDetails123.name);
console.log(typeof userDetails123);
console.log(typeof louser);
console.log(louser.name)


// JSON VS JAVASCRIPT 


// JSON => JAVASCRIPT OBJECT NOTATION 


const checkJson =  {
    "name": "Hello",
     "mobile": 12
}

console.log( checkJson.name)


const checkJson1 = {
    name: "Hello",
    mobile: 12
}
    // json can be used as object but object cannot used as json


// JSON IS USED IN ALL PROGRAMMING (REST API BACKEND SERVER)


























 var employeeId = 'abc123';
function foo(){
	employeeId = '123bcd';
    console.log("Emplyee" , employeeId)
	return;
}
foo();
console.log(employeeId); // abc123


var employeeId = 'abc123';
foo();
function foo() {
	employeeId = '123bcd1';
    function employeeId() {}
    console.log(employeeId , 'hey') //  local scope for the function foo 
    // foo context we can get the updated value of the employeeId
}

console.log(employeeId);   'abc123'


// when you declare the variable and function with 
// same  name than precedence of fuction will be high 
// this all thing will be  happen at the time of compilation not  at the runtime.

 var func = 1234;

function func  () {
       func  = 123456;
       console.log(func)
}

console.log('func' , func)






// enumerating properties 


const obj = { 
    a:123 ,
    b: 3456,
    c: 678
}


console.log(Object.keys(obj))
console.log(Object.values(obj))


for( const  key in obj) {
     console.log(key)
}


console.log(Object.entries(obj));
 
// [
//  [a ,  123] , 
//  [b, 3456],
//  [c , 678]
// ]

  

 


