var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  console.log("the root node in the node app has been hit");
  res.send("respond with a resource");
});

module.exports = router;
