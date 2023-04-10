//  // Hoisting
// // what is the hoisting  ?


// console.log(a); // now i can access this  
// var a =300;


// // console.log(b)  // throw the error

// let b =300;


// console.log(c) // thro err
// const c = 300;


console.log(typeof a) //  a = undefined
var a = 300 ;

console.log(typeof typeof c); // string


// falsy  value  => 0, "", undefined , null, NAN

const checker  = "";
const checkernumber = 0;

if(!checker) {
    console.log("Checked")
}
 
if(!checkernumber) {
    console.log("Checked1")
}


const checker2 = undefined;

if(!checker2) {
    console.log('Checked2')
}

const checker3 = null;

if(!checker3) {
    console.log('Checked3')
}





// STRING , NUMBER , BOOLEAN


// Array 


const  array  = [1,2,3, "heyll" , [1,2,3] , true , false , {}];
// length of array  is array.length = > 8

// array.length  is give you the size of array


for(let i= 0; i<array.length;i++) {
    console.log(array[i])
}

console.log(array)
// array.length = 0;

console.log(array)
// this is for getting the index of array
for(let index in array) {
console.log(index)
}

// this is for getting the value of array
for(let value of array) {
    console.log(value)
}


// 

const newArray  = []; // initializing newArray variable with the empty array
console.log("NewArray" ,typeof newArray); // object
// length of array 
console.log("Length of array" , newArray.length)
newArray[9] = 90;
console.log("Length of array" , newArray.length) // what value  
console.log('New Array' ,newArray );

for(let value of newArray) {
    console.log("Value=>" ,value)
}
console.log("This is example1=>" ,typeof newArray[9000])
// whether my variable is array or not ?
let s = "chill"
console.log(typeof s == 'string')  
console.log(typeof newArray == 'Array')

console.log("Is array" ,Array.isArray(newArray))

// array Higher order functions forEach
// in the javascript  
// normal function 


//function declaration

function functionName(a, b) {
console.log('A===>',a , 'B===>' ,b); 
}

functionName() // calling or invoking the functions
functionName(23 , 84) // calling or invoking the functions
functionName(23 ) // calling or invoking the functions
functionName(23  , 45, 67, 87) // calling or invoking the functions




// write a function to add two variables



const sumArray = [9,9,9,0,0,0,7,7];


// array can consist number , boolean , symbol , string

// write the functions to calculate the sum of array


// array can consist number , boolean , symbol , string

const sumArray1 = [9,9,9,true , true,0,7,7 , "hello" , 7 , 'chillkaro' , null , undefined];

randomArraySum(sumArray1)

function randomArraySum  (array) {
        let sum = 0;
        for(let value of array) {
            if(typeof value  == 'number') {
                sum =  sum+value;
            }
        }
        console.log("Random sum" , sum)
}




// 0 => false
// 1 => true

console.log( "hey true value in number => "  , +true)
console.log( "hey true value in number => "  , +false)


// converting things in boolean 

const s1 = "hey";
const s2 = "";
const arr = []; // this is consider as true 
const obj = {};

console.log("s1=>>" ,Boolean(s1))
console.log("arr=>>" ,Boolean(arr))
console.log("obj=>>" ,Boolean(obj))
console.log("s2===>" ,Boolean(s2))

console.log( '(!!s1)' ,!!s1) 

const sumArray22 = [9,9,12,'2' ,'3' ,'5' , 'yyy']; 
addNumberAndStringNumber(sumArray22)
function addNumberAndStringNumber(array) {
    let sum = 0;

    for(let value of array) {
        if(isNaN(value) ||  typeof value == 'boolean') {
            continue;
        }
        sum = sum + (+value);
        //   sum = sum + Number(value);
    }
    console.log('sumArray22' , sum)
}
const sumArray222 = [9,9,12,'2' ,'3' ,'5' , 'yyy' , true , false , true , '' ,  undefined , null ]; 

 addNumberAndStringNumber(sumArray222) ;

// console.log("re" , re);

// what will be the result for it ?

console.log(isNaN("")); // false
console.log(isNaN()); // false

console.log( 'typeof Infinity' ,typeof Infinity) // 

console.log("Boolean" ,Boolean(Infinity))
console.log("String" , String(Infinity))
console.log("Number"  ,Number(Infinity))


function add (s)  {
   return s;
}
console.log('add()' , add("hey")); // 
console.log('add()' , add(12345)); // 
console.log('add()' , add(true)); // 
console.log('add()' , add(Infinity)); // 
console.log('add()' , add([])); // 









