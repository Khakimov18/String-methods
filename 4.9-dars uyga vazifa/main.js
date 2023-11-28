//length
// const str = prompt("string kriting");
// console.log(str.length);

//charAt
// const str2 = prompt("string kriting");
// console.log(str2.charAt(5));

//toUppercase and toLowercase
// const str3 = prompt("string kriting");
// console.log(str3.toUpperCase());
// console.log(str3.toLowerCase());

//slice
// const str = "Hello, World!";
// console.log(str.slice(0, 5));
// console.log(str.slice(-6));

//split
// const str = "apple,orange,banana";
// const fruits = str.split(",");
// console.log(fruits);

//toString
function user(name, age) {
  this.name = name;
  this.age = age;
}
user.prototype.toString = function () {
  return `user { name: ${this.name}, age: ${this.age} }`;
};

const myObject = new user("John", 25);

const objectString = myObject.toString();
console.log(objectString);

//toFixed
let num = 123.4567;
let fixedNum = num.toFixed(2);
let parsedNum = parseFloat(fixedNum);

console.log(parsedNum);
