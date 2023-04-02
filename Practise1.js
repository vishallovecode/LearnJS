

const employee =  [{name: "ABC" , lastName: "XYZ"},
 {name: "ABC1" , lastName: "XYZ1"},{name: "ABC2" , lastName: "XYZ2"},
 {name: "ABC3" , lastName: "XYZ3"}];


// YOU NEED TO ADD  =>
const dataArray = [50000, 30000, 80000, 45000];


// Firts Question is update employee array such that ouput would be 

//[{name: "ABC" , lastName: "XYZ" , salary: 50000}, {name: "ABC1" , lastName: "XYZ1" , salary: 30000},{name: "ABC2" , lastName: "XYZ2" , salary: 80000},{name: "ABC3" , lastName: "XYZ3" , salary:45000}]


// 2.You need to return the emloyee whi the salary is greater than equal to 50000

const updatedEmployee = employee.map((item, index)=>{

return {
    ...item, 
    salary: dataArray[index]
}
});
console.log(updatedEmployee);
console.log(employee);


const updatedFilter = updatedEmployee.filter((item , index)=>{
    return item.salary>=50000
})


console.log(updatedFilter)
console.log(updatedEmployee)



// const  data = [1,3,4,5];


// data.forEach(element => {
//     console.log(element*100);
// });

// console.log("check" , data)

// will map and filter function will update the array in which we are doing operations => No




// const data = {name: "Vishal"};

// // data.lastName = "vishal";


// // data  = {
// //     ...data,
// //     lastName: "Vishal"
// // }


 // find the maximum salary 
 //  sum of all the salary 

//  // [1, 1, 1,1,1,2,2,2,3,3,3,4,4,4,5,5,5]


//  {
//     1:5,
//     2:3,
//     3:3,
//     4:3,
//     5:3
//  }

// reduce ?? 


let max = 0;



// for (let i =0;i<updatedEmployee;i++) {
//     if(max<updatedEmployee[i].salary) {
//         max= updatedEmployee[i].salary
//     }
// }


updatedEmployee.forEach(elem=> {
    console.log(elem.salary)
    if(elem.salary>max) {
        max= elem.salary
    }
})

console.log(max);


// const maxSalary =  updatedEmployee.reduce((acc , curr , index)=>{

// })


// const numbers = [6,7,9,8,9];
// const callBackFunction = (acc , curr , index)=> {
//     console.log(acc , index)
// return acc+curr;
// }
// // const sum =  numbers.reduce(callBackFunction , 0)

// const totaLSum =  numbers.reduce( (acc , curr , index)=>{
//     console.log(acc , index)
//     return acc<curr? curr: acc
// } , 0)
// console.log('Reduce Sume' ,totaLSum)


const data =  [1, 1, 1,1,1,2,2,2,3,3,3,4,4,4,5,5,5];

//  {
//     1:5,
//     2:3,
//     3:3,
//     4:3,
//     5:3
//  }
const initialValue = {};
const object =data.reduce((acc , curr , index)=>{
    console.log(acc)
    if(curr in acc) {
        acc[curr]++;
    } else {
         acc[curr] =1
    }
return acc;
} , initialValue)

console.log(object , 'hey')


// if you want to check key exist into the object or not use 

// Object.hasOwnProperty(key);=> true if key exist in Object else false
// key in object => this will give true if key exist in object












// call bind and apply 