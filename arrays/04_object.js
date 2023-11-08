const tinderUser = new Object(); //will give silgletone object

// const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userName: {
      firstName: "Suhani",
      lastName: "Khatri",
    },
  },
};

// console.log(regularUser.fullname.userName.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

// const obj4 = Object.assign({}, obj1, obj2, obj3);

const obj4 = { ...obj1, ...obj2, ...obj3 };
// console.log(obj4);

// console.log(Object.keys(tinderUser)); //return array of keys
// console.log(Object.values(tinderUser)); //returns array of values
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

/*-------------------------------destructuring-----------------------------*/

const course = {
  courseName: "Js in hindi",
  coursePrice: 999,
  courseInstructor: "hitesh",
};

const { courseInstructor: myInstructor } = course;

console.log(myInstructor);

/*-------React Example of destructuring------- */

const navbar = ({ Company }) => {
  //here the value of company = hitesh will be printed
};

navbar((Company = "hitesh"));
