// Object is non primitive data type

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

var tt = +("20" + "30" + "40") + +"120" + "230";

console.log("tt=>", tt); //

var tts = -("20" + "30" + "50") - ("30" - "30" + 60);

console.log("tts=>>", tts); //

console.log(2 > 3); // false
console.log(2 < 3); //  true

console.log("2" < 3); // true

console.log("A" < "B"); // ascii => A<B = > TRIE
console.log("a" < "A"); // a ascii code > 'A ascicc code' // false

console.log("2" < 3); //

console.log(+"12vishal"); // NaN
console.log(+"vishal123"); // NaN

console.log(Number("12vishal")); // NaN
console.log(Number("vishal123")); // NaN

console.log(parseInt("12vishal")); // NaN
console.log(parseInt("vishal123")); // NaN

console.log(typeof Object); // function
