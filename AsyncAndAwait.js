
// // we use both keyword simultaneoulsy 
// // means withour using async you cannot use await
// // using async keyword we can make function as asynchronous function 
// // the functon which is using  the async keywoord that will always return the promises
// // we can avoid promises chaining with the async and await combination (somehow)


// const fetchPost = async ()=> {
// return 0;
// }

// // console.log( 'fetchPost' ,fetchPost())

// async function fetchData2 (){
// return 1
// }

// // console.log('fetchData2' ,fetchData2())

// // fetchData2().then((res1)=>{
// //     console.log('fetchData2' , res1)
// // })


// // const resolvedData= async()=> {
// //     const data  =  await fetchData2();
// //     console.log("Await inside" , data)
// //     return data;
// // }
// // // resolvedData();
// // console.log(resolvedData())

// const resolvedMe = async () => {
//     const data  = await   new Promise((resolved , reject)=> {
//         setTimeout(()=>{
//             console.log("hey i am here")
//             resolved("Hye data is fine")
//         }, 10000)
//     })
//     console.log('data' , data)
// }
// resolvedMe();
// const fetchPostData  = async()=> {
//     console.log("started api call")
//     const res =  await fetch('https://jsonplaceholder.typicode.com/posts');
//     const posts = await res.json();
//     console.log(posts ,"end api call")
// }
// fetchPostData();

//  1. 
// console.log("HGey")
// const data = Promise.reject("Hey i am rejected"); //
// console.log(data) //Promise {<rejected>: 'Hey i am rejected'}

// data.then(res=>{
// console.log(res) //  if resolved will come here
// }).catch(error=>{
// console.log(error) // 'Hey i am rejected'
// })

// 2.
// async function getData() {
//     console.log(await  Promise.resolve('I made it!')) // I made it. 
//     return await Promise.resolve('I made it!');
// }
// const data = getData();
// console.log(data);   //Promise {<pending>}


// 3.
// const myPromise = () => Promise.resolve('I have resolved!');

// function firstFunction() {
//     myPromise().then(res => console.log('1', res)); // async
//     console.log('second'); // sync  second =>1
// }

// async function secondFunction() {
//     console.log(await myPromise());
//     console.log('second1');
// }

// firstFunction();
// secondFunction();

// sequence of output
// 1. second ,
// 2. 1  I have resolved
// 3. I have esolved
// 4.  second1


// 4.
// Promise.resolve(5);

// 5.
// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log("Will i print")
// })

// console.log('end');

//  1. start
// 2 .will i print
// 3. end





// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve(2)
//   console.log(4)
// })

// const callbackfunc = (res)=> {
//     console.log(res)
//     console.log(14)
// }
// promise1.then(callbackfunc);

// console.log('end');

// start 1 4 end 2 14 => correct



// 6.
// console.log('start');

const promise1 = new Promise((resolve, reject) => {
  console.log(1)
  resolve(2)
  console.log(3)
})

promise1.then(res => {
  console.log(res)
})
console.log('end');
// start 1 3 end 2

console.log('start');

const promise1 = new Promise((resolve, reject) => {
  console.log(1)
})

promise1.then(res => {
  console.log(res ,2)
})

// console.log('end');

// start 1 end 2


// console.log('start')

// const fn = () => (new Promise((resolve, reject) => {
//   console.log(1);
//   resolve('success')
// }))

// console.log('middle')

// fn().then(res => {
//   console.log(res)
// })

// console.log('end')
// // start   , middle  , 1  , end  , success



// console.log('start')

// Promise.resolve(1).then((res) => {
//   console.log(res)
// })

// Promise.resolve(2).then((res) => {
//   console.log(res)
// })

// console.log('end')
// // start , end  , 2



// console.log('start')

// setTimeout(() => {
//   console.log('setTimeout')
// },0)

// Promise.resolve().then(() => {
//   console.log('resolve')
// })

// console.log('end')






// const promise = new Promise((resolve, reject) => {
//     console.log(1);
//     setTimeout(() => {
//       console.log("timerStart");
//       resolve("success"); //
//       console.log("timerEnd");
//     }, 0);
//     console.log(2);
//   });
  
//   promise.then((res) => {
//     console.log(res); 
//   });

//   setTimeout(()=>{
//     console.log("Are!!")
//   } ,0)
  
//   console.log(4);


// 2
// 4
// timerStart
// timerEnd
// success
// 230 


// const promise = new Promise((resolve, reject) => {
//     console.log(1);
//     setTimeout(() => {
//       console.log("timerStart");
//       resolve("success");
//       console.log("timerEnd");
//     }, 10);
//     console.log(2);
//   });
  
//   promise.then((res) => {
//     console.log(res);
//   });

//   setTimeout(()=>{
//     console.log("Are!!")
//   } ,0)
  
//   console.log(4);

// const timer1 = setTimeout(() => {
//     console.log('timer1')
//     const promise1 = Promise.resolve().then(() => {
//       console.log('promise1')
//     })
//   }, 0)
  
//   const timer2 = setTimeout(() => {
//     console.log('timer2')
//   }, 0)



// console.log('start');

// const promise1 = Promise.resolve().then(() => {
//   console.log('promise1');
//   const timer2 = setTimeout(() => {
//     console.log('timer2')
//   }, 0)
// });

// const timer1 = setTimeout(() => {
//   console.log('timer1')
//   const promise2 = Promise.resolve().then(() => {
//     console.log('promise2')
//   })
// }, 0)

// console.log('end');



