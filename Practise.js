let a = 50;
var b = 40;
{
  console.log(b);
    console.log(a); 
  var b = 90;
  let a = 200;
  function call() {
    console.log(b); 
    console.log(a); 
    let b = 55;
    var a = 65;
    console.log(a);
    console.log(b);
  }
  call();
  console.log(a);
  console.log(b);
}
console.log(a);
console.log(b);

// keerthana => 40 , 50 , 90 , 200 , 65 , 55, 200 , 90,50 , 90
// ashish=>    40 , 50 , 7(error) , error, undefined , 65, 55,  error , 90
// nikaht=> 40 , 50 , 90,  error , error ,  55 ,  error , 55 , 200 , 90
// abhishek => 40 , 50 ,  error ,  undefined , 65 , 55 , 200 , 90 , 50 , 90

// let b = 60;
// {
//   console.log(b);
//   let b = 40;
// }

// var global you can acces before declaratuon
// let and const you cannot access before declaration deu to tdz



function increment (){
    let count = 0;
    return function () {
        let count =0;
     console.log(count++)
    }
}
const func = increment();

func(); //0
func(); // 1
func(); // 2


const obj = {
  firstName: 'Hey',
  getName() {
      console.log(this.firstName)
  }
}


const func = obj.getName