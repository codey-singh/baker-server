var express = require("express");
var router = express.Router();
var { connect } = require("../database/connection");

router.get("/", (req, res) => {
  res.render("contactus", {
    title: "We want to hear from you!",
    navcontactus: true,
  });
});

router.post("/", (req, res) => {
  connect((client, db) => {
    let collection = db.collection("feedback");
    collection
      .insertOne(req.body)
      .then((value) => {
        client.close();
        res.render("contactus", {
          title: "We want to hear from you!",
          navcontactus: true,
          successmessage: "Your message delivered successfully",
        });
      })
      .catch((error) => {
        client.close();
        res.render("contactus", {
          title: "We want to hear from you!",
          navcontactus: true,
          failuremessage:
            "Some Error Occurred while posting your message. Please retry.",
        });
      });
  });
});

module.exports = router;
