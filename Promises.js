
// let promise  = new Promise((resolved , reject)) {
//     if(true) {
//         resolved()
//     } else {
//         reject()
//     }
// }

let data  = 300;
let promise1  = new Promise(function(resolved , reject){
             if(data>200) {
                resolved("SuccessFully Resolved"); // callback functio 
             }   else { 
                reject("Rejected123") // callback function
             }
})
let promise  = new Promise((resolved , reject)=>{
    if(data>400) {
        resolved("SuccessFully Resolved");
     }   else {
        reject("Rejected123")
     }
})

// // promise chaining 
promise.then((res)=>{
    // resolved data
    console.log(res);
}).catch((error)=>{
 // rejected
 console.log(error)
}).finally(()=>{
    // in both case pointer will come to this point
    console.log("Promise")
})

promise1.then((res)=>{
    // resolved data
    console.log(res);
}).catch((error)=>{
 // rejected
 console.log(error)
}).finally(()=>{
    // in both case pointer will come to this point
    console.log("Promise1")
})




promise.then(function success(res){
console.log(res)
} , function failure(error){
    console.log(error)
})

promise1.then(function success(res){
    console.log(res)
    } , function failure(error){
        console.log(error)
    })
    

    // write down .error using then only

    promise.then(null, (error)=>{
        console.log(error)
    })


    // basic => deep dive  
    // fetch  =>
    // async await 
