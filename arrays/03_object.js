//constructor (singlrton object)
// Object.create();
//            and
//Object literals (multiple-instances)

const mySym = Symbol("Key1");

const jsUser = {
  name: "Suhani",
  "last name": "Khatri",
  [mySym]: "key1Value",
  age: 22,
  location: "Jobat",
  email: "Suhani@gmail.com",
  lastLoginDays: ["Monday", "Satuarday"],
};

jsUser.greeting = function () {
  console.log("Hello Js User");
};

console.log(jsUser.greeting);

jsUser.greetingTwo = function () {
  console.log(`Hello Js User ${this.name}`);
};

jsUser.greetingTwo();

// console.log(jsUser.greeting());

// console.log(jsUser.name);
// console.log(jsUser[mySym]);
// console.log(jsUser["last name"]);
// console.log(jsUser["name"]);

// jsUser.email = "suhani@chatgpt.com";
// Object.freeze(jsUser);
// jsUser.email = "suhani@microsoft.com";
// console.log(jsUser);
