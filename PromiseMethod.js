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

// const promiseRace = Promise.race([p1 , p2  , p1r , pr ]); 

// promiseRace.then((res)=>{
//     console.log(res); 
// }).catch(error => {
//     console.log("error::" , error)
// })



// const promiseAllSettled =  Promise.allSettled([p1 , p2  , p1r , pr ]); 
// promiseAllSettled.then((res)=>{
//     console.log(res); 
// }).catch(error => {
//     console.log("error::" , error)
// })



// create your own promise.all 
// create the polyfill for the promise.all





// function promiseallpolyfill(items){

//     const ans=[]
    
//     let promisecomplete=0;
    
//     return new Promise((resolve,reject)=>{
    
//     items.forEach((promise,index) => {
    
//     promise.then((val)=>{
    
//     ans[index]=val
    
//     promisecomplete+=1
    
//     if(promisecomplete===items.length){
    
//     resolve(ans)
    
//     }
    
//     })
    
//     .catch(error=>{
    
//     reject(error)
    
//     })



// const promise11  =  Promise.resolve("Hey i am resolved");
// const promise22 =  Promise.resolve("Hey i am 11¯ß¯¯")
// const promise33 =   Promise.resolve("Done!!!");
// // const promise44 =   Promise.reject("Rejected=>>>>!!!");

// Promise.myPromiseAll = (promises)=>{
//     let result = [];
//     return new Promise((resolved ,rejected)=> {
//         promises.forEach((promise , index) => {
//             if(promise && typeof promise?.then == 'function') {
//             promise.then(res=>{
//                 result[index] = res;
//                 if(index== promises.length-1) {
//                     resolved(result);
//                 }
//             }).catch(error => {

//                 rejected(error);
//             })
//         } else {
//             result[index] = promise;
//             if(index== promises.length-1) {
//                 resolved(result);
//             }

//         }
//         });
//     })
// }

// Promise.myPromiseAll([promise11 , promise22 ,promise33  , '12345']).then(res=> {
// console.log(res , '==>')
// }).catch(error => {
//     console.log(error)
// })

// promise or not 

Promise.myRace = (promises)=>{
    return new Promise((resolved ,rejected)=> {
        promises.forEach((promise , index) => {
            if(promise && typeof promise?.then == 'function') { 
            promise.then(resolved, rejected);
        }  else {
            Promise.resolve(promise).then(resolved , rejected); 
        }
        });
    })
}

const promiseMyRace = Promise.myRace([p1 , p2  , p1r , pr , '1224' ]); 
promiseMyRace.then((res)=> {
    console.log(res)
}).catch((err) =>{
    console.log(err)
})
