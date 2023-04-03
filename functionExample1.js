
 // after es6
// arrow function  
// before es6
// normal functions

// syntax 


// arguments
const arrowFunction = ( message , anothermsg , numb ,extraaArguments )=> {
    console.log(message , anothermsg , numb , extraaArguments);
    // console.log(arguments); // error
}

function normalFunction() {
    // console.log(message , anothermsg , numb , extraaArguments);
    console.log('arguments' , arguments);  
}
// while calling the function we pass parameter
arrowFunction("Hey please use me" , "hey iam cool" , 1000000); // CALLING OR INVOKING
normalFunction(); 


// IMMEDIATELY INVOKED FUNCTIONS
( () =>{
        console.log('IIFE arrow anonymous function')
    }
)();

( call = () =>{
    console.log('IIFE arrow named functions')
}
)();

( function call(){
    console.log('IIFE normal named functions')
}
)();

( function (){
    console.log('IIFE normal anonymous function')
}
)();

// assign function in variable 

const variableFunction = function() {
console.log("Hey chill......")
}

const chillOut = ()=> {
    console.log("chillingg......")
}

chillOut();
variableFunction();


// function as a parameter
// here parentFunction is called higher order functions

const add = (a,b)=> {
    return a+b;
}
const parentFunction = (callback)=> {
return callback(20,30)
}
const result =  parentFunction(add);
console.log("result" , result)


const aboveAge = ()=> {
    console.log("You are eligible for the voting....")
}
const belowAge = ()=> {
    console.log("You are under age")
}
const info = (age ,callback1 , callback2)=> {
    if(age>=18) {
        callback2()
    } else {
        callback1();
    }
}

const age =17;
const output = info(age , belowAge , aboveAge);
console.log(output)

// function return the function 
const parent = (d)=> {
    return (a)=> {
        return (b)=> {
           return (c)=> {
                return a+b+c+d;
           }
        }
}
}

//  const result1 = parent(20)(30)(40)(60);   // 150
//  console.log(result1)
const child = parent(4); // d=4

// const child ==  (a)=> { 
//     return (b)=> {
//        return (c)=> {
//             return a+b+c+d;
//        }
//     }
// }
 const child2 = child(5); // a=5
 // child2==    return (b)=> {
//        return (c)=> {
//             return a+b+c+d;
//        }
//     }

const child3 = child2(6); // b=6

// child3 == //        return (c)=> {
//     //             return a+b+c+d;
//     //        }

const child4 = child3(16); // c =16
console.log(child4)

// closure 
// let  var and const 
// functions 
// hositing 
// tdz
// variable types 
// rest operator , spread operator , array 
// object 
// Dom Manipulate html 
// prototype 
// classes 


// rest operator  ...
// spread operator  ...


const restFunc = (name , name2 ,  ...values )=> {
      console.log(name , name2 , values )
}

// If you are using rest operator that should be at last alwaYS

const spreadFunc = (firstName , lastName , mobile)=> {
    console.log(firstName , lastName , mobile)
}

// // const spreadFunc = (array)=> {
// firtsName = array[0];
// lastName = array[1];
// mobile = array[2]
// // }

restFunc("hello" , "vishal" , 12345 , "Tiker")    
spreadFunc(...["Vishal" , "Sharma" , 9915378881])

spreadFunc("Vishal" ,"Sharma" , 9915378881  );
console.log('spread this' , ...["Vishal" , "Sharma" , 9915378881])



const array1 = [1,2,3,4,5];
 const array2 = [6,7,8,9]
 const shikhar =  [...array1 , ...array2]; // [1,2,3,4,5,6,7,8,9] // concat
 console.log(shikhar)

 // Array 
 // splice 
 // slice 
 // includes
 // foreach 
 // map 
 // reduce
 // filter 
 //indexOf 
 // find 
 // join 
 // sorting arrays
 // toString 
 // push and pop 
 // concat 
 // reverse
 








