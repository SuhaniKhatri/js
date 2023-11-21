// function addTwoNumbers(number1, number2) {
//   let result = number1 + number2;
//   return result;
// }

// let result = addTwoNumbers(3, 4);
// console.log(result);

// function userLoggedIn(username) {
//   if (!username) {
//     console.log("Please Enter a userName");
//   } else {
//     return `${username} just logged in`;
//   }
// }

// console.log(userLoggedIn(""));

// function calculateCartPrize(val1, val2, ...values) {
//   //rest parameters
//   return values;
// }

// console.log(calculateCartPrize(100, 200, "Suhani", 2000));

// const user = {
//   userName: "Suhani",
//   price: 199,
// };

// function handleObject(anyObject) {
//   console.log(`userName is ${anyObject.userName} price is ${anyObject.price}`);
// }

// // handleObject(user);
// handleObject({
//   userName: "hitesh",
//   price: 200,
// });

const myNewArray = [100, 200, 300, 400, 500];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray));
