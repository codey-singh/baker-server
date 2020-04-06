var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  let sessionData = req.session;
  if (!sessionData.cart) {
    req.session.cart = [];
  }
  let grandTotal = 0;
  req.session.cart.forEach((element) => {
    grandTotal += element.subtot;
  });
  console.log(grandTotal);
  req.session.grandTotal = grandTotal;
  res.render("checkout", {
    title: "Checkout",
    cart: sessionData.cart,
    grandTotal: grandTotal,
  });
});

router.post("/add", (req, res) => {
  console.log(req.body);
});

module.exports = router;
