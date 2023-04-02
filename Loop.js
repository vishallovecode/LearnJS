// While
// For
// do while

var array = [11, 2, 13, 14, 5, 16];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

for (let index in array) {
  console.log(index);
}

for (let ele of array) {
  console.log(ele);
}

const object = {
  name: "Vishal",
  lastName: "Sharma",
  middleName: "Joshi",
};

for (let obj in object) {
  console.log(obj); // this will give the key as answer
}

for (let ele of object) {
  console.log(ele); // this will give the key as answer
}

// for of loop is not applicable for the object
