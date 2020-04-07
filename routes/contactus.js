var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.render("contactus", {
    title: "We want to hear from you!",
    navcontactus: true,
  });
});

module.exports = router;
