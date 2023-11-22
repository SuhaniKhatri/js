//for of
//["", "", ""]
//[{}, {},{}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  //   console.log(num);
}

const greetings = "Hello WOrld!";
for (const greet of greetings) {
  //   console.log(greet);
}

//Maps
const map = new Map();

map.set("In", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");

// console.log(map);

for (const [key, value] of map) {
  console.log(key, ":-", value);
}

/*============================================================ */

//for of is not working on object
// const myObject = {
//   game1: "NFS",
//   game2: "Spiderman",
// };

// for (const [key, value] of myObject) {
//   console.log(key, ":-", value);
// }
