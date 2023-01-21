// Promise.all

const promise1  =  Promise.resolve("Hey i am resolved");
const promise2 =  Promise.resolve("Hey i am 11¯ß¯¯")
const promise3 =   Promise.resolve("Done!!!");
// const promise4 =   Promise.reject("Rejected!!!");

// const promiseAll = Promise.all([promise1 , promise2 , promise3]); 
// console.log(promiseAll)
// promiseAll.then((res)=>{
//     console.log(res); 
// }).catch(error => {
//     console.log("error::" , error)
// })


// Prmoise.all() => this will give all the result if all the promises is fullfilled if any of the promise is rejected it will give that as result in error section




// Promise.any
// First result fullfilled

// const promiseAny = Promise.any([promise1 , promise2  , promise3 ]); 

// promiseAny.then((res)=>{
//     console.log(res); 
// }).catch(error => {
//     console.log("error::" , error)
// })


 const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Resolved after 1000 ms");
    } , 1000)
 })

 const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Resolved after 2000 ms");
    } , 2000)
 })

 const p1r = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("reject after 1000 ms");
    } , 1000)
 })

 const pr = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("reject after 2000 ms");
    } , 2000)
 })

//  const promiseAny1 = Promise.any([p1 , p2  , p1r , pr ]); 

//  promiseAny1.then((res)=>{
//     console.log(res); 
// }).catch(error => {
//     console.log("error::" , error)
// })


// Promise.race   => the promise which is settled  it does not care about if output is rejected or fullfilled

const promiseRace = Promise.race([p1 , p2  , p1r , pr ]); 

promiseRace.then((res)=>{
    console.log(res); 
}).catch(error => {
    console.log("error::" , error)
})



// const promiseAllSettled =  Promise.allSettled([p1 , p2  , p1r , pr ]); 
// promiseAllSettled.then((res)=>{
//     console.log(res); 
// }).catch(error => {
//     console.log("error::" , error)
// })







