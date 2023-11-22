/* > uses of closure

- Module Design Pattern
-Curring
- Function like once
- memoize
- maintaining state in async world
-setTimeout
-Iterators

*/

// function x() {
//   var a = 7;

//   return function y() {
//     console.log(a);
//   };
// }

// var z = x();
// console.log(z);

// //........
// z();

/*******closure with setTimeout***********/

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function close(i) {
//       setTimeout(function () {
//         console.log(i);
//       }, i * 1000);
//     }
//     close(i);
//   }
// }

// x();

/*********************************************** */
// function outest() {
//   var c = 20;
//   function outer(b) {
//     var a = 10;
//     function inner() {
//       console.log(a, b, c);
//     }
//     return inner;
//   }
//   return outer;
// }

// let a = 100;
// var close = outest()("Hello World");
// close();

/**************************************************** */
// function counter() {
//   var count = 0;

//   return function incrementCounter() {
//     count++;
//     console.log(count);
//   };
// }

// var counter1 = counter();
// counter1();

/*******Constructor function********************/

function Counter() {
  var count = 0;

  this.incrementCounter = function () {
    count++;
    console.log(count);
  };

  this.decrementCounter = function () {
    count--;
    console.log(count);
  };
}

var counter1 = new Counter();

counter1.incrementCounter();
counter1.decrementCounter();
