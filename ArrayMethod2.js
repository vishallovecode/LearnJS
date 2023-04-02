// Slice ?? 


// if we want to get the particular portion iof given array than we will use slice  ,  this will not modify the original array

// it will to the shallow copy 

const array = ["Cow" , "Cat" , "Dog" ,"Fox" , "Lion" , "Rat"];  

const sliceArray = array.slice(); // if you will not pass any parameter that means it will copy all the array




// const slicePortion = array.slice(1 , 4); // if you will pass only one parameter this will be consider as the starting index
// // first parameter is starting index , second parameter is lastIndexc that is not include 
//  console.log(slicePortion)  // (3) ['Cat', 'Dog', 'Fox']


//  const slicePortion = array.slice(-5);  // (5) ['Cat', 'Dog', 'Fox', 'Lion', 'Rat']
//  console.log(slicePortion) 


// const s = "Hello";
//  console.log(s.slice())

// splice is use for removing and adding data  from the array


// splice => prototype //

// Array.prototype.slice

const array2 = ["Cow" , "Cat" , "Dog" ,"Fox" , "Lion" , "Rat"];
array2.splice(0 ,2) // first index is starting point second argument is how many element yu want to delete
console.log(array2); [ "Dog" ,"Fox" , "Lion" , "Rat"]


// Adding the elements in array 

array2.splice(0, 8 , "Cow" , "Cat" )

console.log(array2)



// Sorting in Js 

const array3 = ["Cow" , "Cat" , "Dog" ,"Fox" , "Lion" , "Rat"];

array3.sort();


console.log(array3)



const array4 = [4000 , 6000 , 100 , 300 , 3];
const compareFunc = (a,b)=> {
return b-a
}
array4.sort(compareFunc)
array4.sort((a,b)=>  a<b ? 1 : -1);
console.log(array4)



// FLATTEN ARRAY 
// FLAT WRITE THE POLYFILL FOR FLAT 
const arrray = [4,5, [87,8,8,[9,8,9,[8,9,9,[9,9,9,[9,8,9,[0,08]]]]]]];
    console.log(arrray.flat(Infinity));
// OUTPUT // [3,4,6,7,7,8,8]

function flattenArr(arr, res) {    
    for (const ele in arr) {
      if(Array.isArray(ele)){
          flattenArr(ele, res);
      }
      else{
          res.push(arr[ele]);
      }
    }
    return res;
  }



const testArray = [23 ,45 ,67 , 89 , 100 , 5 , 10 , 20];





// 5 minutes => 10 minutes
// const result = { 
//   '100': '100 is even' ,
//   '10':  '10 is Even',
//   '20': '20 is even'
// }

// [{'100': '100 is even'} ,{'10':  '10 is Even'} , {'20': '20 is even'}]




const  modifyObject=()=> {
  const result  = {};
  testArray.forEach((item  , index)=>{
    if(item%2==0) {
      result[item] = `${item} is even`
    }
    })
    return result;
}
console.log(modifyObject(testArray))

const modifiedArray = testArray.filter((item)=>{
return item%2==0;
}).map((item)=>{
  return {
    item: `${item} is even`
  }
})
console.log(modifiedArray)









  


 












































// const shallowCopy = array;


// console.log(shallowCopy)
// shallowCopy[0] =300;
// console.log(array)


// // deep which is also called clone deep

// const cloneDeep = [...array] // spread operator is also used  for the single levele object clone deep
// console.log(cloneDeep)
// cloneDeep[0]= "Hey"

// console.log(cloneDeep)













