// this 
// call 
// bind 
// apply 
// differenet method of object  => some , every , object.keys
//  constructor 
// constructor function 
// some es6 new update 

let user ;

// handling error from developer side
try {
    console.log(user.name); 
} catch(error) {
     console.log("this is my changes whatevere i do....")
}


console.log("Hey" ,user?.name)

if(user && user.name) {
console.log(user.name)
}

// global scope this => window 

const userDetails =  {
    firstName: "Vishal",
    lastName: "Sharma",
     printName: function () {
        console.log(this) // this context 
        console.log(this.firstName , this.lastName)
     }
}

userDetails.printName();



const numbers = {
    a:20, 
    b:30,
    add:function() {
      return function() {
        console.log(this , "chill22") 
      }
    },
    multiply: function() {
        // this ???
       return ()=> {
         console.log(this , "chill") // this ??
       }
    }
}

const numbers1 = {
    firstName:20, 
    lastName:30,
    printName:() => {
        //  ??  what is the value of this inside arrow function
        console.log(this); // here is window ?
        console.log("hEY" ,this.firstName , this.lastName)
}
}

numbers.multiply()();
numbers.add()();

// in the arrow this will alway point out to the its outer function or scope context

// here this mease gloabl scipe
const printContext = ()=> {
     console.log("child" ,this)
}
const arrowFunction = (callback)=> {
    const a= 40;
    console.log(this); 
    callback();
 }

arrowFunction(printContext)



console.log(this)


numbers.multiply();


function callme () {
     console.log("Hey chill " , this) // 
}



// BIND

var employeeDetailsXYZ = {
    firstName: "Vishal" ,
    lastName: "Sharma", 

    
}

var employeeDetailsXYZ1= {
    firstName: "Ashish" ,
    lastName: "Rajput", 

}

const printName = function() {
    console.log(this)
    console.log("Hey" ,this.lastName + this.firstName);
}


const printBindXYZ = printName.bind(employeeDetailsXYZ);
printBindXYZ();


const printBindXYZ1 = printName.bind(employeeDetailsXYZ1);
printBindXYZ1();












