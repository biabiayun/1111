var myObject = {
  a: 1,
  b: 2,
  c: 3
}
for (var key of Object.keys(myObject)) {
  console.log('---', key)
  // console.log(key + ": " + myObject[key]);
}

var myArr = [1, 2, 3]

for (var key of myArr) {
  console.log('myArr-key-of-', key)
  // console.log(key + ": " + myObject[key]);
}
for (var key in myArr) {
  console.log('myArr-key-in-', key)
}
var myObj = {
  a: 1,
  b: 2,
  c: 3
}
for (var k in myObj) {
  console.log('myobj-k-in-', k)
}
// for (var k of myObj) {
//   console.log('myobj-k-of-', k)
// }
let cart = ['iPhone', 'iMac', 'iPad'];
let keys = cart.keys();

console.log(keys.next()); //{value: 0, done: false}
console.log(keys.next()); //{value: 1, done: false}
console.log(keys.next()); //{value: 2, done: false}
console.log(keys.next()); //{value: undefined, done: true}

let aa = ['iPhone', 'iMac', 'iPad'];
console.log('aa---', Object.keys(aa))
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var fk = Object.keys(fruits);
console.log('fk---', fk)
console.log('fk-entries--', Object.entries(fruits))