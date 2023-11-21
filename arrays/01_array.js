const myArr = [1, 2, 3, 4];

const myHeroes = ["saktiman", "naagraj"];

const Arr2 = new Array(1, 2, 3, 4);

// console.log(myArr[0]);

myArr.push(5);
// console.log(myArr);

myArr.pop();

myArr.unshift(0);
// console.log(myArr);

// console.log(myArr.includes(5));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join();    //join will convert the array into the string (commas seperated)

// console.log(newArr);

/*********slice , splice ************/

const numbers = [0, 1, 2, 3, 4, 5];

const num1 = numbers.splice(1, 3); //splice not only includes last index but it also manipulates the original array
console.log(num1);
console.log(numbers);
