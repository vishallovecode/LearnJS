// basic object

// object map

let useDetails = {};
console.log(typeof useDetails);

useDetails.name = "Chandan";
// useDetails['name'] = "Vishal"
useDetails.lastName = "Sharma";
// useDetails['lastName'] = "Vishal"
useDetails.profession = "Frontend Developer";
useDetails.college = "Lovely Professsional University";
useDetails.company = "Zepto";
useDetails.isNoticePeriod = true;
useDetails.email = "785vishal443@gmail.com";
useDetails.mobile = 9915378881;
useDetails.expectedSlary = 5000000;
useDetails.currentSlary = 4000000;
useDetails.college = "Lovely Professsional University111";

let useDetails1 = {};
console.log(typeof useDetails);

useDetails1.name = "Vishal";
// useDetails['name'] = "Vishal"
useDetails1.lastName = "Sharma";
// useDetails['lastName'] = "Vishal"
useDetails1.profession = " Full stack Developer";
useDetails1.college = "Lovely  University";
useDetails1.company = "Zepto";
useDetails1.isNoticePeriod = false;
useDetails1.email = "785vishal44q223@gmail.com";
useDetails1.mobile = 7888888888;
useDetails1.expectedSlary = 50000000;
useDetails1.currentSlary = 40000000;
useDetails1.college = "Lovely Professsional msnbdchj,";

let useDetails12 = {};
console.log(typeof useDetails);

useDetails12.name = "Aryan";
// useDetails['name'] = "aRYAN"
useDetails12.lastName = "Sharma";
// useDetails['lastName'] = "Vishal"
useDetails12.profession = " bACKEND Developer";

useDetails12.company = "Zepto";
useDetails12.isNoticePeriod = false;
useDetails12.email = "785vishal11144q223@gmail.com";
useDetails12.mobile = 1111111;
useDetails12.expectedSlary = 455555555;
useDetails12.currentSlary = 556767767;
useDetails12.college = "Lovely LPU msnbdchj,";

console.log(useDetails);
// console.log(useDetails.profession)
console.log(useDetails["profession"]);

const users = [];
users.push(useDetails);
users.push(useDetails1);
users.push(useDetails12);

// const array = [300, 400];

// const callback = (value , index , arr)=> {
// console.log('callback' , value , index , arr)
// }

// array.forEach(callback);

// array.forEach((value) => {
//     console.log(value)
//  });

//  array.forEach((value , index , arr) => {
//     console.log(value)
//  });

//  // prototype

//  array.forEach(value => {
//     console.log(value)
//  });
// map filter and forEach

// one requirements we need to add one more adrees

//  for(let i=0;i<users.length;i++) {
//     users[i].adress1 = "Vishnupuri"+i;
//  }
//  console.log(users);

//  const updatedUser = []
//  users.forEach((user, index)=> {
//       user.adress2 = "Chiller gali" +index;
//  })

//  console.log(users);

const updatedData = users.map((user, index) => {
  return {
    ...user,
    adress: "Map Adress" + index,
  };
});
console.log(updatedData);

// map comes in place
let data = { name: "Visha" };
console.log({ ...data });
//    data = {
//     ...data,
//     lastName: "Sharma"
//    }
data.lastName = "Sharma";
console.log(data);

// chandan shallow copy

// Filter

const filterData = users.filter((value, index) => {
  return value.mobile === 9915378881;
});

const employees = ["Vishal", "ARYAN", "rahul", "ram"];
const names = employees.join(",");
console.log(names);

let message = ""; // Hey Vishal  Aryan , rahul , ram your kra is pending

// template
//  message = 'Hey ' + names + ' your kra is pending';
message = `Hey ${names} Your Kra is pending`;
console.log(message);

// includes

const isExist = employees.includes("rahul");
console.log(isExist);

const curry = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};

curry(20)(30)(40);

// Important Methods of the Array
//All the arrays method are really but map , filter , reduce , slie ,
// splice , join  , substring ,
// indexOf , forEach are of the most important method of Js

// The polyfill of the reduce , map  and filter are one of the most asked interview questions
