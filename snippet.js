//covert to array

// version1
const list1 = () => {
  console.log("is arguments array? ", Array.isArray(arguments));
  return Array.prototype.slice.call(arguments);
};
const l1 = list1(1, 2, 3, 4);
console.log(Array.isArray(l1));

// version2
const list2 = (...args) => args;
const l2 = list2(1, 2, 3, 4);
console.log(Array.isArray(l2));


// combine arrays
function combine(...args) {
  let arr = [].concat.apply([], args);
  return [...new Set(arr)];
}
var m = [1, 2, 2];
var n = [2, 3, 3, 4];
console.log(combine(m, n));
// [1,2,3,4]


// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
// [0, 1, 2, 3, 4]
const a1 = Array.from({ length: 5 }, (v, i) => i);
console.log(a1);

const a2 = Array.from(Array(5), (v, i) => i);
console.log(a2);
