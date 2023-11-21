let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toUTCString());
// console.log(myDate.toLocaleString());

const currentDate = new Date(2023, 10, 8);
console.log(currentDate.toLocaleString());

const newDate = new Date("2023-01-23");
console.log(newDate.toLocaleString());

let myTimeStamp = Date.now();

console.log(Math.floor(Date.now() / 1000));

console.log(myDate.getMonth() + 1);
console.log(myDate.getDay());
