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
























