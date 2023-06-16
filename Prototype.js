// // Advanced Javascript
// // const object1  = {
// //     name: 'adam',
// //     lastName: "gilchrist",
// //     printName: function () {
// //         console.log("hey" ,this.name ,"hey" ,this.lastName)
// //     }
// // }

// // const object2 = {
// //     home: "bnaxv",
// //     adress: 'hvs gx'
// // }

// // object2.__proto__ = object1;
// // console.log('after assigning proto')

// // object2.printName();

// // console.log(object2.lastName)
// // console.log(object2.name)

// // console.log(object1 , "Hye fine na")
// // console.log(object2.valueOf() , "Hye fine na")

// // // what can be the value of prototype => object  can be null

// // const p1company  = {
// //     name: "Witviper",
// //     GSTNO: 'GZXTPRETZ',
// //     set CompanyName(name) {
// //      this.name  = name
// //     } ,
// //     get CompanyName () {
// //         return this.name + ' ' + this.GSTNO
// //     }
// // }

// // const p2company  = {
// //     __proto__: p1company,
// //     isChild: true,
// // }

// // const grandChild  = {
// //     __proto__: p2company,
// // }

// // console.log(grandChild.name)

// // grandChild.CompanyName = "Chilta pvt ltd."

// // console.log(grandChild.name) //
// // console.log(p1company.name)

// // // will the context of this will be changed on the protoype  => No

// // //
// // const obj1 = {
// //     1: "Hey ",
// //     2: 'Hello',
// //     3: 'Good morning'
// // }

// // const obj2 = {

// // }

// // const obj3 = {

// // }

// // const obj4 = {

// // }

// // Object.prototype.print = function () {
// //     console.log('Print me')
// // }

// // const obj5 = {

// // }

// // obj5.print();
// // obj4.print();
// // obj3.print();
// // obj2.print();
// // obj1.print();

// // console.log(obj4)

// // const ob6 ={

// // }

// // ob6.print();

// // // findAverageofGivernArray

// // const array123 = [3,4,5,6,7];
// // // console.log(array123.average());

// // Array.prototype.average = function(){
// //    let sum  = 0;
// //    for(let i=0;i<this.length;i++) {
// // sum = sum+this[i];
// //    }
// //    return sum/this.length
// // }

// // const avg = array123.average();
// // console.log(avg)

// // const avg2=[3,4,5,6,7,78].average();
// // console.log(avg2)

// // console.log([])

// // String.prototype.stylisPrint = function() {
// //     console.log('i am stylish print' , this)
// // }

// // const message = 'Hey we are learning prototype';

// // message.stylisPrint()

// // //  we have mutiple browser
// // // some browser does not support new features of javascript

// // // we need to create our own functions of features on that scenarion
// // // that is called the pollyfill

// // // creating your map filter  reduce  forEACH , BIND , CALL , APPLY
// // // FLATTEN ARRAY

// // Array.prototype.includesOneOf = function (list) {
// //     if(list.length === 0  ||  this.length===0) return false;
// //     for(let  i=0;i<this.length;i++) {

// //         if(Array.isArray(list[0]) && Array.isArray(this[0])) {
// //             for(let j=0;j<list.length;j++) {
// //                 const che =  this[i];
// //                 const che1 = list[j];
// //                 if(che.length === che1.length && che.every((item ,index)=> {return item == che1[index]})) {
// //                     return true
// //                 }
// //             }
// //         }
// //     //    else if(typeof this[0] === "object" && typeof list[0]){

// //     //     }
// //     else if(list[0].constructor == 'Object' && list[0].constructor == 'Object')
// //         else {
// //             if(list.includes(this[i])) {
// //                 return true;
// //             }
// //         }
// //     }
// //     return  false;
// // }

// // const arr1 = [1,2,3,4];
// // const arr2 =  [3,4,5,6];

// // const arr3 = ["hello","hello2","checking","perfect"];
// // const arr4 =  ["hello","perfect2"];
// // const res =  arr1.includesOneOf(arr2);
// // console.log(res)

// // const res1 =  arr4.includesOneOf(arr3);
// // console.log(res1)

// // // array  ??
// // // object  ??
// // const arrr3 = [[12,3,4] , [12,4,5]]
// // const arrr4 = [[12,3,6] , [12,4,5] , [1,2,3]]

// // // [[Protoype]]

// // for ()
// // forEach()
// // while()
// // map
// // filter
// // reduce

// // for loop
// // const mutliply = (array , i)=> {
// //     array[i] = array[i]*2;
// // }
// // imperative approache

// const array = [1, 2, 3, 4];
// //  for(let  i=0 ;i<array.length;i*2+1) {
// //    array[i]= array[i]*2;
// //  }
// const callBackFunc = (currElement, index, array) => {
//   console.log(currElement, index, array);
// };
// array.forEach((currElement, index, orArray) => {
//   orArray[index] = orArray[index] * 2;
//   console.log(currElement, index, array);
// });

// // Map

// const adda = () => {};
// console.log("Heyy", adda());
// const array1 = [3, 4, 5, 6, 7];
// const callBackFuncMap = (element, index) => {
//   return element * 2;
// };

// const array2 = array1.map(callBackFuncMap);

// console.log(array2, array1);

// Array.prototype.myMap = function (callbackFunc) {
//   let newArray = [];
//   for (let i = 0; i < this.length; i++) {
//     const updatedElement = callbackFunc(this[i], i, this);
//     newArray.push(updatedElement);
//   }
//   return newArray;
// };
// const array4 = [2, 3, 4, 5, 6, 7];
// const checkCall = (elem, index, array) => {
//   return {
//     [index]: elem,
//   };
// };
// const data1 = array4.myMap(checkCall);
// const data2 = array4.map(checkCall);
// console.log("data1", data1);
// console.log(JSON.stringify(data1) === JSON.stringify(data2));

// // filter own pollyfill

// Array.prototype.myFilter = function (callbackFunc) {
//   let newArray = [];
//   for (let i = 0; i < this.length; i++) {
//     const updatedElement = callbackFunc(this[i], i, this);
//     if (updatedElement) {
//       newArray.push(this[i]);
//     }
//   }
//   return newArray;
// };

// Array.prototype.myMap = function (callbackFunc) {
//   let newArray = [];
//   for (let i = 0; i < this.length; i++) {
//     const updatedElement = callbackFunc(this[i], i, this);
//     newArray.push(this[i]);
//   }
//   return newArray;
// };

// const data123 = [4, 5, 6, 7, 8, 8, 8, 8, 9, 8, 8, 8];

// let ans =
//   Array.isArray(data123) &&
//   data123.filter((ele) => {
//     return ele < 8;
//   });

// // array reduce polyfill
// const array5 = [3, 7, 9];
// const callbackReduce = (prev, curr, index) => {
//   if (curr % 2 == 0) {
//     prev = curr;
//   }
// };

// call , bind , apply
// reduce
// questions
// prototype

// protoype
//  class

// async

// sat and sun

// polffill => map , filter  and reduce

// Reduce Polyfill

// const totalSum = array1.reduce((prev, curr) => {
//   prev = prev + curr;
//   return prev;
// }, 0);

// Array.prototype.myReduce = function (callbackFunction, initial) {
//   this.forEach((elem) => {
//     initial =
//       typeof initial !== undefined ? callbackFunction(initial, elem) : elem;
//   });
//   return initial;
// };

// it is manadatory key in reduce as initial value

// const sumArray = [3, 4, 5];
// const sum = sumArray.myReduce((prev, curr) => {
//   return prev + curr;
// });

// console.log("sum=> ", sum);

// const sum2 = sumArray.reduce((prev, curr) => {
//   return prev * curr;
// }, 0);

// console.log(sum2);

// const addAndSubtract = {
//   num1: 6,
//   num2: 3,
//   add() {
//     return this.num1 + this.num2;
//   },
//   subtract() {
//     return this.num1 - this.num2;
//   },
// };

// const calculator = {
//   __proto__: addAndSubtract,
//   num1: 12,
//   num2: 13,
//   product() {
//     return num1 * num2;
//   },
//   divide() {
//     return num1 / num2;
//   },
// };

// console.log(calculator.product()); // 156 , error
// console.log(calculator.divide()); // divide , error

function Employee() {
  // this => {}
  // console.log(this); // { name: 'vishal' , city: 'kanpur' , setSalary: func , getSalary: FUNCD}
  let salary;
  this.name = "vishal";
  this.city = "kanpur";
  this.setSalary = function () {};
  this.getSlary = function () {};
}

const data = new Employee(); // this function will return object
console.log(data);
