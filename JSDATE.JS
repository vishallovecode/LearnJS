

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


const date123 = new Date().getDate();




//  22 January 2022 Sunday

