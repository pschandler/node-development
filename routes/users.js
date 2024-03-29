var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  console.log("Updating the console log to try and trigger automatic build.");
  res.send("Get a new title already");
});

module.exports = router;
