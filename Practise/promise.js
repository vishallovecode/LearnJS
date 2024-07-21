const res=  Promise.resolve(1);

// Promise
// state  => Pending , fullfilled , rejected

// Promise is nothing it one object {prototype , state , result}
// console.log(res);


// How to create a promise  ?? 


const pr1 = new Promise((resolved , rejected)=>{
 // resolved  => is the function when we calll this function promise state will fullfilled and whatever
 // argument we pass inside this function will become the result of this promise
 setTimeout(()=>{
  resolved('Hey I am successfully resolved:33000')
 }, 2000)


 // rejected: => this is the function when we calll this function promisen state will be rejected
 // and whatever arguments we pass inside it will be the result for rejected promise
// rejected('Error: while writing a code') // 

 // If do not call any of the these two function your promise will be always in pending
});







pr1.then((res)=>{
 // this area will be executed if there is promise fullfilled case
 console.log(res)
}).catch((err)=>{
  // this area will be executed if there is promise rejected case
  console.log(err)
})




