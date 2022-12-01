
//Try Catch your programming 
const data = undefined;
// console.log(data.name)
//  try {
//     console.log(data.name)
//     const a =30;
//     const b =40;
//     console.log(a+b);
//      // if any error comes inside the try block pointer will move to the catch block
//  } catch(error) {
//     console.log("error::") // error screen 
//  }
 try {
    const a =30;
    const b =40;
    console.log(a+b);
    throw("Something went wrong!!!");     
    
 } catch(err) {
console.log(err)
 }

//  finally {
//     console.log("Finally")
//  }

//  try {
//      const a =30;
//      const b =40;
//      console.log(a+b);
//  } catch(error){
//     console.log("error::" , error)
//  } finally {
//     console.log("Finally")
//  }


try {
     const a =30;
     const b =40;
     console.log(a+b);
     throw("Throw error");
} catch(error) {
console.log(error)
}
