// // Promise.all

// const promise1 = Promise.resolve("Hey i am resolved");
// const promise2 = Promise.resolve("Hey i am 11¯ß¯¯");
// const promise3 = Promise.resolve("Done!!!");
// // const promise4 =   Promise.reject("Rejected!!!");

// // const promiseAll = Promise.all([promise1 , promise2 , promise3]);
// // console.log(promiseAll)
// // promiseAll.then((res)=>{
// //     console.log(res);
// // }).catch(error => {
// //     console.log("error::" , error)
// // })

// // Prmoise.all() => this will give all the result if all the promises is fullfilled if any of the promise is rejected it will give that as result in error section

// // Promise.any
// // First result fullfilled

// // // const promiseAny = Promise.any([promise1 , promise2  , promise3 ]);

// // // promiseAny.then((res)=>{
// // //     console.log(res);
// // // }).catch(error => {
// // //     console.log("error::" , error)
// // // })

// //  const p1 = new Promise((resolve,reject)=>{
// //     setTimeout(()=>{
// //         reject("Resolved after 1000 ms");
// //     } , 1000)
// //  })

// //  const p2 = new Promise((resolve,reject)=>{
// //     setTimeout(()=>{
// //         resolve("Resolved after 2000 ms");
// //     } , 2000)
// //  })

// //  const p1r = new Promise((resolve,reject)=>{
// //     setTimeout(()=>{
// //         resolve("reject after 1000 ms");
// //     } , 1000)
// //  })

// //  const pr = new Promise((resolve,reject)=>{
// //     setTimeout(()=>{
// //         resolve("reject after 2000 ms");
// //     } , 2000)
// //  })

// //  const promiseAny1 = Promise.any([p1 , p2  , p1r , pr ]);

// //  promiseAny1.then((res)=>{
// //     console.log(res);
// // }).catch(error => {
// //     console.log("error::" , error)
// // })

// // Promise.race   => the promise which is settled  it does not care about if output is rejected or fullfilled

// // const promiseRace = Promise.race([p1 , p2  , p1r , pr ]);

// // promiseRace.then((res)=>{
// //     console.log(res);
// // }).catch(error => {
// //     console.log("error::" , error)
// // })

// // const promiseAllSettled = Promise.allSettled([p1, p2, p1r, pr]);
// // promiseAllSettled
// //   .then((res) => {
// //     console.log(res);
// //   })
// //   .catch((error) => {
// //     console.log("error::", error);
// //   });

// // create your own promise.all
// // create the polyfill for the promise.all

// // function promiseallpolyfill(items){

// //     const ans=[]

// //     let promisecomplete=0;

// //     return new Promise((resolve,reject)=>{

// //     items.forEach((promise,index) => {

// //     promise.then((val)=>{

// //     ans[index]=val

// //     promisecomplete+=1

// //     if(promisecomplete===items.length){

// //     resolve(ans)

// //     }

// //     })

// //     .catch(error=>{

// //     reject(error)

// //     })

// // const promise11  =  Promise.resolve("Hey i am resolved");
// // const promise22 =  Promise.resolve("Hey i am 11¯ß¯¯")
// // const promise33 =   Promise.resolve("Done!!!");
// // // const promise44 =   Promise.reject("Rejected=>>>>!!!");

// // Promise.myPromiseAll = (promises)=>{
// //     let result = [];
// //     return new Promise((resolved ,rejected)=> {
// //         promises.forEach((promise , index) => {
// //             if(promise && typeof promise?.then == 'function') {
// //             promise.then(res=>{
// //                 result[index] = res;
// //                 if(index== promises.length-1) {
// //                     resolved(result);
// //                 }
// //             }).catch(error => {

// //                 rejected(error);
// //             })
// //         } else {
// //             result[index] = promise;
// //             if(index== promises.length-1) {
// //                 resolved(result);
// //             }

// //         }
// //         });
// //     })
// // }

// // Promise.myPromiseAll([promise11 , promise22 ,promise33  , '12345']).then(res=> {
// // console.log(res , '==>')
// // }).catch(error => {
// //     console.log(error)
// // })

// // promise or not

// // Promise.myRace = (promises)=>{
// //     return new Promise((resolved ,rejected)=> {
// //         promises.forEach((promise , index) => {
// //             if(promise && typeof promise?.then == 'function') {
// //             promise.then(resolved, rejected);
// //         }  else {
// //             Promise.resolve(promise).then(resolved , rejected);
// //         }
// //         });
// //     })
// // }

// // const promiseMyRace = Promise.myRace([p1 , p2  , p1r , pr , '1224' ]);
// // promiseMyRace.then((res)=> {
// //     console.log(res)
// // }).catch((err) =>{
// //     console.log(err)
// // })

const p1r = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Resolved after 1000 ms");
  }, 1000);
});
const p2r = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Resolved after 2000 ms");
  }, 2000);
});
const p1s = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("reject after 1000 ms");
  }, 1000);
});
const ps = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("reject after 2000 ms");
  }, 2000);
});

// const data = Promise.all(["Hey", "How Are you?", "123", 0, p1r, p1, p2])
//   .then((res) => {
//     console.log("res", res);
//   })
//   .catch((error) => {
//     console.log("error1", error);
//   });

// console.log(data);

// data
//   .then((res) => {
//     console.log("res", res); // undefined
//   })
//   .catch((error) => {
//     console.log("error3", error);
//   });

// Promise.all([p1r, p2, p1]).then((res) => {
//   console.log(res);
// });

// Promise.all(["somedata", p1]).then(
//   (res2) => {
//     console.log(res2); //
//     return res2;
//   },
//   (res1) => {
//     console.log("res2222", res1);
//   }
// );

// function AsyncHandler() {
//   return new Promise((resolved, reject) => {
//     setTimeout(() => {
//       resolved(4);
//       console.log("hey");
//     }, 1000);
//   });
// }

// console.log("hey", AsyncHandler()); //

// const promiseAllSettled1 = Promise.all([p1r, p2r, p1s, ps]);

// promiseAllSettled1
//   .then((res) => {
//     console.log("all::", res);
//   })
//   .catch((error) => {
//     console.log("error::::", error);
//   });

// const promiseAllSettled3 = Promise.allSettled([p1r, p2r, p1s, ps]);

// promiseAllSettled3
//   .then((res) => {
//     console.log("all::", res);
//   })
//   .catch((error) => {
//     console.log("error::::", error);
//   });

// Write your own promiseAll ??

const promiseallpolyfill = (promises) => {
  let result = [];
  let count = 0;
  return new Promise((resolved, rejected) => {
    promises.forEach((promise) => {
      if (promise && typeof promise?.then == "function") {
        promise
          .then((res) => {
            count++;
            result.push(res);
            if (count == promises.length) {
              resolved(result);
            }
          })
          .catch((error) => {
            result.push(error);
          });
      }
    });
  });
};
// promiseallpolyfill([p1r, ps])
//   .then((res) => {
//     console.log("res", res);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });

promiseallpolyfill([p1s, ps, "hey"])
  .then((res) => {
    console.log("res", res);
  })
  .catch((error) => {
    console.log("error", error);
  });

// promise chaining
// some of questions on promise
// async and await why and when  ??
// will  create own function for allStelled , any , race
// Assignment
