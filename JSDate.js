

const date = new Date();

console.log(date);
console.log(typeof date);



const currDate = date.getTime()
console.log("currDate" , currDate) // time stamp in millisecond


console.log(date.getFullYear())
console.log(date.getSeconds())

console.log(date.getHours());
console.log(date.getMonth())
console.log(date.getMonth())
console.log(date.toLocaleDateString())


// 0  => January 
// 11 => December

const milli  = 1671557249838;    // Tue Dec 20 2022 22:57:29 GMT+0530 (India Standard Time)


const date1 = new Date(milli);

console.log(date1)

const monthArray = ['Jan' , 'Feb' , 'march' , 'april' , 'may' , 'june' , 'july' , 'aug' , 'september' , 'oct' , 'november' , 'dec'] ;
const  monthobj =  {0 : 'Jan' , 1: 'Feb' , 2:'march' , 3:'april' , 4:'may' , 5:'june' , 6:'july' , 7:'aug' , 8:'september' , 9:'oct' , 10:'november' , 11:'dec'} ;
 console.log(monthArray[date1.getMonth()]);


  // abhishek
//  Ashish 
// Chandan 
  // dk verma 
   // nITESH 
// Nikhat 
// rAHUL Gupta 
// rAHUL Seth 
// Simita 
// Nikhat 
// vENU 
  // Shikhar 
  // dk verma 
  // abhishek
  // harwinder

