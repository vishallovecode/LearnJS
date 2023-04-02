

// // let name = "Vishal";
// // let lastName = "Sharme"

// //  let obj = {name , lastName}   //=> {name: name,  lastName: lastName}
// //   console.log(obj)

// // settimeout sets this = window  for the function call //

// window.college = "XYZ college"

// const employee = {
//     name: "Vishal",
//     printName(a, b, c) { 
//         // if we call this function from line no 22 this == employe
//         // if we call function from line no 28 this==window
//         console.log("Hey" , 'name= ', this.name, this.college);
//         console.log('checking,.,,' ,  this==employee );
//         console.log(a,b,c)
//     }
// }

// // employee.printName(); // . hey vishal normal behaviour



// // loosing this context
// // setTimeout(employee.printName , 1000); // this => window

// // const functionTimeOut = ()=> {
// //     console.log('inside the setimout first function' ,this==window) // true
// //     employee.printName();// this == employee
// // }

// // // wrapped this with one closure
// // setTimeout(functionTimeOut, 1000);


// // bind 

// const printNameRef = employee.printName.bind(employee , 45 , 67  ,89);

// // in the bind function first is context or this and rest are the  parameter to be passed into the function which we are 
// // binding in this cas printName 
// setTimeout(printNameRef , 1000);
// // console.log('here this is behaving like window object',this==window)



// const employee_1 = {
// name: "Ashish Rajpoot",
// college: "Naughty College",
// nickName: "Naughty",
// printFullName() {
//     console.log(this.name)
// },
// printNickName(){
//     console.log(this.nickName)
// }
// }

// const employee_2 = {
//     name: "Simita",
//     college: "VSSD COLLEGE",
//     nickName: "simi"
//     }

//     const employee_3 = {
//         name: "Chandan",
//         college: "XYZ",
//         nickName: "Chandu"
//         }

// employee_1.printFullName(); // basic 
// employee_1.printNickName();


// const emp2NameRef = employee_1.printFullName.bind(employee_2);
// const emp2NickNameRef = employee_1.printNickName.bind(employee_2);
// emp2NameRef();
// emp2NickNameRef();

// this ==window

// const employee_1 = {
//     name: "Rahul",
//     college: "VSSD COLLEGE",
//     nickName: "Gupta",
//     printFullName: ()=> {
//     console.log(this.name)
// },
// printNickName: ()=>{
//     console.log(this.nickName)
// }
//     }
// const employee_2 = {
//     name: "Nikhat",
//     college: "VSSD COLLEGE",
//     nickName: "Nikhat"
//     }

//     const employee_3 = {
//         name: "KEERTHANA",
//         college: "XY112Z",
//         nickName: "kEERTI"
//         }

// employee_1.printFullName(); 
// employee_1.printNickName();


// const emp2NameRef = employee_1.printFullName.bind(employee_2);
// const emp2NickNameRef = employee_1.printNickName.bind(employee_2);
// emp2NameRef();
// emp2NickNameRef();



const employee_1 = {
    name: "Rahul",
    college: "VSSD COLLEGE",
    nickName: "Seth",
    salary: 2000000
    }
const employee_2 = {
    name: "Venu",
    college: "VSSD COLLEGE",
    nickName: "Dara",
    salary: 3000000
    }
    const employee_3 = {
        name: "Rahul",
        college: "XY112Z",
        nickName: "Kumar",
        salary: 4000000

        }


        function welComeMessage (message , a ,b) {
            // const message= 'Hi , ' + this.name + " " + "We are really happy to onboard you in our next billion jouney"; 
            const message1 = `Hi, ${this.name}  ${message}`
            console.log(message1);
            console.log(a,b)
        }

        function salary(params , params1 , params2) {
           console.log( params , params1,params2 )
        }

        // welComeMessage.call(employee_1 , 'We are really happy to onboard you in our next billion jouney' , 234, 45)
        // welComeMessage.call(employee_2 , 'We are really happy to onboard you in our next trillion jouney' , 567,789)
        // welComeMessage.call(employee_3 , 'We are really happy to onboard you in our next trillion path' , 678  , 900)



        // apply => parameter will be passed as a array
        // call => paramter is passed as comma seperated


        // apply 

        salary.apply(employee_1, [123 , 18 ,78]);

















        const employee = {
    name: "Vishal",
    printName(a, b, c) { 
        console.log(a,b,c)
        console.log(this.name)
    }
}
setTimeout(employee.printName , 1000); 