var express = require("express");

var router = express.Router();

/****************
** Home page.
*****************/
router.get("/", function(req, res) {
    res.render("index", { title: "Home" });
});

module.exports = router;
