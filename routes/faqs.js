var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.render("faqs", { title: "Some of most Frequently Asked Questions" });
});

module.exports = router;
