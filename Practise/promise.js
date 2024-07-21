// const res=  Promise.resolve(1);

// // Promise
// // state  => Pending , fullfilled , rejected

// // Promise is nothing it one object {prototype , state , result}
// // console.log(res);


// // How to create a promise  ?? 


// const pr1 = new Promise((resolved , rejected)=>{
//  // resolved  => is the function when we calll this function promise state will fullfilled and whatever
//  // argument we pass inside this function will become the result of this promise
//  setTimeout(()=>{
//   // resolved('Hey I am successfully resolved:33000')
//   rejected('error')
  
//  }, 2000)


//  // rejected: => this is the function when we calll this function promisen state will be rejected
//  // and whatever arguments we pass inside it will be the result for rejected promise
// // rejected('Error: while writing a code') // 

//  // If do not call any of the these two function your promise will be always in pending
// });

// // pr1.then((res)=>{
// //  // this area will be executed if there is promise fullfilled case
// //  console.log(err)
// // }).catch((err)=>{
// //   // this area will be executed if there is promise rejected case
// //   console.log(err)
// // })


// function success (res) {
// //   console.log('inside success:',res)
// // }

// // function error(error) {
// //   console.log('inside error:' ,error)
// // }

// // pr1.then(success , error)
// // pr1.then((res)=>{
// //   console.log(res)
// // } , (err)=>{
// //   console.log(err)
// // })


// const pr2 = new Promise((resolved, rejected)=>{
//   resolved(2)
// })

// // const data  = pr2.then((res)=>{
// //   console.log(res) // 2
// //   return res; // 
// // })

// // console.log('data', data) // 2


// pr2.then((res)=>{
//   return res;
// }).then((res)=>{
//   return res*10
// }).then((res)=>{
//   console.log('2',res*100) // 2000
//   return res*100;
// }).catch((error)=>{
//   return 10;
// }).then((res)=>{
//    console.log('1',res/20) // 100
// })


// then().
// fetch() // promise return  

  

// async and await  
// this is use for resolving the promise

async function fetchData() {
  // fetch return the promise
//  fetch('https://dummyjson.com/products').then((res)=>{
//   // res is not in json type
//   return res.json(); // this will also return the promise
//  }).then((result)=>{
//   console.log(result) //  jab apka promise resolved
//  }).catch((error)=>{
//   console.log('api', error)
//  });

//
//  console.log('raja.....')

const data  =  await fetch('https://dummyjson.com/products');
const result  = await  data.json();
console.log(result) 
console.log('hey')

}
fetchData()





// function fetch(url) {
//   // hitting the server taking a response
//   return new Promise((resolved, rejected)=>{
//     // lets response is result
//     // status is  resStatus
//     if(resStatus ==='success') {
//       resolved(result)
//     }else {
//       rejected('Error:')
//     }
//   })
// }
  
  
  // const promiseAll = Promise.all([Promise.resolve(1),Promise.resolve(2),Promise.resolve(2),Promise.resolve(4) , Promise.reject('3')])


  // promiseAll.then((res)=>{
  //   console.log('Promise all success' , res)
  // }).catch((error)=>{
  //   console.log('Promise all: error' , error)
  // })

const promise1 = Promise.resolve('Promise 1 resolved');

const promise2 = Promise.reject('Promise 2 rejected');

const promise3 = Promise.resolve('Promise 3 resolved');

Promise.all([promise1, promise2, promise3])
.then((values) => {
 console.log('All promises resolved:', values);
}).catch((error) => {
    console.error('One of the promises rejected:', error);
});



