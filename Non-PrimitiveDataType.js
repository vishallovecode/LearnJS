// only Object is non primitive data type
// type of array is object

var arrayExample = [
  1,
  2,
  3,
  4,
  5,
  "Vishal",
  "12324",
  12345,
  123.5666,
  null,
  undefined,
  true,
  1n,
];

console.log(arrayExample); // (13) [1, 2, 3, 4, 5, 'Vishal', '12324', 12345, 123.5666, null, undefined, true, 1n]
console.log(typeof arrayExample); // object

// Object

var datObj = {};
console.log(typeof datObj);

datObj.name = "Vishal"; // name is key and Vishal is value

console.log(datObj); //{name: 'Vishal'}
console.log(datObj.name); // Vishal
console.log(datObj["name"]); //Vishal;
