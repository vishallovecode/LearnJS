// In Javascript everything is object => it is top level in prototype hierachy




// Creating the object 

// constructor method 

// let employee = new Object();
// console.log(employee)

// let employee1 = {};

// employee.nam = "XYZ";
// employee1.lastName = "Hey Cool"

// console.log(employee , employee1)


// let employee2 = {
//     name: "Xyx",
//     lastName : "Hey LastName"
// }

// console.log(employee2)

// const employee3 = {};
//  employee3.message= "Hey  it is working ";
//  console.log(employee3)

 // Key

//  let employee4 = {
//     'word1 word2': "Hey I am working"
//  }

//  console.log("4" ,  employee4)

//  delete employee4["word1 word2"]

//  console.log("4" ,  employee4)
//  // shorthand Property 

//  const name1 = "Shorthand "
//  const property= "Property chill out!!!!";

// //  const properties = {
// //     name1: name1,
// //     property: property
// //  }

// //  console.log(properties) // {name1: 'Shorthand ', property: 'Property chill out!!!!'}

// const printMessage = ()=> {
//      console.log("Hey")
// }
//  const properties = {
//     name1,
//     property,
//     printMessage
//  }

//  console.log(properties)




const employe = { 
    name: "TTTT",
    mobile: "9915378881",
    address: "BHOOT BUNGLOW",
    salary: { a: 10000 , b: {amount: 1000}},

}
for(key in employe) {
    console.log(key)
}
// if there is no key present in the object that will not throw the error it will simply give output as undefined
console.log(employe.company); // undefined
//  console.log(employe.company.name) // .error

 console.log(employe?.salary?.a?.amount?.fixedAmoutn)// . undefined

//  console.log("salary" in employe) // true 
//  console.log('age' in employe)


 // refernce variable



//  comparison of the object variable 

const com1 = {};
// const com2 = com1;

// console.log(com1==com2); //  false => reference
// console.log(com1===com2); // false


// const com3 = {};

// console.log(com1==com3); //  false
// console.log(com1===com3); // false


// // what const




const employ1 = {};
employ1.name = "Vishal";

employ1.name = "newton" // this will not throw the error


const data =  employ1; // shallow copy 


data.message = "Check and do it";


// deep copy  
const deepObject = {};  // => it will point to the new ref not 
for(key in data) {
    console.log(key);
    deepObject[key]  = data[key]
}
deepObject.newMessage = "New Message are good";


console.log(employ1.newMessage); // undefined


// Object.assign 
// uSE cASE OF THIS 

// Cloning

// let empl4 = {name: "Newton" , college: "XYZ"};
// // let empl4Clone = Object.assign({}, empl4);
// let emplCopy = {};ct
// console.log('Hi' , emplCopy)
// Merging the object

const user = {
    name :"Chandan",
    nickName: "Chandu"
}
const user2 = {
    college: "Chandu University"

}
Object.assign(user2 , user)
console.log(user2)


console.log(Object.keys(user))

// const data1 = Object.keys(user).map((key)=>{
//     return  {
//        ... user[key],
//        address: "Hey no address found"
//     }
// })


const monthlExpenses = {
    food: 10000,
    dress: 20000,
    fuel: 13000,
    outing: 11000
}


// i have did not manage money 
// Object.values(monthlExpenses) = > [10000 , 20000 , 13000, 11000].some
 const check =  Object.values(monthlExpenses).some((item)=> item>=20000);// true
 const check1 = Object.values(monthlExpenses).every((item)=> item>=10000);// true
 console.log(check)
 console.log(check1)






 // some and every related object 

 let someData = [100, 200, 300, 400 , 500]; //  => greater than 480 than want to return true 

 let isTrue =  someData.some((item , index) => {
    console.log(item)
    return item>480;
 });


 console.log(isTrue)

 



 



 
