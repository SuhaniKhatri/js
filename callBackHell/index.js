const cart = ["shoes", "pants", "kurta"];

api.createOrder(cart, function () {
  api.proceedToPayments(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});
