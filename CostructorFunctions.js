// // this and function => object

// // string literal
// const em1 = {
//     name :"abc",
//     lastName: 'xyz'
// }

// const emp12 = {
//     name: "abc2",
//     lastName: 'xyz2'

// }

// const emp31 = {
//     name: "ABC2",
//     lastName: 'xyz3'
// }

// // constructor Function
// function Employee (name ,  lastName) {
// console.log("this as first" , this)
// this.name = name,
// console.log("this as second" , this)
// this.lastName = lastName
// console.log("this=>>" , this)
// }

// const empl1 = new Employee("Gilkrist" ,"Jain" ); // emp1 will be reference with given parameter
// const emp2 = new Employee("Vishal" , "Sharma");

// console.log("em1=> " , empl1)
// console.log("em2=> " , emp2)

// const empl3 = new Employee("Vishal"  ,"sharma");

// console.log(empl3)

// // what is the difference b/w creating the object using literal and constructor

// // everytime you will create the object using constructor that will be always unique if you add modify anything that will not impact its parent
// // in the object literal object are not unique and  they are sinleton and if you modify child object that will impact the properties of the parent object

// // Can we create constructor function using the arrow functions  ??

// const data = {
//     name: "Vishal"
// }

// let number =  new Number(10); // let a = 10;
// let object =  new Object({name: "Vishal" , lastName: ""}); // multi instance
// let string = new String("name"); // let s = "name";
// let boolean = new Boolean(true); // let check = true

// const employeeArrow = ()=> {
//      this.name = "Hello";
//      console.log(this)
// }

// const emparrow =  new employeeArrow(); // this line will throw error because here employeeArrow will not work as the constructor function
// console.log(emparrow)

// window

function Employee(name, lastName) {
  // this => {}// automatically  this = {}
  this.firstName = name;
  this.lastName = lastName;
  this.printName = function () {
    console.log(this.name, this.lastName); // vishal
  };
}

const emp = new Employee("Vishal", "Sharma");
const emp1 = new Employee("chetan"); // Employee function is working as a constructor function

console.log("emp", emp.printName()); //
console.log("emp", emp);
// console.log("Employee", Employee()); // here normal function behaviour

// call bind apply

// it used for creating object

// ways to create object

// object literal =>
const data = {
  name: "Vishal",
};

//

// const c = data;
// c.name = "Chandan";

// a =123
// const a = new Number(123)
// a =123
// const a = new String(123)
// a =123
// const a = new Number(123)
// a =123
// const a = new Boolean(123)
