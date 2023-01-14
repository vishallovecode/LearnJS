 
// // let promise  = new Promise((resolved , reject)) {
// //     if(true) {
// //         resolved()
// //     } else {
// //         reject()
// //     }
// // }

// let data  = 300;
// let promise1  = new Promise(function(resolved , reject){
//     console.log(typeof  resolved)
//              if(data>200) {
//                 resolved("SuccessFully Resolved"); // callback functio 
//              }   else { 
//                 reject("Rejected123") // callback function
//              }
// })
// let promise  = new Promise((resolved , reject)=>{
//     if(data>400) {
//         resolved("SuccessFully Resolved");
//      }   else {
//         reject("Rejected123")
//      }
// })

// // // promise chaining 
// promise.then((res)=>{
//     // resolved data
//     console.log(res);
// }).catch((error)=>{
//  // rejected
//  console.log(error)
// }).finally(()=>{
//     // in both case pointer will come to this point
//     console.log("Promise")
// })

// promise1.then((res)=>{
//     // resolved data
//     console.log(res);
// }).catch((error)=>{
//  // rejected
//  console.log(error)
// }).finally(()=>{
//     // in both case pointer will come to this point
//     console.log("Promise1")
// })




// promise.then(function success(res){
// console.log(res)
// } , function failure(error){
//     console.log(error)
// })

// promise1.then(function success(res){
//     console.log(res)
//     } , function failure(error){
//         console.log(error)
//     })
    

//     // write down .error using then only

//     promise.then(null, (error)=>{
//         console.log(error)
//     })


//     // basic => deep dive  
//     // fetch  =>
//     // async await 




// task
function AsyncHandler  () {
    return new Promise((resolved, reject)=>{
        setTimeout(()=>{
        resolved(4)
        }, 1000);
    })
}


console.log(AsyncHandler());

const success = (res)=> {
    console.log(res)
}
const failure = (res)=> {
    console.log(res)
}

// AsyncHandler().then(success).catch((error)=>{
//     console.log(error)
// }) 

// AsyncHandler().then((res)=>{
//     console.log(res)
//     return res*4;
// }).then((res1)=>{
// console.log(res1)
// return res1*10;
// }).then((res2)=>{
//     console.log(res2);
//     return "Asycn Programming End"
// }).then((s)=>{
// console.log(s)
// })



// AsyncHandler().then((res)=>{
//     console.log("%cFirst then data::" , 'color: red;  font-size:14px' , res)
// return new Promise((resolved, reject)=>{
//     setTimeout(()=>{
//         resolved(res*10);
//     }, 1000)
// })
// }).then((res1)=>{
//     console.log("%c Second then data::" , 'color: yellow;  font-size:14px ; font-weight:bold' , res1)
// })


// AsyncHandler().then((res)=>{
//     console.log("%cFirst then data::" , 'color: red;  font-size:14px' , res)
// return new Promise((resolved, reject)=>{
//     setTimeout(()=>{
//        reject("I am rejected")
//     }, 1000)
// })
// }).then((res1)=>{
//     console.log("%c Second then data::" , 'color: yellow;  font-size:14px ; font-weight:bold' , res1)
// }).catch((error)=>{
//     console.log("%c Second Error data::" , 'color: yellow;  font-size:14px ; font-weight:bold' , error)
//     return 100;
// }).then((res3)=>{
//     console.log("%c Third then data::" , 'color: yellow;  font-size:14px ; font-weight:bold' , res3)
// }).catch((error)=>{
//     console.log("%c Third Error data::" , 'color: yellow;  font-size:14px ; font-weight:bold' , error)
// })

// consuming
// producing
let timer ;
AsyncHandler().then((res)=>{
    console.log("%cFirst then data::" , 'color: red;  font-size:14px' , res)
    
return new Promise((resolved, reject)=>{
    timer =  setTimeout(()=>{
       reject("I am rejected")
    }, 1000)
})
}).then((res1)=>{
    console.log("%c Second then data::" , 'color: yellow;  font-size:14px ; font-weight:bold' , res1)
}).catch((error)=>{
    console.log("%c Second Error data::" , 'color: yellow;  font-size:14px ; font-weight:bold' , error)
    throw("Error")
}).then((res3)=>{
    console.log("%c Third then data::" , 'color: yellow;  font-size:14px ; font-weight:bold' , res3)
}).catch((error)=>{
    console.log("%c Third Error data::" , 'color: yellow;  font-size:14px ; font-weight:bold' , error)
}).finally(()=>{
clearTimeout(timer)
console.log("%c Final2" , 'color: yellow;  font-size:14px ; font-weight:bold' )
}).finally(()=>{
    console.log("%c Final21223" , 'color: yellow;  font-size:14px ; font-weight:bold' )
})

// throw  some thing wrong

// What does finally does and why we used finally in promise chaining


// Practise => 1


let getUser = new Promise(function(resolve, reject) {
    const user = { 
        name: 'John Doe', 
        email: 'jdoe@email.com', 
        permissions: [ 'db', 'hr', 'dev']
    };
    resolve(user);
});

getUser
.then(function(user) {
    console.log(`Got user ${user.name}`);
   
    if(user.permissions.includes('hr')){
        throw new Error('You are not allowed to access the HR module.');
    }
         return user.email;
})
.then(function(email) {
    console.log(`User email is ${email}`);
})
.catch(function(error) {
    console.error(error)
});



let promise = new Promise(function (resolve, reject) {
    resolve(10);
  });
  
  promise.then(function (value) {
    value++;
    console.log(value);
    return value;
  });

  promise.then(function (value) {
    value = value + 10;
    console.log(value);
    return value;
  });

  promise.then(function (value) {
    value = value + 20;
    console.log(value); 
    return value;
  });





  
