// // const myPromise = () => Promise.resolve("I have resolved!");

// // function firstFunction() {
// //   myPromise().then((res) => console.log("1", res)); // 2
// //   console.log("second"); //  1
// // }

// // async function secondFunction() {
// //   console.log(await myPromise()); //
// //   console.log("second1");
// // }

// // firstFunction();
// // secondFunction();

// // second
// // I have resolved

// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// const data = fetch("https://my.newtonschool.co/");
// // succee , rejected , pending
// const promise = Promise.resolve(5); //success // immediately

// Promise.resolve(1).then((res) => {
//   console.log(res);
// });

// Promise.resolve(2).then((res) => {
//   console.log(res);
// });

// console.log("end");

// // console.log("start");

// // setTimeout(() => {
// //   console.log("setTimeout");
// // }, 0);

// // Promise.resolve().then(() => {
// //   console.log("resolve");
// // });

// // console.log("end");

// console.log("start");
// setTimeout(() => {
//   console.log("setTimeout");
// }, 0);
// Promise.resolve()
//   .then(() => {
//     console.log("resolve");
//   })
//   .then((res) => {
//     console.log("Hey");
//   });
// console.log("end");
// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   setTimeout(() => {
//     console.log("timerStart");
//     resolve("success");
//     console.log("timerEnd");
//   }, 0);

//   console.log(2);
// });
// promise.then((res) => {
//   console.log(res);
// });
// setTimeout(() => {
//   console.log("Are!!");
// }, 0);

// console.log(4);

var scope = "global scope";
function checkscope() {
  var scope = "local scope";
  function f() {
    return scope;
  }
  return f;
}

console.log(checkscope()()); //

const a = { name: "Vishal", lastName: "sharma" };
const b = [1, 2, 3, 4, 5, 6, 7, 8];
// for(let i of a) {
//   console.log(i)
// }
// for of loop does not iterate through the object
for (let i of b) {
  console.log(i); // 1,2,3,4,5,6,7,8
}
for (let i in a) {
  console.log(i); // name , lastName
}

for (let i in b) {
  console.log(i); // 0,1,2,3,4,5,6,7
}

console.log(null == undefined); // true
// console.log(++5); //error

// let data = 20;
// if ((data = 40)) {
//   console.log(data); // 40
// }

// const calculate = () => {
//   let a = 30;
//   let b;
//   setTimeout(() => {
//     b = 300;
//   }, 0);
//   console.log(a + b); // NaN
// };

// const value = new Number(0);
// if (value) {
//   console.log(value);
// } else {
//   console.log("FAILED");
// }

// var of = ["of"];

// for (let of of of) {
//   console.log(of); // of
// }

// print();

// function print() {
//   console.log("Tik tok");
// }

// function print() {
//   console.log("Hey");
// }

var functionData = function () {
  console.log("hey123");
};

functionData();

var functionData = function chill() {
  console.log("hey123");
};

chill();
