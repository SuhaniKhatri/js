/*Consume a promise */

// const cart = ["shoes", "pants", "kurta"];

createOrder(cart, function (orderId) {
  //passing a callback function
  proceedToPayment(orderId, function (paymentInfo) {
    showOrderSummary(paymentInfo, function () {
      updateWalletBalance();
    });
  });
});

createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function () {
    updateWalletBalance();
  });

// same as above
const promise = createOrder(cart);
//{data : undefined }  at intial stage but after data get this fill fill this object to that data {data : orderDetails}

promise.then(function (orderId) {
  //attaching a callback function
  proceedToPayment(orderId);
});

/******************  Real Example ********* */

// const GITHUB_API = "https://api.github.com/users/SuhaniKhatri";

// const user = fetch(GITHUB_API);

// console.log(user);

// user.then(function (data) {
//   console.log(data);
// });
