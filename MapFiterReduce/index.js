const arr = [5, 1, 3, 2, 6];

double = [10, 2, 6, 4, 12];

Binary = ["101", "1", "11", "10", "110"];

function double(x) {
  return x * 2;
}
// const output = arr.map(double);

console.log(output);

const output = arr.map(function binary(x) {
  return x.toString(2);
});

console.log(output);

/*******Filter*************/
//find odd values

// function isOdd(x) {
//   return x % 2;
// }

// const output = arr.filter(isOdd);

// console.log(output);

/****************Reduce******************/

const result = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);

console.log(result);
