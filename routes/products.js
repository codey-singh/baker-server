var express = require("express");
var router = express.Router();
var { connect } = require("../database/connection");

router.get("/", (req, res) => {
  connect((client, db) => {
    let collection = db.collection("products");
    collection
      .find({})
      .toArray()
      .then((products) => {
        res.render("products", {
          title: "Our delicacies",
          navproducts: true,
          products,
        });
        client.close();
      });
  });
});

module.exports = router;
