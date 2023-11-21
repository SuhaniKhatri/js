// const user = {
//   username: "hitesh",
//   price: 199,

//   welcomeMessage: function () {
//     console.log(`${this.username} , welcome to the website`);
//     console.log(this);
//   },
// };

// user.welcomeMessage();
// user.username = "sam";

// user.welcomeMessage();

// function chai() {
//   let username = "Suhani";
//   console.log(this.username); //this can be used with objects only
// }

// chai();

const chai = () => {
  let username = "hitesh";
  console.log(this);
};

chai();

// const addTwo = (num1, num2) => (num1 + num2);
// const addTwo = (num1, num2) => ({ username: "suhani" }); //object should be passed like this without return statement

// console.log(addTwo(3, 4));
