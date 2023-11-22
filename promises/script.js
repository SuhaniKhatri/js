/* Create a promise */

const cart = ["shoes", "pants", "kurta"];

createOrder(cart) //orderId
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log(err.message);
  });

//producer end
function createOrder(cart) {
  //create order
  //validate cart
  //orderId
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart()) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

    //logic for create order
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment Successfull");
  });
}

function validateCart(cart) {
  return true;
}
