var express = require("express");
var router = express.Router();
var { mongodb, connect } = require("../database/connection");

router.get("/", (req, res) => {
  let sessionData = req.session;
  if (!sessionData.cart) {
    req.session.cart = [];
  }
  res.render("cart", { title: "Your Cart", cart: sessionData.cart });
});

router.post("/addtocart", (req, res) => {
  console.log(req.body);
  let sessionData = req.session;
  if (!sessionData.cart) {
    req.session.cart = [];
  }
  connect((client, db) => {
    let collection = db.collection("products");
    collection
      .findOne({ _id: new mongodb.ObjectID(req.body.product_id) })
      .then((product) => {
        console.log(product);
        let { _id, name, price, image } = product;
        let prod = req.session.cart.find(
          (prod) => prod._id === req.body.product_id
        );
        if (prod) {
          prod.qty = prod.qty + 1;
          prod.subtot = prod.qty * prod.price;
        } else {
          req.session.cart.push({
            _id,
            name,
            price,
            image,
            qty: 1,
            subtot: price * 1,
          });
        }
        client.close();
        console.log(req.session.cart);
        res.redirect("/cart");
      });
  });
});

router.post("/buy", (req, res) => {
  connect((client, db) => {
    let collection = db.collection("invoices");
    collection
      .insertOne({
        products: req.session.cart,
        grandTotal: req.session.grandTotal,
      })
      .then((value) => {
        client.close();
        req.session.destroy();
        res.redirect("/");
      });
  });
});

module.exports = router;
