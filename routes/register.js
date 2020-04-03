var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.render("register", { title: "Register with us", layout: "loginLayout.hbs" });
});

module.exports = router;
