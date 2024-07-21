// // Hoisting
// // Closure 
// // Currying
// // Map
// // Promise (Async Programming event loop) , fetch
// // Prototype


// // var a=30;
// // console.log(a)
// // let b=90;
// // console.log(b)

// // // node install 
// // // in global system



// // console.log(a)
// // var a=60;



// // console.log(b)

// // let b=30;


// //In javascript hoisting is creating a memory or assigning a memory for the variable let var and cosnt and function as well
// // Due to hoisting var variable and normal function can access before declaration , or we can say they are accessible top of it declaration
// // So we can say all variable are hoisted like let var , const and function , var and function are accessible befoe declaration
// // let and const are not accessible before declaration because they are in tdz for that time.

// // call()

// // function call (){
// //   console.log("Hey chill")
// // }




// let d =40;

// var c=90;

// function printName(){
//   let name = 'Vishal'
//   let lastName= "Sharma"
//   console.log(c)
//   console.log(name , lastName)
// }


// printName();


// console.log(d)



function outer(){
  let r =40;
  var g =90;
   function inner() {
    console.log(r,g)
    return  function  pp() {
        console.log(r,g)
    }
  }
}


const func  = outer();

func();

// What is hoisting ,
// Lexical scope
// Global execution context
// Function execution context 
// Local Scope
// Global scope
// Callstack