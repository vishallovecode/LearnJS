

// Polyfill for bind?


function callMe (s , s1 , s3) {
    console.log(s , s1 , s3)
    console.log(this.name , ' ' ,this.lastName)
}

// thousand of the object
const objet1 = {
    name:"Adam" , 
    lastName: "Gilkhrist"
}
const objet2 = {
    name:"Vishal" , 
    lastName: "Sharma"
}

// const bindFunc  = callMe.bind(objet1 , 'you...');
// bindFunc('hello' , 'ye')


//mybind ??


 Function.prototype.mycall =  function(obj , ...args) {
    // this ??=> calling function
    obj.callFunc = this;
    obj.callFunc(...args)
 }

 Function.prototype.myApply =  function(obj , args) {
    // this ??=> calling function
    obj.callFunc = this;
    obj.callFunc(...args)
 }
Function.prototype.myBind = function(object , ...args) {
 let func =  this; // func reference  
    return function(...arg1) {
        // func.myApply(object , [...args , ...arg1]);
        func.mycall(object ,  [...args , ...arg1])
    }
}
const myBindFunc =  callMe.myBind(objet1 , 'array1' , 'array2');
myBindFunc('array3');


// const object = {};
//  object.func = function () {
//     console.log(this.name , this.lastName)
//  }
//  object.name  = "Dhoni"
//  object.lastName = "Singh"


//  object.func();

// polyfill apply ??







