//constructor (singleton object)
// Object.create();
//            and
//Object literals (multiple-instances)

const sym = Symbol("myKey");

const jsUser = {
  name: "suhani",
  age: 22,
  [sym]: "myValue",
  fullname: "Suhani Khatri",
  location: "Udaipur",
  email: "myemail@gmail.com",
  isLoggedIn: true,
  lastLogginDays: ["Monday", "Satuarday"],
};

console.log(jsUser.name);

console.log(jsUser["name"]);

// console.log(typeof jsUser.sym);

jsUser.email = "new@gmail.com";
// console.log(jsUser);

// Object.freeze(jsUser);

// jsUser.email = "yours@gmail.com";
// console.log(jsUser);

jsUser.greetings = function () {
  console.log("Hello Js User");
};

jsUser.greetingsTwo = function () {
  console.log(`Hello Js User ${this.name}`);
};

console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());
