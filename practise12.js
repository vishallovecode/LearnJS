Array.prototype.myReduce = function (callbackFunction, initial) {
  this.forEach((elem) => {
    initial =
      typeof initial !== "undefined" ? callbackFunction(initial, elem) : elem;
  });
  return initial;
};

Array.prototype.myReduce = function (cb, initialValue) {
  // Complete the implementation of myReduce
  let ans = initialValue || (this[0] ? this[0] : undefined);
  if (ans !== undefined) {
    for (let i = initialValue ? 0 : 1; i < this.length; i++) {
      ans = cb(ans, this[i], i, this);
    }
  }
  return ans;
};
const data = [1].myReduce((acc, value) => {
  return acc + value;
}, 0);

const data22 = [1].reduce((acc, value) => {
  return acc + value;
}, 0);

console.log(data, "hey");
console.log(data22);

const employee = [1, 2, 3, 4, 5, 6];

const shubhamServant = (value) => {
  return value * 2;
};

const updatedEmployee = employee.map(shubhamServant);

console.log(updatedEmployee); // [2,4,6,8,10,12]

// delclarative approach and imperative approach

// anywhere you will go through

// imperative approach
for (let i = 5; i < employee; i = i + 2) {}

// declarative approach
// map, reduce , for..of , for...in , forEach , filter

employee.forEach((value) => {
  console.log(value);
});

// array find ??

// const updatedemployeeData = [
//   { name: "Chim chom", salary: 400000, isManager: false, isLead: true },
//   { name: "him hom", salary: 480000, isManager: false, isLead: true },
//   { name: "tir tor", salary: 460000, isManager: false, isLead: true },
//   { name: "tir tor", salary: 560000, isManager: true, isLead: false },
//   { name: "tir tor", salary: 660000, isManager: true, isLead: false },
// ];
//lead
//manager

// filter out the employee whose salary is greater than  or equal to 400000
// and if salary is greater than 500000 and one key on object which will be isManager and add true
// isLead
const getEmployee = (value) => {
  return value.salary === 400000;
};

// const targetObject = employeeData.find(getEmployee);

// console.log(targetObject); // { name: "Chim chom", salary: 400000 }

// chaining on array hoc

// i  do not need the data whose salary is less than 4 lakh
const employeeData = [
  { name: "Chim chom", salary: 400000 }, // => 0
  { name: "rim rom", salary: 320000 }, // => 1
  { name: "him hom", salary: 480000 }, // 2
  { name: "tir tor2", salary: 460000 }, // 3
  { name: "tir tor1", salary: 560000 }, //4
  { name: "tir tor3", salary: 660000 }, //5
];

const filteredData = employeeData
  .filter((v) => {
    return v.salary >= 400000;
  })
  .map((value) => {
    if (value.salary > 500000) {
      return {
        ...value,
        isManager: true,
        isLead: false,
      };
    } else {
      return {
        ...value,
        isManager: false,
        isLead: true,
      };
    }
  });

//  const minimizedData = filteredData.map((value) => {
// if (value.salary > 500000) {
//   return {
//     ...value,
//     isManager: true,
//     isLead: false,
//   };
// } else {
//   return {
//     ...value,
//     isManager: false,
//     isLead: true,
//   };
// }
// });
console.log("filteredData", filteredData); //
// console.log("minimizedData", minimizedData); //

// filter ??
