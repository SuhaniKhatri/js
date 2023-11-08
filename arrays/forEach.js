// const numbers = [1, 2, 3, 4, 5];

const letters = ["a", "b", "c", "a", "c", "d", "e"];
// numbers.forEach((item, index, arr) => {
//   console.log("a[" + index + "] = " + item);
// });

let count = {};

letters.forEach((item) => {
  if (count[item]) {
    count[item]++;
  } else {
    count[item] = 1;
  }
});

console.log(count);

// let sum = 0;

// numbers.forEach((item) => {
//   sum += item;
// });

// console.log(sum);
