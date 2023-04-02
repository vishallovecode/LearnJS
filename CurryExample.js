  // what is currying in javascript

//   sumCurry(1)(2)(4) // => 1+2+4 => 7

const sumCurry =(a)=>{
    return (b)=>{
        return (c)=>{
            return a+b+c;
        }
    }
}


const data = sumCurry(4);
const data1 =  data(5);




// const curry = sumCurry(100)(40)(30);
// console.log(curry)


// infinite currying 


// 



const infiniteCurrySum = (a)=>{
    return (b)=> {
        if(!b){
            return a
        }else {
            return infiniteCurrySum(a+b);
        }
    }
}
const check = infiniteCurrySum(1)(2)(3)(4)(5)(6)(7)(n)();



// const mul = (a,b,c) => {
//     return a*b*c;
// }
// const curried =  advancedCurry(mul);
// curried(1,2,3)  // => 6
// curried(1)(2,3)  // => 6
// curried(1)(2)(3); // =>

 

//call(a,b,c) =>   call(a)(b)(c) => closure 



// what is the disadvantage of the closure => extraa memory because due closue variable are not garb age collected


