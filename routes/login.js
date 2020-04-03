var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.render("login", { title: "login", layout: "loginLayout.hbs" });
});

module.exports = router;
