

// let employee = {
//     name: "Vishal",
//     printName() {
//         console.log("Hey, " +   this.name)
//     }
// }

// employee.printName(); //  Hey , Vishal


// Settimeout 
// setTimeout(callbackfunc , delay); // browser browser api // first parameter is callback function and second paratemeter is delay .

// after given delay execute or invoke the callback function 
// delay is always in milisecond 

// const callbackfunc = ()=>{
//     console.log("Run after sometime");
//     } 


    // const ref =  callbackfunc;
    // ref();
// setTimeout(callbackfunc ,  5000)


console.log("THIS IS BEFORE THE SETIMEOUT");

// setTimeout(()=>{
//     console.log("Run after time")
// }, 10000)

// console.log("THIS IS AFTER THE SETIMEOUT")
 
// setInterval(()=>{
// console.log("hey", i++)
// } , 5000)  // every 5 second code is executinv


// arrow  anoymous function function


// second =  millisecond/1000;



// for( let i=0;i<5;i++) {
//    console.log(i);   //  =>  0 1 2 3 4
// setTimeout(()=>{
// console.log(i); // 0 1 2 3 4
// } , 1000)
// }

// i= 0;  context setimeout 




// for( var k = 0;k<4;k++) {
//     function xyz(k) {
//         setTimeout(()=>{
//             console.log(k);   //0 1 2 3 4 
//             } , 0)
//     }
//    xyz(k); 
//     }


    // event loop , async javascript , promises


    

    // ()=>{
    //     console.log(k);   //0 1 2 3 4   => context1 context2 context3 context4 
    //     }

// function callbackFunc () {
//     console.log("Hye")
// }

//     // setTimeout(callbackFunc , 1000);
//     // setTimeout(()=>{
//     //     console.log("Hye")
//     // } , 1000)
// // setTimeout(function () {
// // console.log('hey')
// // } , 1000)

// setTimeout(function callMe () {
//     console.log('hey')
// } , 1000)

// let checkMe;
//  setTimeout( checkMe =()=>{
// console.log("hYE I AM NZCHJB")
// } , 1000)

// let count  = 1;
// if(count==5) {
//     clearInterval(timer)
// }
//  let timer = setInterval(()=>{
// console.log("Hey 1000ms=>" , count)
// // if(count==5) {
// //     clearInterval(timer)
// // }
// count++;

// } , 1000)


// if(count==5) {
//     clearInterval(timer)
// }



let timer1 =setInterval(callMe1, 1000);
function callMe1 (){
    console.log(timer1)
    clearTimeout(timer1);
console.log("Hey11243");
}





 
    