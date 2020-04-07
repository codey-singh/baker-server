var express = require("express");
var router = express.Router();
var { connect } = require("../database/connection");
/* GET home page. localhost:port/ */
router.get("/", function (req, res, next) {
  connect((client, db) => {
    let collection = db.collection("products");
    collection
      .find({})
      .limit(3)
      .toArray()
      .then((products) => {
        res.render("index", { title: "Express", navhome: true, products });
        client.close();
      });
  });
});

module.exports = router;
