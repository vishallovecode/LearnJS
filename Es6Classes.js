//  class employee {
//     // fields in js is only supported by new browser it may be not supported by the old browser
//     companyName = "XYZ";
//     static name = "Robert"
//     constructor(code){
//         this.employeeCode =  code
//     }  

//     printMe() {
//         console.log(this.employeeCode)
//         console.log(this.companyName)
//     }

//     setCode(code) {
//         this.employeeCode =  code;
//     }

//     set setName(name) {
//        if(!name) {
//         this.companyName = "witviper"
//        } else {
//         this.companyName = name
//        }
//     }

//     static printMe() {

//     }

//     get name () {
//         return this.companyName
//     }
// }
// const employee1 =  new employee("1234RET");
// employee.printMe();
// employee.name
// // console.log(employee1)
// // console.log(employee1.employeeCode);
// // console.log(employee1.printMe())

// // employee1.setCode("CODE45")
// // console.log('AFTER' ,employee1.employeeCode);

// // static ?? 


// // employee1.setName = ""; // setter
// // console.log(employee1.name) // getter


// // extends 


// class Animal  {
//     constructor(color , name , leg)  {
//         this.color = color;
//         this.name =  name;
//          this.leg  = leg;
//     }
//     getColor () {
//         console.log(this.color);
//     }
//     getName () {
//         console.log(this.name);
//     }
//      getLeg () {
//         console.log(this.leg)
//      }
// }


// class Cat extends Animal {
//      food= 'Milk'


//      // constructor overrding
//      // always use super before the this 
//      constructor(color , name  , leg  , favDish) {
//         super(color , name  , leg);
//         this.food=  favDish
//      }
//     favouriteDish(foo) {
    
        
//         this.food =  foo;
//     }
//     eat() {
//         console.log("Its yummy" , this.food)
//     }
//     getLeg () {
//         super.getName()
//         console.log('this', this.leg)

//     setTimeout(() => {
//         super.getName()
//     }, 1000);    
        
//      }
// }


// const cat1 = new Cat('Blakish' , "Chintu" , 4 , 'Boneless Chicken')
// cat1.getColor();
// cat1.eat();

// console.log(cat1.getLeg())

// // overriding method 
// // costructor overide we can also overied the fields 
// // normal functions  => arrow functions
















const x = {

    firstName: '',
    
    lastName: '',
    
    setName: function(name) {
    
    console.log(this)
    
    let splitName = function(n) {
    
    console.log(this) //
    
    const nameArr = name.split(' ');
    console.log(nameArr)
    
    this.firstName = nameArr[0];
    
    this.lastName = nameArr[1];
    
    }
    console.log('splitName', name)
    splitName(name);
    
    }
    
    }
    
    var name = 'Jon doe';
    
    x.setName(name);
    
    console.log(window.firstName); //Jon
    
    console.log(window.lastName); //  doe 



    // function callbackFunc(){
    //     setTimeout(()=>{
    //         setTimeout(()=>{
    //             setTimeout(()=>{
    //                 setTimeout(()=>{

    //                 })
    //             })
    //         })
    //     })
    // }
    // setInterval(callbackFunc , 1000);


    setTimeout(function donotCallMe(){
        console.log("I will not triggered after givenm interavle");
    }, 1000)




    console.log('Hey');

    setInterval(()=>{
        console.log("Hey i am fine")
    } , 2000)
    

    console.log("Tick me")

    setInterval(()=>{
        console.log("Hey i am fine")
    } , 1000)