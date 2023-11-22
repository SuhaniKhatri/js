/**
 What is async ?
 What is await ?
 How async await works behind the scenes ?
 Example of using async/ await
 Error handling
 Interviews
 Async await vs promise.then/catch
 */

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 10000);
});

//await can only be used inside async function
async function handlePromise() {
  const val = await p;
  console.log("namaste javascript");
  console.log(val);
}

handlePromise();

//always returns promise and if it writtens a value it will wrap it into a promise
// async function getData() {
//   return p;
// }

// const dataPromise = getData();
// // console.log(data);
// dataPromise.then((res) => console.log(res));

// function getData() {
//   p.then((res) => console.log(res));

//   console.log("namaste javascript");
// }

// getData();
